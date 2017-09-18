import joi from 'joi';
import httpStatus from 'http-status';

import Users from './users.model';

export const validations = {
  create: {
    body: {
      nickname: joi.string().min(3).max(40).required(),
      password: joi.string().min(6).max(40).required(),
      email: joi.string().email().max(40).required(),
      phone: joi.number().integer().required()
    }
  },
  update: {
    body: {
      nickname: joi.string().min(3).max(40),
      phone: joi.number().integer()
    }
  },
  changePassword: {
    oldPassword: joi.string().required(),
    newPassword: joi.string().min(6).max(40)
  }
};

export const create = async (req, res) => {
  try {
    const dbUser = await Users.create(req.body);

    return res.status(httpStatus.CREATED).json(dbUser);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const { nickname, password } = req.body;
    const dbUser = await Users.findOne({ nickname });

    if (!dbUser) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'You have entered an invalid username or password' });
    }

    if (!dbUser.authenticate(password)) {
      return res.status(httpStatus.BAD_REQUEST).json({ message: 'You have entered an invalid username or password' });
    }

    const token = `JWT ${dbUser.createToken()}`;

    return res.status(httpStatus.OK).json({ ...dbUser.toJSON(), token });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json(error);
  }
};

export const getById = async (req, res) => {
  if (req.user && (req.user._id.toString() !== req.params.id.toString())) {
    return res.status(httpStatus.NON_AUTHORITATIVE_INFORMATION).json({ message: 'Non authoritative information' });
  }

  try {
    const dbUser = await Users.findById(req.params.id);

    if (!dbUser) {
      return res.status(httpStatus.NOT_FOUND).json('User not found');
    }

    return res.status(httpStatus.OK).json(dbUser.toFullJSON());
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json(error);
  }
};

export const update = async (req, res) => {
  if (req.user && (req.user._id.toString() !== req.params.id.toString())) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' });
  }

  try {
    const updatedUser = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true, runValidators: true, context: 'query' }
    );

    return res.status(httpStatus.OK).json(updatedUser.toFullJSON());
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json(error);
  }
};

export const changePassword = async (req, res) => {
  if (req.user && (req.user._id.toString() !== req.params.id.toString())) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' });
  }

  try {
    const { oldPassword, newPassword } = req.body;
    const dbUser = await Users.findById(req.params.id);

    if (!dbUser.authenticate(oldPassword)) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Please enter valid \"Old Password\"' });
    }

    dbUser.password = newPassword;

    const updatedUser = await dbUser.save();
    const token = `JWT ${dbUser.createToken()}`;

    return res.status(httpStatus.OK).json({ ...updatedUser.toJSON(), token });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json(error);
  }
};

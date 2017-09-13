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
      password: joi.string().min(6).max(40),
      phone: joi.number().integer()
    }
  }
};

export const getAll = async (req, res) => {
  try {
    const dbUsers = await Users.find();

    return res.status(httpStatus.OK).json(dbUsers);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json(error);
  }
};

export const create = async (req, res) => {
  try {
    const dbUser = await Users.create(req.body);

    return res.status(httpStatus.CREATED).json(dbUser);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const dbUser = await Users.findOne({ _id: req.params.id });

    Object.keys(req.body).forEach(key => {
      dbUser[key] = req.body[key];
    });

    const updatedUser = await dbUser.save();

    return res.status(httpStatus.OK).json(updatedUser);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json(error);
  }
};

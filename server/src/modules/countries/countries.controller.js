import httpStatus from 'http-status';

import Countries from './countries.model';

export const getAll = async (req, res) => {
  try {
    const dbCountries = await Countries.find({});

    return res.status(httpStatus.OK).json(dbCountries);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json(error);
  }
};

const userService = require('../services/userService');
import { StatusCodes } from "http-status-codes";

const createUser = async (req, res, next) => {
  const user = req.body;

  const newUser = await userService.createUser(user);
  res.status(StatusCodes.CREATED).json(newUser);
}

const findAll = async (_req, res) => {
  const allUsers = await userService.findAll();
  console.log(allUsers)

  res.status(StatusCodes.OK).json(allUsers);
};

module.exports = {
  findAll,
  createUser,
}

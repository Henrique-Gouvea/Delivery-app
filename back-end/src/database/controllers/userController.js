const userService = require("../services/userService");
const { StatusCodes } = require("http-status-codes");

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await userService.createUser(user);
    if (newUser.error) return next(newUser.error);

    return res.status(StatusCodes.CREATED).json(newUser);
  } catch (error) {
    next(error);
  }
};

const findAll = async (_req, res) => {
  const allUsers = await userService.findAll();

  return res.status(StatusCodes.OK).json(allUsers);
};

module.exports = {
  findAll,
  createUser,
};

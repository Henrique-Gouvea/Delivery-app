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

const findAdministrator = async (_req, res, next) => {
  try {
    const administrator = await userService.findAdministrator();
    return res.status(StatusCodes.OK).json(administrator);
  } catch (error) {
    next(error);
  }
}

const findSeller = async (_req, res, next) => {
  try {
    const seller = await userService.findSeller();
    return res.status(StatusCodes.OK).json(seller);
  } catch (error) {
    next(error);
  }
}

const findCustomer = async (_req, res, next) => {
  try {
    const customer = await userService.findCustomer();
    return res.status(StatusCodes.OK).json(customer);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  findAll,
  createUser,
  findAdministrator,
  findSeller,
  findCustomer,
};

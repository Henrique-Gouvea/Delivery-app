const userService = require("../services/postUserWithToken");
const { StatusCodes } = require("http-status-codes");
const sendError = require("../middlewares/sendError");

const createUserWithToken = async (req, res, next) => {
  try {
    const { newUser, role } = req.body;
    console.log('newUser:', newUser);

    const user = await userService.createUserWithToken(newUser);

    if (role !== 'administrator') return sendError(StatusCodes.UNAUTHORIZED, 'User not autorized');

    return res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUserWithToken,
};

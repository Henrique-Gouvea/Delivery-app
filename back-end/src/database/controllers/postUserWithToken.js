const userService = require("../services/postUserWithToken");
const { StatusCodes } = require("http-status-codes");
const sendError = require("../middlewares/sendError");
const { verifyToken } = require("../middlewares/jwt");

const createUserWithToken = async (req, res, next) => {
  try {
    const { newUser, role } = req.body;
    const { authorization } = req.headers;
    console.log('===================================');
    console.log('ROLE', role);
    const user = await userService.createUserWithToken(newUser);

    const isValidToken = verifyToken(authorization);

    if (!isValidToken) sendError(StatusCodes.UNAUTHORIZED, 'Invalid Token!')

    if (role !== 'administrator') return sendError(StatusCodes.UNAUTHORIZED, 'User not autorized');

    return res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUserWithToken,
};

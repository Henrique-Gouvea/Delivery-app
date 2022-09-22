const loginService = require("../services/loginService");
const { StatusCodes } = require("http-status-codes");

const createToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.createNewToken({ email, password });

    if (user.error) return next(user.error);

    req.user = user;
    req.headers.authorization = user.token;

    return res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createToken,
};

const loginService = require("../services/loginService");
const { StatusCodes } = require("http-status-codes");

const createToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { role } = req.body || 'customer';
    const user = await loginService.createNewToken({ email, password, role });

    if (user.error) return next(user.error);

    req.user = user;
    req.headers.authorization = user.token;

    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createToken,
};

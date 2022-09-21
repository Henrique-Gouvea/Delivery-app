const loginService = require("../services/loginService");
const { StatusCodes } = require('http-status-codes');

const createToken = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await loginService.createNewToken({ email, password });

  if (user.error) return next(user.error);

  console.log("create token, login controller");
  console.log("user", user);

  res.status(StatusCodes.CREATED).json(user);
};

module.exports = {
  createToken,
};

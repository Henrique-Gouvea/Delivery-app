const Joi = require("joi");
const { User } = require("../models");
const sendError = require("../middlewares/sendError");
const createToken = require("../middlewares/createToken");
// import { StatusCodes } from "http-status-codes";
const { verifyPassword } = require("../middlewares/md5");

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const createNewToken = async ({ email, password }) => {
  console.log("loginService, createToken");

  const { error } = loginSchema.validate({ email, password });
  if (error)
    return sendError(404, "Some required fields are missing");

  const user = await User.findOne({ where: { email } });

  if (!user) {
    // || user.password !== password)
    return sendError(404, "Not found");
  }

  verifyPassword(password, user.password);

  const token = createToken({ email: user.email, password: user.password });

  console.log('=============');
  console.log('token', token);

  return token;
};

module.exports = {
  createNewToken,
};

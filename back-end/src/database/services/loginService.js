const Joi = require('joi');
const { User } = require("../models");
const sendError = require("../middlewares/sendError");
const { createToken } = require("../middlewares/createToken");

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const createToken = async (email, password) => {
  console.log('loginService, createToken');

  const { error } = loginSchema.validate({ email, password });
  if (error) return sendError(404, "Some required fields are missing");

  const existingEmail = await User.findOne({ where: { email } });
  if (!existingEmail) return sendError(404, "User already registered");

  const newUser = await User.create({ email, password });
  console.log('newUser', newUser);

  const token = createToken(newUser);
  return token;
};

module.exports = {
  createToken,
};

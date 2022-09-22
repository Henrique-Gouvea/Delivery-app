const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { encriptPassword } = require("../middlewares/createToken");
const { createToken } = require("../middlewares/createToken");
const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required,
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const createUser = async (user) => {
  const { error } = userSchema.validate(user);
  if (error)
    return sendError(StatusCodes.NOT_FOUND, "Some required fields are missing");

  const passHash = encriptPassword(user.password);
  const newUser = await User.create({
    ...user,
    password: passHash,
    role: "customer",
  });

  const token = createToken({ email: user.email, password: user.password });

  return { token, role: newUser.role };
};

const findAll = async () => {
  const allUsers = await User.findAll({
    attributes: ["id", "name", "email", "role"],
  });

  return allUsers;
};

module.exports = {
  findAll,
  createUser,
};
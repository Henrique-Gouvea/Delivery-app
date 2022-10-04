const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { encryptPassword } = require("../middlewares/md5");
const sendError = require("../middlewares/sendError");
// const { createToken } = require("../middlewares/jwt");
const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string(),
});

const createUserWithToken = async (user) => {
  const { error } = userSchema.validate(user);
  if (error)
    sendError(StatusCodes.NOT_FOUND, "Some required fields are missing");

    console.log('USER: ', user);

  const passHash = encryptPassword(user.password);

  const findName = await User.findOne({ where: { name: user.name } });
  const findEmail = await User.findOne({ where: { email: user.email } });

  if (findName || findEmail)
    sendError(StatusCodes.CONFLICT, "Customer alredy exists");

  const newUser = await User.create({
    ...user,
    password: passHash,
    role: user.role || 'customer',
  });

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  };
};

module.exports = {
  createUserWithToken,
};

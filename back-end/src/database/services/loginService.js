const Joi = require("joi");
const { User } = require("../models");
const sendError = require("../middlewares/sendError");
const { createToken } = require("../middlewares/jwt");
const { checkPassword, encryptPassword } = require('../middlewares/md5')
const { StatusCodes } = require("http-status-codes");

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const createNewToken = async ({ email, password, role }) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) sendError(StatusCodes.NOT_FOUND, "Some required fields are missing");

  const user = await User.findOne({ where: { email } });
  if (!user) sendError(StatusCodes.NOT_FOUND, "Not found");

  const passHash = encryptPassword(password);
  checkPassword(passHash, user.password);

  const token = createToken({ email: user.email, password: user.password, role: user.role || 'customer' });

  return {
    token,
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role || 'customer',
  };
};

module.exports = {
  createNewToken,
};

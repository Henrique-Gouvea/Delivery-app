const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { encryptPassword } = require("../middlewares/md5");
const sendError = require("../middlewares/sendError");
const { createToken } = require("../middlewares/jwt");
const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string(),
});

const createUser = async (user) => {
  const { error } = userSchema.validate(user);
  if (error)
    sendError(StatusCodes.NOT_FOUND, "Some required fields are missing");

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

  const token = createToken({ email: user.email, password: user.password, role: user.role });

  return {
    token,
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role || 'customer',
  };
};

const findAll = async () => {
  const allUsers = await User.findAll({
    attributes: ["id", "name", "email", "role"],
  });
  return allUsers;
};

const findAdministrator = async () => {
  const allUsersByRole = await User.findAll({ where: { role: 'administrator' } })
  return allUsersByRole;
};

const findSeller = async () => {
  const allUsersByRole = await User.findAll({ where: { role: 'seller' } })
  return allUsersByRole;
};

const findCustomer = async () => {
  const allUsersByRole = await User.findAll({ where: { role: 'customer' } })
  return allUsersByRole;
};

module.exports = {
  findAll,
  createUser,
  findAdministrator,
  findSeller,
  findCustomer,
};

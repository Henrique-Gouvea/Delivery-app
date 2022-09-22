const sendError = require("./sendError");
const md5 = require("md5");
const { StatusCodes } = require("http-status-codes");

const encryptPassword = (password) => {
  const passEncryp = md5(password);
  return passEncryp;
};

const checkPassword = (password, passwordHash) => {
  if (password !== passwordHash){
    sendError(StatusCodes.BAD_REQUEST, "Invalid password");
  }
  return true;
};

module.exports = {
  encryptPassword,
  checkPassword,
};

const md5 = require("md5");
const sendError = require("./sendError");
import { StatusCodes } from "http-status-codes";

const encriptPassword = (password) => {
  const passwordHash = md5(password);
  return passwordHash;
};

const verifyPassword = (password, passwordHash) => {
  const passwordEncript = md5(password);
  if (passwordEncript !== passwordHash) {
    return sendError(StatusCodes.BAD_REQUEST, "Invalid password");
  }
};

module.exports = {
  encriptPassword,
  verifyPassword,
};

const customError = require("./customError");

const sendError = (status, message) => {
  throw new customError(status, message);
};

module.exports = sendError;

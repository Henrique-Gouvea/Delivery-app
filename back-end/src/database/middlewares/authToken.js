const jwt = require("jsonwebtoken");
const sendError = require("./sendError");

const { JWT_SECRET } = process.env;

const verifyToken = (token) => {
  if (!token) {
    return sendError(401, "Token not found");
  }

  const verify = jwt.verify(token, JWT_SECRET);

  return verify;
};

const auth = (req, _res, next) => {
  const token = req.headers.authorization;

  try {
    const payload = verifyToken(token);

    if (payload.error) return next(payload.error);

    req.token = payload;

    next();
  } catch (err) {
    next(sendError(401, "Expired or invalid token").error);
  }
};

module.exports = auth;

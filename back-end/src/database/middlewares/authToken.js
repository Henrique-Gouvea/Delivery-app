const { verifyToken } = require("./jwt");
const sendError = require("./sendError");


const auth = (req, _res, next) => {
  const token = req.headers.authorization;

  try {
    const payload = verifyToken(token);

    if (payload.error) return next(payload.error);

    req.headers.authorization = payload;

    next();
  } catch (err) {
    next(sendError(401, "Expired or invalid token").error);
  }
};

module.exports = auth;

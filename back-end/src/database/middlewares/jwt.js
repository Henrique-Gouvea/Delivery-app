const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode');
const fs = require("fs");

let SECRET;

fs.readFile("./jwt.evaluation.key", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  SECRET = data;
})

const createToken = (user) => {
  const { email, password, role } = user;
  const newToken = jwt.sign({ data: { email, password, role } }, SECRET, {
    expiresIn: "30d",
    algorithm: "HS256",
  });

  return newToken;
};

const verifyToken = (token) => {
  if (!token) return sendError(401, "Token not found");
  const verify = jwt.verify(token, SECRET);

  return verify;
};

const decoded = (token) => {
  if (!token) return sendError(401, "Token not found");
  const verify = jwt_decode(token);

  console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
  console.log('decoded em JWT')
  console.log('jwt_decode(token)', verify);

  return verify;
}

module.exports = { createToken, verifyToken, decoded };

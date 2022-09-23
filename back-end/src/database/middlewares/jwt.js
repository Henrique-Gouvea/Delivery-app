const jwt = require("jsonwebtoken");
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
  const { email, password } = user;
  const newToken = jwt.sign({ data: { email, password } }, SECRET, {
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

module.exports = { createToken, verifyToken };

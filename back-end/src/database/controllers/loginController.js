const loginService = require("../services/loginService");

const createToken = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await loginService.createToken({ email, password });

  if (user.error) return next(user.error);
  console.log('create token, login controller');
  console.log('user', user);

  res.status(201).json({ token: user });
};

module.exports = {
  createToken,
};

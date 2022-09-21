const userService = require('../services/userService');

const findAll = async (_req, res) => {
  const allUsers = await userService.findAll();
  console.log(allUsers)

  res.status(200).json(allUsers);
};

module.exports = {
  findAll,
}

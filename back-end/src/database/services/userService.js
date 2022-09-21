const { User } = require("../models");

const findAll = async () => {
  const allUsers = await User.findAll({
    attributes: ["id", "name", "email", "role"],
  });
  console.log('userService');
  console.log('allUsers', allUsers)

  return allUsers;
};


module.exports = {
  findAll,
};

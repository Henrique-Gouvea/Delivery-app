const express = require("express");
const userController = require("../controllers/userController");
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/login', authToken, userController.createUser);

module.exports = router;
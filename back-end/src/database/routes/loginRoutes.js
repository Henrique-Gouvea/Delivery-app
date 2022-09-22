const express = require("express");
const userController = require("../controllers/userController");
const loginController = require('../controllers/loginController')

const router = express.Router();

router.post('/login', loginController.createToken);

module.exports = router;

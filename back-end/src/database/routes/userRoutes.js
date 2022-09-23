const express = require("express");
const userController = require("../controllers/userController");
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/user', userController.createUser);
router.use(authToken);

module.exports = router;

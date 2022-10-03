const express = require("express");
const userController = require("../controllers/postUserWithToken");

const router = express.Router();

router.post('/admin', userController.createUserWithToken);

module.exports = router;

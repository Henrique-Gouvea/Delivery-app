const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post('/user', userController.createUser);
router.get('/user', userController.findAll);
router.get('/user/administrator', userController.findAdministrator);
router.get('/user/seller', userController.findSeller);
router.get('/user/customer', userController.findCustomer);

module.exports = router;

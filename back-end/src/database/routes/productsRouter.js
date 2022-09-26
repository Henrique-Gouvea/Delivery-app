const express = require("express");
const productController = require("../controllers/productsController");
// const authToken = require('../middlewares/authToken');

const router = express.Router();

// router.use(authToken);
router.post('/products', productController.createProduct);
router.get('/products', productController.getAll);
router.get('/products/:id', productController.getById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;

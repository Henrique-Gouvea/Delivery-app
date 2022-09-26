const express = require("express");
const salesController = require("../controllers/salesControllers");

const router = express.Router();

router.post('/sales', salesController.createSales);
router.get('/sales', salesController.findAll);
router.get('/sales/:id', salesController.findByID);
router.put('/sales/:id', salesController.updateSale);
router.delete('/sales/:id', salesController.deleteSale);

module.exports = router;

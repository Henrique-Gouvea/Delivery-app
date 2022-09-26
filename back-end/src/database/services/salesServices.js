const { Sale } = require('../models');
const Joi = require("joi");
const sendError = require("../middlewares/sendError");
const { StatusCodes } = require("http-status-codes");

const salesSchema = Joi.object({
  user_id: Joi.number().required(),
  seller_id: Joi.number().required(),
  total_price: Joi.number().precision(2).required(),
  delivery_address: Joi.string().required(),
  delivery_number: Joi.number().required(),
});


const createSales = async (sales) => {
  const { error } = salesSchema.validate(sales);
  if (error)
    sendError(StatusCodes.BAD_REQUEST, "Some required fields are missing");
;
  const newSales = await Sale.create({ ...sales, status: 'Pendente' });
  return newSales;
}

const findAll = async () => {
  const sales = await Sale.findAll();

  return sales;
}

const findByID = async (id) => {
  const sale = await Sale.findOne({ where: { id } });
  if (!sale) sendError(StatusCodes.NOT_FOUND, "Sale not found");
  return sale;
}

const updateSale = async (id, sale) => {
  const { error } = salesSchema.validate(sale);

  if (error)
    sendError(StatusCodes.BAD_REQUEST, "Some required fields are missing");
  if (!findByID(id)) sendError(StatusCodes.NOT_FOUND, "Sale not found");

  const saleUpdated = await Sale.update(sale, { where: { id } });

  return saleUpdated;
};

const deleteSale = (id) => {
  if (!findByID(id)) sendError(StatusCodes.NOT_FOUND, "Sale not found");
  return Sale.destroy({ where: { id } });
};

module.exports = {
  createSales,
  findAll,
  findByID,
  updateSale,
  deleteSale,
}

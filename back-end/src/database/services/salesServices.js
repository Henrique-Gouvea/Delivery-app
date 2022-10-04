const { Sale, SalesProduct } = require("../models");
const Joi = require("joi");
const sendError = require("../middlewares/sendError");
const { StatusCodes } = require("http-status-codes");
const Sequelize = require("sequelize");
const config = require("../config/config");
const env = process.env.NODE_ENV || "development";
const { getById } = require("./productsServices");
const { now } = require("moment");

const sequelize = new Sequelize(config[env]);

const salesSchema = Joi.object({
  user_id: Joi.number().required(),
  seller_id: Joi.number(),
  delivery_address: Joi.string().required(),
  delivery_number: Joi.number().required(),
  products: Joi.array().required(),
});

const createSales = async (sales) => {
  const t = await sequelize.transaction();
  const { error } = salesSchema.validate(sales);
  if (error)
    sendError(StatusCodes.BAD_REQUEST, "Some required fields are missing");

  if(!sales.products) sendError(StatusCodes.BAD_REQUEST, "Some required fields are missing");

  const products = await Promise.all(
    sales.products.map((product) => getById(product.product_id))
  );

  const totalValue = products
    .reduce(
      (acc, product, index) =>
        acc + product.price * sales.products[index].quantity,
      0
    )
    .toFixed(2);

  try {
    const newSales = await Sale.create(
      {
        ...sales,
        total_price: Number(totalValue),
        status: "Pendente",
        sale_date: new Date(),
      },
      { transaction: t }
    );

    await Promise.all(
      sales.products.map((product) =>
        SalesProduct.create(
          {
            sale_id: newSales.id,
            product_id: product.product_id,
            quantity: product.quantity,
          },
          { transaction: t }
        )
      )
    );

    await t.commit();
    return newSales;
  } catch (error) {
    await t.rollback();
    console.log(error);
    throw error;
  }
};

const findAll = async () => {
  const sales = await Sale.findAll();

  return sales;
};

const findByID = async (id) => {
  const sale = await Sale.findOne({ where: { id } });
  if (!sale) sendError(StatusCodes.NOT_FOUND, "Sale not found");
  return sale;
};

const updateSale = async (id, sale) => {
  // const { error } = salesSchema.validate(sale);

  // if (error)
  //   sendError(StatusCodes.BAD_REQUEST, "Some required fields are missing");
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
};

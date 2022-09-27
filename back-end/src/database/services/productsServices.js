const Joi = require("joi");
const { Product } = require("../models");
const sendError = require("../middlewares/sendError");
const { StatusCodes } = require("http-status-codes");

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().precision(2).required(),
  url_image: Joi.string().required(),
});

const getAll = async () => Product.findAll();

const getById = async (id) => {
  const product = Product.findOne({ where: { id } });
  if (!product) sendError(StatusCodes.NOT_FOUND, "Product not found");

  return product;
};

const createProduct = (product) => {
  const { error } = productSchema.validate(product);
  if (error)
    sendError(StatusCodes.BAD_REQUEST, "Some required fields are missing");

  const newProduct = Product.create(product);
  return newProduct
};

const updateProduct = (id, product) => {
  const { error } = productSchema.validate(product);

  if (error)
    sendError(StatusCodes.BAD_REQUEST, "Some required fields are missing");
  if (!getById(id)) sendError(StatusCodes.NOT_FOUND, "Product not found");

  const productUpdated = Product.update(product, { where: { id } });
  return productUpdated;
};

const deleteProduct = (id) => {
  if (!getById(id)) sendError(StatusCodes.NOT_FOUND, "Product not found");
  return Product.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};

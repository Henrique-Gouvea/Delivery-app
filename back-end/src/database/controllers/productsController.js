const productsServices = require("../services/productsServices");
const { StatusCodes } = require("http-status-codes");

const getAll = async (_req, res, next) => {
  try {
    const products = await productsServices.getAll();
    if (products.error) return next(products.error);

    console.log("================");
    console.log("getAll em productsController");
    console.log("products", products);

    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsServices.getById(id);
    if (product.error) return next(product.error);

    console.log("================");
    console.log("getById em productsController");
    console.log("product", product);

    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const product = await productsServices.createProduct(newProduct);

    console.log("================");
    console.log("createProduct em productsController");
    console.log("newProduct", newProduct);
    console.log("product", product);

    if (product.error) return next(product.error);

    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const upProduct = req.body;
    const product = await productsServices.updateProduct(id, upProduct);

    if (product.error) return next(product.error);

    console.log("================");
    console.log("updateProduct em productsController");
    console.log("upProduct", upProduct);
    console.log("product", product);

    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsServices.deleteProduct(id);

    if (product.error) return next(product.error);

    console.log("================");
    console.log("deleteProduct em productsController");
    console.log("product", product);

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};

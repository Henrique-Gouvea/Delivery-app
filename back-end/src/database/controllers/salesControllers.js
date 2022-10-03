const salesService = require('../services/salesServices');
const { StatusCodes } = require("http-status-codes");

const createSales = async (req, res, next) => {
  try {
    const newSales = req.body;
    console.log('+++++++++++++++++++++++++++++')
    console.log('req.body', req.body)
    const sales = await salesService.createSales(newSales);
    // console.log('SALES', sales);

    return res.status(StatusCodes.CREATED).json(sales);
  } catch (error) {
    next(error);
  }
}

const findAll = async (_req, res, next) => {
  try {
    const sales = await salesService.findAll();
    if (sales.error) return next(sales.error);

    return res.status(StatusCodes.OK).json(sales);
  } catch (error) {
    next(error);
  }
}

const findByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.findByID(id);
    if (sale.error) return next(sale.error);

    return res.status(StatusCodes.OK).json(sale);
  } catch (error) {
    next(error);
  }
}

const updateSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const upSale = req.body;
    // const sale = await salesService.updateSale(id, upSale);

    await salesService.updateSale(id, upSale)
    return res.status(StatusCodes.OK).json(upSale);
  } catch (error) {
    next(error);
  }
}

const deleteSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.deleteSale(id);

    if (sale.error) return next(sale.error);

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createSales,
  findAll,
  findByID,
  updateSale,
  deleteSale,
}

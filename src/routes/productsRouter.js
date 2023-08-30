const express = require('express');
const { ProductsService } = require('../services/productsService');
const { validatorHandler } = require('../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
} = require('../schemas/productSchema');

const productsRouter = express.Router();
const service = new ProductsService();

productsRouter.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

productsRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

productsRouter.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

productsRouter.patch(
  '/:id',
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const product = await service.update(id, body);
      res.status(202).json({
        message: 'updated',
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.status(202).json(rta);
});

module.exports = { productsRouter };

const express = require('express');
const { productsRouter } = require('./productsRouter');
const { usersRouter } = require('./usersRouter');
const { categoriesRouter } = require('./categoriesRouter');

const mainRouter = express.Router();

mainRouter.use('/products', productsRouter);
mainRouter.use('/users', usersRouter);
mainRouter.use('/categories', categoriesRouter);

mainRouter.get('/', (req, res) => {
  res.status(200).json({ status: 'Server Online' });
});

module.exports = { mainRouter };

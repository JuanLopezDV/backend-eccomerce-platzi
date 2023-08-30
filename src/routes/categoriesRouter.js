const express = require('express');

const categoriesRouter = express.Router();

categoriesRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Ruta categorias' });
});

module.exports = { categoriesRouter };

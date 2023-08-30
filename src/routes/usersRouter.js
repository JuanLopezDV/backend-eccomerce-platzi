const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Ruta users' });
});

module.exports = { usersRouter };

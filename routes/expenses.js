const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expenses');

router.use('/', expensesController);

module.exports = router;

const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

router.post('/', (req, res) => {
  const { amount, category, description } = req.body;
  const expense = new Expense({ amount, category, description });
  expense.save((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding expense' });
    }
    res.json({ message: 'Expense added successfully' });
  });
});

router.get('/', (req, res) => {
  Expense.find({}, (err, expenses) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching expenses' });
    }
    res.json(expenses);
  });
});

module.exports = router;

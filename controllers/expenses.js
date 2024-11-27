const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

router.get('/', (req, res) => {
    Expense.find({ user: req.session.user._id }, (err, expenses) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error fetching expenses' });
        }
        res.json(expenses);
    });
});

router.post('/', (req, res) => {
    const { amount, category, description } = req.body;
    const expense = new Expense({ amount, category, description, user: req.session.user._id });
    expense.save((err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error creating expense' });
        }
        res.json({ success: true });
    });
});

module.exports = router;

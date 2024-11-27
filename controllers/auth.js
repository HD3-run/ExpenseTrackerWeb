const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        if (user.password !== password) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        req.session.user = user;
        res.json({ success: true });
    });
});

router.post('/register', (req, res) => {
    const { username, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }
    User.findOne({ username }, (err, user) => {
        if (err || user) {
            return res.status(400).json({ success: false, message: 'Username already taken' });
        }
        const newUser = new User({ username, password });
        newUser.save((err) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Error creating user' });
            }
            res.json({ success: true });
        });
    });
});

module.exports = router;

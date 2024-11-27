const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const authRoutes = require('../routes/auth');
const expenseRoutes = require('../routes/expenses');

mongoose.connect("mongodb+srv://HD3:<Miyamotomushashi>@cluster0.1vs7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.use('/api/products', require('./src/modules/product/product.routes'));
app.use('/api/categories', require('./src/modules/category/category.routes'));


// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;

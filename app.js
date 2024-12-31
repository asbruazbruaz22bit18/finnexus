require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const budgetRoutes = require('./budgeting/routes/budgetRoutes');
const expenseRoutes = require('./budgeting/routes/expenseRoutes');
const errorHandler = require('./budgeting/middlewares/errorHandler');  // Global error handling middleware

const app = express();

// Global Middleware setup
app.use(cors());  // Enable Cross-Origin Request Sharing (CORS)
app.use(bodyParser.json());  // Middleware to parse incoming JSON data

// MongoDB connection using the environment variable
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Routes setup (for the budgeting module)
app.use('/api/budget', budgetRoutes);  // Use budgeting-related routes
app.use('/api/expense', expenseRoutes);  // Use expense-related routes

// Root endpoint
app.get('/', (req, res) => {
  res.send("Welcome to the Finnexus API");
});

// Global Error Handling Middleware
app.use(errorHandler);  // Use global error handler at the end

module.exports = app;

// Load environment variables from .env file at the very top
require('dotenv').config();
console.log("Mongo URI from .env:", process.env.MONGO_URI);
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const plansRoutes = require('./routes/planRoutes');


// Initialize app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/micro_investment_plans', plansRoutes);

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('Database connection error: ', err.message);
  });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
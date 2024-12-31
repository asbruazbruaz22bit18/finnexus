const express = require("express");
const connectBudgetingDB = require("./db");
const budgetRoutes = require("./routes/budgetRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// Connect to the budgeting-specific database
connectBudgetingDB();

// Middleware to parse JSON
app.use(express.json());

// Register routes
app.use("/api/budget", budgetRoutes);
app.use("/api/expense", expenseRoutes);

module.exports = app;

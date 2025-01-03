const express = require("express");
const connectBudgetingDB = require("./db");
const budgetRoutes = require("./routes/budgetRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

connectBudgetingDB();

app.use(express.json());

app.use("/api/budget", budgetRoutes);
app.use("/api/expense", expenseRoutes);

module.exports = app;

const express = require("express");
const expenseController = require("../controllers/expenseController"); // Import the expense controller
const router = express.Router();

// Route to add a new expense
router.post("/", expenseController.addExpense);

// Route to get all expenses for a specific user
router.get("/:user_id", expenseController.getExpenses);

module.exports = router;

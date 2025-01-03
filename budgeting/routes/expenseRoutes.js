const express = require("express");
const expenseController = require("../controllers/expenseController");
const router = express.Router();

router.post("/", expenseController.addExpense);
router.get("/:user_id", expenseController.getExpenses);

module.exports = router;

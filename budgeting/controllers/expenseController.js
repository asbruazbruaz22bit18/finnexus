const Expense = require("../models/expense");
const { validateExpenseFields } = require("../utils/validation");  // Import validation function

// Add a new expense
exports.addExpense = async (req, res) => {
  try {
    const { user_id, amount, reason, description, expense_date } = req.body;

    // Validate the expense data
    const validation = validateExpenseFields(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message });
    }

    const expense = new Expense({
      user_id,
      amount,
      reason,
      description,
      expense_date,
    });

    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all expenses for a user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user_id: req.params.user_id });

    if (!expenses) {
      return res.status(404).json({ message: "No expenses found" });
    }

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

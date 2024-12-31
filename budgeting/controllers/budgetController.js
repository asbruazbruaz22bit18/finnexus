const Budget = require("../models/budget");
const { validateBudgetFields } = require('../utils/validation');

// Set or update budget
exports.setBudget = async (req, res) => {
  try {
    console.log("budget controller");
    const { user_id, daily_budget, weekly_budget, monthly_budget } = req.body;

    // Validate the budget data
    const validation = validateBudgetFields(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message });
    }

    const budget = await Budget.findOneAndUpdate(
      { user_id },
      { daily_budget, weekly_budget, monthly_budget },
      { new: true, upsert: true }
    );

    res.status(200).json(budget);
  } catch (error) {
    console.log("entered here");
    res.status(500).json({ message: error.message });
  }
};

// Get user budget
exports.getBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne({ user_id: req.params.user_id });

    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Budget = require("../models/budget");
const { validateBudgetFields } = require('../utils/validation');
const { createChart } = require('../utils/chart');
const Expense = require("../models/expense");

// Set or update budget and calculate savings
exports.setBudget = async (req, res) => {
  try {
    const { user_id, daily_budget, weekly_budget, monthly_budget } = req.body;

    const validation = validateBudgetFields(user_id, daily_budget, weekly_budget, monthly_budget);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message });
    }

    // Find the existing budget document or create a new one
    const budget = await Budget.findOneAndUpdate(
      { user_id },
      { daily_budget, weekly_budget, monthly_budget },
      { new: true, upsert: true }
    );

    // Calculate savings for daily, weekly, and monthly budgets
    const savings = {
      daily_savings: daily_budget.amount - await getTotalExpense(user_id, 'daily'),
      weekly_savings: weekly_budget.amount - await getTotalExpense(user_id, 'weekly'),
      monthly_savings: monthly_budget.amount - await getTotalExpense(user_id, 'monthly'),
    };

    // Generate the pie chart image
    const chartImage = await createChart(budget, savings);

    // Optionally, save the pie chart image in the database or file system
    await saveChartImage(user_id, chartImage);

    res.status(200).json({ budget, savings, chartImage });

  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Utility function to calculate total expense for a given period
const getTotalExpense = async (user_id, period) => {
  const expenses = await Expense.find({ user_id });
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

// Save the generated chart to the database
const saveChartImage = async (user_id, chartImage) => {
  const ChartModel = require("../models/chart");
  const chart = new ChartModel({
    user_id,
    image: chartImage,
    created_at: Date.now(),
  });
  await chart.save();
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

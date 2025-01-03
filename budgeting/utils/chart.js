const { createCanvas } = require('canvas');
const Chart = require('chart.js');
const Expense = require('../models/expense'); // Import the Expense model

// Utility function to calculate total expenses for a given period
const getTotalExpense = async (user_id, period) => {
  const now = new Date();
  let startDate;

  if (period === 'daily') {
    startDate = new Date(now.setHours(0, 0, 0, 0)); // Start of the day
  } else if (period === 'weekly') {
    const dayOfWeek = now.getDay();
    startDate = new Date(now.setDate(now.getDate() - dayOfWeek)); // Start of the week
  } else if (period === 'monthly') {
    startDate = new Date(now.getFullYear(), now.getMonth(), 1); // Start of the month
  }

  // Fetch expenses within the specified period
  const expenses = await Expense.find({
    user_id,
    expense_date: { $gte: startDate, $lte: new Date() },
  });

  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

// Function to generate pie chart
const createChart = async (user_id, budget, savings) => {
  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext('2d');

  // Fetch total expenses
  const totalExpense = await getTotalExpense(user_id, 'daily');

  // Create the pie chart
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Expenses', 'Savings'],
      datasets: [{
        data: [
          totalExpense,       // Expense value
          savings.daily_savings, // Savings value
        ],
        backgroundColor: ['#FF5733', '#33FF57'],
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  });

  return canvas.toBuffer(); // Return the chart as a buffer
};

module.exports = { createChart };

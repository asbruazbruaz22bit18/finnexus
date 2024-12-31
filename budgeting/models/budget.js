const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  daily_budget: {
    amount: { type: Number, required: true, min: 0 },  // Prevent negative amounts
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  weekly_budget: {
    amount: { type: Number, required: true, min: 0 },  // Prevent negative amounts
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  monthly_budget: {
    amount: { type: Number, required: true, min: 0 },  // Prevent negative amounts
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// Automatically update `updated_at` when a document is modified
budgetSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model("Budget", budgetSchema);

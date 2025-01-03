const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  amount: { type: Number, required: true, min: 0 },
  reason: { type: String, required: true },
  description: { type: String },
  expense_date: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(value) {
        return value <= Date.now();
      },
      message: 'Expense date cannot be in the future',
    },
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Expense", expenseSchema);

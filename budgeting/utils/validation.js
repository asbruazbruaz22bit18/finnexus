// utils/validation.js

// Function to validate budget fields
//console.log("validation.js");
// utils/validation.js
const validateBudgetFields = (user_id, daily_budget, weekly_budget, monthly_budget) => {
  if (!user_id || daily_budget === undefined || weekly_budget === undefined || monthly_budget === undefined) {
    return { isValid: false, message: "Missing required fields" };
  }
  if (daily_budget < 0 || weekly_budget < 0 || monthly_budget < 0) {
    return { isValid: false, message: "Budget amounts must be non-negative" };
  }
  return { isValid: true, message: "" };
};



  
  // Function to validate expense fields (example, modify as per your needs)
  const validateExpenseFields = (user_id, amount, reason, expense_date) => {
    console.log("Validating:", { user_id, amount, reason, expense_date });
    if (!user_id || amount === undefined || reason === undefined || expense_date === undefined) {
      return { isValid: false, message: "Missing required fields" };
    }
    if (amount <= 0) {
      return { isValid: false, message: "Amount must be positive" };
    }
    return { isValid: true, message: "" };
  };
  
  // Export the validation functions
  module.exports = {
    validateBudgetFields,
    validateExpenseFields,
  };
  
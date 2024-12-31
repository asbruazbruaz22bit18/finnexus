const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController'); // Import the budget controller

// Route to create or update a budget (set budget)
router.post('/', budgetController.setBudget);

// Route to get a single budget by user ID
router.get('/:user_id', budgetController.getBudget);  // Adjusted to match your controller

module.exports = router;

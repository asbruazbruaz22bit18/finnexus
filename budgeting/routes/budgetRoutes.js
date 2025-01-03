const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');

router.post('/', budgetController.setBudget);
router.get('/:user_id', budgetController.getBudget);

module.exports = router;

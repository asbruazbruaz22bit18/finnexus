const express = require('express');
const router = express.Router();
const plansController = require('../controllers/plansController');

// Routes for Investment Plans
router.get('/plans', plansController.getPlans);  // Get all plans
router.get('/plans/:planIndex', plansController.getPlanByIndex);  // Get plan by planIndex
router.post('/plans', plansController.addPlan);  // Add a new plan
router.put('/plans/:planIndex', plansController.updatePlan);  // Update an existing plan
router.delete('/plans/:planIndex', plansController.deletePlan);  // Delete a plan

module.exports = router;
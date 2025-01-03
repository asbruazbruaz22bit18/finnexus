const Plan = require('../models/plan');  // Ensure the import path matches the file name
const mongoose = require('mongoose');
console.log(process.env.MONGO_URI); 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.error('MongoDB connection error: ', err));

// Get all plans
exports.getPlans = async (req, res) => {
    try {
        console.log('Fetching plans...');
        const plans = await Plan.find();
        console.log('Plans found:', plans);
        if (plans.length === 0) {
            return res.status(404).json({ message: 'No investment plans found' });
        }
        res.status(200).json(plans);
    } catch (err) {
        console.log("Error:",err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Get plan by planIndex
exports.getPlanByIndex = async (req, res) => {
    try {
   

        const plan = await Plan.findOne({ planIndex: req.params.planIndex });
        
        if (!plan) {
            return res.status(404).json({ message: 'Investment plan not found' });
        }
        res.status(200).json(plan);
    } catch (err) {
      
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Add a new plan
exports.addPlan = async (req, res) => {
    const { planIndex, description, benefits, eligibility, minimumInvestment, duration } = req.body;

    // Validation
    if (!planIndex || !description || !benefits || !eligibility || !minimumInvestment || !duration) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newPlan = new Plan({
            planIndex,
            description,
            benefits,
            eligibility,
            minimumInvestment,
            duration
        });
        const savedPlan = await newPlan.save();
        res.status(201).json(savedPlan);
    } catch (err) {
        res.status(400).json({ message: 'Error saving plan', error: err.message });
    }
};

// Update an existing plan
exports.updatePlan = async (req, res) => {
    try {
        const updatedPlan = await Plan.findOneAndUpdate(
            { planIndex: req.params.planIndex },
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedPlan) {
            return res.status(404).json({ message: 'Investment plan not found' });
        }
        res.status(200).json(updatedPlan);
    } catch (err) {
        res.status(400).json({ message: 'Error updating plan', error: err.message });
    }
};

// Delete a plan by planIndex
exports.deletePlan = async (req, res) => {
    try {
        const plan = await Plan.findOneAndDelete({ planIndex: req.params.planIndex });
        if (!plan) {
            return res.status(404).json({ message: 'Investment plan not found' });
        }
        res.status(200).json({ message: 'Investment plan deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};
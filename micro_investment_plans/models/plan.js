const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    planIndex: { type: Number, required: true, unique: true },
    description: { type: String, required: true },
    benefits: { type: [String], required: true },
    eligibility: { type: String, required: true },
    minimumInvestment: { type: Number, required: true },
    duration: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Plan', PlanSchema);
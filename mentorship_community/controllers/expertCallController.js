const ExpertCall = require("../models/expertCall");

// Add a new expert call
const addExpertCall = async (req, res) => {
  try {
    const expertCall = new ExpertCall(req.body);
    await expertCall.save();
    res.status(201).json({ message: "Expert call scheduled successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all expert calls
const getExpertCalls = async (req, res) => {
  try {
    const calls = await ExpertCall.find();
    res.status(200).json(calls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an expert call
const deleteExpertCall = async (req, res) => {
  try {
    const { id } = req.params;
    await ExpertCall.findByIdAndDelete(id);
    res.status(200).json({ message: "Expert call deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addExpertCall, getExpertCalls, deleteExpertCall };

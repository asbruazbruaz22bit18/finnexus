const QuizProgress = require('../models/quizProgress');
const QuizResults = require("../models/quizResults");

const addQuizProgress = async (req, res) => {
  try {
    // Validate input (example: use Joi or custom validation)
    const progress = new QuizProgress(req.body);
    await progress.save();
    res.status(201).json({ message: "Quiz progress saved" });
  } catch (error) {
    console.error("Error saving quiz progress:", error.message);
    res.status(400).json({ message: error.message });
  }
};

const getQuizResults = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const results = await QuizResults.find({ userId });
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching quiz results:", error.message);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addQuizProgress, getQuizResults };

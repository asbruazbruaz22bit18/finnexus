const QuizProgress = require('../models/quizProgress');
const QuizResults = require('../models/quizResults');

// Fetch all quiz progress
const getAllQuizProgress = async (req, res) => {
    try {
        const progress = await QuizProgress.find();
        res.status(200).json(progress);
    } catch (error) {
        console.error("Error fetching quiz progress:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Add new quiz progress
const addQuizProgress = async (req, res) => {
    try {
        const newProgress = new QuizProgress(req.body);
        const savedProgress = await newProgress.save();
        res.status(201).json(savedProgress);
    } catch (error) {
        console.error("Error saving quiz progress:", error.message);
        res.status(400).json({ message: error.message });
    }
};

// Fetch quiz results for a specific user
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
        res.status(500).json({ message: error.message });
    }
};
const deleteQuizProgress = async (req, res) => {
  try {
    const { userId, questionId } = req.body;  // Expecting userId and questionId in the body

    if (!userId || !questionId) {
      return res.status(400).json({ message: 'User ID and Question ID are required' });
    }

// Delete the quiz progress entry
const result = await QuizProgress.findOneAndDelete({ userId, questionId });

if (!result) {
  return res.status(404).json({ message: 'Quiz progress not found' });
}

res.status(200).json({ message: 'Quiz progress deleted successfully' });
} catch (error) {
console.error("Error deleting quiz progress:", error.message);
res.status(500).json({ message: 'Error deleting quiz progress' });
}
};

module.exports = { getAllQuizProgress, addQuizProgress, getQuizResults, deleteQuizProgress };

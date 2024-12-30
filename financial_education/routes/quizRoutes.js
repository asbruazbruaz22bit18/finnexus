const express = require("express");
const router = express.Router();
const { addQuizProgress, getQuizResults } = require("../controllers/quizController");

// Define the route
router.get('/progress', async (req, res) => {
    try {
        const progress = await QuizProgress.find(); // Assuming QuizProgress is your model
        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post("/progress", addQuizProgress);
router.get("/results/:userId", getQuizResults);

module.exports = router;


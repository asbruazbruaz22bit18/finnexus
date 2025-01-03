// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const { getAllQuizProgress, addQuizProgress, getQuizResults, deleteQuizProgress } = require('../controllers/quizController');

// GET: Get all quiz progress
router.get('/progress', getAllQuizProgress);

// POST: Add quiz progress
router.post('/progress', addQuizProgress);

// GET: Get quiz results by userId
router.get('/results/:userId', getQuizResults);

// DELETE: Delete quiz progress by userId and questionId
router.delete('/progress', deleteQuizProgress);

module.exports = router;


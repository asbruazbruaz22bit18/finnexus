const mongoose = require("mongoose");

const quizResultsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  stage: { type: String, required: true },
  finalScore: { type: Number, required: true },
  questionsAttempted: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  totalTimeTaken: { type: Number, required: true }, // Time taken in seconds
  passed: { type: Boolean, required: true }
});

module.exports = mongoose.model("QuizResults", quizResultsSchema);

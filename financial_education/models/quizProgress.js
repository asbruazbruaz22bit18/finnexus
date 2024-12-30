const mongoose = require('mongoose');

const quizProgressSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    stage: { type: String, required: true },
    questionId: { type: String, required: true },
    userAnswer: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    score: { type: Number, required: true },
    timeSpent: { type: Number, required: true },
    isCompleted: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('QuizProgress', quizProgressSchema);




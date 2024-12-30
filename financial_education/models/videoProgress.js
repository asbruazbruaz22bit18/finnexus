const mongoose = require("mongoose");

const videoProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  videoLink: { type: String, required: true },
  completionStatus: { type: String, enum: ['watched', 'not watched', 'in-progress'], required: true },
  timeSpent: { type: Number, required: true }, // Time spent in seconds
  lastWatched: { type: Date, default: Date.now }
});

module.exports = mongoose.model("VideoProgress", videoProgressSchema);
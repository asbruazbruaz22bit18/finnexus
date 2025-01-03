const mongoose = require('mongoose');

const videoProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  videoId: { type: String, required: true },
  watchedDuration: { type: Number, required: true },
  totalDuration: { type: Number, required: true },
  completed: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('VideoProgress', videoProgressSchema);

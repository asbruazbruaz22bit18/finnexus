const mongoose = require("mongoose");

const expertCallSchema = new mongoose.Schema({
  expertName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  scheduledTime: { type: Date, required: true },
  topic: { type: String }, // Optional field for the topic of discussion
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ExpertCall", expertCallSchema);

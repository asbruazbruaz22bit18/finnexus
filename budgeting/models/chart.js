const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  image: { type: Buffer, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chart", chartSchema);

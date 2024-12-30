const VideoProgress = require("../models/videoProgress");

const addVideoProgress = async (req, res) => {
  try {
    const progress = new VideoProgress(req.body);
    await progress.save();
    res.status(201).json({ message: "Video progress saved" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getVideoProgress = async (req, res) => {
  try {
    const progress = await VideoProgress.find({ userId: req.params.userId });
    res.status(200).json(progress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addVideoProgress, getVideoProgress };

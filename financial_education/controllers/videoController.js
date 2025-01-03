const VideoProgress = require("../models/videoProgress");

// Add video progress
const addVideoProgress = async (req, res) => {
  try {
    const progress = new VideoProgress(req.body);
    await progress.save();
    res.status(201).json({ message: "Video progress saved" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get video progress by userId
const getVideoProgress = async (req, res) => {
  try {
    const progress = await VideoProgress.find({ userId: req.params.userId });
    res.status(200).json(progress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete video progress by userId and videoId
const deleteVideoProgress = async (req, res) => {
  try {
    const { userId, videoId } = req.body; // Expecting userId and videoId in the body

    if (!userId || !videoId) {
      return res.status(400).json({ message: 'User ID and Video ID are required' });
    }

    const result = await VideoProgress.findOneAndDelete({ userId, videoId });

    if (!result) {
      return res.status(404).json({ message: 'Video progress not found' });
    }

    res.status(200).json({ message: 'Video progress deleted successfully' });
  } catch (error) {
    console.error('Error deleting video progress:', error.message);
    res.status(500).json({ message: 'Error deleting video progress' });
  }
};

module.exports = { addVideoProgress, getVideoProgress, deleteVideoProgress };

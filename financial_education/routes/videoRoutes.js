const express = require('express');
const router = express.Router();
const { addVideoProgress, getVideoProgress } = require('../controllers/videoController');

// Add video progress
router.post('/progress', addVideoProgress);

// Get video progress for a specific user
router.get('/progress/:userId', getVideoProgress);

module.exports = router;

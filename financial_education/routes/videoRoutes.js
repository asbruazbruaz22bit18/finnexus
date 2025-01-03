const express = require('express');
const router = express.Router();
const { addVideoProgress, getVideoProgress } = require('../controllers/videoController');

// Route to add video progress
router.post('/progress', addVideoProgress);

// Route to fetch all video progress
router.get('/progress', getVideoProgress);

module.exports = router;

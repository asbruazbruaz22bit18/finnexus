const express = require("express");
const router = express.Router();
const { addExpertCall, getExpertCalls, deleteExpertCall } = require("../controllers/expertCallController");

router.post("/calls", addExpertCall); // Add a new expert call
router.get("/calls", getExpertCalls); // Get all expert calls
router.delete("/calls/:id", deleteExpertCall); // Delete an expert call by ID

module.exports = router;

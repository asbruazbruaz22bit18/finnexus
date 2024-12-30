// Debugging: Log when requiring each module
console.log("Requiring express");
const express = require("express");

console.log("Requiring mongoose");
const mongoose = require("mongoose");

console.log("Requiring connectDB");
const connectDB = require("./config/db");

console.log("Requiring quizRoutes");
const quizRoutes = require("./routes/quizRoutes");

console.log("Requiring videoRoutes");
const videoRoutes = require("./routes/videoRoutes");

// Initialize express application
const app = express();
const PORT = 4000;

// Middleware to parse JSON requests
console.log("Adding middleware to parse JSON requests");
app.use(express.json());

// Connect to MongoDB
console.log("Connecting to MongoDB...");
connectDB();

// Use API routes
console.log("Setting up API routes");
app.use("/api/quizzes", quizRoutes);
app.use("/api/videos", videoRoutes);

// Default route for testing the server
console.log("Setting up default route");
app.get("/", (req, res) => {
  res.send("Welcome to the Financial Education Module API!");
});

// Start the server
console.log("Starting the server...");
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

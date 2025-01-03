const express = require("express");
const connectDB = require("./config/db");
const expertCallRoutes = require("./routes/expertCallRoutes");

const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Use the expert call routes
app.use("/api/expert-calls", expertCallRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Mentorship Community Module API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

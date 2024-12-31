const app = require("./app"); // Import the app from app.js
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

// Start the server
app.listen(PORT, () => {
  console.log(`Budgeting module server running on port ${PORT}`);
});

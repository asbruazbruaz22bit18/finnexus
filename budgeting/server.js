// server.js
const app = require('./index');  // Import the app from app.js
//const PORT = 8080;  // Use the port from environment variable or fallback to 5000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
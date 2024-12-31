const mongoose = require('mongoose');
require('dotenv').config(); // Make sure to load environment variables

const connectBudgetingDB = () => {
  const uri = process.env.DB_URI; // Use the environment variable

  if (!uri) {
    console.error("Error: DB_URI is not defined in the .env file");
    return;
  }

  // Remove the deprecated options
  mongoose.connect(uri)
    .then(() => {
      console.log("Successfully connected to the Budgeting Database");
    })
    .catch((error) => {
      console.error("Error connecting to the Budgeting Database:", error);
    });
};

module.exports = connectBudgetingDB;

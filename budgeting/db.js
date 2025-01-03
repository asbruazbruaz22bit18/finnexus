const mongoose = require('mongoose');
require('dotenv').config();

const connectBudgetingDB = () => {
  const uri = process.env.DB_URI;

  if (!uri) {
    console.error("Error: DB_URI is not defined in the .env file");
    return;
  }

  mongoose.connect(uri)
    .then(() => {
      console.log("Successfully connected to the Budgeting Database");
    })
    .catch((error) => {
      console.error("Error connecting to the Budgeting Database:", error);
    });
};

module.exports = connectBudgetingDB;


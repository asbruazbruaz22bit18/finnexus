// Global error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error("Error occurred:", err);  // Log the error for debugging (you can adjust logging as needed)
  
    // Check if it's a validation error or other custom error type
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        details: err.errors,
      });
    }
  
    // Check if it's a cast error (invalid ObjectId or similar issues)
    if (err.name === "CastError") {
      return res.status(400).json({
        message: "Invalid ID format",
        details: err.message,
      });
    }
  
    // Handle Mongoose validation errors (if any)
    if (err instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({
        message: "Validation Error",
        details: err.message,
      });
    }
  
    // Handle all other types of errors
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      error: err.message,  // Optionally include error details for debugging
    });
  };
  
  module.exports = errorHandler;
  
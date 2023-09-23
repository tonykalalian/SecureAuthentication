// Import required libraries and modules
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const cors = require("cors");
// Load environment variables from a .env file
dotenv.config();

// Create an instance of the Express application
const app = express();
// Connect to the database
connectDB();

// Middleware: Parse JSON request bodies
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
// Routes
app.get("/", (req, res, next) => {
  res.send("Api running");
});

app.use("/api/auth", require("./routes/auth")); // Routes for authentication
app.use("/api/private", require("./routes/private")); // Protected routes

// Error Handler Middleware (Should be the last middleware)
app.use(errorHandler);

// Define the port number for the server to listen on
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => {
    process.exit(1);
  });
});

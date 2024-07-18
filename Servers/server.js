// Import required modules
const express = require("express"); // Express framework for building web applications
const cors = require("cors"); // CORS middleware for handling Cross-Origin Resource Sharing
const mysql = require("mysql2"); // MySQL database driver
const path = require("path"); // Path module for handling file and directory paths
const dotenv = require("dotenv"); // Dotenv module for loading environment variables from a .env file

// Load environment variables from .env file
dotenv.config();

// Create an instance of an Express application
const app = express();

// Set the port to the value from environment variables or default to 3000
const port = process.env.PORT || 3000;

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Use middleware to parse JSON requests
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Create a MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Hostname from environment variables
  user: process.env.DB_USER, // Username from environment variables
  password: process.env.DB_PASSWORD, // Password from environment variables
  database: process.env.DB_NAME, // Database name from environment variables
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    // Log an error message if the connection fails
    console.error("Error connecting to the database:", err);
    return;
  }
  // Log a success message if the connection is successful
  console.log("Connected to the database");
});

// Define a GET route for fetching products from the database
app.get("/products", (req, res) => {
  const query = "SELECT * FROM products"; // SQL query to select all products
  db.query(query, (err, results) => {
    if (err) {
      // Log an error message and send a 500 response if there's an error executing the query
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");
      return;
    }
    // Send the query results as a JSON response
    res.json(results);
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

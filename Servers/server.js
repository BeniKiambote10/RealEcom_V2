const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "products_db",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.get("/products", (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

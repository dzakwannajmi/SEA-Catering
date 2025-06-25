const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "192.168.1.7", // IP dari Windows-mu (bukan 127.0.0.1)
  user: "root",
  password: "", // kosongkan kalau memang tidak pakai password
  database: "sea_catering",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to MySQL:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;

const mysql = require("mysql2");
require("dotenv").config(); // Pastikan ini di baris pertama, kecuali ada import lain yang lebih tinggi.

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to MySQL:", err); // Pesan error yang lebih detail
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;

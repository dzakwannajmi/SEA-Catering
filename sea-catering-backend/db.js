const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // ganti sesuai config kamu
  database: "sea_catering", // pastikan DB sudah dibuat
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to MySQL:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;

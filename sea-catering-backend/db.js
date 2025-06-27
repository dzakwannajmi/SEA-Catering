const mysql = require("mysql2/promise"); // ✅ gunakan versi promise
require("dotenv").config();

// Buat pool koneksi (disarankan untuk skala aplikasi)
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

// Cek koneksi database saat server mulai
(async () => {
  try {
    const conn = await db.getConnection(); // ✅ ini hanya tersedia di versi promise
    console.log("MySQL Connected");
    conn.release(); // Jangan lupa release connection
  } catch (error) {
    console.error("Failed to connect to MySQL:", error);
  }
})();

module.exports = db;

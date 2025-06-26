require("dotenv").config(); // Pastikan ini baris paling atas untuk memuat variabel lingkungan
const express = require("express");
const cors = require("cors");
// --- PENTING: Impor koneksi database Anda di sini ---
const db = require("./db"); // Sesuaikan path jika models/db.js berada di lokasi lain

const subscriptionRoutes = require("./routes/subscriptionRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// 🔁 Pasang middleware global DULUAN
app.use(cors());
app.use(express.json()); // Penting untuk body parser

// 🔁 Baru pasang routes
app.use("/api/auth", authRoutes);
app.use("/api", subscriptionRoutes);

// Tes endpoint
app.get("/", (req, res) => {
  res.send("SEA Catering Backend Running!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
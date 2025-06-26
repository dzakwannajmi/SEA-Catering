require("dotenv").config(); // ⬅️ Muat environment variables
const express = require("express");
const cors = require("cors");
const db = require("./db");

const adminRoutes = require("./routes/adminRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Aktifkan CORS lebih awal
app.use(cors({
  origin: "http://localhost:5173", // ⬅️ Ganti sesuai URL frontend kamu
  credentials: true, // opsional kalau kamu pakai cookie
}));

// ✅ Middleware penting lainnya
app.use(express.json());

// ✅ Pasang semua route setelah middleware
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

// ✅ Endpoint test
app.get("/", (req, res) => {
  res.send("SEA Catering Backend Running!");
});

// ✅ Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

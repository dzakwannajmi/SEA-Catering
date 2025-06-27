const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController"); // ✅ Tambahkan ini

// Route untuk register
router.post("/register", registerUser);

// Route untuk login
router.post("/login", loginUser);

module.exports = router;

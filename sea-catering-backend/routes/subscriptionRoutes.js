const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");
const {
  pauseSubscription,
  cancelSubscription,
  getUserSubscriptions,
} = require("../controllers/subscriptionController");
const db = require("../db");

router.get("/user", verifyToken, getUserSubscriptions); // ✅ Tambahkan ini

// Route: Pause subscription by ID
router.put("/pause/:id", verifyToken, pauseSubscription);

// Route: Cancel subscription by ID
router.put("/cancel/:id", verifyToken, cancelSubscription);

// Route: Get subscriptions for current logged-in user
router.get("/user/subscriptions", verifyToken, async (req, res) => {
  const userId = req.user.id;
  try {
    const [rows] = await db.execute(
      "SELECT * FROM subscriptions WHERE user_id = ?",
      [userId]
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching subscriptions:", err);
    res.status(500).json({ error: "Failed to fetch subscriptions." });
  }
});

module.exports = router;

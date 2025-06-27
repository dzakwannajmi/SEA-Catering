const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const { getAdminData } = require("../controllers/adminController");

router.get("/admin-data", verifyToken, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied" });
  }

  res.json({
    message: "Welcome admin!",
    stats: {
      totalSubscribers: 1500,
      mrr: 2500000,
      reactivations: 120,
    },
  });
});

module.exports = router;

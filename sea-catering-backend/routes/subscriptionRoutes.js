const express = require("express");
const router = express.Router();
const { createSubscription } = require("../controllers/subscriptionController");

// POST /api/subscribe
router.post("/subscribe", createSubscription);

module.exports = router;

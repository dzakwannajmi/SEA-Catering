const db = require("../db");

// ✅ [1] GET all subscriptions for the logged-in user
exports.getUserSubscriptions = async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.execute(
      `SELECT s.id, s.status, s.total_price, s.meals, s.days AS delivery_days, p.name AS plan_name
       FROM subscriptions s
       JOIN plans p ON s.plan_id = p.id
       WHERE s.user_id = ?`,
      [userId]
    );

    res.json(rows);
  } catch (error) {
    console.error("getUserSubscriptions error:", error);
    res.status(500).json({ error: "Failed to fetch subscriptions" });
  }
};

// ✅ [2] PAUSE subscription
exports.pauseSubscription = async (req, res) => {
  const userId = req.user.id;
  const subscriptionId = req.params.id;
  const { fromDate, untilDate } = req.body;

  if (!fromDate || !untilDate) {
    return res
      .status(400)
      .json({ error: "fromDate and untilDate are required" });
  }

  try {
    const [rows] = await db.execute(
      `SELECT id FROM subscriptions WHERE id = ? AND user_id = ?`,
      [subscriptionId, userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    await db.execute(
      `UPDATE subscriptions
       SET status = 'paused',
           paused_from = ?,
           paused_until = ?
       WHERE id = ?`,
      [fromDate, untilDate, subscriptionId]
    );

    res.json({ message: "Subscription paused successfully" });
  } catch (error) {
    console.error("pauseSubscription error:", error);
    res.status(500).json({ error: "Failed to pause subscription" });
  }
};

// ✅ [3] CANCEL subscription
exports.cancelSubscription = async (req, res) => {
  const userId = req.user.id;
  const subscriptionId = req.params.id;

  try {
    const [rows] = await db.execute(
      `SELECT id FROM subscriptions WHERE id = ? AND user_id = ?`,
      [subscriptionId, userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    await db.execute(`UPDATE subscriptions SET status = ? WHERE id = ?`, [
      "cancelled",
      subscriptionId,
    ]);

    res.json({ message: "Subscription cancelled successfully" });
  } catch (err) {
    console.error("cancelSubscription error:", err);
    res.status(500).json({ error: "Failed to cancel subscription" });
  }
};

// ✅ [4] CREATE subscription
exports.createSubscription = async (req, res) => {
  const userId = req.user.id;
  const { name, phone, plan, meals, days, allergies, totalPrice } = req.body;

  console.log("Received body for subscription:", req.body);

  try {

    const parsedPrice = Number(totalPrice);
    if (
      !name ||
      !phone ||
      !plan ||
      !Array.isArray(meals) ||
      meals.length === 0 ||
      !Array.isArray(days) ||
      days.length === 0 ||
      isNaN(parsedPrice) ||
      parsedPrice <= 0
    ) {
      console.error(
        "Validation Error: Missing or invalid fields in request body."
      );
      return res.status(400).json({ error: "Missing or invalid fields." });
    }

    const [planRows] = await db.execute("SELECT id FROM plans WHERE name = ?", [
      plan,
    ]);

    if (planRows.length === 0) {
      return res.status(400).json({ error: "Invalid plan selected" });
    }

    const planId = planRows[0].id;

    const mealsString = Array.isArray(meals) ? meals.join(",") : String(meals);
    const daysString = Array.isArray(days) ? days.join(",") : String(days);
    const finalAllergies = allergies || "";

    // ✅ Debug log variabel (sudah diperbaiki dari typo)
    console.log("Parameters for INSERT into subscriptions table:");
    console.log("  userId:", userId, " (Type:", typeof userId, ")");
    console.log("  name:", name, " (Type:", typeof name, ")");
    console.log("  phone:", phone, " (Type:", typeof phone, ")");
    console.log("  planId:", planId, " (Type:", typeof planId, ")");
    console.log(
      "  mealsString:",
      mealsString,
      " (Type:",
      typeof mealsString,
      ")"
    );
    console.log("  daysString:", daysString, " (Type:", typeof daysString, ")");
    console.log(
      "  finalAllergies:",
      finalAllergies,
      " (Type:",
      typeof finalAllergies,
      ")"
    );
    console.log("  totalPrice:", totalPrice, " (Type:", typeof totalPrice, ")");
    console.log("  status: active (Type: string)");

    await db.execute(
      `INSERT INTO subscriptions 
     (user_id, name, phone, plan_id, meals, days, allergies, total_price, status)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        name,
        phone,
        planId,
        mealsString,
        daysString,
        finalAllergies,
        parsedPrice,
        "active",
      ]
    );

    res.json({ message: "Subscription created successfully" });
  } catch (error) {
    console.error("createSubscription error:", error);
    res.status(500).json({ error: "Failed to create subscription" });
  }
};

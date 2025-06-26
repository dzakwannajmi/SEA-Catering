const db = require("../db");

exports.getUserSubscriptions = async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.execute(
      `SELECT s.id, s.status, s.total_price, s.meal_types, s.delivery_days, p.name AS plan_name
       FROM subscriptions s
       JOIN plans p ON s.plan_id = p.id
       WHERE s.user_id = ?`,
      [userId]
    );

    res.json({ subscriptions: rows });
  } catch (error) {
    console.error("getUserSubscriptions error:", error);
    res.status(500).json({ error: "Failed to fetch subscriptions" });
  }
};

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

    await db.execute(
      `UPDATE subscriptions SET status = ? WHERE id = ?`,
      ["cancelled", subscriptionId]
    );

    res.json({ message: "Subscription cancelled successfully" });
  } catch (err) {
    console.error("cancelSubscription error:", err);
    res.status(500).json({ error: "Failed to cancel subscription" });
  }
};

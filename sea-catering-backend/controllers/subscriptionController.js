const Subscription = require("../models/subscriptionModel");

exports.createSubscription = (req, res) => {
  const data = req.body;

  if (
    !data.name ||
    !data.phone ||
    !data.plan ||
    !data.meals?.length ||
    !data.days?.length
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  Subscription.save(data, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res
      .status(200)
      .json({ message: "Subscription saved", id: result.insertId });
  });
};

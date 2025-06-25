const db = require("../db");

exports.saveSubscription = (data, callback) => {
  const query = `INSERT INTO subscriptions 
    (name, phone, plan, meals, days, allergies, total_price) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    data.name,
    data.phone,
    data.plan,
    data.meals.join(","),
    data.days.join(","),
    data.allergies || "",
    data.total,
  ];

  db.query(query, values, callback);
};

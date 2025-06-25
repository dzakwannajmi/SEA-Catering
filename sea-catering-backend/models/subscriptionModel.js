const db = require("../db");

exports.save = (data, callback) => {
  const query = `
    INSERT INTO subscriptions (name, phone, plan, meals, days, allergies, total_price)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.name,
    data.phone,
    data.plan,
    JSON.stringify(data.meals),
    JSON.stringify(data.days),
    data.allergies || "",
    data.totalPrice,
  ];

  db.query(query, values, callback);
};

// src/pages/AdminDashboard.jsx
import React from "react";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome admin! Here's the business summary:</p>

      {/* Placeholder sementara */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-100 rounded">📅 Date Range Filter</div>
        <div className="p-4 bg-green-100 rounded">📈 New Subscriptions</div>
        <div className="p-4 bg-yellow-100 rounded">💰 Monthly Revenue</div>
        <div className="p-4 bg-purple-100 rounded">🔁 Reactivations</div>
        <div className="p-4 bg-pink-100 rounded">📊 Total Growth</div>
      </div>
    </div>
  );
}

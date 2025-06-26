import { useEffect, useState } from "react";
import axios from "axios";

export default function UserDashboard() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [pauseInputs, setPauseInputs] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/subscriptions/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubscriptions(res.data);
      } catch (err) {
        console.error("Error fetching subscriptions:", err);
      }
    };

    fetchSubscriptions();
  }, []);

  const handlePauseChange = (id, field, value) => {
    setPauseInputs((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handlePause = async (id) => {
    const { fromDate, untilDate } = pauseInputs[id] || {};
    if (!fromDate || !untilDate) {
      return alert("Please select pause dates.");
    }

    try {
      await axios.put(
        `http://localhost:3001/api/subscriptions/pause/${id}`,
        { fromDate, untilDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Subscription paused.");
      window.location.reload();
    } catch (err) {
      console.error("Pause error:", err);
      alert("Failed to pause.");
    }
  };

  const handleCancel = async (id) => {
    if (!confirm("Are you sure you want to cancel this subscription?")) return;

    try {
      await axios.put(
        `http://localhost:3001/api/subscriptions/cancel/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Subscription cancelled.");
      window.location.reload();
    } catch (err) {
      console.error("Cancel error:", err);
      alert("Failed to cancel.");
    }
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-[oklch(76.8%_0.233_130.85)]">
        Your Subscriptions
      </h2>

      {subscriptions.length === 0 ? (
        <p className="text-gray-600">You have no active subscriptions.</p>
      ) : (
        <div className="space-y-6">
          {subscriptions.map((sub) => (
            <div
              key={sub.id}
              className="p-6 border rounded-xl shadow bg-[oklch(76.8%_0.233_130.85)] text-white"
            >
              <p><strong>Plan:</strong> {sub.plan_name}</p>
              <p><strong>Meals:</strong> {sub.meal_types}</p>
              <p><strong>Delivery Days:</strong> {sub.delivery_days}</p>
              <p><strong>Total Price:</strong> Rp {sub.total_price}</p>
              <p><strong>Status:</strong> {sub.status}</p>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
                <input
                  type="date"
                  value={pauseInputs[sub.id]?.fromDate || ""}
                  onChange={(e) => handlePauseChange(sub.id, "fromDate", e.target.value)}
                  className="text-black px-2 py-1 rounded border"
                />
                <input
                  type="date"
                  value={pauseInputs[sub.id]?.untilDate || ""}
                  onChange={(e) => handlePauseChange(sub.id, "untilDate", e.target.value)}
                  className="text-black px-2 py-1 rounded border"
                />
                <button
                  onClick={() => handlePause(sub.id)}
                  className="bg-white text-[oklch(76.8%_0.233_130.85)] hover:bg-gray-100 px-4 py-2 rounded"
                >
                  Pause
                </button>
                <button
                  onClick={() => handleCancel(sub.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

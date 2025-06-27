import React, { useState } from "react";
import Swal from "sweetalert2";

const mealPlans = [
  { name: "Diet Plan", price: 30000 },
  { name: "Protein Plan", price: 40000 },
  { name: "Royal Plan", price: 60000 },
];

const mealTypes = ["Breakfast", "Lunch", "Dinner"];
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Subscription() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "",
    meals: [],
    days: [],
    allergies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (field, value) => {
    setForm((prev) => {
      const exists = prev[field].includes(value);
      return {
        ...prev,
        [field]: exists
          ? prev[field].filter((v) => v !== value)
          : [...prev[field], value],
      };
    });
  };

  const calculateTotal = () => {
    const selectedPlan = mealPlans.find((p) => p.name === form.plan);
    if (!selectedPlan) return 0;
    const mealsCount = form.meals.length;
    const daysCount = form.days.length;
    const price = selectedPlan.price * mealsCount * daysCount * 4.3;
    return price;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.plan ||
      form.meals.length === 0 ||
      form.days.length === 0
    ) {
      Swal.fire("Oops!", "Please fill all required fields.", "warning");
      return;
    }

    const total = calculateTotal();

    const result = await Swal.fire({
      title: "Confirm Subscription",
      html: `Name: <strong>${form.name}</strong><br>
            Phone: <strong>${form.phone}</strong><br>
            Plan: <strong>${form.plan}</strong><br>
            Meals: <strong>${form.meals.join(", ")}</strong><br>
            Days: <strong>${form.days.join(", ")}</strong><br>
            Allergies: <strong>${form.allergies || "None"}</strong><br>
            <br>Total Price: <strong>Rp${total.toLocaleString()}</strong>`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        console.log("TOKEN:", token);

        const res = await fetch(
          "http://localhost:3001/api/subscriptions/subscribe",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: form.name,
              phone: form.phone,
              plan: form.plan,
              meals: form.meals,
              days: form.days,
              allergies: form.allergies,
              totalPrice: total,
            }),
          }
        );

        if (!res.ok) throw new Error("Failed to save subscription.");

        await res.json();

        Swal.fire("Submitted!", "Your subscription has been saved.", "success");

        setForm({
          name: "",
          phone: "",
          plan: "",
          meals: [],
          days: [],
          allergies: "",
        });
      } catch (err) {
        console.error(err);
        Swal.fire(
          "Error",
          "There was a problem submitting your subscription.",
          "error"
        );
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-sea mb-8">
        Meal Plan Subscription
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Active Phone Number *"
          value={form.phone}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <select
          name="plan"
          value={form.plan}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Plan *</option>
          {mealPlans.map((plan) => (
            <option key={plan.name} value={plan.name}>
              {plan.name} - Rp{plan.price.toLocaleString()} per meal
            </option>
          ))}
        </select>

        <div>
          <p className="font-medium mb-1">Select Meal Types *</p>
          <div className="flex flex-wrap gap-2">
            {mealTypes.map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.meals.includes(type)}
                  onChange={() => handleCheckboxChange("meals", type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium mb-1">Select Delivery Days *</p>
          <div className="flex flex-wrap gap-2">
            {daysOfWeek.map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.days.includes(day)}
                  onChange={() => handleCheckboxChange("days", day)}
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        <textarea
          name="allergies"
          placeholder="Allergies or dietary restrictions (optional)"
          value={form.allergies}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        ></textarea>

        <button
          type="submit"
          className="bg-sea text-white px-6 py-2 rounded hover:bg-sea/80 transition"
        >
          Submit Subscription
        </button>
      </form>
    </div>
  );
}

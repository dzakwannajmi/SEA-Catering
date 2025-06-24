import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken with Quinoa",
    description:
      "High-protein grilled chicken breast served with quinoa and steamed broccoli.",
    price: 55000,
    image: "/images/grilled-chicken.jpg",
    category: "High Protein",
  },
  {
    id: 2,
    name: "Salmon & Avocado Salad",
    description:
      "Fresh salmon slices, avocado, and mixed greens with lemon vinaigrette.",
    price: 60000,
    image: "/images/salmon-salad.jpg",
    category: "Low Carb",
  },
  {
    id: 3,
    name: "Vegan Buddha Bowl",
    description:
      "Chickpeas, sweet potatoes, kale, and brown rice with tahini dressing.",
    price: 50000,
    image: "/images/buddha-bowl.jpg",
    category: "Vegan",
  },
  {
    id: 4,
    name: "Overnight Oats with Berries",
    description:
      "Healthy oats soaked overnight with almond milk, topped with fresh berries.",
    price: 40000,
    image: "/images/overnight-oats.jpg",
    category: "Breakfast",
  },
  {
    id: 5,
    name: "Tofu Stir Fry",
    description:
      "Stir-fried tofu with vegetables and low-sodium soy sauce over brown rice.",
    price: 48000,
    image: "/images/tofu-stir-fry.jpg",
    category: "Vegan",
  },
  {
    id: 6,
    name: "Beef Teriyaki Bowl",
    description:
      "Lean beef slices cooked in teriyaki sauce with steamed veggies and rice.",
    price: 59000,
    image: "/images/beef-teriyaki.jpg",
    category: "High Protein",
  },
  {
    id: 7,
    name: "Green Detox Smoothie",
    description:
      "Spinach, banana, green apple, and chia blended into a nutritious smoothie.",
    price: 35000,
    image: "/images/green-smoothie.jpg",
    category: "Drink",
  },
  {
    id: 8,
    name: "Shrimp Poke Bowl",
    description:
      "Fresh shrimp, edamame, mango, and rice topped with sesame ginger dressing.",
    price: 62000,
    image: "/images/shrimp-poke.jpg",
    category: "Low Carb",
  },
  {
    id: 9,
    name: "Turkey Wrap",
    description:
      "Whole grain wrap with lean turkey, avocado, lettuce, and hummus.",
    price: 52000,
    image: "/images/turkey-wrap.jpg",
    category: "Snack",
  },
  {
    id: 10,
    name: "Fruit & Yogurt Parfait",
    description:
      "Layers of Greek yogurt, granola, and mixed berries — a perfect breakfast.",
    price: 42000,
    image: "/images/yogurt-parfait.jpg",
    category: "Breakfast",
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-sea mb-10 text-center">
        Our Menu
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              selectedCategory === cat
                ? "bg-sea text-white border-sea"
                : "text-sea border-sea hover:bg-sea hover:text-white"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-sea mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{item.category}</p>
              <p className="text-gray-700 text-sm mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-sea">
                  Rp {item.price.toLocaleString()}
                </span>
                <button className="text-sm border border-sea px-3 py-1 rounded text-sea hover:bg-sea hover:text-white transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

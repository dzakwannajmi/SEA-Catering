import React, { useState } from "react";
import { ShoppingCart, Eye } from "react-feather";

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken with Quinoa",
    description:
      "High-protein grilled chicken breast served with quinoa and steamed broccoli.",
    price: 55000,
    image: "/images/grilled-chicken.jpg",
    category: "High Protein",
    nutrition: {
      calories: 420,
      protein: "35g",
      carbs: "30g",
      fat: "12g",
    },
  },
  {
    id: 2,
    name: "Salmon & Avocado Salad",
    description:
      "Fresh salmon slices, avocado, and mixed greens with lemon vinaigrette.",
    price: 60000,
    image: "/images/salmon-salad.jpg",
    category: "Low Carb",
    nutrition: {
      calories: 390,
      protein: "28g",
      carbs: "12g",
      fat: "24g",
    },
  },
  {
    id: 3,
    name: "Vegan Buddha Bowl",
    description:
      "Chickpeas, sweet potatoes, kale, and brown rice with tahini dressing.",
    price: 50000,
    image: "/images/buddha-bowl.jpg",
    category: "Vegan",
    nutrition: {
      calories: 450,
      protein: "20g",
      carbs: "55g",
      fat: "14g",
    },
  },
  {
    id: 4,
    name: "Overnight Oats with Berries",
    description:
      "Healthy oats soaked overnight with almond milk, topped with fresh berries.",
    price: 40000,
    image: "/images/overnight-oats.jpg",
    category: "Breakfast",
    nutrition: {
      calories: 350,
      protein: "10g",
      carbs: "45g",
      fat: "8g",
    },
  },
  {
    id: 5,
    name: "Tofu Stir Fry",
    description:
      "Stir-fried tofu with vegetables and low-sodium soy sauce over brown rice.",
    price: 48000,
    image: "/images/tofu-stir-fry.jpg",
    category: "Vegan",
    nutrition: {
      calories: 400,
      protein: "18g",
      carbs: "40g",
      fat: "15g",
    },
  },
  {
    id: 6,
    name: "Beef Teriyaki Bowl",
    description:
      "Lean beef slices cooked in teriyaki sauce with steamed veggies and rice.",
    price: 59000,
    image: "/images/beef-teriyaki.jpg",
    category: "High Protein",
    nutrition: {
      calories: 470,
      protein: "36g",
      carbs: "42g",
      fat: "16g",
    },
  },
  {
    id: 7,
    name: "Green Detox Smoothie",
    description:
      "Spinach, banana, green apple, and chia blended into a nutritious smoothie.",
    price: 35000,
    image: "/images/green-smoothie.jpg",
    category: "Drink",
    nutrition: {
      calories: 220,
      protein: "5g",
      carbs: "35g",
      fat: "5g",
    },
  },
  {
    id: 8,
    name: "Shrimp Poke Bowl",
    description:
      "Fresh shrimp, edamame, mango, and rice topped with sesame ginger dressing.",
    price: 62000,
    image: "/images/shrimp-poke.jpg",
    category: "Low Carb",
    nutrition: {
      calories: 410,
      protein: "30g",
      carbs: "28g",
      fat: "13g",
    },
  },
  {
    id: 9,
    name: "Turkey Wrap",
    description:
      "Whole grain wrap with lean turkey, avocado, lettuce, and hummus.",
    price: 52000,
    image: "/images/turkey-wrap.jpg",
    category: "Snack",
    nutrition: {
      calories: 380,
      protein: "25g",
      carbs: "30g",
      fat: "14g",
    },
  },
  {
    id: 10,
    name: "Fruit & Yogurt Parfait",
    description:
      "Layers of Greek yogurt, granola, and mixed berries — a perfect breakfast.",
    price: 42000,
    image: "/images/yogurt-parfait.jpg",
    category: "Breakfast",
    nutrition: {
      calories: 300,
      protein: "12g",
      carbs: "35g",
      fat: "10g",
    },
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalItem, setModalItem] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-sea mb-10 text-center">
        Our Menu
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border text-xs sm:text-sm transition ${
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <h3 className="text-lg sm:text-xl font-semibold text-sea mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{item.category}</p>
              <p className="text-gray-700 text-sm mb-4">{item.description}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                <span className="font-bold text-lg text-sea">
                  Rp {item.price.toLocaleString()}
                </span>
                <div className="flex gap-4 justify-center sm:justify-end">
                  <div className="relative group">
                    <button
                      onClick={() => alert("Added to cart!")}
                      className="text-sea hover:text-sea/70 transition"
                    >
                      <ShoppingCart size={18} />
                    </button>
                    <span className="absolute left-1/2 -translate-x-1/2 top-[115%] bg-white text-sea text-xs font-medium px-2 py-[2px] shadow group-hover:opacity-100 opacity-0 transition z-10 max-w-[100px] text-center">
                      Add to Cart
                    </span>
                  </div>
                  <div className="relative group">
                    <button
                      onClick={() => setModalItem(item)}
                      className="text-sea hover:text-sea/70 transition"
                    >
                      <Eye size={18} />
                    </button>
                    <span className="absolute left-1/2 -translate-x-1/2 top-[115%] bg-white text-sea text-xs font-medium px-2 py-[2px] shadow group-hover:opacity-100 opacity-0 transition z-10 max-w-[100px] text-center">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalItem && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center transition-opacity duration-300 px-4">
          <div
            className={`bg-white rounded-xl shadow-lg w-full max-w-md p-6 max-h-[90vh] overflow-y-auto relative ${
              isClosing ? "animate-fadeOut" : "animate-fadeInUp"
            }`}
          >
            <button
              onClick={() => {
                setIsClosing(true);
                setTimeout(() => {
                  setModalItem(null);
                  setIsClosing(false);
                }, 300);
              }}
              className="absolute top-2 right-3 text-gray-500 hover:text-sea text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-2 text-sea">
              {modalItem.name}
            </h2>
            <img
              src={modalItem.image}
              alt={modalItem.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-sm text-gray-700 mb-4">
              {modalItem.description}
            </p>
            <h3 className="text-md font-bold mb-1">Nutrition Info</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Calories: {modalItem.nutrition.calories} kcal</li>
              <li>Protein: {modalItem.nutrition.protein}</li>
              <li>Carbs: {modalItem.nutrition.carbs}</li>
              <li>Fat: {modalItem.nutrition.fat}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

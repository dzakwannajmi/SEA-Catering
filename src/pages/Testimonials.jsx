import React, { useState } from "react";
import { Star } from "react-feather";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Select from "react-select";

const MySwal = withReactContent(Swal);

const sampleTestimonials = [
  {
    name: "John Doe",
    message: "This is the best healthy food I've ever tried!",
    rating: 5,
    category: "High Protein",
    image: "https://source.unsplash.com/200x150/?healthy-food",
  },
  {
    name: "Jane Smith",
    message: "Delicious and guilt-free!",
    rating: 4,
    category: "Low Carb",
    image: "https://source.unsplash.com/200x150/?salad",
  },
];

const foodOptions = [
  { value: "High Protein", label: "High Protein" },
  { value: "Low Carb", label: "Low Carb" },
  { value: "Vegan", label: "Vegan" },
  { value: "Keto", label: "Keto" },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(sampleTestimonials);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    message: "",
    rating: 0,
    category: null,
    image: null,
  });
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterRating, setFilterRating] = useState("All");

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewTestimonial({ ...newTestimonial, image: URL.createObjectURL(files[0]) });
    } else {
      setNewTestimonial({ ...newTestimonial, [name]: value });
    }
  };

  const handleStarClick = (index) => {
    setNewTestimonial({ ...newTestimonial, rating: index + 1 });
  };

  const handleSelectChange = (selected) => {
    setNewTestimonial({ ...newTestimonial, category: selected });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.message || !newTestimonial.rating || !newTestimonial.category || !newTestimonial.image) return;

    const result = await MySwal.fire({
      title: "Submit Testimonial?",
      text: "You can review your testimonial before final submission.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Edit",
    });

    if (result.isConfirmed) {
      setTestimonials([
        ...testimonials,
        {
          ...newTestimonial,
          category: newTestimonial.category.value,
        },
      ]);
      setNewTestimonial({ name: "", message: "", rating: 0, category: null, image: null });
      MySwal.fire("Submitted!", "Your testimonial has been added.", "success");
    }
  };

  const filteredTestimonials = testimonials.filter((t) => {
    const categoryMatch = filterCategory === "All" || t.category === filterCategory;
    const ratingMatch = filterRating === "All" || t.rating === parseInt(filterRating);
    return categoryMatch && ratingMatch;
  });

  const categories = ["All", ...new Set(testimonials.map((t) => t.category))];
  const ratings = ["All", 5, 4, 3, 2, 1];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-sea mb-8">Customer Testimonials</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 mb-12 border">
        <h3 className="text-xl font-semibold mb-4 text-sea">Add Your Testimonial</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newTestimonial.name}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
          <Select
            name="category"
            options={foodOptions}
            value={newTestimonial.category}
            onChange={handleSelectChange}
            placeholder="Select Food Type"
            className="w-full"
          />
          <textarea
            name="message"
            placeholder="Your Review"
            value={newTestimonial.message}
            onChange={handleInputChange}
            rows="3"
            className="border p-2 rounded col-span-1 sm:col-span-2"
          ></textarea>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, idx) => (
              <Star
                key={idx}
                size={22}
                className={`cursor-pointer ${
                  newTestimonial.rating > idx ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleStarClick(idx)}
              />
            ))}
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-sea text-white px-6 py-2 rounded hover:bg-sea/80 transition"
        >
          Submit Testimonial
        </button>
      </form>

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1 rounded-full text-sm border transition ${
              filterCategory === cat ? "bg-sea text-white border-sea" : "border-sea text-sea hover:bg-sea hover:text-white"
            }`}
            onClick={() => setFilterCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {ratings.map((rate) => (
          <button
            key={rate}
            className={`px-4 py-1 rounded-full text-sm border transition ${
              filterRating === rate.toString() ? "bg-yellow-500 text-white border-yellow-500" : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
            }`}
            onClick={() => setFilterRating(rate.toString())}
          >
            {rate === "All" ? "All Ratings" : `${rate} Star${rate > 1 ? "s" : ""}`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredTestimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow border hover:shadow-md transition"
          >
            {t.image && (
              <img
                src={t.image}
                alt="food"
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}
            <h4 className="font-bold text-sea text-lg mb-1">{t.name}</h4>
            <p className="text-gray-600 text-sm mb-3 italic">{t.category}</p>
            <p className="text-gray-700 text-sm mb-4">{t.message}</p>
            <div className="flex items-center gap-1">
              {[...Array(t.rating)].map((_, idx) => (
                <Star key={idx} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/logo2.png";
import img2 from "../assets/logo2.png";
import img3 from "../assets/logo2.png";
import img4 from "../assets/logo2.png";
import img5 from "../assets/logo2.png";
import img6 from "../assets/logo2.png";

const images = [img1, img2, img3, img4, img5, img6 /* dan seterusnya */];

export default function AutoScrollShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (container) {
        scrollAmount += 1;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20); // Kecepatan scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sea/10 border-t border-b py-6 mt-12">
      <div className="flex items-center justify-between px-6 mb-4">
        <h2 className="text-lg font-bold text-sea">Our Healthy Food Gallery</h2>
        <Link
          to="/menu"
          className="text-sea border border-sea px-3 py-1 rounded hover:bg-sea hover:text-white transition"
        >
          See More Details →
        </Link>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6"
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`food-${idx}`}
            className="w-64 h-40 object-cover rounded shadow shrink-0 opacity-0 animate-fadeIn"
            style={{ animationDelay: `${idx * 0.2}s` }} // efek berurutan
          />
        ))}
      </div>
    </div>
  );
}

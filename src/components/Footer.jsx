import { Phone, Instagram, Facebook, Twitter } from "react-feather";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-sea text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Column 1: Company Info */}
        <div>
          <Link
            to="/"
            aria-label="Back to homepage"
            className="text-lg font-semibold mb-2 inline-block hover:underline"
          >
            SEA Catering
          </Link>
          <p className="leading-relaxed mt-1">
            Healthy, delicious, and nutritious meals — delivered right to your
            door.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/subscription" className="hover:underline">
                Subscription
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:underline">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <div className="mb-3 flex items-center gap-2">
            <Phone size={16} />
            <span>08123456789</span>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="hover:text-yellow-300 flex items-center gap-1"
            >
              <Twitter size={16} /> Twitter
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 flex items-center gap-1"
            >
              <Instagram size={16} /> Instagram
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 flex items-center gap-1"
            >
              <Facebook size={16} /> Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-white/70 mt-6">
        &copy; {new Date().getFullYear()} SEA Catering. All rights reserved.
      </div>
    </footer>
  );
}
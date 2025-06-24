import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-sea text-white px-6 py-4 flex items-center justify-between">
      {/* Logo kiri */}
      <img src="/src/assets/logo2.png" alt="SEA Logo" className="h-6" />

      {/* Semua tombol di tengah */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition font-medium ${
              isActive
                ? "font-bold text-white"
                : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-300 hover:to-pink-500"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `transition font-medium ${
              isActive
                ? "font-bold text-white"
                : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-200 hover:to-emerald-500"
            }`
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/subscription"
          className={({ isActive }) =>
            `transition font-medium ${
              isActive
                ? "font-bold text-white"
                : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-600"
            }`
          }
        >
          Subscription
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `transition font-medium ${
              isActive
                ? "font-bold text-white"
                : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-300 hover:to-cyan-500"
            }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/testimonials"
          className={({ isActive }) =>
            `transition font-medium ${
              isActive
                ? "font-bold text-white"
                : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-300 hover:to-red-500"
            }`
          }
        >
          Testimonials
        </NavLink>
      </div>

      {/* Spacer kanan untuk jaga jarak kanan */}
      <div className="w-6" />
    </nav>
  );
}

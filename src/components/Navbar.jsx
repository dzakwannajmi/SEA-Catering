import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu as MenuIcon,
  X,
  LogOut,
  UserPlus,
  LogIn,
} from "react-feather";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const navItems = [
    { name: "Home", path: "/", color: "from-yellow-300 to-pink-500" },
    { name: "Menu", path: "/menu", color: "from-green-200 to-emerald-500" },
    {
      name: "Subscription",
      path: "/subscription",
      color: "from-indigo-300 to-purple-600",
    },
    { name: "Contact", path: "/Contact", color: "from-sky-300 to-cyan-500" },
    {
      name: "Testimonials",
      path: "/testimonials",
      color: "from-orange-300 to-red-500",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-sea text-white px-6 py-4 flex items-center justify-between shadow-md">
      <img src="/src/assets/logo2.png" alt="SEA Logo" className="h-6" />

      {/* Desktop Nav */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `transition font-medium ${
                isActive
                  ? "font-bold text-white"
                  : `text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:${item.color}`
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3">
        <Search size={20} className="hover:opacity-80 cursor-pointer" />
        <ShoppingCart size={20} className="hover:opacity-80 cursor-pointer" />

        {/* Auth Buttons */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-sm bg-white text-sea px-3 py-1 rounded hover:bg-white/90"
          >
            <LogOut size={16} /> Logout
          </button>
        ) : (
          <>
            <NavLink
              to="/auth"
              className="flex items-center gap-1 text-sm bg-white text-sea px-3 py-1 rounded hover:bg-white/90"
            >
              <LogIn size={16} /> Login
            </NavLink>
          </>
        )}

        {/* Burger for mobile */}
        <button onClick={toggleMenu} className="md:hidden text-white ml-4">
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-sea p-6 shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <button onClick={toggleMenu} className="text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-lg transition font-medium ${
                  isActive
                    ? "font-bold text-white"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="mt-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full text-left text-white hover:text-yellow-300 flex items-center gap-2"
              >
                <LogOut size={16} /> Logout
              </button>
            ) : (
              <NavLink
                to="/auth"
                onClick={closeMenu}
                className="w-full text-left text-white hover:text-yellow-300 flex items-center gap-2"
              >
                <LogIn size={16} /> Login / Sign Up
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
}

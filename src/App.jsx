import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Testimonials from "./pages/Testimonials";
import Subscription from "./pages/Subscription";
import Auth from "./pages/Auth";
// Import komponen Subscription, Contact, Testimonials dihapus dari sini

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800 flex flex-col">
      <Navbar />

      {/* Konten utama agar fleksibel tingginya */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/auth" element={<Auth />} />
          {/* Route untuk Subscription, Contact, Testimonials dihapus dari sini */}
        </Routes>
      </div>

      {/* Footer selalu di bawah */}
      <Footer />
    </div>
  );
}

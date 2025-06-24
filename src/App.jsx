import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800 flex flex-col">
      <Navbar />

      {/* Konten utama agar fleksibel tingginya */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          {/* Nanti kamu tambahkan route lain di sini */}
        </Routes>
      </div>

      {/* Footer selalu di bawah */}
      <Footer />
    </div>
  );
}

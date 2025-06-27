import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Testimonials from "./pages/Testimonials";
import Subscription from "./pages/Subscription";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import UserDashboard from "./pages/UserDashboard";
import Unauthorized from "./pages/Unauthorized"; // ⛔️ Tambahkan jika belum ada
import AdminDashboard from "./pages/AdminDashboard";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contact" element={<Contact />} />

          {/* ⛔️ Halaman jika akses ditolak */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* 🧑 Untuk User */}
          <Route
            path="/dashboard/user"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userdashboard"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* 🧑‍💼 Untuk Admin */}
          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ perbaikan di sini

export default function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/auth" />;

  try {
    const decoded = jwtDecode(token);
    const userRole = decoded.role || "user";

    if (allowedRoles && !allowedRoles.includes(userRole)) {
      return <Navigate to="/unauthorized" />;
    }

    return children;
  } catch (err) {
    return <Navigate to="/auth" />;
  }
}

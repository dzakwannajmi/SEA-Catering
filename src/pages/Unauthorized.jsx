// src/pages/Unauthorized.jsx
export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-red-600">403 - Access Denied</h1>
        <p className="text-gray-600">You do not have permission to view this page.</p>
      </div>
    </div>
  );
}

import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaApple,
  FaFacebookF,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);
  const [signupError, setSignupError] = useState(""); // ✅ Untuk menampilkan error signup

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      });

      const { token } = res.data;
      localStorage.setItem("token", token); // Simpan token
      console.log("Login success:", res.data);

      navigate("/userdashboard"); // Arahkan ke dashboard
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setSignupError(""); // Reset error saat submit ulang
    try {
      const res = await axios.post("http://localhost:3001/api/auth/register", {
        fullName,
        email,
        password,
      });
      console.log(res.data);
      // Optional: Redirect atau otomatis login setelah signup
    } catch (err) {
      if (err.response?.status === 409) {
        setSignupError(
          "Email already registered. Please use a different email."
        );
      } else {
        setSignupError("Something went wrong. Please try again later.");
      }
      console.error("Signup error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-lime-400 to-green-500 px-4 py-8">
      <div className="relative w-full max-w-5xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl flex min-h-[700px]">
        <div
          className={`absolute top-0 left-0 h-full flex transition-transform duration-700 ease-in-out`}
          style={{
            width: "200%",
            transform: isLogin ? "translateX(0)" : "translateX(-50%)",
          }}
        >
          {/* Login Panel */}
          <div className="w-1/2 flex h-full">
            <div className="flex-1 p-10 flex flex-col justify-center bg-white">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Log in
              </h2>
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border rounded-lg pr-10"
                  />
                  <span
                    className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button className="w-full bg-lime-600 text-white py-3 rounded-lg">
                  Log In
                </button>
              </form>
              <div className="mt-6 text-center">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(false);
                    setSignupError("");
                  }}
                  className="text-lime-700 font-semibold hover:underline"
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center bg-lime-600 text-white px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
              <p className="text-base mb-6 leading-relaxed">
                Enter your personal details to register and start your journey.
              </p>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setSignupError("");
                }}
                className="bg-white text-lime-600 font-semibold px-6 py-2 rounded-full"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Sign Up Panel */}
          <div className="w-1/2 flex h-full">
            <div className="w-1/2 flex flex-col justify-center items-center bg-lime-600 text-white px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-base mb-6 leading-relaxed">
                Login with your credentials to continue your journey.
              </p>
              <button
                onClick={() => {
                  setIsLogin(true);
                  setSignupError("");
                }}
                className="bg-white text-lime-600 font-semibold px-6 py-2 rounded-full"
              >
                Log In
              </button>
            </div>
            <div className="flex-1 p-10 flex flex-col justify-center bg-white">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Create your SEA Catering account
              </h2>
              <form onSubmit={handleSignUpSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border rounded-lg pr-10"
                  />
                  <span
                    className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                {/* ✅ Error message muncul di sini */}
                {signupError && (
                  <p className="text-red-600 text-sm text-center">
                    {signupError}
                  </p>
                )}

                <button className="w-full bg-lime-600 text-white py-3 rounded-lg">
                  Continue
                </button>
              </form>
              <div className="mt-6 text-center">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(true);
                    setSignupError("");
                  }}
                  className="text-lime-700 font-semibold hover:underline"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

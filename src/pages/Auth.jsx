import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaApple,
  FaFacebookF,
} from "react-icons/fa"; // Pastikan react-icons terinstal

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // Jika ingin pakai nama lengkap di signup
  const [showPassword, setShowPassword] = useState(false);
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password, keepMeSignedIn });
    // TODO: Kirim data ke backend untuk login
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up submitted:", {
      fullName,
      email,
      password,
      keepMeSignedIn,
    });
    // TODO: Kirim data ke backend untuk registrasi
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-lime-400 to-green-500 px-4 py-8">
      {/* Main Container - Adjusted max-w and added specific width for better control */}
      {/* Lebar container utama sekarang harus cukup untuk MENAMPILKAN DUA panel (form + side) */}
      <div className="relative w-full max-w-5xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl flex min-h-[600px] lg:min-h-[700px]">
        {" "}
        {/* Increased max-w and min-h */}
        {/* --- Sliding Container --- */}
        {/* Kontainer ini berisi KEDUA LAYOUT (Login+SidePanel1) dan (SidePanel2+SignUp) */}
        {/* Lebarnya akan 200% dari parent (max-w-5xl) agar bisa menggeser dua layar penuh */}
        <div
          className={`absolute top-0 left-0 h-full flex transition-transform duration-700 ease-in-out`}
          style={{
            width: "200%", // 200% dari max-w-5xl
            transform: isLogin ? "translateX(0)" : "translateX(-50%)", // Geser 50% dari total width (yaitu satu layar penuh)
          }}
        >
          {/* --- LEFT "SCREEN" (Login Form + Right Side Panel for Login) --- */}
          {/* Ini adalah 50% dari 'sliding container' (yaitu 100% dari max-w-5xl) */}
          <div className="w-1/2 flex h-full">
            {/* Login Form (Left side of THIS screen) */}
            <div className="w-1/2 p-10 flex flex-col justify-center bg-white">
              {/* Pastikan teks "Log in" terlihat penuh */}
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 whitespace-nowrap">
                Log in
              </h2>
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div>
                  <label htmlFor="login-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="login-password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent pr-10 transition duration-200"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label
                    htmlFor="keep-signed-in"
                    className="flex items-center text-gray-700"
                  >
                    <input
                      id="keep-signed-in"
                      type="checkbox"
                      checked={keepMeSignedIn}
                      onChange={(e) => setKeepMeSignedIn(e.target.checked)}
                      className="h-4 w-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500 mr-2"
                    />
                    Keep me signed in
                  </label>
                  <a href="#" className="text-lime-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                >
                  Log In
                </button>
              </form>

              <div className="my-6 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow">
                  <FaGoogle className="mr-3 text-lg" /> Sign in with Google
                </button>
                <button className="w-full flex items-center justify-center bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition duration-300 shadow">
                  <FaApple className="mr-3 text-lg" /> Log in with Apple
                </button>
                <button className="w-full flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition duration-300 shadow">
                  <FaFacebookF className="mr-3 text-lg" /> Log in with Facebook
                </button>
              </div>

              <p className="text-center text-sm mt-8 text-gray-700">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-lime-600 font-semibold hover:underline focus:outline-none"
                >
                  Sign up
                </button>
              </p>
            </div>

            {/* Side Panel for Login (Right side of THIS screen) */}
            {/* Muncul ketika isLogin=true, mendorong form login ke kiri */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-lime-600 text-white px-6 py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
              <p className="text-base mb-6 leading-relaxed">
                Enter your personal details to register and start your healthy
                culinary journey with SEA Catering.
              </p>
              <button
                onClick={() => setIsLogin(false)}
                className="bg-white text-lime-600 font-semibold px-6 py-2 rounded-full hover:bg-white/90 transition duration-300 ease-in-out shadow-lg"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* --- RIGHT "SCREEN" (Left Side Panel for Sign Up + Sign Up Form) --- */}
          {/* Ini adalah 50% dari 'sliding container' (yaitu 100% dari max-w-5xl) */}
          <div className="w-1/2 flex h-full">
            {/* Side Panel for Sign Up (Left side of THIS screen) */}
            {/* Muncul ketika isLogin=false, mendorong form signup ke kanan */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-lime-600 text-white px-6 py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-base mb-6 leading-relaxed">
                Login with your credentials to continue your culinary journey
                with SEA Catering.
              </p>
              <button
                onClick={() => setIsLogin(true)}
                className="bg-white text-lime-600 font-semibold px-6 py-2 rounded-full hover:bg-white/90 transition duration-300 ease-in-out shadow-lg"
              >
                Log In
              </button>
            </div>

            {/* Register Form Panel (Right side of THIS screen) */}
            <div className="w-1/2 p-10 flex flex-col justify-center bg-white">
              {/* Pastikan teks "Create your SEA Catering account" terlihat penuh */}
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 whitespace-nowrap">
                Create your SEA Catering account
              </h2>
              <form onSubmit={handleSignUpSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="signup-email"
                    className="block text-gray-700 text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="signup-password"
                    className="block text-gray-700 text-sm font-medium mb-1"
                  >
                    Choose a password
                  </label>
                  <input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent pr-10 transition duration-200"
                    minLength="5"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    Password should be a minimum of 5 characters
                  </p>
                </div>

                <div className="flex items-center">
                  <label
                    htmlFor="signup-keep-signed-in"
                    className="flex items-center text-gray-700"
                  >
                    <input
                      id="signup-keep-signed-in"
                      type="checkbox"
                      checked={keepMeSignedIn}
                      onChange={(e) => setKeepMeSignedIn(e.target.checked)}
                      className="h-4 w-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500 mr-2"
                    />
                    Keep me signed in
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                >
                  Continue
                </button>
              </form>

              <p className="text-center text-sm mt-8 text-gray-700">
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-lime-600 font-semibold hover:underline focus:outline-none"
                >
                  Go back
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

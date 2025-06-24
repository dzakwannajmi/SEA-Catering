/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sea: "oklch(76.8% 0.233 130.85)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        fadeInDelay100: "fadeIn 0.8s ease-out 0.1s forwards",
        fadeInDelay200: "fadeIn 0.8s ease-out 0.2s forwards",
        fadeInDelay300: "fadeIn 0.8s ease-out 0.3s forwards",
        fadeInDelay400: "fadeIn 0.8s ease-out 0.4s forwards",
      },
    },
  },
  plugins: [],
};

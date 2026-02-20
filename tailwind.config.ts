import { keyframes } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sunset: "#FFC107",
        skyBlue: "#26D9F5",      // light accent
        first: "#D7A1B8",
        second: "#C1A4B0",
        darkText: "#191311"
      },
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["Inter", "sans-serif"],
        futura: ["Futura", "Trebuchet MS", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '.9' },
        }
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

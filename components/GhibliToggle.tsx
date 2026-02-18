"use client";

import { useGhibliTheme } from "@/contexts/GhibliThemeContext";
import { motion } from "framer-motion";

export default function GhibliToggle() {
  const { isGhibliMode, toggleGhibli } = useGhibliTheme();

  return (
    <motion.button
      onClick={toggleGhibli}
      className={`fixed bottom-6 left-6 z-40 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
        isGhibliMode
          ? "bg-gradient-to-r from-pink-200 to-purple-200 text-purple-900 shadow-lg shadow-pink-300/50 border"
          : "bg-gray-800 text-white border border-gray-600 hover:border-gray-400"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Toggle Studio Ghibli theme"
    >
      {isGhibliMode ? "✨ Ghibli Mode" : "🎨 Ghibli Mode"}
    </motion.button>
  );
}

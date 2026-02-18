// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { useGhibliTheme } from "@/contexts/GhibliThemeContext";
import { linearGradient } from "framer-motion/client";

export default function Navbar() {
  const [offsetY, setOffsetY] = useState(0);
  const { isGhibliMode } = useGhibliTheme();

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="absolute top-0 right-0 w-full h-full -z-30 pointer-events-none animate-fadeIn"
      style={{
        backgroundColor: isGhibliMode ? "rgba(163, 177, 138, 0.5)" : "rgba(0, 0, 0, 0.5)",
        backgroundImage: "url('/images/contour-map.png')",
        backgroundBlendMode: "overlay",

        backgroundSize: "contain",
        backgroundPosition: `center ${offsetY * -0.25}px`,
        transition: "background-image 0.5s ease",
      }}
    />
  );
}

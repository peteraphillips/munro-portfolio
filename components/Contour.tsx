// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute top-0 right-0 w-full h-full -z-30 opacity-30 pointer-events-none"
      style={{
        backgroundImage: "url('/images/contour-map.png')",
        backgroundSize: "stretch",
        backgroundPosition: `center ${offsetY * -.25}px`,
        transition: "background-image 0.5s ease",
      }}
    />
  );
}

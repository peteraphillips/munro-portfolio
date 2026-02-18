// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { useGhibliTheme } from "@/contexts/GhibliThemeContext";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const { isGhibliMode } = useGhibliTheme();

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center text-center"
    >
      {/* Mountains Parallax */}
      <div
        className="animate-fadeIn absolute top-0 right-0 w-full h-full -z-20 overflow-hidden"
        style={{
          backgroundImage: isGhibliMode
            ? "url('/images/mountain-bg(ghibli).png')"
            : "url('/images/mountain-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: `center bottom ${-offsetY * .25}px `,
          transition: "background-image 0.5s ease",
        }}
      />

      {/* Mist Overlay */}
      <div
        className={`absolute inset-0 -z-10 pointer-events-none ${
          isGhibliMode
            ? "bg-gradient-to-b from-yellow-100/20 via-yellow-50/10 to-amber-100/15"
            : "bg-gradient-to-b from-black/60 via-black/20 to-black/80"
        }`}
        style={{
          // transform: `translateY(${-offsetY * .25}px)`,
          transition: "background 0.5s ease",
        }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`relative z-10 px-6 font-futura ${
          isGhibliMode ? "text-barkBrown" : "text-white"
        }`}
      >
        <h1
          className={`text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg ${
            isGhibliMode
              ? "text-barkBrown font-futura"
              : "text-white font-heading"
          }`}
        >
          Hi, I’m Peter
        </h1>

        <p
          className={`text-xl md:text-2xl mb-8 drop-shadow-md font-semibold ${
            isGhibliMode
              ? "text-barkBrown font-futura"
              : "text-white font-heading"
          }`}
        >
          <ReactTyped
            strings={[
              "Climbing code one Munro at a time.",
              "Internal systems developer.",
              "Full-Stack Developer & Mountain Enthusiast.",
              "ServiceNOW experience",
              "Web Dev | Hiking",
              "React | Next.js | TypeScript | TailwindCSS",
              "Exploring the digital highlands.",
              "Python | Flask | SQL",
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </p>

        {/* <a
          href="#projects"
          className={`px-6 py-3 rounded-full transition-all duration-300 drop-shadow-lg inline-block font-futura font-semibold ${
            isGhibliMode
              ? "bg-amber-600 hover:bg-amber-700 text-white"
              : "bg-pineGreen hover:bg-mossGreen text-white"
          }`}
        >
          Explore The Peaks
        </a> */}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-2xl text-white`}
      >
        ↓
      </motion.div>
    </section>
  );
}

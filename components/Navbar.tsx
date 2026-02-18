// components/Navbar.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 text-xl">
      <div className="max-w-6xl mx-auto flex items-center p-4">
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-leafGreen">
              ᨒ
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-leafGreen">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-leafGreen">
              Skills
            </a>
          </li>
          <li>
            <a href="#munros" className="hover:text-leafGreen">
              Munros
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-leafGreen">
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-3xl cursor-pointer">☰</span>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center bg-black/80 space-y-4 p-4 md:hidden"
        >
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#munros" onClick={() => setIsOpen(false)}>
              Munros
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}

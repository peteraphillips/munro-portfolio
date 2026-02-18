// components/About.tsx
"use client";

import { motion } from "framer-motion";
import { useGhibliTheme } from "@/contexts/GhibliThemeContext";

export default function About() {

  const { isGhibliMode } = useGhibliTheme();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 bg-emerald"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center md:text-left"
      >
        <p className="mb-4 text-xl md:text-3xl">
          I’m a full-stack developer and Munro bagger. I craft digital
          experiences as carefully as I climb Scotland’s Munros.
        </p>
        <p className="text-xl md:text-3xl">
          I specialize in React, Next.js, TypeScript, and TailwindCSS. When I’m
          not coding, you’ll find me exploring the Scottish highlands, seeking
          my next summit.
        </p>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card */}
          <motion.div
            whileHover={{ y: -3, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
            className="group relative bg-gradient-to-br from-pineGreen/10 to-mossGreen/10 backdrop-blur-sm rounded-lg overflow-hidden border border-pineGreen/20 hover:border-pineGreen/40 transition-all duration-300"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pineGreen/5 via-transparent to-mossGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative p-6 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-heading text-leafGreen mb-2">
                  Project Name
                </h4>

                {/* Animated Pulsing Line */}
                <motion.div
                  animate={{ scaleX: [0.9, 1.05, 0.9] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1 bg-gradient-to-r from-transparent via-mossGreen to-transparent mb-4 origin-center"
                  style={{ transformOrigin: "center" }}
                />

                <p className=" text-sm leading-relaxed mb-4">
                  A brief description of your project and the technologies used
                  to build it.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-pineGreen/20 text-pineGreen text-xs rounded-full font-semibold">
                  React
                </span>
                <span className="px-3 py-1 bg-mossGreen/20 text-leafGreen text-xs rounded-full font-semibold">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-mistyGreen/20 text-mistyGreen text-xs rounded-full font-semibold">
                  TypeScript
                </span>
              </div>

              {/* CTA Link */}
              <a
                href="#"
                className="inline-flex items-center text-leafGreen hover:text-pineGreen font-semibold transition-colors duration-200"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

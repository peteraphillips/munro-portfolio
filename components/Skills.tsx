// components/Skills.tsx
"use client";

import { useGhibliTheme } from "@/contexts/GhibliThemeContext";
import { motion } from "framer-motion";

const skills = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "TailwindCSS" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Flask" },
  { name: "SQL" },
  { name: "ServiceNOW" },
  { name: "Git" },
];

export default function Skills() {
  const { isGhibliMode } = useGhibliTheme();

  return (
    <div
      id="skills"
      className="relative bg-mistyBlue flex flex-col items-center justify-center py-6 w-full"
    >
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-items-center">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{
              y: -3,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            }}
            className={`border flex flex-col items-center justify-center p-4 ${isGhibliMode ? "bg-sunset/50 border-sunset/60 hover:border-first/90" : "bg-skyBlue/50 border-skyBlue/60 hover:border-first/90"} transition-all duration-50 w-full text-center rounded-xs`}
          >
            <p className="mb-1 font-semibold text-md">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

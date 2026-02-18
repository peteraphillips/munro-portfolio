// components/Skills.tsx
'use client';

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "TailwindCSS", level: 90 },
  { name: "Node.js", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen bg-mistyBlue flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-heading mb-12">Skills</h2>
      <div className="w-full max-w-4xl space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <p className="mb-1 font-semibold">{skill.name}</p>
            <div className="w-full bg-white/20 rounded-full h-4">
              <motion.div
                className="bg-mossGreen h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

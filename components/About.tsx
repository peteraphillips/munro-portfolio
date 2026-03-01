// components/About.tsx
"use client";

import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import { useGhibliTheme } from "@/contexts/GhibliThemeContext";

const projects = [
  {
    name: "Board Game Round Scorer 🎲",
    description:
      "A friend of mine tasked me with making an app that he can use to score a board game we play on a weekly basis. I said 'no problem mate.' Turns out there's a lot more to building an app liek this than I thought and I'm constantly going back to him for feedback. Features, UX components and ease of use improvements have made this a fun project to work on.",
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    link: "https://board-game-scorer.vercel.app/",
  },
  {
    name: "Munro Tracker 🗺️",
    description:
      "A web app that allows users to explore and track their progress on Scotland's Munros. Built with React, Next.js, TypeScript, and TailwindCSS. The app features an interactive map, a comprehensive database of Munros, and a user-friendly interface for tracking climbs and sharing achievements. Walkhighlands.com is the obvious alternative but doesn't have a number of features that I'd like to see in a more modern, accessible app.",
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    link: "#",
  },
  {
    name: "Rugby Snap! 🏉",
    description:
      "So far just a proof of concept and very bare-bones prototype of a rugby card game idea I came up with. My first experience with game development and if it goes further I will have to do some app development to make it playable on mobile. Fun little project aligned with one of my other hobbies: rugby.",
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    link: "https://github.com/peteraphillips/rugby-snap",
  },
  {
    name: "Local event finder 🎟️",
    description:
      "A simple web app that allows users to find local events using the ticketmaster API. My first web app building a React project with TailwindCSS.",
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    link: "https://local-events-finder.vercel.app/",
  },
];

export default function About() {
  const { isGhibliMode } = useGhibliTheme();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-12 transition-all"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center md:text-left backdrop-blur-sm bg-gray-50/5 rounded-lg p-6 shadow-lg/40"
      >
        <p className="mb-4 text-xl md:text-3xl">
          I’m a{" "}
          <span
            className={`${isGhibliMode ? "text-sunset" : "text-skyBlue"} font-bold text-shadow-sm text-shadow-first/20`}
          >
            full-stack developer
          </span>{" "}
          and{" "}
          <span
            className={`${isGhibliMode ? "text-sunset" : "text-skyBlue"} font-bold text-shadow-sm text-shadow-first/20`}
          >
            Munro bagger
          </span>
          . I craft digital experiences as carefully as I climb Scotland’s
          Munros.
        </p>
        <p className="text-xl md:text-3xl">
          I specialize in React, Next.js, TypeScript, and TailwindCSS. When I’m
          not coding, you’ll find me exploring the Scottish highlands, seeking
          my next summit.
        </p>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-transform duration-200">
          {/* Project Card */}
          {projects.map((project) => (
            <motion.div
              key={project.name}
              whileHover={{
                y: -3,
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
              }}
              className="group relative backdrop-blur-sm rounded-xs overflow-hidden border border-second/10 hover:border-second/90 transition-colors duration-200"
            >
              <div
                className={`absolute inset-0 ${
                  isGhibliMode ? "bg-sunset/40" : "bg-skyBlue/40"
                } group-hover:opacity-100 transition-opacity duration-200`}
              />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold font-heading mb-2">
                    {project.name}
                  </h4>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`w-full h-1 ${isGhibliMode ? "bg-skyBlue" : "bg-sunset"} mb-2`}
                  />

                  <p className="text-md md:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 ${isGhibliMode ? "bg-skyBlue/80" : "bg-sunset/80"} text-xs font-semibold rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <a
                  href={project.link}
                  target="_blank"
                  className={`inline-flex items-center font-semibold w-fit`}
                >
                  <button
                    className={`text-left ${isGhibliMode ? "bg-skyBlue hover:bg-sunset/20" : "bg-sunset hover:bg-skyBlue/20"} border border-white/0 hover:border-white px-4 py-2 max-w-fit rounded-xs hover:bg-skyBlue/20 cursor-pointer`}
                  >
                    View Project →
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <Skills />
      </motion.div>
    </section>
  );
}

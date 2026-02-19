// components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-100 bg-mistyBlue flex flex-col items-center justify-center px-6 text-white"
    >
      <h2 className="text-4xl font-heading mb-12">Get in Touch</h2>
      <motion.div className="grid grid-cols-3 gap-8 md:gap-12">
        <a
          href="https://linkedin.com/in/peteraphillips"
          target="_blank"
          className="text-leafGreen hover:underline flex justify-center"
        >
          <Image
            src="/images/in-logo/InBug-White.png"
            alt="LinkedIn Logo"
            width={80}
            height={80}
          />
        </a>
        <a
          href="https://github.com/peteraphillips"
          target="_blank"
          className="text-leafGreen hover:underline flex justify-center"
        >
          <Image
            src="/images/github-logo.png"
            alt="GitHub Logo"
            width={80}
            height={80}
          />
        </a>
        <a
          href="mailto:pphillips59311@gmail.com"
          className="text-leafGreen hover:underline flex justify-center"
        >
          <Image
            src="/images/gmail.png"
            alt="Gmail Logo"
            width={80}
            height={80}
          />
        </a>
      </motion.div>
    </section>
  );
}

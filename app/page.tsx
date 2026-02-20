// app/page.tsx

"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RainingOverlay from "@/components/RainingOverlay";
import Contour from "@/components/Contour";
import Munros from "@/components/Munros";

export default function Page() {
  return (
    <main className="relative" >
      <Contour />
      <RainingOverlay density={20} speed={14} opacity={0.2} color="#ffffff" />
      <Navbar />
      <Hero />
      <About />
      <Munros />
      <Contact />
      <Footer />
    </main>
  );
}

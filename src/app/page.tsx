// src/app/page.tsx
"use client"; // 1. Add this to use hooks

import { useState } from "react"; // 2. Import useState
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import GlowingCursor from "@/components/GlowingCursor"; // 3. Import the cursor

export default function Home() {
  // 4. Create state to track if the cursor should be active
  const [isGlowActive, setIsGlowActive] = useState(false);

  return (
    <main>
      {/* 5. Render the cursor here, controlled by the state */}
      <GlowingCursor isActive={isGlowActive} />

      {/* 6. Pass the state setter function to Navbar and Hero */}
      <Navbar setIsGlowActive={setIsGlowActive} />
      <Hero setIsGlowActive={setIsGlowActive} />

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
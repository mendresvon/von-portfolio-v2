// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import GlowingCursor from "@/components/GlowingCursor";

export default function Home() {
  const [isGlowActive, setIsGlowActive] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `${t('hero.name')} | Portfolio`;
  }, [i18n.language, t]);

  return (
    <main>
      <GlowingCursor isActive={isGlowActive} />
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

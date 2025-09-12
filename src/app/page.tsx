// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import GlowingCursor from "@/components/GlowingCursor";

// This component ensures the document's lang attribute is updated
const LanguageUpdater = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return null;
};

export default function Home() {
  const [isGlowActive, setIsGlowActive] = useState(false);
  const { t, i18n: i18n_translation } = useTranslation();

  useEffect(() => {
    document.title = `${t('hero.name')} | Portfolio`;
  }, [i18n_translation.language, t]);

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageUpdater />
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
    </I18nextProvider>
  );
}

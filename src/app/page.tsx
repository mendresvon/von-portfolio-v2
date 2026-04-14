"use client";

import { useState, useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about_me";
import Experience from "@/components/experience";
import Skills from "@/components/education_skills";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Contact from "@/components/contact_me";
import GlowingCursor from "@/components/glowing_cursor";

// update lang attr
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
    document.title = `${t("hero.name")} | Portfolio`;
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
        <Experience />
        <Contact />
        <Footer />
      </main>
    </I18nextProvider>
  );
}

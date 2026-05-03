"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./language_switcher";

import { useGlobalState } from "./client_providers";

export default function Navbar() {
  const { setIsGlowActive } = useGlobalState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      onMouseEnter={() => setIsGlowActive(true)}
      onMouseLeave={() => setIsGlowActive(false)}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.03)]"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-lg text-white" style={{ fontFamily: 'var(--font-display)' }} suppressHydrationWarning={true}>
          <Link href="/#hero" className="hover:text-[var(--accent)] transition-colors duration-300">Von Mendres「馬盛中」</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/#about_me" className="nav-link text-[var(--text-secondary)] hover:text-white transition-colors duration-300 text-sm" suppressHydrationWarning={true}>
            {t("navbar.about")}
          </Link>
          <Link href="/#education_skills" className="nav-link text-[var(--text-secondary)] hover:text-white transition-colors duration-300 text-sm" suppressHydrationWarning={true}>
            {t("navbar.skills")}
          </Link>
          <Link href="/#projects" className="nav-link text-[var(--text-secondary)] hover:text-white transition-colors duration-300 text-sm" suppressHydrationWarning={true}>
            {t("navbar.projects")}
          </Link>
          <Link
            href="/#experience"
            className="nav-link text-[var(--text-secondary)] hover:text-white transition-colors duration-300 text-sm"
            suppressHydrationWarning={true}>
            {t("navbar.experience")}
          </Link>
          <Link href="/#contact_me" className="nav-link text-[var(--text-secondary)] hover:text-white transition-colors duration-300 text-sm" suppressHydrationWarning={true}>
            {t("navbar.contact")}
          </Link>
          <Link href="/blog" className="nav-link text-[var(--text-secondary)] hover:text-white transition-colors duration-300 text-sm" suppressHydrationWarning={true}>
            {t("navbar.blog")}
          </Link>
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl w-full absolute left-0 top-full border-t border-white/[0.06]">
          <div className="flex flex-col items-center space-y-6 py-8">
            <Link
              href="/#about_me"
              onClick={handleLinkClick}
              className="text-lg text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
              suppressHydrationWarning={true}>
              {t("navbar.about")}
            </Link>
            <Link
              href="/#experience"
              onClick={handleLinkClick}
              className="text-lg text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
              suppressHydrationWarning={true}>
              {t("navbar.experience")}
            </Link>
            <Link
              href="/#education_skills"
              onClick={handleLinkClick}
              className="text-lg text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
              suppressHydrationWarning={true}>
              {t("navbar.skills")}
            </Link>
            <Link
              href="/#projects"
              onClick={handleLinkClick}
              className="text-lg text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
              suppressHydrationWarning={true}>
              {t("navbar.projects")}
            </Link>
            <Link
              href="/#contact_me"
              onClick={handleLinkClick}
              className="text-lg text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
              suppressHydrationWarning={true}>
              {t("navbar.contact")}
            </Link>
            <Link
              href="/blog"
              onClick={handleLinkClick}
              className="text-lg text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
              suppressHydrationWarning={true}>
              {t("navbar.blog")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
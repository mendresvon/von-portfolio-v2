// src/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  setIsGlowActive: (isActive: boolean) => void;
}

export default function Navbar({ setIsGlowActive }: NavbarProps) {
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
        isScrolled || isMenuOpen ? "bg-gray-900/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-lg" suppressHydrationWarning={true}>
          <Link href="#hero">Von Mendres「馬盛中」</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="hover:text-purple-500" suppressHydrationWarning={true}>
            {t("navbar.about")}
          </Link>
          <Link href="#skills" className="hover:text-purple-500" suppressHydrationWarning={true}>
            {t("navbar.skills")}
          </Link>
          <Link href="#projects" className="hover:text-purple-500" suppressHydrationWarning={true}>
            {t("navbar.projects")}
          </Link>
          <Link href="#contact" className="hover:text-purple-500" suppressHydrationWarning={true}>
            {t("navbar.contact")}
          </Link>
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm w-full absolute left-0 top-full">
          <div className="flex flex-col items-center space-y-6 py-8">
            <Link
              href="#about"
              onClick={handleLinkClick}
              className="text-lg hover:text-purple-500"
              suppressHydrationWarning={true}>
              {t("navbar.about")}
            </Link>
            <Link
              href="#skills"
              onClick={handleLinkClick}
              className="text-lg hover:text-purple-500"
              suppressHydrationWarning={true}>
              {t("navbar.skills")}
            </Link>
            <Link
              href="#projects"
              onClick={handleLinkClick}
              className="text-lg hover:text-purple-500"
              suppressHydrationWarning={true}>
              {t("navbar.projects")}
            </Link>
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="text-lg hover:text-purple-500"
              suppressHydrationWarning={true}>
              {t("navbar.contact")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

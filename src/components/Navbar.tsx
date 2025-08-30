"use client"; // This is a necessary directive for using hooks

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Your Name/Logo */}
        <div className="font-bold text-lg">
          <Link href="/">Von Mendres</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-purple-500">
            About
          </Link>
          <Link href="#skills" className="hover:text-purple-500">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-purple-500">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-purple-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

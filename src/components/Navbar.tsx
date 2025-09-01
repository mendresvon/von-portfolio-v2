"use client"; // This is a necessary directive for using hooks

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-gray-900/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Your Name/Logo */}
        <div className="font-bold text-lg">
          <Link href="#hero">Von Mendres</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-purple-500">
            About Me
          </Link>
          <Link href="#skills" className="hover:text-purple-500">
            Education & Skills
          </Link>
          <Link href="#projects" className="hover:text-purple-500">
            Project Portfolio
          </Link>
          <Link href="#contact" className="hover:text-purple-500">
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm w-full absolute left-0 top-full">
          <div className="flex flex-col items-center space-y-6 py-8">
            <Link href="#about" onClick={handleLinkClick} className="text-lg hover:text-purple-500">
              About Me
            </Link>
            <Link
              href="#skills"
              onClick={handleLinkClick}
              className="text-lg hover:text-purple-500">
              Education & Skills
            </Link>
            <Link
              href="#projects"
              onClick={handleLinkClick}
              className="text-lg hover:text-purple-500">
              Project Portfolio
            </Link>
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="text-lg hover:text-purple-500">
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

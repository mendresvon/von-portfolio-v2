// src/components/Hero.tsx
"use client";

import { useState } from "react"; // 1. Import useState
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import GlowingCursor from "./GlowingCursor";

export default function Hero() {
  // 2. Create a state to track when the mouse is hovering over the section
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      // 3. Add mouse event handlers to the section
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 4. Pass the hover state to the cursor component */}
      <GlowingCursor isActive={isHovering} />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/galaxy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          Von Breznev A. Mendres
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          <TypeAnimation
            sequence={[
              "Computer Science Student", 3000,
              "Part-Time Teacher", 3000,
              "Future AI/ML Engineer", 3000,
              "Aspiring Software Engineer", 3000,
            ]}
            wrapper="span"
            speed={50}
            className="font-semibold text-purple-400"
            repeat={Infinity}
          />{" "}
          <br />
          with a Passion for Learning and Building Scalable Solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6 mt-8"
        >
          <a
            href="https://www.linkedin.com/in/vonmendres/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/mendresvon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
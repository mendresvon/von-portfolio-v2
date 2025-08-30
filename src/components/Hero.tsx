// Inside src/components/Hero.tsx
"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; // Import the new component

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-2xl px-4">
        {/* Your Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold dark:text-white">
          Von Breznev A. Mendres
        </motion.h1>

        {/* Your Animated Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          <TypeAnimation
            sequence={[
              "Computer Science Student",
              3000,
              "Future AI/ML Engineer",
              3000,
              "Technology Enthusiast",
              3000,
            ]}
            wrapper="span"
            speed={50}
            className="font-semibold text-purple-600" // Apply purple color here
            repeat={Infinity}
          />{" "}
          <br />
          with a Passion for Learning and Building Scalable Solutions
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/vonmendres/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/mendresvon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FaGithub size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

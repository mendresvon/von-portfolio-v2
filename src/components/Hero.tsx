"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

interface HeroProps {
  setIsGlowActive: (isActive: boolean) => void;
}

export default function Hero({ setIsGlowActive }: HeroProps) {
  const { t, i18n } = useTranslation();

  // slow down for zh-TW
  const typingSpeed = i18n.language === "zh-TW" ? 2 : 50;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      onMouseEnter={() => setIsGlowActive(true)}
      onMouseLeave={() => setIsGlowActive(false)}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/galaxy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 max-w-6xl px-4">
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl font-mono mb-4 text-gradient">
            Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white"
          suppressHydrationWarning={true}>
          {t("hero.name")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
          suppressHydrationWarning={true}>
          <TypeAnimation
            key={i18n.language}
            sequence={[
              t("hero.roles.0"),
              1500,
              t("hero.roles.1"),
              1500,
              t("hero.roles.2"),
              1500,
              t("hero.roles.3"),
              1500,
            ]}
            wrapper="span"
            speed={typingSpeed} // dynamic speed
            className="font-semibold text-gradient"
            repeat={Infinity}
          />{" "}
          <br />
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/vonmendres/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/mendresvon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors">
            <FaGithub size={32} />
          </a>
          <a
            href="mailto:mendresvon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors">
            <SiGmail size={32} />
          </a>
        </motion.div>

        {/* Resume Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-1">
            Download Resume
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* English Resume */}
            <a
              href="https://flowcv.com/resume/p9w1ulfwwo8r"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300
                         bg-gradient-to-r from-blue-600 to-teal-500
                         hover:from-blue-500 hover:to-teal-400
                         shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_32px_rgba(45,212,191,0.5)]
                         hover:-translate-y-0.5"
            >
              <FiDownload
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0"
              />
              Download English Resume
            </a>

            {/* Chinese Resume */}
            <a
              href="https://flowcv.com/resume/ssm0jmh53m3h"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                         text-teal-300 border border-teal-500/50
                         bg-white/5 backdrop-blur-sm
                         hover:bg-teal-500/10 hover:border-teal-400
                         shadow-[0_0_16px_rgba(45,212,191,0.1)] hover:shadow-[0_0_28px_rgba(45,212,191,0.35)]
                         hover:-translate-y-0.5"
            >
              <FiDownload
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              下載中文履歷
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
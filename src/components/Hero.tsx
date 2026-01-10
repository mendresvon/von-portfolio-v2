"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
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
      </div>
    </section>
  );
}
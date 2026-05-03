"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

import { useGlobalState } from "./client_providers";

export default function Hero() {
  const { setIsGlowActive } = useGlobalState();
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
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl mb-4 text-[var(--accent)]"
            style={{ fontFamily: 'var(--font-mono)' }}>
            Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter"
          style={{ fontFamily: 'var(--font-display)' }}
          suppressHydrationWarning={true}>
          {t("hero.name")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-[var(--text-secondary)]"
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
            speed={typingSpeed}
            className="font-semibold text-white"
            repeat={Infinity}
          />{" "}
          <br />
          <span className="text-[var(--text-muted)] text-base md:text-lg">{t("hero.tagline")}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.linkedin.com/in/vonmendres/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300 hover:scale-110">
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/mendresvon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300 hover:scale-110">
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:mendresvon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300 hover:scale-110">
            <SiGmail size={28} />
          </a>
        </motion.div>

        {/* Resume Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p
            className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1"
            style={{ fontFamily: 'var(--font-mono)' }}>
            {t("hero.resume.label")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* English Resume */}
            <a
              href="https://flowcv.com/resume/p9w1ulfwwo8r"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300
                         bg-[var(--accent)] text-black
                         hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.4)]
                         hover:scale-105 active:scale-[0.98]"
            >
              <FiDownload
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              {t("hero.resume.english")}
            </a>

            {/* Chinese Resume */}
            <a
              href="https://flowcv.com/resume/ssm0jmh53m3h"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300
                         border border-white/20 text-white bg-white/5
                         hover:border-[var(--accent)]/50 hover:text-[var(--accent)]
                         hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.15)]
                         hover:scale-105 active:scale-[0.98]"
            >
              <FiDownload
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              {t("hero.resume.chinese")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
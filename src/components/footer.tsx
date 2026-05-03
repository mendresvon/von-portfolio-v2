"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/[0.04] text-[var(--text-muted)] py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="https://github.com/mendresvon" target="_blank" className="hover:text-[var(--accent)] transition-colors duration-300">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/vonmendres/" target="_blank" className="hover:text-[var(--accent)] transition-colors duration-300">
            <FaLinkedin size={24} />
          </Link>
          <Link href="mailto:mendresvon@gmail.com" target="_blank" className="hover:text-[var(--accent)] transition-colors duration-300">
            <SiGmail size={24} />
          </Link>
        </div>
        <p className="text-sm" suppressHydrationWarning={true}>
          &copy; {currentYear} Von Breznev A. Mendres. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
// src/components/Footer.tsx
"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Link
            href="https://github.com/mendresvon"
            target="_blank"
            className="hover:text-white transition-colors">
            <FaGithub size={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vonmendres/"
            target="_blank"
            className="hover:text-blue-500 transition-colors">
            <FaLinkedin size={28} />
          </Link>
          <Link
            href="mailto:mendresvon@gmail.com"
            target="_blank"
            className="hover:text-red-500 transition-colors">
            <SiGmail size={28} />
          </Link>
        </div>
        <p suppressHydrationWarning={true}>
          &copy; {currentYear} Von Breznev A. Mendres. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
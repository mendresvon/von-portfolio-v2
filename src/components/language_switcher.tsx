"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  // prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isEn = !isMounted || i18n.language === "en" || i18n.language.startsWith("en-");
  const isZh = isMounted && i18n.language === "zh-TW";

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-300 ${
          isEn
            ? "bg-[var(--accent)] text-black font-bold"
            : "text-[var(--text-muted)] hover:bg-white/[0.06] hover:text-white"
        }`}>
        EN
      </button>
      <button
        onClick={() => changeLanguage("zh-TW")}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-300 ${
          isZh
            ? "bg-[var(--accent)] text-black font-bold"
            : "text-[var(--text-muted)] hover:bg-white/[0.06] hover:text-white"
        }`}>
        繁
      </button>
    </div>
  );
};

export default LanguageSwitcher;
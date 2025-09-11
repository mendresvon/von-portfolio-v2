"use client";

import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          i18n.language === "en" ? "bg-purple-600 text-white" : "hover:bg-gray-700"
        }`}>
        EN
      </button>
      <button
        onClick={() => changeLanguage("zh-TW")}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          i18n.language === "zh-TW" ? "bg-purple-600 text-white" : "hover:bg-gray-700"
        }`}>
        繁
      </button>
    </div>
  );
};

export default LanguageSwitcher;

"use client";

import { useState, useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlowingCursor from "@/components/glowing_cursor";

// update lang attr
const LanguageUpdater = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return null;
};

export default function BlogPage() {
  const [isGlowActive, setIsGlowActive] = useState(false);
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageUpdater />
      <main className="min-h-screen bg-grid flex flex-col">
        <GlowingCursor isActive={isGlowActive} />
        <Navbar setIsGlowActive={setIsGlowActive} />
        
        <div className="container mx-auto px-6 py-32 flex-1">
          {/* Back button */}
          <div className="max-w-3xl mx-auto mb-12">
            <Link 
              href="/" 
              className="group flex items-center text-teal-400 hover:text-teal-300 transition-all duration-300 gap-2 w-fit px-4 py-2 rounded-full bg-teal-500/5 border border-teal-500/10 hover:border-teal-500/30 font-medium"
            >
              <span className="transform transition-transform group-hover:-translate-x-1">
                {t("blog.back")}
              </span>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-6xl font-black mb-8 text-white tracking-tight drop-shadow-md bg-gradient-to-r from-white via-gray-200 to-teal-400 bg-clip-text text-transparent">
              {t("blog.title")}
            </h1>
            
            <p className="text-xl text-gray-400 mb-16 leading-relaxed">
              New posts coming soon! Check back later for articles on engineering, 
              AI, and development.
            </p>
            
            {/* Post list will go here */}
            <div className="space-y-8">
              <div className="p-12 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/5 text-center shadow-2xl">
                 <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3v5h5" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Under Construction</h3>
                 <p className="text-gray-500 italic max-w-sm mx-auto">No posts yet. I&apos;m currently fine-tuning the first set of articles. Stay tuned!</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </I18nextProvider>
  );
}

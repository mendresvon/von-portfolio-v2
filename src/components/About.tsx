"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="py-20 bg-grid"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12" suppressHydrationWarning={true}>
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Von Mendres"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg"
            />
          </div>

          <div>
            <p className="text-xl text-gray-300 leading-relaxed mb-4" suppressHydrationWarning={true}>
              {t("about.p1")}
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-4" suppressHydrationWarning={true}>
              {t("about.p2")}
            </p>
            <p className="text-xl text-gray-300 leading-relaxed" suppressHydrationWarning={true}>
              {t("about.p3")}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaRegCopy, FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useTranslation, Trans } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "mendresvon@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const formspreeURL = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    if (!formspreeURL) {
      console.error("Formspree URL is not defined. Please check your .env.local file.");
      return;
    }

    try {
      const response = await fetch(formspreeURL, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  if (submitted) {
    return (
      <section id="contact_me" className="py-20 text-center bg-grid">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-teal-500/10 border border-teal-500/30">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-bold mb-4" suppressHydrationWarning={true}>
              {t("contact.submitted.title")}
            </h2>
            <p className="text-lg text-gray-200" suppressHydrationWarning={true}>
              {t("contact.submitted.message")}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="contact_me"
      className="py-20 bg-grid"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" suppressHydrationWarning={true}>
            {t("contact.title")}
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed" suppressHydrationWarning={true}>
            <Trans
              i18nKey="contact.intro"
              components={{
                1: (
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    className="text-teal-400 font-semibold hover:underline"
                  />
                ),
              }}>
              I&apos;m open to new opportunities and collaborations. Feel free to send me a message
              using the form below or email me directly at{" "}
            </Trans>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white" suppressHydrationWarning={true}>
                {t("contact.quick_contact")}
              </h3>
              
              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <SiGmail size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1" suppressHydrationWarning={true}>{t("contact.socials.email")}</p>
                    <div className="flex items-center gap-3">
                      <a href={`mailto:${email}`} className="text-lg font-medium text-white hover:text-teal-400 transition-colors">
                        {email}
                      </a>
                      <button
                        onClick={copyToClipboard}
                        className="p-2 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-all relative"
                        title={t("contact.copy")}>
                        <AnimatePresence mode="wait">
                          {copied ? (
                            <motion.div
                              key="check"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}>
                              <FaCheck className="text-teal-400" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}>
                              <FaRegCopy />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {copied && (
                          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-teal-500 text-white text-xs rounded shadow-lg pointer-events-none" suppressHydrationWarning={true}>
                            {t("contact.copied")}
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1" suppressHydrationWarning={true}>{t("contact.location")}</p>
                    <p className="text-lg font-medium text-white" suppressHydrationWarning={true}>{t("contact.location_value")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links with Labels */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/mendresvon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 group">
                  <FaGithub size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                  <span className="font-medium text-white" suppressHydrationWarning={true}>{t("contact.socials.github")}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vonmendres/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 group">
                  <FaLinkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="font-medium text-white" suppressHydrationWarning={true}>{t("contact.socials.linkedin")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  required
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-black/20 border border-white/10 text-white placeholder-gray-500 hover:border-teal-500/50 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  required
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-black/20 border border-white/10 text-white placeholder-gray-500 hover:border-teal-500/50 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder={t("contact.form.message")}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-black/20 border border-white/10 text-white placeholder-gray-500 hover:border-teal-500/50 transition-all duration-300"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-teal-900/20 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] active:brightness-90"
                suppressHydrationWarning={true}>
                {t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
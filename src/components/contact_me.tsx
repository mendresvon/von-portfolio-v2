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
    } catch (err) { console.error("Failed to copy!", err); }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const formspreeURL = process.env.NEXT_PUBLIC_FORMSPREE_URL;
    if (!formspreeURL) { console.error("Formspree URL is not defined."); return; }
    try {
      const response = await fetch(formspreeURL, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (response.ok) setSubmitted(true);
      else console.error("Form submission error");
    } catch (error) { console.error("There was an error submitting the form:", error); }
  };

  if (submitted) {
    return (
      <section id="contact_me" className="py-24 text-center section-dark">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="card-base p-8">
            <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-black text-3xl" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }} suppressHydrationWarning={true}>{t("contact.submitted.title")}</h2>
            <p className="text-lg text-[var(--text-secondary)]" suppressHydrationWarning={true}>{t("contact.submitted.message")}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <motion.section id="contact_me" className="py-24 section-dark" initial={{ opacity: 0, y: 75 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tighter" style={{ fontFamily: 'var(--font-display)' }} suppressHydrationWarning={true}>{t("contact.title")}</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed" suppressHydrationWarning={true}>
            <Trans i18nKey="contact.intro" components={{ 1: <a href={`mailto:${email}`} target="_blank" className="text-[var(--accent)] font-semibold hover:underline" /> }}>
              I&apos;m open to new opportunities and collaborations. Feel free to send me a message using the form below or email me directly at{" "}
            </Trans>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }} suppressHydrationWarning={true}>{t("contact.quick_contact")}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center text-[var(--text-muted)] border border-white/[0.06] group-hover:bg-[var(--accent)] group-hover:text-black group-hover:border-[var(--accent)] transition-all duration-300">
                    <SiGmail size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[var(--text-muted)] mb-1" suppressHydrationWarning={true}>{t("contact.socials.email")}</p>
                    <div className="flex items-center gap-3">
                      <a href={`mailto:${email}`} className="text-lg font-medium text-white hover:text-[var(--accent)] transition-colors">{email}</a>
                      <button onClick={copyToClipboard} className="p-2 rounded-md hover:bg-white/10 text-[var(--text-muted)] hover:text-white transition-all relative" title={t("contact.copy")}>
                        <AnimatePresence mode="wait">
                          {copied ? (
                            <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><FaCheck className="text-[var(--accent)]" /></motion.div>
                          ) : (
                            <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><FaRegCopy /></motion.div>
                          )}
                        </AnimatePresence>
                        {copied && <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--accent)] text-black text-xs font-bold rounded shadow-lg pointer-events-none" suppressHydrationWarning={true}>{t("contact.copied")}</span>}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center text-[var(--text-muted)] border border-white/[0.06] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] mb-1" suppressHydrationWarning={true}>{t("contact.location")}</p>
                    <p className="text-lg font-medium text-white" suppressHydrationWarning={true}>{t("contact.location_value")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/mendresvon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group">
                  <FaGithub size={24} className="text-[var(--text-muted)] group-hover:text-white transition-colors" />
                  <span className="font-medium text-white text-sm" suppressHydrationWarning={true}>{t("contact.socials.github")}</span>
                </a>
                <a href="https://www.linkedin.com/in/vonmendres/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group">
                  <FaLinkedin size={24} className="text-[var(--text-muted)] group-hover:text-[#0A66C2] transition-colors" />
                  <span className="font-medium text-white text-sm" suppressHydrationWarning={true}>{t("contact.socials.linkedin")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="card-base p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" placeholder={t("contact.form.name")} required className="w-full px-4 py-3 rounded-lg bg-black border border-white/[0.08] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/30 hover:border-white/[0.15] transition-all duration-300" />
              <input type="email" name="email" placeholder={t("contact.form.email")} required className="w-full px-4 py-3 rounded-lg bg-black border border-white/[0.08] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/30 hover:border-white/[0.15] transition-all duration-300" />
              <textarea name="message" placeholder={t("contact.form.message")} rows={4} required className="w-full px-4 py-3 rounded-lg bg-black border border-white/[0.08] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/30 hover:border-white/[0.15] transition-all duration-300" />
              <button type="submit" className="w-full bg-[var(--accent)] hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.4)] text-black font-bold py-4 px-8 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] active:brightness-90" suppressHydrationWarning={true}>
                {t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { format, parseISO } from "date-fns";
import { zhTW, enUS } from "date-fns/locale";
import {
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaHandsHelping,
  FaRegCopy,
  FaCheck,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import { PostMetadata } from "@/lib/blog";

interface AboutProps {
  latestPosts: PostMetadata[];
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function About({ latestPosts }: AboutProps) {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const dateLocale = i18n.language === "zh-TW" ? zhTW : enUS;

  const email = t("about.email");
  const github = t("about.github");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const filteredPosts = latestPosts
    .filter((p) => p.lang === i18n.language)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 2);

  const positions = t("about.positions", { returnObjects: true }) as {
    role: string;
    company: string;
  }[];

  const involvements = t("about.involvements", { returnObjects: true }) as {
    role: string;
    org: string;
  }[];

  return (
    <motion.section
      id="about_me"
      className="py-20 bg-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-14 heading-gradient drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          suppressHydrationWarning={true}
        >
          {t("about.title")}
        </motion.h2>

        {/* ── Two-Column: Glassmorphism Card | Bio + Blog ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 max-w-6xl mx-auto items-start">

          {/* ═══════════════════════════════════════
              LEFT: Glassmorphism Profile Card
          ═══════════════════════════════════════ */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-7 sticky top-24"
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-5">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 blur-sm opacity-60" />
                <Image
                  src="/profile.jpg"
                  alt="Von Mendres"
                  width={140}
                  height={140}
                  className="rounded-full object-cover relative z-10 border-[3px] border-slate-900"
                />
              </div>
            </div>

            {/* Names */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-white" suppressHydrationWarning>
                {t("about.name_en")}
              </h3>
              <p className="text-base text-teal-400 font-medium" suppressHydrationWarning>
                {t("about.name_zh")}
              </p>
            </div>

            {/* Academic Info */}
            <div className="text-center mb-4 space-y-1">
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <FaGraduationCap className="text-teal-400 shrink-0" size={14} />
                <span className="text-sm" suppressHydrationWarning>
                  {t("about.department")}
                </span>
              </div>
              <p className="text-xs text-gray-500" suppressHydrationWarning>
                {t("about.year_level")}
              </p>
            </div>

            {/* Rank Badge */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                <FaTrophy className="text-amber-400" size={13} />
                <span className="text-xs font-bold text-amber-300" suppressHydrationWarning>
                  {t("about.rank_label")}: {t("about.rank")}
                </span>
              </div>
            </div>

            <div className="h-px bg-white/10 mb-4" />

            {/* Email */}
            <div className="flex items-center gap-3 mb-3 group">
              <FaEnvelope className="text-gray-500 group-hover:text-red-400 transition-colors shrink-0" size={14} />
              <a
                href={`mailto:${email}`}
                className="text-sm text-gray-300 hover:text-teal-400 transition-colors truncate flex-1"
              >
                {email}
              </a>
              <button
                onClick={copyToClipboard}
                className="p-1.5 rounded-md hover:bg-white/10 text-gray-500 hover:text-white transition-all relative cursor-pointer"
                title={t("about.copy")}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <FaCheck className="text-teal-400 text-xs" />
                    </motion.div>
                  ) : (
                    <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <FaRegCopy className="text-xs" />
                    </motion.div>
                  )}
                </AnimatePresence>
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-teal-500 text-white text-[10px] rounded shadow-lg pointer-events-none whitespace-nowrap" suppressHydrationWarning>
                    {t("about.copied")}
                  </span>
                )}
              </button>
            </div>

            {/* GitHub */}
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-5 group"
            >
              <FaGithub className="text-gray-500 group-hover:text-white transition-colors shrink-0" size={14} />
              <span className="text-sm text-gray-300 group-hover:text-teal-400 transition-colors">
                github.com/{github}
              </span>
            </a>

            <div className="h-px bg-white/10 mb-4" />

            {/* Current Positions */}
            <div className="mb-5">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-3 flex items-center gap-1.5" suppressHydrationWarning>
                <FaBriefcase className="text-teal-400/70" size={11} />
                {t("about.current_positions_label")}
              </p>
              <div className="space-y-2">
                {positions.map((pos, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">{pos.role}</p>
                      <p className="text-[11px] text-gray-400 leading-tight">{pos.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community & Service */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-3 flex items-center gap-1.5" suppressHydrationWarning>
                <FaHandsHelping className="text-teal-400/70" size={11} />
                {t("about.involvements_label")}
              </p>
              <div className="space-y-2">
                {involvements.map((inv, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-teal-500/[0.04] border border-teal-500/15">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-teal-300 leading-tight">{inv.role}</p>
                      <p className="text-[11px] text-gray-400 leading-tight">{inv.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════
              RIGHT: Bio + Blog Preview
          ═══════════════════════════════════════ */}
          <div className="space-y-6">
            {/* Bio */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="backdrop-blur-md bg-gradient-to-br from-slate-900/60 to-black/80 rounded-2xl border border-teal-500/25 shadow-[0_0_12px_rgba(45,212,191,0.12)] p-7 transition-all duration-300 hover:border-teal-400/50 hover:shadow-[0_0_28px_rgba(45,212,191,0.25)]"
            >
              <div className="space-y-4">
                <p className="text-base text-gray-300 leading-relaxed" suppressHydrationWarning>
                  {t("about.p1")}
                </p>
                <p className="text-base text-gray-300 leading-relaxed" suppressHydrationWarning>
                  {t("about.p2")}
                </p>
                <p className="text-base text-gray-300 leading-relaxed" suppressHydrationWarning>
                  {t("about.p3")}
                </p>
              </div>
            </motion.div>

            {/* Blog Preview */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="backdrop-blur-md bg-gradient-to-br from-slate-900/60 to-black/80 rounded-2xl border border-teal-500/25 shadow-[0_0_12px_rgba(45,212,191,0.12)] p-7 transition-all duration-300 hover:border-teal-400/50 hover:shadow-[0_0_28px_rgba(45,212,191,0.25)]"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2" suppressHydrationWarning>
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                  </svg>
                  {t("about.blog_preview_title")}
                </h3>
                <Link
                  href="/blog"
                  className="text-xs text-teal-400 hover:text-teal-300 transition-colors font-medium flex items-center gap-1"
                >
                  View All <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {post.tags?.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <time className="text-[11px] text-gray-500 font-mono block mb-1.5">
                        {format(parseISO(post.date), "MMM dd, yyyy", { locale: dateLocale })}
                      </time>
                      <h4 className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors leading-snug mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {post.subtitle || post.description}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-sm text-gray-500 italic" suppressHydrationWarning>
                    {t("about.blog_empty")}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

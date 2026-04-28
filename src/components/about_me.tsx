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
  FaCalendarAlt,
  FaRegCopy,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import { PostMetadata } from "@/lib/blog";

interface AboutProps {
  latestPosts: PostMetadata[];
}

const cellVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: "easeOut" as const,
    },
  }),
};

export default function About({ latestPosts }: AboutProps) {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const dateLocale = i18n.language === "zh-TW" ? zhTW : enUS;

  const email = t("about.email");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  // Filter posts by current language, sorted newest first, take 2
  const filteredPosts = latestPosts
    .filter((p) => p.lang === i18n.language)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 2);

  // Retrieve positions as array from i18n
  const positions = t("about.positions", { returnObjects: true }) as {
    role: string;
    company: string;
  }[];

  const upcoming = t("about.upcoming", { returnObjects: true }) as {
    role: string;
    org: string;
    period: string;
  };

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

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* ──────────── Cell 1: Profile Card (tall left) ──────────── */}
          <motion.div
            custom={0}
            variants={cellVariants}
            className="md:row-span-2 backdrop-blur-md bg-gradient-to-br from-slate-900/60 to-black/80 rounded-2xl border border-teal-500/25 shadow-[0_0_12px_rgba(45,212,191,0.15)] p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-teal-400/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]"
          >
            {/* Profile image with gradient ring */}
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-[3px] -m-[3px]" />
              <Image
                src="/profile.jpg"
                alt="Von Mendres"
                width={180}
                height={180}
                className="rounded-full object-cover relative z-10 border-2 border-slate-900"
              />
            </div>

            {/* Names */}
            <h3 className="text-2xl font-bold text-white mb-1" suppressHydrationWarning>
              {t("about.name_en")}
            </h3>
            <p className="text-lg text-teal-400 font-medium mb-4" suppressHydrationWarning>
              {t("about.name_zh")}
            </p>

            {/* Department + Year */}
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaGraduationCap className="text-teal-400 shrink-0" />
              <span className="text-sm" suppressHydrationWarning>
                {t("about.department")}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4" suppressHydrationWarning>
              {t("about.year_level")}
            </p>

            {/* Rank Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <FaTrophy className="text-amber-400" />
              <span className="text-sm font-bold text-amber-300" suppressHydrationWarning>
                {t("about.rank_label")}: {t("about.rank")}
              </span>
            </div>

            {/* Email */}
            <div className="w-full border-t border-white/10 pt-4">
              <div className="flex items-center justify-center gap-3 group">
                <FaEnvelope className="text-gray-400 group-hover:text-red-400 transition-colors shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-gray-300 hover:text-teal-400 transition-colors truncate"
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
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <FaCheck className="text-teal-400 text-xs" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
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
            </div>
          </motion.div>

          {/* ──────────── Cell 2: Quick Facts ──────────── */}
          <motion.div
            custom={1}
            variants={cellVariants}
            className="backdrop-blur-md bg-gradient-to-br from-slate-900/60 to-black/80 rounded-2xl border border-teal-500/25 shadow-[0_0_12px_rgba(45,212,191,0.15)] p-6 transition-all duration-300 hover:border-teal-400/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]"
          >
            <h3
              className="text-lg font-bold text-white mb-4 flex items-center gap-2"
              suppressHydrationWarning
            >
              <FaBriefcase className="text-teal-400" />
              {t("about.current_positions_label")}
            </h3>

            <div className="space-y-3 mb-5">
              {positions.map((pos, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{pos.role}</p>
                    <p className="text-xs text-gray-400">{pos.company}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming */}
            <div className="border-t border-white/10 pt-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2" suppressHydrationWarning>
                <FaCalendarAlt className="inline mr-1.5 text-teal-400/70" />
                {t("about.upcoming_label")}
              </p>
              <div className="p-3 rounded-xl bg-teal-500/5 border border-teal-500/20">
                <p className="text-sm font-semibold text-teal-300" suppressHydrationWarning>
                  {upcoming.role}
                </p>
                <p className="text-xs text-gray-400" suppressHydrationWarning>
                  {upcoming.org} — {upcoming.period}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ──────────── Cell 3: Bio ──────────── */}
          <motion.div
            custom={2}
            variants={cellVariants}
            className="backdrop-blur-md bg-gradient-to-br from-slate-900/60 to-black/80 rounded-2xl border border-teal-500/25 shadow-[0_0_12px_rgba(45,212,191,0.15)] p-6 transition-all duration-300 hover:border-teal-400/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]"
          >
            <div className="space-y-3">
              <p className="text-[15px] text-gray-300 leading-relaxed" suppressHydrationWarning>
                {t("about.p1")}
              </p>
              <p className="text-[15px] text-gray-300 leading-relaxed" suppressHydrationWarning>
                {t("about.p2")}
              </p>
              <p className="text-[15px] text-gray-300 leading-relaxed" suppressHydrationWarning>
                {t("about.p3")}
              </p>
            </div>
          </motion.div>

          {/* ──────────── Cell 4: Blog Preview (full width) ──────────── */}
          <motion.div
            custom={3}
            variants={cellVariants}
            className="md:col-span-2 backdrop-blur-md bg-gradient-to-br from-slate-900/60 to-black/80 rounded-2xl border border-teal-500/25 shadow-[0_0_12px_rgba(45,212,191,0.15)] p-6 transition-all duration-300 hover:border-teal-400/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]"
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
                        <span
                          key={tag}
                          className="text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <time className="text-[11px] text-gray-500 font-mono block mb-1.5">
                      {format(parseISO(post.date), "MMM dd, yyyy", {
                        locale: dateLocale,
                      })}
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
    </motion.section>
  );
}
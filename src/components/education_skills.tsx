"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import {
  FaPython, FaGitAlt, FaDocker, FaBrain, FaCode, FaTools,
  FaGraduationCap, FaBookOpen, FaCertificate, FaRocket, FaLayerGroup,
} from "react-icons/fa";
import {
  SiJavascript, SiPytorch, SiOpencv, SiKubernetes, SiMongodb,
  SiGithubactions, SiRedis, SiMqtt,
} from "react-icons/si";
import { TbBrandCpp, TbSql } from "react-icons/tb";

interface TimelineEntry {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  items?: { label: string; detail: string; url?: string }[];
}

const getTimelineData = (t: TFunction): TimelineEntry[] => [
  { icon: <FaGraduationCap />, title: t("skills.education.title"), subtitle: `B.S. ${t("skills.education.degree")}` },
  {
    icon: <FaBookOpen />, title: t("skills.coursework.title"),
    items: [
      { label: "Computer Science", detail: "CS50x", url: "https://certificates.cs50.io/ca725574-9d0f-48d9-bd78-19fa78241779.pdf?size=letter" },
      { label: "Understanding Technology", detail: "CS50T", url: "https://certificates.cs50.io/af766a85-6434-42d1-b271-e04b39ccb6a1.pdf?size=letter" },
      { label: "Programming with Python", detail: "CS50P", url: "https://certificates.cs50.io/e58bc053-4269-4012-8be6-41dd1d92af68.pdf?size=letter" },
    ],
  },
  {
    icon: <FaCertificate />, title: t("skills.certifications.title"),
    items: [
      { label: "IT Support Professional", detail: "Google", url: "https://www.coursera.org/account/accomplishments/professional-cert/ZFBSVP8GUL2D" },
      { label: "Software Engineering", detail: "IBM", url: "https://www.coursera.org/account/accomplishments/specialization/MZ3HK8DAZD3F" },
      { label: "Generative AI Fundamentals", detail: "Google Cloud", url: "https://certificates.simplicdn.net/share/8262965_86191031745763809351.pdf" },
    ],
  },
];

interface SkillItem { name: string; icon: ReactNode; }

const getAllSkills = (): SkillItem[] => [
  { name: "Python", icon: <FaPython /> }, { name: "JavaScript", icon: <SiJavascript /> },
  { name: "C/C++", icon: <TbBrandCpp /> }, { name: "SQL", icon: <TbSql /> },
  { name: "Docker", icon: <FaDocker /> }, { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> }, { name: "Google Cloud", icon: <FaRocket /> },
  { name: "Git", icon: <FaGitAlt /> }, { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redis", icon: <SiRedis /> }, { name: "MQTT", icon: <SiMqtt /> },
  { name: "FastAI", icon: <FaRocket /> }, { name: "PyTorch", icon: <SiPytorch /> },
  { name: "OpenCV", icon: <SiOpencv /> },
];

const categoryIcons: { label: string; icon: ReactNode }[] = [
  { label: "Languages", icon: <FaCode /> }, { label: "DevOps / Cloud", icon: <FaTools /> },
  { label: "Database / Tools", icon: <FaLayerGroup /> }, { label: "AI & ML", icon: <FaBrain /> },
];

const timelineCardVariants: Variants = {
  hidden: (direction: "left" | "right") => ({ opacity: 0, x: direction === "left" ? -60 : 60 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function TimelineNode({ entry, index, total }: { entry: TimelineEntry; index: number; total: number }) {
  const isLeft = index % 2 === 0;
  const cardClass = "card-base p-6 transition-all duration-300 hover:border-white/[0.12]";

  return (
    <div className="relative flex items-start md:items-center w-full mb-12 last:mb-0">
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full items-center">
        {isLeft ? (
          <motion.div custom="left" variants={timelineCardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className={cardClass}>
            <TimelineCardContent entry={entry} />
          </motion.div>
        ) : <div />}
        <div className="flex flex-col items-center z-10">
          <div className="w-12 h-12 rounded-full bg-black border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] text-xl timeline-dot">{entry.icon}</div>
        </div>
        {!isLeft ? (
          <motion.div custom="right" variants={timelineCardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className={cardClass}>
            <TimelineCardContent entry={entry} />
          </motion.div>
        ) : <div />}
      </div>

      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center shrink-0">
          <div className="w-10 h-10 rounded-full bg-black border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] text-lg timeline-dot">{entry.icon}</div>
          {index < total - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2" />}
        </div>
        <motion.div custom="right" variants={timelineCardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className={`flex-1 ${cardClass}`}>
          <TimelineCardContent entry={entry} />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineCardContent({ entry }: { entry: TimelineEntry }) {
  return (
    <>
      <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>{entry.title}</h3>
      {entry.subtitle && <p className="text-[var(--text-secondary)] text-sm mb-2">{entry.subtitle}</p>}
      {entry.items && (
        <ul className="space-y-2 mt-2">
          {entry.items.map((item) => (
            <li key={item.label}>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm hover:text-[var(--accent)] transition-colors duration-200 text-[var(--text-secondary)]">
                  <strong className="text-white">{item.label}</strong>
                  <span className="text-[var(--text-muted)]">—</span> {item.detail}
                </a>
              ) : (
                <span className="text-sm text-[var(--text-secondary)]">
                  <strong className="text-white">{item.label}</strong> — {item.detail}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[var(--text-secondary)] whitespace-nowrap transition-all duration-300 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 hover:scale-105 mx-2 shrink-0">
      <span className="text-lg">{skill.icon}</span>
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const timelineData = getTimelineData(t);
  const allSkills = getAllSkills();
  const mid = Math.ceil(allSkills.length / 2);
  const row1Skills = allSkills.slice(0, mid);
  const row2Skills = allSkills.slice(mid);

  return (
    <motion.section id="education_skills" className="py-28 relative overflow-hidden section-elevated" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-white tracking-tighter"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
          suppressHydrationWarning={true}
        >
          {t("skills.qualificationsTitle")}
        </motion.h2>

        <div className="relative max-w-4xl mx-auto mb-32">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          {timelineData.map((entry, i) => <TimelineNode key={i} entry={entry} index={i} total={timelineData.length} />)}
        </div>

        <motion.h3
          className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-white tracking-tighter"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          suppressHydrationWarning={true}
        >
          {t("skills.technicalSkillsTitle")}
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryIcons.map((cat) => (
            <div key={cat.label} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span className="text-[var(--accent)]">{cat.icon}</span>{cat.label}
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="mb-4 overflow-hidden">
            <div className="marquee-row">
              {[...row1Skills, ...row1Skills].map((skill, i) => <SkillPill key={`r1-${i}`} skill={skill} />)}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="marquee-row-reverse">
              {[...row2Skills, ...row2Skills].map((skill, i) => <SkillPill key={`r2-${i}`} skill={skill} />)}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

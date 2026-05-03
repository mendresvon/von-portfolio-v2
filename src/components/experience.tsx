"use client";

import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBuilding, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

interface Job { role: string; company: string; period: string; description: string[]; }
interface ExperienceData { title: string; jobs: Job[]; }

export default function Experience() {
  const { t } = useTranslation();
  const experienceData = t("experience", { returnObjects: true }) as ExperienceData;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section id="experience" className="py-24 section-elevated" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-14 text-white tracking-tighter"
          style={{ fontFamily: 'var(--font-display)' }}
          variants={headerVariants} suppressHydrationWarning={true}
        >
          {experienceData.title}
        </motion.h2>

        <div className="relative border-l border-white/[0.08] pl-10 max-w-4xl mx-auto">
          {experienceData.jobs.map((job, index) => (
            <motion.div key={index} className="mb-12" custom={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
              <div className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[#050505]" />

              <div className="card-base p-6 transition-all duration-300 hover:border-white/[0.12]">
                <div className="flex items-center mb-2">
                  <FaBriefcase className="text-[var(--accent)] mr-3" size={16} />
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{job.role}</h3>
                </div>

                <div className="flex items-center text-[var(--text-muted)] mb-4 text-sm">
                  <FaBuilding className="mr-2" />
                  <span className="font-semibold text-[var(--text-secondary)]">{job.company}</span>
                  <span className="mx-2 text-white/20">|</span>
                  <FaCalendarAlt className="mr-2" />
                  <span>{job.period}</span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] text-sm">
                  {job.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
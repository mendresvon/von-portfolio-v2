"use client";

import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBuilding, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

// Define the type for a single job experience
interface Job {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

// Define the type for the entire experience section data
interface ExperienceData {
  title: string;
  jobs: Job[];
}

export default function Experience() {
  const { t } = useTranslation();
  const experienceData = t("experience", { returnObjects: true }) as ExperienceData;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="experience"
      className="py-20 bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-white"
          variants={headerVariants}
          suppressHydrationWarning={true}
        >
          {experienceData.title}
        </motion.h2>

        <div className="relative border-l-2 border-purple-500/30 pl-10">
          {experienceData.jobs.map((job, index) => (
            <motion.div
              key={index}
              className="mb-12"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}>
              {/* Timeline Dot */}
              <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-purple-500 ring-8 ring-gray-900"></div>

              <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <FaBriefcase className="text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                </div>

                <div className="flex items-center text-gray-400 mb-4">
                  <FaBuilding className="mr-2" />
                  <span className="font-semibold">{job.company}</span>
                  <span className="mx-2">|</span>
                  <FaCalendarAlt className="mr-2" />
                  <span>{job.period}</span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-900/50 text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


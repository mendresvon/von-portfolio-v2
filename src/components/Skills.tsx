// src/components/Skills.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { IconContext } from "react-icons";
import { ReactNode } from "react";

// --- ICONS ---
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaBrain,
  FaCode,
  FaGlobe,
  FaTools,
  FaGraduationCap,
  FaBookOpen,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiGitlab,
  SiRaspberrypi,
  SiHuggingface,
  SiC,
} from "react-icons/si";
import { TbBrandCpp, TbMathFunction } from "react-icons/tb";
import { MdAppRegistration } from "react-icons/md";

// --- DATA STRUCTURES ---
const educationData = [
  {
    icon: <FaGraduationCap />,
    title: "Southern Taiwan University of Science and Technology",
  },
];

const courseworkData = [
  {
    icon: <FaBookOpen />,
    title: "Harvard University",
    items: [
      {
        courseName: "Computer Science Fundamentals",
        courseCode: "CS50x",
        url: "https://courses.edx.org/certificates/306e79cc5c8843e7894d757ea38da308",
      },
      {
        courseName: "Understanding Technology",
        courseCode: "CS50T",
        url: "https://courses.edx.org/certificates/18eb1dee4f3941af862cc850041b24a1",
      },
      {
        courseName: "Programming with Python",
        courseCode: "CS50P",
        url: "https://courses.edx.org/certificates/ab4eafa8037c40bbb1c721c0067362af",
      },
    ],
  },
];

const certificationsData = [
  {
    icon: <FaCertificate />,
    title: "Industry Certifications",
    items: [
      {
        name: "IT Support Professional",
        issuer: "Google",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/ZFBSVP8GUL2D",
      },
      {
        name: "Software Engineering",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/specialization/MZ3HK8DAZD3F",
      },
      {
        name: "Introduction to Generative AI",
        issuer: "Google Cloud",
        url: "https://certificates.simplicdn.net/share/8262965_86191031745763809351.pdf",
      },
    ],
  },
];

const skillsData = [
  {
    category: "Languages",
    categoryIcon: <FaCode />,
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <TbBrandCpp /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "AI & Machine Learning",
    categoryIcon: <FaBrain />,
    skills: [
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "FastAI", icon: <FaRocket /> },
      { name: "Matplotlib", icon: <TbMathFunction /> },
    ],
  },
  {
    category: "Web Development",
    categoryIcon: <FaGlobe />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    category: "Tools & Technologies",
    categoryIcon: <FaTools />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
      { name: "Gradio", icon: <MdAppRegistration /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
    ],
  },
];

// --- ANIMATION VARIANTS ---
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const skillItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: {
    scale: 1.1,
    originX: 0,
    color: "#a78bfa",
    transition: { type: "spring", stiffness: 300 },
  },
};

// --- TYPES ---
type InfoCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  index: number;
};

// Reusable card for text-based content
const InfoCard = ({ icon, title, children, index }: InfoCardProps) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    className="group relative bg-gradient-to-br from-indigo-950/50 to-black/90 p-6 rounded-xl shadow-2xl border border-white/10 h-full transition-all duration-300 hover:!scale-[1.03] hover:border-purple-400/50">
    <div className="card-glow" />
    <div className="flex flex-col items-center text-center">
      <div className="text-purple-400 text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="text-gray-300 text-lg">{children}</div>
    </div>
  </motion.div>
);

// --- MAIN COMPONENT ---
export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/galaxy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}>
          Qualifications
        </motion.h2>

        {/* --- Education, Coursework & Certs Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Education Card */}
          <InfoCard icon={educationData[0].icon} title={educationData[0].title} index={0}>
            <p>
              <strong>B.S.</strong> in Computer Science and Information Engineering
            </p>
          </InfoCard>

          {/* Coursework Card */}
          <InfoCard icon={courseworkData[0].icon} title={courseworkData[0].title} index={1}>
            <ul className="space-y-2">
              {courseworkData[0].items.map((item) => (
                <li key={item.courseName}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:text-purple-400 hover:scale-105 transition-all duration-300">
                    <strong>{item.courseName}</strong> - {item.courseCode}
                  </a>
                </li>
              ))}
            </ul>
          </InfoCard>

          {/* Certifications Card */}
          <InfoCard icon={certificationsData[0].icon} title={certificationsData[0].title} index={2}>
            <ul className="space-y-2">
              {certificationsData[0].items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:text-purple-400 hover:scale-105 transition-all duration-300">
                    <span>
                      <strong>{item.name}</strong> - {item.issuer}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>

        {/* --- Technical Skills Section --- */}
        <motion.h3
          className="text-4xl font-bold text-center mb-16 text-white drop-shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          Technical Skills
        </motion.h3>

        <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((categoryData, i) => (
            <motion.div
              key={categoryData.category}
              custom={i + 3} // Continue animation delay
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-indigo-950/50 to-black/90 p-6 rounded-xl shadow-2xl border border-white/10 h-full transition-all duration-300 hover:!scale-[1.03] hover:border-purple-400/50">
              <div className="card-glow" />
              <motion.h3
                className="text-2xl mb-6 text-white flex items-center justify-center gap-3 border-b border-purple-500/30 pb-3"
                transition={{ duration: 0.2 }}>
                {categoryData.categoryIcon}
                {categoryData.category}
              </motion.h3>

              <IconContext.Provider
                value={{
                  className:
                    "w-6 h-6 text-slate-400 group-hover/item:text-purple-400 transition-colors duration-200",
                }}>
                <ul className="space-y-4">
                  {categoryData.skills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      className="group/item flex items-center gap-4 text-gray-200"
                      variants={skillItemVariants}
                      whileHover="hover">
                      <span>{skill.icon}</span>
                      <span className="font-medium text-lg">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </IconContext.Provider>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

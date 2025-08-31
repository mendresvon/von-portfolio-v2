// src/components/Skills.tsx
"use client";

import { motion, Variants } from "framer-motion";
// Import IconContext to provide consistent styling for all icons
import { IconContext } from "react-icons";
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
  FaBrain, // New: For AI
  FaCode, // New: For Languages
  FaGlobe, // New: For Web Dev
  FaTools, // New: For Tools
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
import { TbBrandCpp } from "react-icons/tb";
import { VscSymbolMisc } from "react-icons/vsc"; // You can find better icons for these if you like

// Updated data structure to include a categoryIcon
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
      { name: "FastAI", icon: <VscSymbolMisc /> },
      { name: "Matplotlib", icon: <VscSymbolMisc /> },
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
      { name: "Gradio", icon: <VscSymbolMisc /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
    ],
  },
];

// Animation variants remain largely the same
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
    color: "#a78bfa", // Purple color on hover
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/galaxy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 z-0" /> {/* Added a semi-transparent overlay */}
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}>
          Education & Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((categoryData, i) => (
            <motion.div
              key={categoryData.category}
              custom={i}
              variants={cardVariants}
              // Added `group` for hover effects and a subtle transition
              className="group relative bg-gradient-to-br from-gray-900/80 to-indigo-950/80 p-6 rounded-xl shadow-2xl border border-white/10 h-full transition-all duration-300 hover:!scale-[1.03] hover:border-purple-400/50">
              {/* This div is for the animated glow effect */}
              <div className="card-glow" />

              <motion.h3
                className="text-2xl mb-6 text-white flex items-center justify-center gap-3 border-b border-purple-500/30 pb-3"
                transition={{ duration: 0.2 }}>
                {categoryData.categoryIcon}
                {categoryData.category}
              </motion.h3>

              {/* IconContext.Provider wraps the list to style all icons within */}
              <IconContext.Provider
                value={{
                  className:
                    "w-6 h-6 text-slate-400 group-hover/item:text-purple-400 transition-colors duration-200",
                }}>
                <ul className="space-y-4">
                  {categoryData.skills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      // Added `group/item` for individual item hover effects
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

// src/components/Skills.tsx
"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["PyTorch", "FastAI", "TensorFlow", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Django", "Flask", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "GitLab", "Docker", "Raspberry Pi", "Gradio", "Hugging Face"],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 relative overflow-hidden" // <-- Added relative and overflow-hidden
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/galaxy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((categoryData) => (
            <div
              key={categoryData.category}
              // Added transparency and a backdrop blur for readability
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {categoryData.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

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
      className="py-20"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((categoryData) => (
            <div
              key={categoryData.category}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">{categoryData.category}</h3>
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

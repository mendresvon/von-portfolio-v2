"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projectsData = [
    {
      title: t("projects.skyvision.title"),
      introduction: t("projects.skyvision.introduction"),
      description: t("projects.skyvision.description"),
      imageUrl: "/ai-classifier.png",
      techStack: ["Python", "PyTorch", "FastAI", "Gradio", "Hugging Face", "ResNet"],
      liveUrl: "https://huggingface.co/spaces/breznev/bird-plane-superman",
      repoUrl: "https://huggingface.co/spaces/breznev/bird-plane-superman/tree/main",
      videoUrl: "https://youtu.be/Gygq5JIcZ_o",
    },
    {
      title: t("projects.traffic_light.title"),
      introduction: t("projects.traffic_light.introduction"),
      description: t("projects.traffic_light.description"),
      imageUrl: "/traffic-light.jpeg",
      techStack: ["C++", "ESP 32", "MQTT", "Embedded Systems", "Mobile App Development"],
      repoUrl:
        "https://github.com/mendresvon/Project-Portfolio/tree/main/Voice%20Controlled%20Traffic%20Control",
      videoUrl: "https://youtu.be/nRs0o199rpQ",
    },
    {
      title: t("projects.portfolio.title"),
      introduction: t("projects.portfolio.introduction"),
      description: t("projects.portfolio.description"),
      imageUrl: "/portfolio-screenshot.png",
      techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://von-mendres-portfolio.vercel.app/",
      repoUrl: "https://github.com/mendresvon/von-portfolio-v2",
    },
    {
      title: t("projects.aura_notes.title"),
      introduction: t("projects.aura_notes.introduction"),
      description: t("projects.aura_notes.description"),
      imageUrl: "/aura-notes-ss.jpeg",
      techStack: [
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "JWT",
        "Tailwind CSS",
        "Framer Motion",
      ],
      liveUrl: "https://aura-notes-xi.vercel.app/login",
      repoUrl: "https://github.com/mendresvon/Aura-Notes",
    },
    {
      title: t("projects.filmfolio.title"),
      introduction: t("projects.filmfolio.introduction"),
      description: t("projects.filmfolio.description"),
      imageUrl: "/filmfolio-ss.jpeg",
      techStack: [
        "JavaScript",
        "PostgreSQL",
        "Express",
        "React",
        "Node.js",
        "Prisma",
        "JWT",
        "CSS Modules",
      ],
      liveUrl: "https://filmfolio-mu.vercel.app/",
      repoUrl: "https://github.com/mendresvon/FilmFolio",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-grid"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12" suppressHydrationWarning={true}>
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
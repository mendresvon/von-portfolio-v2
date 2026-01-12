"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projectsData = [
    {
      title: t("projects.filmfolio.title"),
      introduction: t("projects.filmfolio.introduction"),
      description: t("projects.filmfolio.description"),
      imageUrl: "/filmfolio-ss.jpeg",
      techStack: [
        "JavaScript",
        "MongoDB Atlas",
        "Redis",
        "Express",
        "React",
        "Node.js",
        "Docker",
        "GitHub Actions",
        "GCP Cloud Run",
        "JWT",
      ],
      liveUrl: "https://filmfolio-mu.vercel.app/",
      repoUrl: "https://github.com/mendresvon/FilmFolio",
      videoUrl: "https://youtu.be/T5hhrOQvQP8",
    },
    {
      title: t("projects.pet_classifier.title"),
      introduction: t("projects.pet_classifier.introduction"),
      description: t("projects.pet_classifier.description"),
      imageUrl: "/pet-classifier.jpg",
      techStack: ["Python", "PyTorch", "FastAI", "Gradio", "Data Augmentation", "Fine-Tuning"],
      liveUrl: "https://huggingface.co/spaces/breznev/pet-classifier",
      repoUrl: "https://github.com/mendresvon/pet-classifier",
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
      videoUrl: "https://youtu.be/9jRglvw2vF4",
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

// src/components/Projects.tsx
"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "SkyVision AI",
    introduction:
      "Built and deployed a deep learning model that classifies birds, airplanes, and Superman with 98% accuracy.",
    description:
      "This project fine-tunes a ResNet34 model using FastAI and PyTorch, then deploys it to Hugging Face Spaces with an interactive Gradio web app. Users can upload images and test the model in real time, showcasing practical machine learning deployment skills.",
    imageUrl: "/ai-classifier.png",
    techStack: ["Python", "PyTorch", "FastAI", "Gradio", "Hugging Face", "ResNet"],
    liveUrl: "https://huggingface.co/spaces/breznev/bird-plane-superman",
    repoUrl: "https://huggingface.co/spaces/breznev/bird-plane-superman/tree/main",
    videoUrl: "https://youtu.be/Gygq5JIcZ_o",
  },
  {
    title: "Personal Portfolio",
    introduction:
      "Designed and developed a modern, fully responsive portfolio website to showcase my skills, experience, and projects.",
    description:
      "Built from scratch with Next.js and TypeScript, this site emphasizes performance and accessibility. It features smooth animations with Framer Motion, a clean Tailwind CSS layout, and is deployed on Vercel, serving as my professional hub online.",
    imageUrl: "/portfolio-screenshot.png", //
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://von-mendres-portfolio.vercel.app/",
    repoUrl: "https://github.com/mendresvon/von-portfolio-v2",
  },
  {
    title: "Voice-Controlled Smart Traffic Light",
    introduction:
      "Created an IoT prototype traffic light system that responds to voice commands in real time.",
    description:
      "A mobile app captures voice commands and sends them via MQTT to a Raspberry Pi Pico W, which controls LEDs to simulate traffic signals. This project demonstrates my ability to combine voice recognition, wireless communication, and embedded systems for interactive hardware solutions.",
    imageUrl: "/traffic-light.jpeg",
    techStack: ["Raspberry Pi", "MicroPython", "C", "MQTT", "Mobile Development"],
    repoUrl:
      "https://github.com/mendresvon/Project-Portfolio/tree/main/Voice%20Controlled%20Traffic%20Control",
    videoUrl: "https://youtu.be/nRs0o199rpQ",
  },
  {
    title: "Aura Notes",
    introduction:
      "Developed a secure, full-stack note-taking application with authentication and smooth animations.",
    description:
      "This MERN app features JWT-based authentication, a stylish glassmorphism UI built with Tailwind CSS and React, and animated transitions powered by Framer Motion. Notes are stored in MongoDB with a Node.js/Express API for reliable data management.",
    imageUrl: "/aura-notes-ss.jpeg",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://aura-notes-xi.vercel.app/login",
    repoUrl: "https://github.com/mendresvon/Aura-Notes",
  },
  {
    title: "FilmFolio",
    introduction:
      "Built a secure, full-stack movie watchlist application with user authentication and a polished, animated interface",
    description:
      "FilmFolio uses the TMDB API for real-time movie search and lets users create custom watchlists. It features JWT authentication, a clean glassmorphism UI with CSS Modules, and Framer Motion animations for a polished experience. Data is stored in PostgreSQL and managed with Prisma and an Express API.",
    imageUrl: "/filmfolio-ss.jpeg",
    techStack: ["PostgreSQL", "Express", "React", "Node.js", "Prisma", "JWT", "CSS Modules"],
    liveUrl: "https://filmfolio-mu.vercel.app/",
    repoUrl: "https://github.com/mendresvon/FilmFolio",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Project Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

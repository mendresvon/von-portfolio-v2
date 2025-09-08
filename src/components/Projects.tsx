// src/components/Projects.tsx
"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "AI Image Classifier",
    introduction:
      "Trained a model and built an AI application that can tell the difference between 3 classes of objects with 98% accuracy.",
    description:
      "Image Classifier Web App is a deep learning project that can tell apart birds, airplanes, and even Superman with 98% accuracy. Built with a fine-tuned ResNet34 model and deployed on Hugging Face Spaces, it features an interactive web app where anyone can test the model in real time.",
    imageUrl: "/ai-classifier.png",
    techStack: ["Python", "PyTorch", "FastAI", "Gradio", "Hugging Face", "ResNet"],
    liveUrl: "https://huggingface.co/spaces/breznev/bird-plane-superman",
    repoUrl: "https://huggingface.co/spaces/breznev/bird-plane-superman/tree/main",
    videoUrl: "https://youtu.be/Gygq5JIcZ_o",
  },
  {
    title: "Voice-Controlled Traffic Light",
    introduction:
      "Created a mini traffic light system that changes colors just by listening to voice commands through a mobile app.",
    description:
      "Voice-Controlled Traffic Light is a prototype that lets you change traffic lights using voice commands. A mobile app captures your voice, sends it wirelessly, and a Raspberry Pi Pico W controls the LEDs to simulate real signals. The project shows how voice recognition and IoT can work together in an interactive way.",
    imageUrl: "/traffic-light.jpeg",
    techStack: ["Raspberry Pi", "MicroPython", "C", "MQTT", "Mobile Development"],
    repoUrl:
      "https://github.com/mendresvon/Project-Portfolio/tree/main/Voice%20Controlled%20Traffic%20Control",
    videoUrl: "https://youtu.be/nRs0o199rpQ",
  },
  {
    title: "Aura Notes",
    introduction: "A sleek and secure note-taking application with a log-in feature.",
    description:
      "Aura Notes is a full-stack MERN app for creating, editing, and organizing notes. It features JWT-secured authentication, a sleek glassmorphism UI with React + Tailwind, and smooth Framer Motion animations, backed by a Node.js/Express API and MongoDB for persistent storage.",
    imageUrl: "/aura-notes-ss.jpeg",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://aura-notes-xi.vercel.app/login",
    repoUrl: "https://github.com/mendresvon/aura-notes-frontend",
  },
  {
    title: "FilmFolio",
    introduction: "A watchlist tracker to keep track of movies you want to watch.",
    description:
      "FilmFolio is a web app that helps you discover, save, and organize movies into custom watchlists. It features real-time movie search powered by the TMDB API and a simple, user-friendly design for keeping track of what you want to watch next.",
    imageUrl: "/filmfolio-ss.jpeg",
    techStack: ["PostgreSQL", "Express", "React", "Node.js", "Prisma", "JWT", "CSS Modules"],
    liveUrl: "https://filmfolio-mu.vercel.app/",
    repoUrl: "https://github.com/mendresvon/filmfolio-frontend",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-black" // --- UPDATED THIS LINE ---
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      {/* --- VIDEO BACKGROUND REMOVED --- */}
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

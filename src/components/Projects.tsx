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
      "I developed and deployed a deep learning image classifier capable of distinguishing between birds, airplanes, and Superman with 98% accuracy. For this project, I fine-tuned a ResNet34 architecture model. It was optimized using PyTorch and FastAI, and integrated into a full-stack interactive web application using Gradio. To make the project accessible and user-friendly, I deployed it on Hugging Face Spaces, allowing anyone to test the model in real time.",
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
      "This project bridges software and hardware by building a voice-controlled traffic light prototype. I designed a mobile app to capture and process voice commands, which are transmitted wirelessly via MQTT. On the hardware side, a Raspberry Pi Pico W running C/MicroPython controls the LED lights to mimic real traffic signals. The system demonstrates how voice recognition and IoT can be integrated to create smart, interactive control systems.",
    imageUrl: "/traffic-light.jpeg",
    techStack: ["Raspberry Pi", "MicroPython", "C", "MQTT", "Mobile Development"],
    repoUrl:
      "https://github.com/mendresvon/Project-Portfolio/tree/main/Voice%20Controlled%20Traffic%20Control",
    videoUrl: "https://youtu.be/nRs0o199rpQ",
  },
  {
    title: "Aura Notes",
    introduction:
      "A sleek and secure note-taking application with a log-in feature.",
    description:
      "Aura Notes is a full-stack MERN application that allows users to perform CRUD operations on their notes. It features secure user authentication using JSON Web Tokens (JWT) and a responsive, glassmorphism-style UI built with React and Tailwind CSS. The backend is powered by Node.js and Express, with a MongoDB database for persistent storage. Animations are handled by Framer Motion to create an engaging user interface.",
    imageUrl: "/aura-notes-ss.jpeg",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://aura-notes-xi.vercel.app/login",
    repoUrl: "https://github.com/mendresvon/aura-notes-frontend",
  },
  {
    title: "FilmFolio",
    introduction:
      "A full-stack app allowing you to easily keep track of movies you want to watch.",
    description:
      "FilmFolio is a full stack PERN application where users can curate multiple movie watchlists. The application integrates with the TMDB API for real-time movie searches. The robust backend is built with Node.js and Express, utilizing a PostgreSQL database with the Prisma ORM for efficient data management. User authentication is handled securely with JWT, and the frontend is styled with CSS Modules for component-scoped styling.",
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
      className="py-28 relative overflow-hidden" // Restored correct styling
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Restored Video and Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Restored relative positioning for content */}
      <div className="container mx-auto px-6 relative z-10">
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
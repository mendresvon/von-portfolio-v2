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
    techStack: ["C", "Embedded Systems", "Raspberry Pi", "MQTT", "Mobile App Development"],
    repoUrl:
      "https://github.com/mendresvon/Project-Portfolio/tree/main/Voice%20Controlled%20Traffic%20Control",
    videoUrl: "https://youtu.be/nRs0o199rpQ",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-28 relative overflow-hidden" // 1. Remove bg-slate-950, add relative and overflow-hidden
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      {/* 2. Add Video and Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 z-0" /> {/* Overlay for readability */}
      {/* 3. Add relative and z-10 to content container */}
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

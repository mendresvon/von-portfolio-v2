// src/components/Projects.tsx
"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

// --- 1. Define animation variants here ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // This will apply a 0.3s delay between each child's animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start 50px down and invisible
  visible: { opacity: 1, y: 0 }, // Animate to original position and fully visible
};

const projectsData = [
  {
    title: "AI Image Classifier",
    introduction:
      "Built an AI application that can tell the difference between 3 classes of objects with 98% accuracy.",
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
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      // Remove animation props from here, we will control it from the container below
      className="py-20 bg-card-background/80 dark:bg-card-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        {/* --- 2. Apply variants to the grid container --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {projectsData.map((project) => (
            // --- 3. Wrap each card in a motion.div and apply card variants ---
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

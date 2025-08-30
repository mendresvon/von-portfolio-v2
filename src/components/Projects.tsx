// Inside src/components/Projects.tsx
"use client"; // Add this line

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion"; // Import motion from framer-motion

// Define the updated data for your projects
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
  // You can add more projects here in the future!
];

export default function Projects() {
  return (
    <motion.section // Change this to motion.section
      id="projects"
      className="py-20 bg-gray-50"
      // Add these animation props
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
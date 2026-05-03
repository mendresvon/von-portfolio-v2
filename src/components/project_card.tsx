"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    introduction: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    liveUrl?: string;
    repoUrl?: string;
    videoUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageLinkUrl = project.liveUrl ?? project.videoUrl;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full card-base overflow-hidden flex flex-col transition-all duration-200 ease-out hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.08)]"
        style={{ willChange: "transform" }}
      >
        {imageLinkUrl ? (
          <Link href={imageLinkUrl} target="_blank">
            <div className="relative w-full h-48 cursor-pointer group overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-48 overflow-hidden">
            <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'var(--font-display)' }}>{project.title}</h3>
          <p className="text-[var(--text-secondary)] mb-4 font-semibold italic text-sm">{project.introduction}</p>
          <p className="text-[var(--text-muted)] mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-white/[0.04] text-[var(--text-muted)] text-xs font-medium px-2.5 py-1 rounded-md border border-white/[0.06]">{tech}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/[0.06]">
            {project.repoUrl && (
              <Link href={project.repoUrl} target="_blank" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 text-sm">
                <FaGithub size={20} /> Code
              </Link>
            )}
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 text-sm">
                <FaGlobe size={18} /> Link
              </Link>
            )}
            {project.videoUrl && (
              <Link href={project.videoUrl} target="_blank" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-red-500 transition-colors duration-300 text-sm">
                <FaYoutube size={20} /> Video
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
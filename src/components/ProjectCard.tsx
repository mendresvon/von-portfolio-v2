import Image from "next/image";
import Link from "next/link";
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
  // If a live URL exists, use it; otherwise, fall back to the video URL.
  const imageLinkUrl = project.liveUrl ?? project.videoUrl;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full">
      <div
        className="bg-gray-800/50 backdrop-blur-md rounded-lg overflow-hidden flex flex-col h-full 
                   border border-teal-500/30 shadow-[0_0_10px_rgba(45,212,191,0.2)] transition-all duration-300 hover:border-teal-400/70 hover:shadow-[0_0_25px_rgba(45,212,191,0.6)]">
        {imageLinkUrl ? (
          <Link href={imageLinkUrl} target="_blank">
            <div className="relative w-full h-48 cursor-pointer group">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-101"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-48">
            <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4 font-semibold italic">{project.introduction}</p>
          <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-sky-900 text-sky-200 text-xs font-medium px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-700">
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} /> Code
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <FaGlobe size={20} /> Link
              </Link>
            )}
            {project.videoUrl && (
              <Link
                href={project.videoUrl}
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                <FaYoutube size={24} /> Video
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
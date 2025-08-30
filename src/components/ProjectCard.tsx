// Inside src/components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

// Define the updated shape of the project data
interface ProjectCardProps {
  project: {
    title: string;
    introduction: string; // Updated
    description: string; // Added
    imageUrl: string;
    techStack: string[];
    liveUrl?: string; // Optional link
    repoUrl?: string; // Optional link
    videoUrl?: string; // Optional link
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

        {/* Introduction */}
        <p className="text-gray-700 mb-4 font-semibold italic">{project.introduction}</p>

        {/* Detailed Description */}
        <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links - Conditionally Rendered */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <FaGithub size={24} /> Code
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <FaExternalLinkAlt size={20} /> Live Demo
            </Link>
          )}
          {project.videoUrl && (
            <Link
              href={project.videoUrl}
              target="_blank"
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
              <FaYoutube size={24} /> Video
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

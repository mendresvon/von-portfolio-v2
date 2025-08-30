// Import the icons we need from the library
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-2xl px-4">
        {/* Your Name */}
        <h1 className="text-5xl md:text-7xl font-bold">Von Breznev A. Mendres</h1>

        {/* Your Headline */}
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Computer Science Student with a Passion for Learning and Building Scalable Solutions
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/vonmendres/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/mendresvon" //
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}

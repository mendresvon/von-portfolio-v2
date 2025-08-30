// Inside src/components/Footer.tsx
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Link
            href="https://github.com/mendresvon/Project-Portfolio/tree/main/Voice%20Controlled%20Traffic%20Control"
            target="_blank"
            className="hover:text-white transition-colors">
            <FaGithub size={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vonmendres/"
            target="_blank"
            className="hover:text-white transition-colors">
            <FaLinkedin size={28} />
          </Link>
        </div>
        <p>&copy; {currentYear} Von Breznev A. Mendres. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

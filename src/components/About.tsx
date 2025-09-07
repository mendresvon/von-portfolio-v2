// src/components/About.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-slate-950"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="flex justify-center">
            <Image
              src="/profile.png"
              alt="Von Mendres"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Text Column */}
          <div>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              Hi, I’m Von Mendres, currently a 3rd-year Computer Science student at Southern Taiwan
              University of Science and Technology (STUST). I’m passionate about exploring new
              technologies and keeping up with the latest trends in the tech world.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              Right now, I’m focused on building a strong foundation in software development and
              artificial intelligence while continuously challenging myself through projects and
              research. My current goal is to secure an internship in Taiwan that will allow me to
              apply my skills, learn from industry professionals, and prepare for a future career in
              top tech companies.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              I believe in continuous growth, whether it’s through coding, problem-solving, or
              collaborating with others. Technology is always evolving, and so am I.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

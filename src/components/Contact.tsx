// src/components/Contact.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// Import all necessary icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const formspreeURL = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    if (!formspreeURL) {
      console.error("Formspree URL is not defined. Please check your .env.local file.");
      return;
    }

    try {
      const response = await fetch(formspreeURL, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
        <p className="text-lg text-gray-300">
          Your message has been sent. I&apos;ll get back to you shortly.
        </p>
      </section>
    );
  }

  return (
    <motion.section
      id="contact"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-5xl font-bold mb-8">Let&apos;s Connect </h2>
        {/* --- 1. PARAGRAPH TEXT IS RESTORED AS REQUESTED --- */}
        <p className="text-gray-400 mb-8">
          I&apos;m open to new opportunities and collaborations. Feel free to send me a message
          using the form below or email me directly at{" "}
          <a
            href="mailto:mendresvon@gmail.com"
            target="_blank"
            className="text-purple-600 hover:underline font-semibold">
            mendresvon@gmail.com
          </a>
          .
        </p>

        {/* --- 2. GMAIL ICON ADDED TO PROFESSIONAL LINKS --- */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <a
            href="https://github.com/mendresvon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/vonmendres/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
            <FaLinkedin size={40} />
          </a>
          <a
            href="mailto:mendresvon@gmail.com"
            target="_blank"
            aria-label="Email"
            className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
            <SiGmail size={40} />
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Input fields and button remain the same */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent border border-gray-600 placeholder-gray-400 hover:border-purple-500 transition-colors duration-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent border border-gray-600 placeholder-gray-400 hover:border-purple-500 transition-colors duration-300"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent border border-gray-600 placeholder-gray-400 hover:border-purple-500 transition-colors duration-300"></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 ease-in-out">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
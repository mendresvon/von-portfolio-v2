// src/components/Contact.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);

    const formspreeURL = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    // --- FIX STARTS HERE ---
    // First, check if the URL is actually defined.
    if (!formspreeURL) {
      console.error("Formspree URL is not defined. Please check your .env.local file.");
      // Optionally, you could show an error message to the user here.
      return; // Stop the function from proceeding
    }
    // --- FIX ENDS HERE ---

    try {
      // At this point, TypeScript knows formspreeURL is a string.
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
          Your message has been sent. I&apos;ll get back to you soon.
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
        <h2 className="text-5xl font-bold mb-8">Send me a message</h2>
        <p className="text-gray-400 mb-8">
          I&apos;m open to new opportunities and collaborations. Feel free to send me a message
          using the form below or email me directly at {""}
          <a
            href="mailto:mendresvon@gmail.com"
            target="_blank"
            className="text-purple-600 hover:underline font-semibold">
            mendresvon@gmail.com
          </a>
          .
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent border-gray-600 placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent border-gray-600 placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent border-gray-600 placeholder-gray-400"></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}

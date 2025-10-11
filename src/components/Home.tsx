"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Typewriter effect for roles
  const roles = ["Full‑Stack Developer", "Technical Support Specialist"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1;
      const nextText = current.slice(0, nextLength);
      setDisplayText(nextText);

      if (!isDeleting && nextText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Clean, modern hero without background image dependency

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-gray-900 dark:text-white overflow-hidden bg-gradient-to-br from-pink-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      {/* Hero Text */}
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-pink-200 blur-3xl opacity-50"
        animate={{
          x: [0, 30, -10, 0],
          y: [0, -20, 10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-indigo-200 blur-3xl opacity-40"
        animate={{
          x: [0, -25, 10, 0],
          y: [0, 15, -10, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mt-24 lg:mt-32 max-w-3xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 mb-6">
            {displayText}
            <motion.span
              className="inline-block w-3 h-6 ml-1 bg-pink-600 dark:bg-pink-400"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Building delightful, performant web experiences.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I craft modern, accessible interfaces and scalable full‑stack apps. Explore my work and get in touch.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/Voweiro-Ajenaghughrure.pdf"
              target="_blank"
              className="inline-flex items-center px-6 py-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300"
            >
              View Resume
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-6 py-3 rounded-full border border-pink-600 text-pink-700 hover:bg-pink-50 dark:text-pink-300 dark:hover:bg-pink-900/20 transition-colors duration-300"
            >
              See Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

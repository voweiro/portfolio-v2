"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Correct image imports
import glit from "../app/glitzlogo.png";
import med from "../app/project-logo3.png";
import green from "../app/Green-clean.png"
import org from "../app/main logo.png"
import ai from "../app/ai.jpg"

const projects = [
  {
    image: org.src,
    title: "Organization Website",
    description: "Welcome to Renew Nigeria, a pioneering platform dedicated to powering Nigeria's clean energy transition...",
    link: "https://renewnigeria.vercel.app/",
  },
  {
    image: glit.src,
    title: "Glitz - Summer School Tech Training",
    description: "Glitz is a dynamic platform that makes tech education fun for kids! With interactive lessons in coding, robotics, and more...",
    link: "https://summercode.vercel.app/",
  },
  {
    image: med.src,
    title: "SelfMed Hub - Health Management System & Online Pharmacy",
    description: "SelfMed Hub is an innovative healthcare platform that streamlines essential medical processes...",
    link: "https://pharmastore-frontend.vercel.app/",
  },
  {
    image: green.src,
    title: "Green Clean Nigeria",
    description: "Green Clean is a pioneering environmental services company dedicated to promoting sustainability...",
    link: "https://green-nigeria-beryl.vercel.app",
  },
  {
    image: ai.src,
    title: "AI job Match",
    description: " A demo website for a AI Job Match is an intelligent job search platform that connects job seekers with the best job opportunities based on their skills and experience.",
    link: "https://ai-job-dashboard.vercel.app/",
  },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="relative overflow-hidden rounded-lg group">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    width={800}
                    height={600}
                    className="w-full h-auto aspect-[16/9] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-white">{projects[currentIndex].title}</h3>
                    <p className="text-gray-300 mb-4">{projects[currentIndex].description}</p>
                    <motion.a
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-pink-600 hover:bg-pink-600 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? "bg-pink-600" : "bg-gray-400 dark:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

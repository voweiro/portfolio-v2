"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import glit from "../app/glitzlogo.png";
import med from "../app/project-logo3.png";
import green from "../app/Green-clean.png"
import org from "../app/main logo.png"
import ai from "../app/ai.jpg"
import quiz from "../app/quiz.png"
import edufy from "../app/edufy.png"
const projects = [
  {
    image: org.src,
    title: "Organization Website",
    description: "A platform dedicated to powering Nigeria's clean energy transition.",
    link: "https://renewnigeria.vercel.app/",
  },
  {
    image: glit.src,
    title: "Glitz - Summer School Tech Training",
    description: "A dynamic platform making tech education fun for kids with coding & robotics.",
    link: "https://summercode.vercel.app/",
  },
  {
    image: med.src,
    title: "SelfMed Hub - Online Pharmacy",
    description: "A healthcare platform for patient management & medication ordering.",
    link: "https://pharmastore-frontend.vercel.app/",
  },
  {
    image: green.src,
    title: "Green Clean Nigeria",
    description: "A sustainability-focused platform promoting environmental conservation.",
    link: "https://green-nigeria-beryl.vercel.app/",
  },
  {
    image: ai.src,
    title: "AI job Match",
    description: " A demo website for a AI Job Match is an intelligent job search platform that connects job seekers with the best job opportunities based on their skills and experience.",
    link: "https://ai-job-dashboard.vercel.app/",
  },

  {
    image: quiz.src,
    title: "Learnify Quiz Master",
    description: " Learnify Quiz Master is a  demo platform that allows users to create and take quizzes on various topics.",
    link: "https://learnify-quizmaster.vercel.app/",
  },

  {
    image: edufy.src,
    title: "Edufy",
    description: " Edufy is a digital learning platform for kid with autism.",
    link: "https://edufy-khaki.vercel.app/",
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
    <section id="portfolio" className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>

        <div className="relative flex flex-col items-center">
          <div className="w-full max-w-4xl overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center"
              >
                {/* Image Display */}
                <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    width={800}
                    height={600}
                    className="w-full h-auto aspect-[16/9] object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="text-center mt-6 px-4 md:px-8">
                  <h3 className="text-2xl font-semibold">{projects[currentIndex].title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
                    {projects[currentIndex].description}
                  </p>
                  <motion.a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center mt-4 px-6 py-2 text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between w-full max-w-xs mt-6">
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-pink-600" : "bg-gray-400 dark:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

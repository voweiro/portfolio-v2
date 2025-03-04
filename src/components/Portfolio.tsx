"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    image: "/images/work-1.png",
    title: "Organisation website",
    description: "The web site shows people information about the Organisation and how to contact them",
  },
  {
    image: "/images/work-2.png",
    title: "Music App",
    description: "The web site shows people information about the Organisation and how to contact them",
  },

  {
    image: "/images/work-2.png",
    title: "Dusic App",
    description: "The web site shows people information about the Organisation and how to contact them",
  },
  {
    image: "/images/work-3.png",
    title: "Online Shopping App",
    description: "The web site shows people information about the Organisation and how to contact them",
  },
]

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="relative overflow-hidden rounded-lg group">
                  <Image
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
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
                      href="#"
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
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}


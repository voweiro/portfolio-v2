"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const tabData = {
  skills: [
    { title: "Frontend Developer", description: "Designing and creating of Web/App interfaces" },
    { title: "Web Developer", description: "Web app Development" },
    { title: "Language Translator", description: "Translating of various document" },
  ],
  experience: [
    { title: "2022 - Current", description: "Freelancer at Upwork" },
    { title: "2022 - 2023", description: "Team lead at National Institute of Information Technology (NIIT)" },
    {
      title: "2021 - 2022",
      description: "Frontend Developer Training at National Institute of Information Technology (NIIT).",
    },
  ],
  education: [
    { title: "2023", description: "BCS from Edo state University" },
    {
      title: "2022",
      description: "Frontend Developer Training at National Institute of Information Technology (NIIT)",
    },
  ],
}

export default function About() {
  const [activeTab, setActiveTab] = useState("skills")

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <Image
              src="/images/Snapchat-515768141.jpg"
              alt="Profile"
              width={400}
              height={600}
              className="rounded-lg w-full"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero reiciendis a. Cum facilis voluptate
              illum, est placeat et totam alias iste magnam, autem sint iusto mollitia laborum asperiores commodi
              dolorum ad natus quos fuga dolores tempore architecto maxime reprehenderit necessitatibus? Veniam harum
              quis iusto voluptatum, sequi pariatur, alias excepturi cupiditate quo quia reiciendis placeat
              necessitatibus quasi ducimus corrupti maiores aspernatur consequatur nulla neque unde magni perferendis
              magnam.
            </p>
            <div className="flex mb-8">
              {Object.keys(tabData).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`mr-8 pb-2 font-medium ${
                    activeTab === tab
                      ? "text-pink-600 border-b-2 border-pink-600"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
            <motion.ul
              className="list-none"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {tabData[activeTab as keyof typeof tabData].map((item, index) => (
                <motion.li
                  key={index}
                  className="mb-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="text-pink-600 font-medium">{item.title}</span>
                  <br />
                  {item.description}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}


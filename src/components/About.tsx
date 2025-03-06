"use client"

import { useState } from "react"
import pro from "../app/profile.jpg";
import Image from "next/image"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si"

const tabData = {
  skills: [
    {
      title: "Frontend & Full-Stack Development",
      description: "Experienced in React.js, Next.js, and Node.js for building dynamic and scalable applications.",
    },
    {
      title: "UI/UX & Responsive Design",
      description: "Strong understanding of Tailwind CSS, Framer Motion, and modern web design principles.",
    },
    {
      title: "IT Support & Technical Troubleshooting",
      description: "Proficient in diagnosing and resolving technical issues efficiently.",
    },
    {
      title: "Version Control & Collaboration",
      description: "Experienced with Git, GitHub, and Agile workflows for seamless team collaboration.",
    },
  ],
  experience: [
    {
      title: "Full-Stack Web Developer (Saint Spark) - Remote",
      description:
        "Developed a Learning Management System (LMS) using Next.js and Node.js, improving scalability and performance.",
    },
    {
      title: "Frontend Engineer (Starttel Tech) - Remote",
      description: "Built a high-performance React web app with Framer Motion animations and API integrations.",
    },
    {
      title: "IT Support (LexTech Ecosystem Limited) - Lagos",
      description:
        "Provided technical assistance and training for legal tech products, resolving software issues efficiently.",
    },
    {
      title: "Full-Stack Engineer Freelancer (Upwork)",
      description: "Developed projects like an online pharmacy store (MERN stack) and a Summer BootCamp app.",
    },
    {
      title: "Web Developer (Sky IT) - Warri",
      description:
        "Transformed web applications into mobile-friendly solutions and ensured cross-browser compatibility.",
    },
    {
      title: "Intern Software Developer (NIIT) - NG",
      description: "Worked on software troubleshooting, SQL reporting, and technical documentation.",
    },
  ],
  education: [
    {
      title: "Bachelor's of Science Degree in Computer Science",
      description: "Graduated from Edo State University Uzairue (2019 - 2023), specializing in software engineering.",
    },
    {
      title: "Software Development Training",
      description:
        "Completed Frontend Development training at NIIT, mastering JavaScript, React, and UI/UX principles.",
    },
  ],
}

const technologies = [
  { name: "React.js", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-5xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
  { name: "SQL Databases", icon: <FaDatabase className="text-gray-700 dark:text-gray-300 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
]

export default function About() {
  const [activeTab, setActiveTab] = useState("skills")

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <Image
              src={pro}
              alt="Profile"
              width={400}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* About Content */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I am a Web Developer and IT Support Specialist with hands-on experience in full-stack development, UI/UX
              design, and technical troubleshooting. Passionate about creating efficient, scalable applications, I have
              contributed to various projects using Next.js, React, and Node.js. My expertise in IT support ensures
              seamless user experiences, resolving software issues efficiently. I thrive in fast-paced Agile
              environments, continuously learning and applying best practices in software development.
            </p>

            {/* Tabs */}
            <div className="flex mb-8 flex-wrap">
              {Object.keys(tabData).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`mr-8 pb-2 font-medium mb-2 ${
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

            {/* Tab Content - No More Fade-Out Issues */}
            <div className="min-h-[200px]">
              {Object.keys(tabData).map((tab) => (
                <motion.ul
                  key={tab}
                  className={`${activeTab === tab ? "block" : "hidden"}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === tab ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {tabData[tab as keyof typeof tabData].map((item, index) => (
                    <motion.li
                      key={index}
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-pink-600 font-medium">{item.title}</span>
                      <br />
                      {item.description}
                    </motion.li>
                  ))}
                </motion.ul>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Used Section */}
        <h3 className="text-3xl font-semibold mt-16 mb-8 text-center">Technologies I Use</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              {tech.icon}
              <p className="mt-2 text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


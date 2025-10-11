"use client"

import { useEffect, useState } from "react"
import pro from "../app/profile.jpg";
import Image from "next/image"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si"

const tabData = {
  skills: [
    {
      title: "Frontend Engineering",
      description: "Modern, responsive interfaces with React and Next.js — component‑driven architecture, accessibility, and performance optimization.",
    },
    {
      title: "UI/UX & Motion",
      description: "Clean typography, adaptive layouts, and micro‑interactions with Tailwind CSS and Framer Motion for a polished user experience.",
    },
    {
      title: "Technical Support & Troubleshooting",
      description: "Diagnose, triage, and resolve issues across apps, networks, and cloud services with reproducible steps and preventive fixes.",
    },
    {
      title: "Version Control & Collaboration",
      description: "Git workflows, code reviews, documentation, and Agile delivery — clear communication and reliable handoffs.",
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
    <section id="about" className="py-20 bg-background text-foreground">
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
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I’m Ajenaghughrure Voweiro — a full‑stack developer and technical support specialist passionate about
              building fast, accessible, and delightful web experiences. I blend thoughtful UI/UX with reliable
              engineering to ship production‑ready features, automate workflows, and help teams resolve technical issues
              quickly. I work across React, Next.js, and the MERN stack with a focus on performance, maintainability,
              and clear communication.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <StatCard label="Years Experience" value={5} suffix="+" />
              <StatCard label="Projects Delivered" value={30} suffix="+" />
              <StatCard label="Technologies Used" value={20} suffix="+" />
              <StatCard label="Tickets Resolved" value={500} suffix="+" />
            </div>

            {/* Tabs */}
            <div className="flex mb-8 flex-wrap">
              {Object.keys(tabData).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`mr-3 mb-3 px-4 py-2 rounded-full font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-pink-600 text-white shadow"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
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

function StatCard({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  return (
    <motion.div
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-3xl font-extrabold">
        <AnimatedNumber value={value} />{suffix}
      </div>
      <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">{label}</div>
    </motion.div>
  );
}

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf: number;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * value);
      setCount(current);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <span>{count}</span>;
}


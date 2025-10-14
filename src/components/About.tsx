"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase, FaServer, FaExchangeAlt, FaAmazon, FaFileExcel, FaCode } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiSlack, SiZoom, SiJira, SiConfluence, SiGithub, SiPostman, SiOkta, SiGoogle, SiPython, SiSass, SiVuedotjs, SiExpress, SiPostgresql, SiNpm } from "react-icons/si"
import { FiArrowRight, FiDownload, FiLink } from "react-icons/fi"

type IconComp = React.ComponentType<{ className?: string }>
const technologies: { name: string; icon?: IconComp; className?: string }[] = [
  { name: "React.js", icon: FaReact, className: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, className: "text-gray-900 dark:text-white" },
  { name: "Node.js", icon: FaNodeJs, className: "text-green-500" },
  { name: "JavaScript", icon: FaJsSquare, className: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, className: "text-blue-600" },
  { name: "HTML5", icon: FaHtml5, className: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, className: "text-blue-600" },
  { name: "SCSS", icon: SiSass, className: "text-pink-400" },
  { name: "Vue.js", icon: SiVuedotjs, className: "text-green-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, className: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, className: "text-green-500" },
  { name: "SQL Databases", icon: FaDatabase, className: "text-gray-700 dark:text-gray-300" },
  { name: "PostgreSQL", icon: SiPostgresql, className: "text-blue-500" },
  { name: "Git", icon: FaGitAlt, className: "text-red-500" },
  { name: "GitHub", icon: SiGithub, className: "text-gray-200" },
  { name: "VS Code", icon: FaCode, className: "text-blue-500" },
  { name: "npm", icon: SiNpm, className: "text-red-600" },
  { name: "fetch/Axios", icon: FiLink as unknown as IconComp, className: "text-orange-300" },
  { name: "RESTful APIs", icon: FaServer, className: "text-gray-300" },
  { name: "Postman", icon: SiPostman, className: "text-orange-500" },
  { name: "API Testing", icon: SiPostman, className: "text-orange-500" },
  { name: "Data Imports/Exports", icon: FaExchangeAlt, className: "text-gray-300" },
  { name: "Excel (Advanced)", icon: FaFileExcel, className: "text-green-600" },
  { name: "Python", icon: SiPython, className: "text-yellow-400" },
  { name: "Slack", icon: SiSlack, className: "text-purple-500" },
  { name: "Zoom", icon: SiZoom, className: "text-blue-500" },
  { name: "Jira", icon: SiJira, className: "text-blue-600" },
  { name: "Confluence", icon: SiConfluence, className: "text-blue-500" },
  { name: "Okta", icon: SiOkta, className: "text-blue-500" },
  { name: "AWS", icon: FaAmazon, className: "text-orange-400" },
  { name: "Google Workspace", icon: SiGoogle, className: "text-orange-300" },
]

export default function About() {
  const [openSection, setOpenSection] = useState<"stack" | "experience" | "education" | null>(null)
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="mb-10">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-300">About Me</h2>
            <span className="h-[1px] w-24 bg-orange-300/70" />
          </div>
          <p className="mt-6 max-w-4xl leading-relaxed text-gray-300">
           I’m Ajenaghughrure Voweiro — a full‑stack developer and technical support specialist passionate about building fast, accessible, and delightful web experiences. I blend thoughtful UI/UX with reliable engineering to ship production‑ready features, automate workflows, and help teams resolve technical issues quickly. I work across React, Next.js, and the MERN stack with a focus on performance, maintainability, and clear communication
          </p>
          {/* <p className="mt-4 max-w-4xl leading-relaxed text-gray-300">
            I specialize in JavaScript and its frameworks — Next.js, React, and Vue.js — for building modern web
            applications. I also develop smart contracts using Solidity for Web3 applications.
          </p> */}
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-controls="stack"
              aria-expanded={openSection === "stack"}
              onClick={() => setOpenSection(openSection === "stack" ? null : "stack")}
              className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 px-4 py-2 text-sm text-orange-200 hover:bg-orange-300/10 transition"
            >
              Stack <FiArrowRight />
            </button>
            <button
              type="button"
              aria-controls="experience"
              aria-expanded={openSection === "experience"}
              onClick={() => setOpenSection(openSection === "experience" ? null : "experience")}
              className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 px-4 py-2 text-sm text-orange-200 hover:bg-orange-300/10 transition"
            >
              Experience <FiArrowRight />
            </button>
            <button
              type="button"
              aria-controls="education"
              aria-expanded={openSection === "education"}
              onClick={() => setOpenSection(openSection === "education" ? null : "education")}
              className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 px-4 py-2 text-sm text-orange-200 hover:bg-orange-300/10 transition"
            >
              Education <FiArrowRight />
            </button>
          </div>
         
            
             <motion.a
              href="/voweiro-ajenaghughrure-full-stack-developer.pdf"
              download
              className="inline-block mt-8 px-8 py-3 bg-orange-300 text-white rounded-full hover:bg-orange-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          
        </div>

        {/* Experience */}
        <AnimatePresence>
          {openSection === "experience" && (
            <motion.div
              key="experience"
              id="experience"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <h3 className="text-2xl font-semibold mb-6 text-orange-200">Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                {experiences.map((exp, i) => (
                  <ExperienceCard key={i} title={exp.title} description={exp.description} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Education */}
        <AnimatePresence>
          {openSection === "education" && (
            <motion.div
              key="education"
              id="education"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-14"
            >
              <h3 className="text-2xl font-semibold mb-6 text-orange-200">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EduCard period="2025 - Present" school="Tallinn University" title="MSc Human Computer Interaction" />
                <EduCard period="2019 - 2023" school="Edo State University " title="BSc Computer Science." />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stack */}
        <AnimatePresence>
          {openSection === "stack" && (
            <motion.div
              key="stack"
              id="stack"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <h3 className="text-2xl font-semibold mb-6 text-orange-200">Stack</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 border border-white/10 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <IconRenderer Icon={tech.icon} className={`text-5xl ${tech.className ?? ""}`} />
                    <p className="mt-2 text-sm font-medium text-foreground/80">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 text-center">
          <StatBadge value={30} label="Project" />
          <StatBadge value={20} label="Documentation" />
          <StatBadge value={600} label="Resolved tickets" />
        </div>
      </div>
    </section>
  )
}

function IconRenderer({ Icon, className }: { Icon?: IconComp; className?: string }) {
  if (!Icon) {
    return <FaServer className={className} />
  }
  return <Icon className={className} />
}

const experiences = [
  {
    title: "Full-Stack Web Developer (Saint Spark) - Remote",
    description:
      "Developed a Learning Management System (LMS) using Next.js and Node.js, improving scalability and performance.",
  },
  {
    title: "Frontend Engineer (Starttel Tech) - Remote",
    description:
      "Built a high-performance React web app with Framer Motion animations and API integrations.",
  },
  {
    title: "IT Support (LexTech Ecosystem Limited) - Lagos",
    description:
      "Provided technical assistance and training for legal tech products, resolving software issues efficiently.",
  },
  {
    title: "Full-Stack Engineer Freelancer (Upwork)",
    description:
      "Developed projects like an online pharmacy store (MERN stack) and a Summer BootCamp app.",
  },
  {
    title: "Web Developer (Sky IT) - Warri",
    description:
      "Transformed web applications into mobile-friendly solutions and ensured cross-browser compatibility.",
  },
  {
    title: "Intern Software Developer (NIIT) - NG",
    description:
      "Worked on software troubleshooting, SQL reporting, and technical documentation.",
  },
]

function StatBadge({ value, label }: { value: number; label: string }) {
  return (
    <div className="py-8">
      <div className="text-5xl font-black text-orange-200">
        <AnimatedNumber value={value} />+
      </div>
      <div className="mt-2 text-sm tracking-wide text-gray-400">{label}</div>
    </div>
  )
}

function ExperienceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-base font-semibold text-orange-200">{title}</div>
      <div className="mt-2 text-sm text-gray-300 leading-relaxed">{description}</div>
    </div>
  )
}

function EduCard({ period, school, title }: { period: string; school: string; title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm text-gray-400">{period}</div>
      <div className="mt-2 text-lg font-semibold text-orange-200">{school}</div>
      <div className="text-sm text-gray-300">{title}</div>
    </div>
  )
}

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let raf: number
    const startTime = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const current = Math.floor(progress * value)
      setCount(current)
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [value, duration])

  return <span>{count}</span>
}
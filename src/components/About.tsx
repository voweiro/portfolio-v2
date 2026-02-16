"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase, FaServer, FaExchangeAlt, FaAmazon, FaFileExcel, FaCode, FaChartBar, FaCloud, FaSearch, FaProjectDiagram, FaSync, FaPencilRuler, FaNetworkWired, FaDocker, FaWordpress, FaJava } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiSlack, SiZoom, SiJira, SiConfluence, SiGithub, SiPostman, SiOkta, SiGoogle, SiPython, SiSass, SiVuedotjs, SiExpress, SiPostgresql, SiNpm, SiVercel, SiRender, SiGooglecloud, SiGraphql, SiRedux, SiThreedotjs, SiFramer, SiFigma, SiGo } from "react-icons/si"
import { FiArrowRight, FiDownload, FiLink, FiBriefcase, FiBook } from "react-icons/fi"

type IconComp = React.ComponentType<{ className?: string }>

const skillCategories = [
  {
    title: "Systems & Cloud Tools",
    skills: [
      { name: "GitHub", icon: SiGithub, className: "text-white" },
      { name: "AWS", icon: FaAmazon, className: "text-orange-400" },
      { name: "Vercel", icon: SiVercel, className: "text-white" },
      { name: "Render", icon: SiRender, className: "text-white" },
      { name: "HostGator", icon: FaServer, className: "text-blue-400" },
      { name: "SEO", icon: FaSearch, className: "text-green-400" },
      { name: "CMS", icon: FaCode, className: "text-gray-400" },
      { name: "WordPress", icon: FaWordpress, className: "text-blue-600" },
      { name: "Docker", icon: FaDocker, className: "text-blue-500" },
      { name: "Google Cloud", icon: SiGooglecloud, className: "text-blue-500" },
    ]
  },
  {
    title: "Data Analysis & Monitoring",
    skills: [
      { name: "Data Import/Export", icon: FaExchangeAlt, className: "text-purple-400" },
      { name: "Postman", icon: SiPostman, className: "text-orange-500" },
      { name: "Jamovi", icon: FaChartBar, className: "text-pink-400" },
      { name: "Excel (Advanced)", icon: FaFileExcel, className: "text-green-600" },
      { name: "Python", icon: SiPython, className: "text-yellow-400" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, className: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, className: "text-blue-500" },
      { name: "SCSS", icon: SiSass, className: "text-pink-400" },
      { name: "JavaScript", icon: FaJsSquare, className: "text-yellow-400" },
      { name: "React", icon: FaReact, className: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, className: "text-cyan-400" },
      { name: "TypeScript", icon: SiTypescript, className: "text-blue-600" },
      { name: "Next.js", icon: SiNextdotjs, className: "text-white" },
      { name: "GraphQL", icon: SiGraphql, className: "text-pink-500" },
      { name: "Redux", icon: SiRedux, className: "text-purple-500" },
      { name: "Three.js", icon: SiThreedotjs, className: "text-white" },
      { name: "Framer Motion", icon: SiFramer, className: "text-pink-500" },
      { name: "Figma", icon: SiFigma, className: "text-purple-500" },
      { name: "Prototyping", icon: FaPencilRuler, className: "text-yellow-500" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: FaJava, className: "text-red-500" },
      { name: "Golang", icon: SiGo, className: "text-cyan-500" },
      { name: "Node.js", icon: FaNodeJs, className: "text-green-500" },
      { name: "Express", icon: SiExpress, className: "text-white" },
      { name: "PostgreSQL", icon: SiPostgresql, className: "text-blue-400" },
      { name: "MongoDB", icon: SiMongodb, className: "text-green-500" },
      { name: "RESTful APIs", icon: FaNetworkWired, className: "text-blue-300" },
    ]
  },
  {
    title: "Others",
    skills: [
      { name: "Git", icon: FaGitAlt, className: "text-red-500" },
      { name: "VS Code", icon: FaCode, className: "text-blue-500" },
      { name: "DSA", icon: FaProjectDiagram, className: "text-yellow-500" },
      { name: "Axios/Fetch", icon: FaExchangeAlt, className: "text-purple-400" },
      { name: "npm", icon: SiNpm, className: "text-red-500" },
      { name: "CI/CD", icon: FaSync, className: "text-green-400" },
    ]
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "skills">("experience");

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient-custom">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mx-auto lg:mx-0">
            I’m Ajenaghughrure Voweiro — a full‑stack developer and technical support specialist passionate about building fast, accessible, and delightful web experiences. I blend thoughtful UI/UX with reliable engineering to ship production‑ready features.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="/voweiro-ajenaghughrure-full-stack-developer.pdf"
              target="_blank"
              className="px-6 py-3 rounded-full bg-card border border-border hover:bg-accent transition-all flex items-center gap-2 text-primary"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Stats & Stack (Replaced Stack with Categories Summary or full list?) Let's keep Stats here and move Stack to Tab or keep small summary? 
             Actually user wants extensive list. It might be better to move Stack to the Right Column Tab "Skills" and remove it from Left Column to avoid duplication or overcrowding. 
             Let's reuse the Right Column Tab system for "Skills".
          */}
          <div>
            <div className="grid grid-cols-3 gap-4 mb-12">
              <StatBadge value={3} label="Years Exp." />
              <StatBadge value={30} label="Projects" />
              <StatBadge value={600} label="Tickets" />
            </div>

            {/* Moving Tech Stack to Tabs, so removing it from here or keeping a small highlight? 
               Let's keep a small highlight of core tech? Or maybe just remove it as the list is huge now.
               Actually, the original design had "Tech Stack" on the left.
               Let's modify the Left Column to just show Stats and maybe a brief "Core Tech" or remove it.
               Given the user asked to "update and add", let's put the full list in the "Skills" tab on the right which I will add.
            */}
          </div>

          {/* Right Column: Experience/Education/Skills Tabs */}
          <div className="glass p-8 rounded-3xl border border-border">
            <div className="flex gap-4 mb-8 border-b border-border pb-4 overflow-x-auto">
              <button
                onClick={() => setActiveTab("experience")}
                className={`text-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === "experience" ? "text-primary border-b-2 border-primary -mb-[17px] pb-4" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`text-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === "education" ? "text-primary border-b-2 border-primary -mb-[17px] pb-4" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`text-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === "skills" ? "text-primary border-b-2 border-primary -mb-[17px] pb-4" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Skills
              </button>
            </div>

            <div className="space-y-8 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence mode="wait">
                {activeTab === "experience" ? (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {experiences.map((exp, i) => (
                      <TimelineItem key={i} title={exp.title} description={exp.description} icon={FiBriefcase} />
                    ))}
                  </motion.div>
                ) : activeTab === "education" ? (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                     <TimelineItem 
                      title="MSc Human Computer Interaction" 
                      subtitle="Tallinn University (2025 - Present)"
                      description="Focusing on user-centered design, usability testing, and interaction design."
                      icon={FiBook} 
                    />
                    <TimelineItem 
                      title="BSc Computer Science" 
                      subtitle="Edo State University (2019 - 2023)"
                      description="Solid foundation in algorithms, data structures, and software engineering."
                      icon={FiBook} 
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {skillCategories.map((category, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">{category.title}</h4>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                          {category.skills.map((skill, sIdx) => (
                             <motion.div
                               key={sIdx}
                               whileHover={{ y: -3, backgroundColor: "var(--accent-bg)" }}
                               className="glass p-3 rounded-lg flex flex-col items-center justify-center gap-2 transition-all cursor-default border border-white/5 bg-white/5"
                             >
                               <IconRenderer Icon={skill.icon} className={`text-2xl ${skill.className}`} />
                               <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight">{skill.name}</span>
                             </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IconRenderer({ Icon, className }: { Icon?: IconComp; className?: string }) {
  if (!Icon) return <FaServer className={className} />
  return <Icon className={className} />
}

function TimelineItem({ title, subtitle, description, icon: Icon }: { title: string; subtitle?: string; description: string; icon: any }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h4>
        {subtitle && <div className="text-sm text-muted-foreground mb-1">{subtitle}</div>}
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function StatBadge({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center glass-card p-4 rounded-xl border border-border">
      <div className="text-3xl font-bold text-gradient-custom mb-1">
        <AnimatedNumber value={value} />+
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
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

const experiences = [
   {
    title: "Web/Application Specialist - Nigerian British Univeristy",
    description:
      "Lead the Software Development Unit, overseeing staff portals, student systems, and administrative tools.",
  },
  {
    title: "Full-Stack Web Developer (Saint Spark)",
    description:
      "Developed a Learning Management System (LMS) using Next.js and Node.js, improving scalability.",
  },
  {
    title: "Frontend Engineer (Starttel Tech)",
    description:
      "Built a high-performance React web app with Framer Motion animations and API integrations.",
  },
  {
    title: "IT Support (LexTech Ecosystem Limited)",
    description:
      "Provided technical assistance and training for legal tech products, resolving software issues.",
  },
]
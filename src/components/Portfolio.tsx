"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import glit from "../app/glitzlogo.png";
import med from "../app/project-logo3.png";
import green from "../app/Green-clean.png"
import org from "../app/main logo.png"
import ai from "../app/ai.jpg"
import quiz from "../app/quiz.png"
import edufy from "../app/edufy.png"
import nbu from "../app/logo.png"
import lis from "../app/lis-pen.png"

const projects = [
  {
    image: lis,
    title: "Lis Pendens Registry",
    category: "Legal Tech",
    description: "Property litigation status verification platform for Enugu State Judiciary.",
    link: "https://lispendens.judiciary.en.gov.ng/",
    tech: ["React", "Frontend"]
  },
  {
    image: nbu,
    title: "NBU Payment Portal",
    category: "EdTech / FinTech",
    description: "Secure payment gateway for university fees, accommodations, and services.",
    link: "https://payment-portal.nbu.edu.ng/",
    tech: ["Next.js", "Full Stack"]
  },
  {
    image: nbu,
    title: "NBU Budget System",
    category: "Enterprise",
    description: "Comprehensive budget planning and inventory management system for the university.",
    link: "http://budget.nbu.edu.ng/",
    tech: ["Full Stack", "Management"]
  },
  {
    image: org,
    title: "Organization Website",
    category: "Full Stack",
    description: "A platform dedicated to powering Nigeria's clean energy transition.",
    link: "https://renewnigeria.vercel.app/",
    tech: ["Next.js", "Tailwind", "Node.js"]
  },
  {
    image: glit,
    title: "Glitz Tech Training",
    category: "Education",
    description: "Dynamic platform making tech education fun for kids with coding & robotics.",
    link: "https://summercode.vercel.app/",
    tech: ["React", "Framer Motion"]
  },
  {
    image: med,
    title: "SelfMed Hub",
    category: "Healthcare",
    description: "Healthcare platform for patient management & medication ordering.",
    link: "https://pharmastore-frontend.vercel.app/",
    tech: ["MERN Stack", "Stripe"]
  },
  {
    image: green,
    title: "Green Clean Nigeria",
    category: "Sustainability",
    description: "Sustainability-focused platform promoting environmental conservation.",
    link: "https://green-nigeria-beryl.vercel.app/",
    tech: ["Next.js", "PostgreSQL"]
  },
  {
    image: ai,
    title: "AI Job Match",
    category: "AI/ML",
    description: "Intelligent job search platform connecting seekers with opportunities.",
    link: "https://ai-job-dashboard.vercel.app/",
    tech: ["OpenAI API", "React"]
  },
  {
    image: quiz,
    title: "Learnify Quiz Master",
    category: "EdTech",
    description: "Interactive platform for creating and taking quizzes on various topics.",
    link: "https://learnify-quizmaster.vercel.app/",
    tech: ["React", "Firebase"]
  },
  {
    image: edufy,
    title: "Edufy",
    category: "Accessibility",
    description: "Digital learning platform designed specifically for children with autism.",
    link: "https://edufy-khaki.vercel.app/",
    tech: ["Next.js", "Accessibility APIS"]
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient-custom">Featured Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my passion for building digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card border border-border"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors transform hover:scale-110"
                    title="View Live Site"
                  >
                    <ExternalLink size={20} />
                  </a>
                  {/* Placeholder for GitHub link if available */}
                  <button className="p-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors transform hover:scale-110" title="View Code">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-secondary/10 text-secondary-foreground border border-secondary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

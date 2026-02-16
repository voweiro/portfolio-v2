"use client";

import { Code, Server, LifeBuoy, Monitor, Database, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Monitor,
    title: "Frontend Engineering",
    description:
      "Crafting pixel-perfect, accessible, and responsive interfaces using React, Next.js, and Tailwind CSS. Focused on smooth interactions and performance.",
  },
  {
    icon: Server,
    title: "Full‑Stack Development",
    description:
      "Building robust, scalable server-side applications and APIs with Node.js, Express, and modern databases like MongoDB and PostgreSQL.",
  },
  {
    icon: LifeBuoy,
    title: "Technical Support",
    description:
      "Providing expert troubleshooting, bug triage, and reliable support for complex software systems to ensure maximum uptime.",
  },
  {
    icon: Code,
    title: "System Architecture",
    description:
      "Designing scalable and maintainable software architectures that can grow with your business needs.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Optimizing database schemas and queries for speed and reliability, ensuring data integrity and security.",
  },
  {
    icon: Terminal,
    title: "DevOps & Deployment",
    description:
      "Streamlining deployment pipelines and managing cloud infrastructure on platforms like AWS and Vercel.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient-custom">My Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your unique business challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl border border-border relative group overflow-hidden"
            >
              {/* Hover Clean Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

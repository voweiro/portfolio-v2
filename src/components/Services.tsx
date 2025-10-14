"use client";

import { Code, Server, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Frontend Engineering",
    description:
      "Modern, accessible, and fast interfaces with React, Next.js, and Tailwind. Component libraries, state management, and performance audits for pixel‑perfect experiences.",
  },
  {
    icon: Server,
    title: "Full‑Stack Development",
    description:
      "End‑to‑end apps with the MERN stack — scalable APIs, authentication, dashboards, and integrations. Cloud‑ready deployments and monitoring.",
  },
  {
    icon: LifeBuoy,
    title: "Technical Support & Troubleshooting",
    description:
      "Hands‑on support for apps and infrastructure — monitoring, issue triage, bug fixes, and knowledge base documentation. Reliable and timely resolutions.",
  },


];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 shadow-sm p-8">
          <h2 className="text-4xl font-bold mb-12 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
                whileHover={{ y: -4, rotateX: 2, rotateY: -3, scale: 1.02 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                  <service.icon className="w-12 h-12 mb-6 text-pink-600" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
                <motion.a
                  href="#"
                  className="text-pink-600 hover:underline inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn more
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

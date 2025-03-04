"use client"

import { Code, Crop, LanguagesIcon as Language } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Code,
    title: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate? Quod similique temporibus quae voluptatem optio velit adipisci facilis, laborum, inventore libero deserunt esse eum voluptatum voluptates veritatis ea rem!",
  },
  {
    icon: Crop,
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate? Quod similique temporibus quae voluptatem optio velit adipisci facilis, laborum, inventore libero deserunt esse eum voluptatum voluptates veritatis ea rem!",
  },
  {
    icon: Language,
    title: "Language Translator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptate? Quod similique temporibus quae voluptatem optio velit adipisci facilis, laborum, inventore libero deserunt esse eum voluptatum voluptates veritatis ea rem!",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                <service.icon className="w-12 h-12 mb-6 text-pink-600" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
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
    </section>
  )
}


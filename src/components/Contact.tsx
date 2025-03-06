"use client";

import { useState } from "react";
import { Linkedin, Github, Send, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-wrap -mx-4">
          {/* Contact Info */}
          <motion.div
            className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="flex items-center mb-4">
              <Send className="w-6 h-6 mr-4 text-pink-600" />
              <a href="mailto:ajenaghonorevoweiro@gmail.com" className="hover:text-pink-600 transition-colors duration-300">
                ajenaghonorevoweiro@gmail.com
              </a>
            </p>
            <p className="flex items-center mb-8">
              <Phone className="w-6 h-6 mr-4 text-pink-600" />
              <a href="tel:+234738734379" className="hover:text-pink-600 transition-colors duration-300">
                +234 738 734 379
              </a>
            </p>

            {/* Social Media Links (Only LinkedIn & GitHub) */}
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, url: "https://linkedin.com/in/yourprofile" },
                { icon: Github, url: "https://github.com/yourprofile" },
              ].map(({ icon: Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-pink-600 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              href="/voweiro-Ajenaghughrure.pdf"
              download
              className="inline-block mt-8 px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-1/2 px-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
            {submitMessage && (
              <motion.p className="mt-4 text-green-500" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {submitMessage}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 py-8 bg-gray-200 dark:bg-gray-800 text-center">
        <p className="text-gray-900 dark:text-white">&copy; {new Date().getFullYear()} Ajenaghughrure Voweiro. All rights reserved.</p>
      </div>
    </section>
  );
}

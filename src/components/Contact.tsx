"use client";

import { useState } from "react";
import { Linkedin, Github, Send, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm shadow-sm p-8">
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
                +372 5636 9001
              </a>
            </p>

            {/* Social Media Links (Only LinkedIn & GitHub) */}
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, url: "https://www.linkedin.com/in/ajenahonore-voweiro-623972289/" },
                { icon: Github, url: "https://github.com/voweiro" },
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
              href="/Voweiro-Ajenaghughrure.pdf"
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
                className="w-full px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      className="inline-flex"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
            <AnimatePresence>
              {submitMessage && (
                <motion.p
                  className="mt-4 text-green-600 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg px-4 py-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 py-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-700 dark:text-gray-300">&copy; {new Date().getFullYear()} Ajenaghughrure Voweiro. All rights reserved.</p>
      </div>
      </div>    
    </section>
  );
}

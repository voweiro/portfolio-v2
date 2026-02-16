"use client";

import { useState } from "react";
import { Linkedin, Github, Send, Phone, Mail, MapPin } from "lucide-react";
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
    setSubmitMessage("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient-custom">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-border space-y-6">
              <ContactItem 
                icon={Mail} 
                label="Email" 
                value="ajenaghonorevoweiro@gmail.com" 
                href="mailto:ajenaghonorevoweiro@gmail.com" 
              />
              <ContactItem 
                icon={Phone} 
                label="Phone" 
                value="+372 5636 9001" 
                href="tel:+37256369001" 
              />
              <ContactItem 
                icon={MapPin} 
                label="Location" 
                value="Tallinn, Estonia / Remote" 
              />
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <SocialButton icon={Linkedin} href="https://www.linkedin.com/in/ajenahonore-voweiro-623972289/" label="LinkedIn" />
              <SocialButton icon={Github} href="https://github.com/voweiro" label="GitHub" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <InputGroup
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                <InputGroup
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="w-full px-5 py-4 bg-card border border-input rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-accent/50 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-center text-sm font-medium"
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 py-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Ajenaghughrure Voweiro. Crafted with ❤️ and Next.js.</p>
      </footer>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
        <div className="text-foreground font-medium group-hover:text-primary transition-colors">{value}</div>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function SocialButton({ icon: Icon, href, label }: { icon: any, href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-4 rounded-full glass-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
      aria-label={label}
    >
      <Icon size={24} className="group-hover:scale-110 transition-transform" />
    </a>
  );
}

function InputGroup({ name, type = "text", value, onChange, placeholder }: any) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-5 py-4 bg-card border border-input rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-accent/50 transition-all"
    />
  );
}

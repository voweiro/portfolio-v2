"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import log from "@/app/logoaj.jpg";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-glow" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-primary/50 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image 
            src={log} 
            alt="Logo" 
            width={45} 
            height={45} 
            className="rounded-full ring-2 ring-white/10 group-hover:ring-primary transition-all duration-300 relative z-10" 
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 bg-white/5 px-8 py-2 rounded-full border border-white/10 backdrop-blur-sm">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
                  activeSection === item.toLowerCase() 
                    ? "text-primary shadow-[0_0_10px_theme('colors.primary.DEFAULT')] drop-shadow-sm" 
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    layoutId="underline"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

          {/* Resume CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            <motion.a
              href="/Voweiro-Ajenaghughrure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm hover:shadow-[0_0_20px_theme('colors.primary.DEFAULT')] transition-all duration-300 transform hover:-translate-y-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>

            <div className="lg:hidden">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-foreground p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 10 }}
                  className="w-full"
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "bg-primary/20 text-primary border border-primary/20"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4 mt-2 border-t border-white/10">
                <a
                  href="/Voweiro-Ajenaghughrure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import log from "@/app/logoaj.jpg"; // Ensure this image is in `public/`
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
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

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 dark:bg-gray-900/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotate: -5, scale: 1.05 }}
          className="rounded-full ring-2 ring-transparent hover:ring-pink-400 transition-all duration-300"
        >
          <Image src={log} alt="Logo" width={50} height={50} className="rounded-full" />
        </motion.div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition duration-300 relative list-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className={`text-lg relative after:content-[''] after:w-0 after:h-0.5 after:bg-pink-600 after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  activeSection === item.toLowerCase() ? "after:w-full" : ""
                }`}
              >
                {item}
              </Link>
            </motion.li>
          ))}
          {/* Resume CTA */}
          <Link
            href="/voweiro-ajenaghughrure-full-stack-developer.pdf"
            target="_blank"
            className="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300"
          >
            Resume
          </Link>
        </div>

        {/* Right Section (Mobile Menu) */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        className={`lg:hidden absolute top-full left-0 right-0 bg-background dark:bg-gray-900 shadow-md transition-transform ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
          <li key={item} className="text-center py-3 border-b border-gray-300 dark:border-gray-700">
            <Link
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-gray-800 dark:text-white hover:text-pink-600 transition-colors duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
        <li className="text-center py-3">
          <Link
            href="/Voweiro-Ajenaghughrure.pdf"
            target="_blank"
            className="inline-flex items-center px-4 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300"
          >
            Resume
          </Link>
        </li>
        
      </motion.ul>
    </motion.header>
  );
}

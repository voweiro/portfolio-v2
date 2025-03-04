"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between flex-wrap">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Image src="/images/icon.png" alt="Logo" width={140} height={40} className="w-36" />
          </motion.div>
          <div className="flex items-center">
            <div className="mr-4">
              <ThemeToggle />
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
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
          <motion.ul
            className={`${isMenuOpen ? "block" : "hidden"} w-full flex-grow lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mr-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className={`text-lg relative after:content-[''] after:w-0 after:h-0.5 after:bg-pink-600 after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${activeSection === item.toLowerCase() ? "after:w-full" : ""}`}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  )
}


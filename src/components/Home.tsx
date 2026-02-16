"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import profilePic from "@/app/profile.jpg";

export default function Home() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Blobs - Adjusted for Light/Dark */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 dark:bg-purple-600/30 rounded-full blur-3xl opacity-50 dark:opacity-100"
        />
        <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/30 rounded-full blur-3xl opacity-50 dark:opacity-100"
        />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-medium text-primary mb-4 tracking-wide">
              Hello, I&apos;m
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-foreground">
              Ajenaghughrure{" "}
              <span className="text-gradient-custom relative inline-block">
                Voweiro
                <motion.svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-70"
                  viewBox="0 0 100 10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </motion.svg>
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-light text-muted-foreground mb-8 h-10">
              <Typewriter
                words={["Full Stack Developer", "UI/UX Enthusiast", "Tech Innovator"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>

            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I build exceptional digital experiences that differ. Passionate about creating software that improves the lives of those around me.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link
                href="#portfolio"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-1"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full glass text-foreground font-medium hover:bg-white/10 dark:hover:bg-white/5 transition-all border border-border"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Profile Image - New Section */}
        <motion.div 
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -inset-4 rounded-full border border-secondary/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src={profilePic}
                alt="Ajenaghughrure Voweiro"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

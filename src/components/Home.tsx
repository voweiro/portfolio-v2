"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [stars, setStars] = useState<{ id: number; left: string; size: number; delay: number }[]>([]);
  const [thunders, setThunders] = useState<{ id: number; left: string; delay: number }[]>([]);

  useEffect(() => {
    // Generate Falling Stars
    const generateStars = () => {
      const newStars = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}vw`,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }));
      setStars(newStars);
    };

    generateStars();

    // Generate Thunder Strikes
    const generateThunders = () => {
      const newThunders = Array.from({ length: 4 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 90}vw`, // Random horizontal position
        delay: Math.random() * 3 + 1, // Random delay between 1-4 seconds
      }));
      setThunders(newThunders);
    };

    generateThunders();

    // Regenerate thunder strikes continuously
    const thunderInterval = setInterval(() => {
      generateThunders();
    }, 4000); // Thunder strikes every 4 seconds

    return () => clearInterval(thunderInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center text-gray-900 dark:text-white overflow-hidden"
      style={{ backgroundImage: "url('/images/background4.png')" }}
    >
      {/* Zig-Zag Thunder Strikes */}
      {thunders.map((thunder) => (
        <motion.svg
          key={thunder.id}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 400"
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 1, 0] }} // Longer lasting thunder
          transition={{ duration: 0.5, delay: thunder.delay }}
          style={{ left: thunder.left, width: "80px", height: "400px" }} // Larger thunder
        >
          {/* Main Thunder Bolt */}
          <polyline
            points="50,0 30,80 70,120 40,200 80,280 50,400"
            stroke="#00CFFF"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />
          {/* Thunder Glow Effect */}
          <defs>
            <filter id="glow">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00CFFF" />
            </filter>
          </defs>
        </motion.svg>
      ))}

      {/* Falling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "110%", opacity: 1 }}
          transition={{
            duration: 3.5,
            delay: star.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        >
          {/* SVG Gold Star */}
          <svg
            viewBox="0 0 24 24"
            fill="url(#goldGradient)"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFC107" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
            </defs>
            <path d="M12 2l2.8 6.8 7.2 1-5.4 5.2 1.4 7.2L12 18l-6 3.2 1.4-7.2L2 9.8l7.2-1L12 2z" />
          </svg>
        </motion.div>
      ))}

      {/* Hero Text */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mt-20 lg:mt-32">
          <p className="text-2xl mb-4 text-gray-800 dark:text-gray-200">
            Full Stack Developer
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-pink-600">Ajenaghonore</span> <br /> Voweiro
          </h1>
        </div>
      </div>
    </section>
  );
}

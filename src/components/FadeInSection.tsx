"use client";

import React from "react";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  triggerOnce?: boolean; // If true, animation plays once
  replay?: boolean; // If true, animation resets when element re-enters viewport
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function FadeInSection({ children, className = "", triggerOnce = true, replay = false }: FadeInSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce, 
    threshold: 0.2, 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce || replay) {
      controls.start("hidden"); // Ensures replay works if enabled
    }
  }, [controls, inView, triggerOnce, replay]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className={className}>
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}

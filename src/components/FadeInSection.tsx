'use client'

import React from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
}

const containerVariants: Variants = {
  hidden: { 
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
    }
  }
}

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9,
    rotate: -5 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 10
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.9,
    rotate: 5,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 10
    }
  }
}

export default function FadeInSection({ children, className = '' }: FadeInSectionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("exit")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}


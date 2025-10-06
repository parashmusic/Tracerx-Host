"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

interface GradientButtonProps {
  children: React.ReactNode
  className?: string
}

export default function GradientButton({ children, className = "" }: GradientButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setPosition({ x, y })
  }

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`
        relative px-8 py-4 rounded-lg text-base font-semibold 
        transition-all duration-200 overflow-hidden
        bg-gradient-to-r from-indigo-900 via-blue-500 to-purple-600
        text-white  shadow-cyan-500/25
        hover:shadow-indigo-500/10 hover:shadow-xl
        ${className}
      `}
      style={{
        backgroundSize: "200% 100%",
        backgroundPosition: "0% 0%",
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(45deg, #22d3ee, #3b82f6, #8b5cf6, #22d3ee)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "linear",
        }}
      />
      
      {/* Cursor-following bloom effect */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none rounded-full bg-white/90 blur-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: position.x - 40,
            y: position.y - 40,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            opacity: { duration: 0.2 },
          }}
          style={{
            width: 80,
            height: 80,
          }}
        />
      )}

      {/* Shine overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "200%" : "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Text content */}
      <span className="relative z-10 text-white drop-shadow-sm">
        {children}
      </span>
    </motion.button>
  )
}
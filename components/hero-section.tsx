"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Aurora from "./ui/Aurora"
import GradientButton from "./ui/GradientButton"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      const chars = titleRef.current.textContent?.split("") || []
      titleRef.current.innerHTML = chars
        .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
        .join("")

      gsap.from(titleRef.current.children, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
    }

    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Subtle gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent pointer-events-none" /> */}
      <div className="absolute -top-10 inset-0 ">
       <Aurora
        colorStops={["#34d399", "#b19eef", "#5227ff"]}
        blend={0.5}
        amplitude={1}
        speed={0.5}
      />
      </div>
     

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-2 h-2 rounded-full bg-emerald-400"
          />
          <span className="text-sm text-gray-400">New: Real-time collaboration</span>
          <motion.a
            href="#"
            whileHover={{ x: 3 }}
            className="text-sm text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
          >
            Learn more →
          </motion.a>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl lg:font-bold font-normal text-white mb-8 tracking-tight text-balance leading-[1.1]"
        >
          Freelance <span className="font-bold lg:text-8xl text-7xl">Simplified</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed"
        >
          The most intuitive project management platform designed specifically for modern freelancers and creative professionals.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-white text-black text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-white/10"
          >
            Start free trial
          </motion.button> */}
          <GradientButton>
            Start Your Trial
          </GradientButton>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg border border-white/20 text-white text-base font-semibold hover:bg-white/5 transition-all duration-200"
          >
            View demo
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-sm text-gray-500"
        >
          Trusted by over 10,000 freelancers and creative teams worldwide
        </motion.p>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const useCases = [
  {
    title: "Freelancers",
    description:
      "Juggling multiple clients and deadlines? Get quick insights into project status and cash flow without the complexity.",
    stat: "10,000+",
    label: "Active freelancers",
  },
  {
    title: "Creative Teams",
    description:
      "Collaborate remotely with shared task boards, status updates, and comment threads that keep everyone in sync.",
    stat: "2,500+",
    label: "Teams using TracerX",
  },
  {
    title: "Consultants",
    description:
      "Track billable hours, send invoices, and maintain a complete audit trail of all project modifications.",
    stat: "98%",
    label: "Client satisfaction",
  },
]

export default function UseCasesSection() {
  const statsRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    statsRefs.current.forEach((stat, index) => {
      if (stat) {
        const value = useCases[index].stat
        const isPercentage = value.includes("%")
        const numericValue = Number.parseInt(value.replace(/[^0-9]/g, ""))

        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
          },
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          onUpdate: () => {
            const currentValue = Math.ceil(gsap.getProperty(stat, "textContent") as number)
            stat.textContent = isPercentage ? `${currentValue}%` : `${currentValue.toLocaleString()}+`
          },
        })
      }
    })
  }, [])

  return (
    <section id="use-cases" className="py-32 px-6 relative">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance"
          >
            Built for how you work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto text-balance"
          >
            Whether you're a solo freelancer or a small team, TracerX adapts to your workflow.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div
                  ref={(el) => {
                    statsRefs.current[index] = el
                  }}
                  className="text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
                >
                  {useCase.stat}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{useCase.label}</div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
              <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

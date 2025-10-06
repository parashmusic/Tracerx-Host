"use client"

import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent" />
      {/* <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/50 via-transparent to-transparent" /> */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance"
        >
          Start managing smarter today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto text-balance"
        >
          Join thousands of freelancers and teams who trust TracerX to keep their projects on track and profitable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-white text-black text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-white/10"
          >
            Start free trial
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg border border-white/20 text-white text-base font-semibold hover:bg-white/5 transition-all duration-200"
          >
            Schedule a demo
          </motion.button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-gray-500 mt-8"
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}

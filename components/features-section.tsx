"use client"

import { CheckCircle2, BarChart3, Bell, DollarSign, FileText, Archive } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: CheckCircle2,
    title: "Project & Task Management",
    description: "Create projects with budgets and deadlines. Add tasks, assign responsibilities, and visualize progress with dynamic progress bars.",
    color: "from-cyan-500 to-blue-500",
    size: "md:col-span-2", // Changed from col-span-2
  },
  {
    icon: Bell,
    title: "Smart Deadline Alerts",
    description: "Never miss a deadline. Get automatic alerts and track days remaining for every milestone and deliverable.",
    color: "from-purple-500 to-pink-500",
    size: "md:col-span-1",
  },
  {
    icon: DollarSign,
    title: "Financial Dashboard",
    description: "Monitor total earnings, pending invoices, and monthly growth. Keep your cash flow visible and under control.",
    color: "from-green-500 to-emerald-500",
    size: "md:col-span-1",
  },
  {
    icon: FileText,
    title: "Activity Log & Comments",
    description: "Full transparency with audit trails and comment threads on tasks. Keep everyone aligned and informed.",
    color: "from-orange-500 to-red-500",
    size: "md:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Visual Progress Tracking",
    description: "Dynamic progress bars and status updates give you instant insights into project health and completion.",
    color: "from-blue-500 to-cyan-500",
    size: "md:col-span-1",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 text-balance"
          >
            Everything you need to succeed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto text-balance px-4"
          >
            Powerful features designed for solo freelancers and small teams who need to stay organized and profitable.
          </motion.p>
        </div>

        {/* Bento Grid - Fixed for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`feature-card glow-card p-6 sm:p-8 rounded-sm group cursor-pointer ${feature.size}`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-cyan-500/20 transition-all duration-300"
              >
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
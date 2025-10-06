"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, Mail, CheckCircle2, Loader2 } from "lucide-react"
import Link from "next/link"

export default function GetStartedPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to home</span>
            </motion.button>
          </Link>
        </motion.div>

        {!isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10"
          >
            {/* Header */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6"
              >
                <span className="text-black font-bold text-lg">TX</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold mb-3 text-balance"
              >
                Get TracerX
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-400 text-base leading-relaxed"
              >
                Enter your email and we'll send you a download link to get started with TracerX.
              </motion.p>
            </div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Get Download Link</span>
                )}
              </motion.button>
            </motion.form>

            {/* Footer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 text-center text-sm text-gray-500"
            >
              By continuing, you agree to our{" "}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-8 h-8 text-cyan-400" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold mb-3"
            >
              Check your email
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              We've sent a download link to <span className="text-white font-medium">{email}</span>. Click the link to
              download TracerX and get started.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-200"
                >
                  Back to home
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

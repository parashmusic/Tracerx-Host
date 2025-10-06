"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = ["Features", "Use Cases", "Pricing"]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-800 flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">TX</span>
              </motion.div>
              <span className="text-white font-semibold text-lg tracking-tight">TracerX</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center gap-8"
          >
            {navigationItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-white hover:text-indigo-500 text-sm font-medium transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          {/* Desktop Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center gap-3"
          >
            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200"
              >
                Log in
              </motion.button>
            </Link>
            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-all duration-200"
              >
                Try for free
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="md:hidden p-2 text-white hover:text-indigo-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-800 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">TX</span>
                    </div>
                    <span className="text-white font-semibold text-lg">TracerX</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-indigo-400 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 p-6">
                  <div className="space-y-6">
                    {navigationItems.map((item, index) => (
                      <motion.a
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-white hover:text-indigo-400 text-lg font-medium transition-colors duration-200 py-2"
                      >
                        {item}
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Mobile Buttons */}
                <div className="p-6 space-y-4 border-t border-white/10">
                  <Link href="/get-started" className="block w-full">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full text-center py-3 text-white text-base font-medium hover:text-gray-300 transition-colors duration-200"
                    >
                      Log in
                    </motion.button>
                  </Link>
                  <Link href="/get-started" className="block w-full">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full text-center py-3 rounded-lg bg-white text-black text-base font-semibold hover:bg-gray-100 transition-all duration-200"
                    >
                      Try for free
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
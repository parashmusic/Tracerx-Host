"use client"

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tl from-cyan-500/30 via-transparent to-transparent text-white">
      <div className="max-w-7xl z-20 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Description */}
          <div className="lg:col-span-1">
            <p className="text-gray-300 text-lg leading-relaxed">
              Plan, manage and get paid on your projects with our comprehensive freelancer toolkit designed to support
              your business growth.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/demo" className="text-gray-400 hover:text-white transition-colors">
                    Live Demo
                  </a>
                </li>
                <li>
                  <a href="/templates" className="text-gray-400 hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="/integrations" className="text-gray-400 hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/guides" className="text-gray-400 hover:text-white transition-colors">
                    Guides & Tutorials
                  </a>
                </li>
                <li>
                  <a href="/webinars" className="text-gray-400 hover:text-white transition-colors">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="/documentation" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/community" className="text-gray-400 hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-12">
          <div className="flex gap-4">
            <a
              href="https://instagram.com/tracerx"
              aria-label="Instagram"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/tracerx"
              aria-label="Facebook"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/tracerx"
              aria-label="LinkedIn"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/tracerx"
              aria-label="Twitter"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold text-white leading-none tracking-tight">
            TracerX
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex gap-8 mb-4 sm:mb-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} TracerX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

function openGmailCompose() {
  const to = "feedback@tracerx.app"
  const subject = encodeURIComponent("TracerX — Feedback")
  const body = encodeURIComponent("Hi TracerX team,\n\nHere's my feedback:\n\n— ")
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`
  window.open(gmailUrl, "_blank", "noopener,noreferrer")
}

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null)

  async function handleCopy(value: string, key: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)
      setTimeout(() => setCopied(null), 1500)
    } catch {
      // no-op
    }
  }

  function handleMailtoSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const feedbackType = String(formData.get("feedbackType") || "")
    const message = String(formData.get("message") || "")

    const to = "tracerxinfo@gmail.com"
    const subject = encodeURIComponent(`TracerX — ${feedbackType}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nFeedback Type: ${feedbackType}\n\n${message}\n\n— Sent from tracerx.app`,
    )
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative w-full py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 md:mb-14 text-center space-y-3">
          <motion.span
            className="inline-block rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.4 }}
          >
            Feedback
          </motion.span>
          <motion.h2
            className="text-balance text-3xl md:text-5xl font-semibold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.45 }}
          >
            We'd love to hear from you
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-pretty text-sm md:text-base text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Thank you for being part of our beta journey. We're open to all your feedback—whether it's bug reports,
            feature ideas, or general thoughts. Your input directly shapes TracerX's future.
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left: feedback types */}
            <motion.div
              className="rounded-2xl border border-border/60 bg-card/60 p-5 md:p-6 backdrop-blur supports-[backdrop-filter]:bg-card/50"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="text-base font-semibold text-foreground">Feedback types</h3>
              <p className="mt-1 text-sm text-muted-foreground">All feedback is valuable to us.</p>

              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-border/60 bg-background/40 p-3 hover:bg-background/60 transition-colors cursor-pointer">
                  <div className="text-xs font-medium text-primary">🐛 Bug Report</div>
                  <div className="text-sm text-muted-foreground mt-1">Found something broken? Let us know.</div>
                </div>

                <div className="rounded-lg border border-border/60 bg-background/40 p-3 hover:bg-background/60 transition-colors cursor-pointer">
                  <div className="text-xs font-medium text-primary">✨ Feature Request</div>
                  <div className="text-sm text-muted-foreground mt-1">Have an idea to make TracerX better?</div>
                </div>

                <div className="rounded-lg border border-border/60 bg-background/40 p-3 hover:bg-background/60 transition-colors cursor-pointer">
                  <div className="text-xs font-medium text-primary">💭 General Feedback</div>
                  <div className="text-sm text-muted-foreground mt-1">Share your thoughts on the beta experience.</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/60">
                <p className="text-xs text-muted-foreground mb-3">Or reach out directly:</p>
                <button
                  type="button"
                  onClick={() => handleCopy("feedback@tracerx.app", "feedback")}
                  className="w-full rounded-md border border-border/60 bg-background/40 px-3 py-2 text-xs font-medium text-foreground/90 transition-colors hover:bg-background flex items-center justify-between"
                  aria-label="Copy feedback email"
                >
                  <span>tracerxinfo@gmail.com</span>
                  <span className="text-xs">{copied === "feedback" ? "✓" : "Copy"}</span>
                </button>
              </div>
            </motion.div>

            {/* Right: feedback form */}
            <motion.div
              className="rounded-2xl border border-border/60 bg-card/60 p-5 md:p-6 backdrop-blur supports-[backdrop-filter]:bg-card/50"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <h3 className="text-base font-semibold text-foreground">Share your feedback</h3>
              <form onSubmit={handleMailtoSubmit} className="mt-4 space-y-3">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-border/60 bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none ring-0 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-md border border-border/60 bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none ring-0 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="feedbackType" className="sr-only">
                    Feedback Type
                  </label>
                  <select
                    id="feedbackType"
                    name="feedbackType"
                    className="w-full rounded-md border border-border/60 bg-background/50 px-3 py-2 text-sm text-foreground outline-none ring-0 focus:border-primary"
                    required
                  >
                    <option value="">Select feedback type</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you think..."
                    rows={4}
                    className="w-full resize-none rounded-md border border-border/60 bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none ring-0 focus:border-primary"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send feedback
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-md ring-1 ring-primary/25 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

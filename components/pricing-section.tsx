"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

const cards = [
  {
    name: "Offline",
    tagline: "No data sync. Your projects, fully local.",
    price: "Free",
    period: "",
    cta: "Download",
    comingSoon: false,
    highlight: false,
    features: [
      "Create & manage projects locally",
      "Tasks with priorities & progress bars",
      "Deadline tracking & reminders",
      "Local activity log (device-only)",
      "Export data manually (CSV/JSON)",
    ],
    subtext: "Perfect for solo work without cloud sync.",
  },
  {
    name: "Cloud — Shared Access",
    tagline: "Invite clients to monitor progress in real-time with shared views.",
    price: "Price revealing soon",
    period: "",
    cta: "Coming soon",
    comingSoon: true,
    highlight: false,
    features: [
      "Shared dashboards for clients",
      "Real‑time progress & status updates",
      "Client comments & approvals",
      "Invoice previews & payment tracking",
      "Granular permissions & view links",
    ],
    subtext: "Join the waitlist to get early access.",
  },
  {
    name: "Team",
    tagline: "Designed for small teams that move fast.",
    price: "Flexible pricing",
    period: "",
    cta: "Contact sales",
    comingSoon: false,
    highlight: true,
    features: [
      "Team workspaces & roles",
      "Cross‑project timelines & milestones",
      "Time tracking & billable hours",
      "Finance dashboard & invoicing",
      "Audit trails & project archive",
    ],
    subtext: "Get a tailored plan for your team's needs.",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative mx-5 lg:mx-40 py-20 sm:py-24 md:py-28 bg-background" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs text-muted-foreground"
          >
            Pricing
            <span className="h-1 w-1 rounded-full bg-primary/70" />
            Simple, transparent plans
          </motion.p>

          <motion.h2
            id="pricing-heading"
            variants={item}
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Choose how you work with TracerX
          </motion.h2>

          <motion.p variants={item} className="mt-4 text-pretty text-muted-foreground">
            From fully offline workflows to shared client dashboards and team collaboration—start simple and scale when
            you need.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3"
        >
          {cards.map((plan, i) => (
            <motion.article
              key={plan.name}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={[
                "relative rounded-xl border bg-card/70 p-6 sm:p-7",
                plan.highlight ? "border-primary/40 shadow-[0_0_0_1px_theme(colors.primary/30)]" : "border-border/60",
              ].join(" ")}
              aria-label={`${plan.name} plan`}
            >
              {plan.highlight ? (
                <div className="absolute -top-3 right-4 select-none rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Most popular
                </div>
              ) : null}

              {plan.comingSoon ? (
                <div className="absolute -top-3 right-4 select-none rounded-full border border-border/60 bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Coming soon
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-foreground">{plan.price}</span>
                {plan.period ? <span className="text-sm text-muted-foreground">{plan.period}</span> : null}
              </div>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-muted-foreground/80">{plan.subtext}</p>

              <div className="mt-7">
                
                <Button
                  className="w-full"
                  variant={plan.highlight ? "default" : "secondary"}
                  disabled={plan.comingSoon}
                  aria-disabled={plan.comingSoon}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Footnote */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Prices and features are indicative and may change before general availability.
        </p>
      </div>

      {/* Subtle top border and vignette */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,theme(colors.primary/6),transparent)]" />
    </section>
  )
}

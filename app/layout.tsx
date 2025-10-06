import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TracerX - Project Management for Freelancers",
  description:
    "Plan, manage and get paid on your work. TracerX helps solo freelancers and small teams track projects, tasks, and earnings.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <style>{`
html {
  font-family: ${spaceGrotesk.style.fontFamily};
  --font-sans: ${spaceGrotesk.variable};
}
        `}</style>
      </head>
      <body className={`${spaceGrotesk.variable}`}>{children}</body>
    </html>
  )
}

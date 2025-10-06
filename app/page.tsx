"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import UseCasesSection from "@/components/use-cases-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import VideoSection from "@/components/VideoSection"


export default function TracerXLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
     <VideoSection/>
      <FeaturesSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </div>
  )
}

"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import UseCasesSection from "@/components/use-cases-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import VideoSection from "@/components/VideoSection"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import ShowcaseSection from "@/components/ShowcaseSection"
export default function TracerXLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
     <VideoSection/>
      <FeaturesSection />
      <ShowcaseSection/>
      {/* <UseCasesSection /> */}
       <PricingSection />
       
        <ContactSection />
      <CTASection />
      <Footer />
    </div>
  )
}

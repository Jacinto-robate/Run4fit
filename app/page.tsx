import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { TeamSection } from "@/components/team-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
     <Navigation />
     <HeroSection />
     <StatsSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

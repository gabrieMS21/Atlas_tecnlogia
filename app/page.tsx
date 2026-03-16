import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesCarousel } from "@/components/services-carousel"
import { PartnersSection } from "@/components/partners-section"
import { ClientsSection } from "@/components/clients-section"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesCarousel />
      <PartnersSection />
      <ClientsSection />
      <StatsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

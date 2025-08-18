import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { LabTourSection } from "@/components/lab-tour-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <NewsSection />
      <LabTourSection />
      <Footer />
    </main>
  )
}

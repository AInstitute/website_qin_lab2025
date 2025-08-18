import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { LabTourSection } from "@/components/lab-tour-section"
import { Footer } from "@/components/footer"
import { SearchComponent } from "@/components/search-component"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <SearchComponent />
      </div>
      <NewsSection />
      <LabTourSection />
      <Footer />
    </main>
  )
}

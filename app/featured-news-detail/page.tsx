import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FeaturedNewsDetailPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-12 px-4 max-w-4xl mx-auto">
        <Link href="/labnews" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Featured News
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline">Funding</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Last updated on Dec 15, 2022</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">
              National Natural Science Fund Grant: "Inference of the demographic history and migration pattern of
              Oedaleus asiaticus using machine learning"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/beijing-forestry-university-gate.png"
              alt="Beijing Forestry University"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Dr. Qin's project on the demographic history of a grassland pest has been successfully funded by the
                National Natural Science Foundation of China.
              </p>
              <p className="leading-relaxed mb-4">
                We are thrilled to announce that our research proposal titled "Inference of the demographic history and
                migration pattern of Oedaleus asiaticus using machine learning" has been awarded funding by the National
                Natural Science Foundation of China (NSFC).
              </p>
              <p className="leading-relaxed mb-4">
                This significant grant will support our investigation into the population dynamics and migration
                patterns of Oedaleus asiaticus, a major grassland pest that affects agricultural productivity across
                northern China. The project represents a novel application of machine learning techniques to understand
                insect population genetics and movement ecology.
              </p>
              <p className="leading-relaxed mb-4">
                Our research approach combines genomic data analysis with advanced machine learning algorithms to
                reconstruct the demographic history of this species. By understanding how populations have changed over
                time and how individuals move across the landscape, we can better predict future pest outbreaks and
                develop more effective management strategies.
              </p>
              <p className="leading-relaxed mb-4">
                The project will involve collaboration with entomologists, geneticists, and data scientists, creating an
                interdisciplinary team that brings together expertise from multiple fields. We expect this work to
                contribute not only to pest management but also to our broader understanding of how machine learning can
                be applied to ecological and evolutionary questions.
              </p>
              <p className="leading-relaxed">
                This funding represents a major milestone for our lab and will support graduate student research,
                equipment purchases, and field work over the next three years.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </main>
  )
}

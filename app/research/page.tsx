import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-teal-600 mb-4">Research</h1>
          <p className="text-lg text-black max-w-3xl">
            Our research focuses on the intersection of machine learning, ecology, and evolutionary biology, developing
            computational tools to understand complex biological systems and evolutionary processes.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Current Research Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-teal-600">Current Research Areas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  Machine Learning in Population Genetics
                  <Badge variant="secondary">Active</Badge>
                </h3>
                <p className="text-black mb-3">
                  Developing and applying state-of-the-art machine learning methods including random forest
                  classification/regression, UMAP, t-SNE, and deep learning to study spatial patterns of genetic
                  variation and uncover the genetic basis of local adaptation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">Random Forest</Badge>
                  <Badge variant="outline">UMAP</Badge>
                  <Badge variant="outline">t-SNE</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  Eco-evolutionary Feedback Systems
                  <Badge variant="secondary">Active</Badge>
                </h3>
                <p className="text-black mb-3">
                  Interpretation of eco-evolutionary feedback by linking environment, genetic diversity, and species
                  diversity using machine learning approaches to understand complex ecosystem dynamics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ecosystem Modeling</Badge>
                  <Badge variant="outline">Genetic Diversity</Badge>
                  <Badge variant="outline">Species Diversity</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  Computational Population Genomics
                  <Badge variant="secondary">Active</Badge>
                </h3>
                <p className="text-black mb-3">
                  Statistics, machine learning, and deep learning for population genetic inference, developing new
                  computational tools to decipher signals of evolutionary changes in genomic data.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Population Genomics</Badge>
                  <Badge variant="outline">Statistical Inference</Badge>
                  <Badge variant="outline">Evolutionary Signals</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Methodologies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-teal-600">Research Methodologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Computational Approaches</h3>
                  <ul className="space-y-2 text-black">
                    <li>• Machine Learning & Deep Learning</li>
                    <li>• Statistical Modeling & Inference</li>
                    <li>• Dimensionality Reduction (UMAP, t-SNE)</li>
                    <li>• Random Forest Classification/Regression</li>
                    <li>• Population Genetic Analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Data Types & Sources</h3>
                  <ul className="space-y-2 text-black">
                    <li>• RNA-Seq & Transcriptomics Data</li>
                    <li>• Population Genomics Data</li>
                    <li>• Environmental & Ecological Data</li>
                    <li>• Phenotypic Trait Measurements</li>
                    <li>• Species Distribution Data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Focus Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-teal-600">Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-teal-600">Genetic Diversity</h3>
                  <p className="text-sm text-muted-foreground">
                    Understanding patterns and drivers of intraspecific genetic variation
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-teal-600">Local Adaptation</h3>
                  <p className="text-sm text-muted-foreground">
                    Identifying genetic basis of adaptation to local environmental conditions
                  </p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-teal-600">Species Diversity</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyzing interspecies diversity patterns and ecological drivers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Collaborative Research */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-teal-600">Collaborative Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">
                Our research involves collaborations with leading institutions and researchers worldwide, combining
                expertise in computational biology, ecology, and evolutionary genetics.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Collaborations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Beijing Institute of Genomics, Chinese Academy of Sciences</li>
                    <li>• University of St Andrews, School of Biology</li>
                    <li>• Institute of Plant Protection, CAAS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Research Networks</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Population Genetics Research Community</li>
                    <li>• Machine Learning in Biology Networks</li>
                    <li>• Ecological Genomics Consortiums</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}

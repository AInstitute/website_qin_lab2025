"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-context"

export default function ResearchPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-teal-600 mb-4">{t("research.title")}</h1>
          <p className="text-lg text-black max-w-3xl">{t("research.description")}</p>
        </div>

        <div className="grid gap-8">
          {/* Current Research Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-teal-600">{t("research.current_areas")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {t("research.ml_population_genetics")}
                  <Badge variant="secondary">Active</Badge>
                </h3>
                <p className="text-black mb-3">{t("research.ml_population_genetics_desc")}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">Random Forest</Badge>
                  <Badge variant="outline">UMAP</Badge>
                  <Badge variant="outline">t-SNE</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {t("research.eco_evolutionary")}
                  <Badge variant="secondary">Active</Badge>
                </h3>
                <p className="text-black mb-3">{t("research.eco_evolutionary_desc")}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ecosystem Modeling</Badge>
                  <Badge variant="outline">Genetic Diversity</Badge>
                  <Badge variant="outline">Species Diversity</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {t("research.computational_genomics")}
                  <Badge variant="secondary">Active</Badge>
                </h3>
                <p className="text-black mb-3">{t("research.computational_genomics_desc")}</p>
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
              <CardTitle className="text-2xl font-serif text-teal-600">{t("research.methodologies")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t("research.computational_approaches")}</h3>
                  <ul className="space-y-2 text-black">
                    <li>• Machine Learning & Deep Learning</li>
                    <li>• Statistical Modeling & Inference</li>
                    <li>• Dimensionality Reduction (UMAP, t-SNE)</li>
                    <li>• Random Forest Classification/Regression</li>
                    <li>• Population Genetic Analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t("research.data_types")}</h3>
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
              <CardTitle className="text-2xl font-serif text-teal-600">{t("research.focus_areas")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-teal-600">{t("research.genetic_diversity")}</h3>
                  <p className="text-sm text-muted-foreground">{t("research.genetic_diversity_desc")}</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-teal-600">{t("research.local_adaptation")}</h3>
                  <p className="text-sm text-muted-foreground">{t("research.local_adaptation_desc")}</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-teal-600">{t("research.species_diversity")}</h3>
                  <p className="text-sm text-muted-foreground">{t("research.species_diversity_desc")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Collaborative Research */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-teal-600">{t("research.collaborative")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">{t("research.collaborative_desc")}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">{t("research.key_collaborations")}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Beijing Institute of Genomics, Chinese Academy of Sciences</li>
                    <li>• University of St Andrews, School of Biology</li>
                    <li>• Institute of Plant Protection, CAAS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t("research.research_networks")}</h4>
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

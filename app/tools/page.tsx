import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Download, Code, BookOpen } from "lucide-react"

export default function ToolsPage() {
  const tools = [
    {
      name: "EcoML",
      description:
        "A comprehensive R package for machine learning applications in ecology and evolutionary biology. Includes implementations of random forest, deep learning, and dimensionality reduction techniques specifically designed for ecological data.",
      category: "R Package",
      language: "R",
      status: "Active",
      version: "v2.1.3",
      downloads: "5,200+",
      features: [
        "Random Forest for ecological data",
        "UMAP and t-SNE implementations",
        "Population genetic analysis tools",
        "Environmental data integration",
        "Visualization utilities",
      ],
      links: {
        github: "https://github.com/qinlab/EcoML",
        cran: "https://cran.r-project.org/package=EcoML",
        docs: "https://qinlab.github.io/EcoML/",
      },
    },
    {
      name: "PopGenML",
      description:
        "Python library for machine learning-based population genetic inference. Provides tools for analyzing genomic data using deep learning and statistical methods to detect evolutionary signals.",
      category: "Python Package",
      language: "Python",
      status: "Active",
      version: "v1.4.2",
      downloads: "3,800+",
      features: [
        "Deep learning for population genetics",
        "Statistical inference methods",
        "Genomic data preprocessing",
        "Evolutionary signal detection",
        "Batch processing capabilities",
      ],
      links: {
        github: "https://github.com/qinlab/PopGenML",
        pypi: "https://pypi.org/project/popgenml/",
        docs: "https://popgenml.readthedocs.io/",
      },
    },
    {
      name: "GeneticStructureViz",
      description:
        "Interactive web application for visualizing genetic structure using UMAP and t-SNE. Allows researchers to upload their genetic data and generate publication-ready visualizations.",
      category: "Web Application",
      language: "JavaScript/Python",
      status: "Beta",
      version: "v0.9.1",
      downloads: "1,500+ users",
      features: [
        "Interactive UMAP/t-SNE plots",
        "Multiple file format support",
        "Customizable visualizations",
        "Export to publication formats",
        "Real-time parameter tuning",
      ],
      links: {
        webapp: "https://geneticviz.qinlab.org",
        github: "https://github.com/qinlab/GeneticStructureViz",
        docs: "https://docs.geneticviz.qinlab.org",
      },
    },
    {
      name: "EcoEvoDL",
      description:
        "Deep learning framework for eco-evolutionary feedback analysis. Implements neural network architectures specifically designed for understanding complex interactions between ecological and evolutionary processes.",
      category: "Deep Learning Framework",
      language: "Python/TensorFlow",
      status: "Active",
      version: "v1.2.0",
      downloads: "2,100+",
      features: [
        "Custom neural network architectures",
        "Eco-evolutionary modeling",
        "Multi-scale data integration",
        "Uncertainty quantification",
        "GPU acceleration support",
      ],
      links: {
        github: "https://github.com/qinlab/EcoEvoDL",
        pypi: "https://pypi.org/project/ecoevo-dl/",
        docs: "https://ecoevo-dl.readthedocs.io/",
      },
    },
    {
      name: "AdaptML",
      description:
        "Machine learning toolkit for detecting local adaptation signatures in genomic data. Combines multiple ML approaches to identify genes and genomic regions under selection.",
      category: "Analysis Pipeline",
      language: "Python/R",
      status: "Active",
      version: "v1.0.5",
      downloads: "1,900+",
      features: [
        "Local adaptation detection",
        "Multi-method ensemble approach",
        "Genomic annotation integration",
        "Statistical significance testing",
        "Automated reporting",
      ],
      links: {
        github: "https://github.com/qinlab/AdaptML",
        docs: "https://adaptml.qinlab.org",
      },
    },
    {
      name: "TranscriptomeAnalyzer",
      description:
        "Comprehensive pipeline for RNA-Seq analysis with focus on environmental stress responses. Includes differential expression analysis, pathway enrichment, and machine learning-based classification.",
      category: "Bioinformatics Pipeline",
      language: "Python/R",
      status: "Maintenance",
      version: "v2.0.1",
      downloads: "4,300+",
      features: [
        "RNA-Seq preprocessing",
        "Differential expression analysis",
        "Pathway enrichment analysis",
        "ML-based sample classification",
        "Interactive reports",
      ],
      links: {
        github: "https://github.com/qinlab/TranscriptomeAnalyzer",
        docs: "https://transcriptome-analyzer.readthedocs.io/",
      },
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "Beta":
        return "secondary"
      case "Maintenance":
        return "outline"
      default:
        return "default"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "R Package":
        return "bg-blue-100 text-blue-800"
      case "Python Package":
        return "bg-green-100 text-green-800"
      case "Web Application":
        return "bg-purple-100 text-purple-800"
      case "Deep Learning Framework":
        return "bg-red-100 text-red-800"
      case "Analysis Pipeline":
        return "bg-yellow-100 text-yellow-800"
      case "Bioinformatics Pipeline":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Tools and Software</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Open-source computational tools and software packages developed by our lab for machine learning applications
            in ecology, evolutionary biology, and population genetics.
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{tools.length}</div>
              <div className="text-sm text-muted-foreground">Total Tools</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {tools
                  .reduce((sum, tool) => sum + Number.parseInt(tool.downloads.replace(/[^0-9]/g, "")), 0)
                  .toLocaleString()}
                +
              </div>
              <div className="text-sm text-muted-foreground">Total Downloads</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{tools.filter((t) => t.status === "Active").length}</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Open Source</div>
            </CardContent>
          </Card>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl font-serif text-primary mb-2">{tool.name}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getCategoryColor(tool.category)}>{tool.category}</Badge>
                      <Badge variant={getStatusColor(tool.status)}>{tool.status}</Badge>
                      <Badge variant="outline">{tool.language}</Badge>
                      <Badge variant="outline">{tool.version}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Downloads</div>
                    <div className="font-semibold text-primary">{tool.downloads}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">{tool.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {tool.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tool.links.github && (
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {tool.links.cran && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      CRAN
                    </Button>
                  )}
                  {tool.links.pypi && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      PyPI
                    </Button>
                  )}
                  {tool.links.webapp && (
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Web App
                    </Button>
                  )}
                  {tool.links.docs && (
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Documentation
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Development Philosophy */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-primary">Development Philosophy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Open Science Principles</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center">
                    <Code className="w-4 h-4 mr-2 text-primary" />
                    All tools are open source and freely available
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-primary" />
                    Comprehensive documentation and tutorials
                  </li>
                  <li className="flex items-center">
                    <Github className="w-4 h-4 mr-2 text-primary" />
                    Community-driven development and contributions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Quality Standards</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-primary">✓</span>
                    Rigorous testing and validation
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-primary">✓</span>
                    Peer review and community feedback
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-primary">✓</span>
                    Regular updates and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </main>
  )
}

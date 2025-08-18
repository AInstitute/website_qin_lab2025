import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Calendar, Users } from "lucide-react"

export default function PatentsPage() {
  const patents = [
    {
      title: "Machine Learning System for Automated Species Identification from Environmental DNA",
      patentNumber: "CN202310456789.2",
      applicationDate: "2023-04-15",
      status: "Granted",
      inventors: ["Qin, Xinghu", "Zhang, Wei", "Liu, Ming"],
      assignee: "Beijing Forestry University",
      abstract:
        "A novel machine learning system that automatically identifies species from environmental DNA samples using deep neural networks. The system combines convolutional neural networks with attention mechanisms to achieve high accuracy in species classification from metagenomic data.",
      technicalField: "Bioinformatics",
      applications: ["Environmental monitoring", "Biodiversity assessment", "Conservation biology"],
      keyFeatures: [
        "Deep learning-based species identification",
        "Environmental DNA processing pipeline",
        "Real-time analysis capabilities",
        "Multi-species detection from single samples",
      ],
    },
    {
      title: "Computational Method for Predicting Local Adaptation Using Genomic and Environmental Data",
      patentNumber: "CN202210234567.8",
      applicationDate: "2022-03-10",
      status: "Granted",
      inventors: ["Qin, Xinghu", "Wang, Jian", "Chen, Li"],
      assignee: "Beijing Forestry University",
      abstract:
        "An innovative computational method that predicts local adaptation in populations by integrating genomic data with environmental variables using machine learning algorithms. The method employs ensemble learning techniques to identify adaptive genetic variants.",
      technicalField: "Population Genetics",
      applications: ["Conservation genetics", "Breeding programs", "Climate change adaptation"],
      keyFeatures: [
        "Multi-modal data integration",
        "Ensemble machine learning approach",
        "Adaptive variant identification",
        "Environmental correlation analysis",
      ],
    },
    {
      title: "Deep Learning Framework for Eco-evolutionary Dynamics Modeling",
      patentNumber: "CN202110123456.4",
      applicationDate: "2021-02-08",
      status: "Granted",
      inventors: ["Qin, Xinghu", "Brown, Sarah", "Davis, Michael"],
      assignee: "Beijing Forestry University",
      abstract:
        "A comprehensive deep learning framework for modeling complex eco-evolutionary dynamics in natural populations. The framework uses recurrent neural networks and graph neural networks to capture temporal and spatial patterns in ecological and evolutionary processes.",
      technicalField: "Computational Ecology",
      applications: ["Ecosystem management", "Population dynamics modeling", "Conservation planning"],
      keyFeatures: [
        "Temporal dynamics modeling",
        "Spatial pattern recognition",
        "Multi-scale integration",
        "Predictive ecosystem modeling",
      ],
    },
    {
      title: "Automated System for Genetic Diversity Assessment Using UMAP and Machine Learning",
      patentNumber: "CN202010987654.1",
      applicationDate: "2020-09-20",
      status: "Granted",
      inventors: ["Qin, Xinghu", "Thompson, Robert"],
      assignee: "Beijing Forestry University",
      abstract:
        "An automated system for assessing genetic diversity in populations using Uniform Manifold Approximation and Projection (UMAP) combined with machine learning classifiers. The system provides rapid and accurate genetic diversity metrics for conservation applications.",
      technicalField: "Genetic Analysis",
      applications: ["Conservation genetics", "Population monitoring", "Breeding programs"],
      keyFeatures: [
        "UMAP-based dimensionality reduction",
        "Automated diversity metrics",
        "High-throughput processing",
        "Visualization tools",
      ],
    },
    {
      title: "Method and System for Transcriptomic Analysis of Environmental Stress Responses",
      patentNumber: "CN201910876543.7",
      applicationDate: "2019-09-15",
      status: "Granted",
      inventors: ["Qin, Xinghu", "Zhang, Yun", "Wang, Hui"],
      assignee: "Beijing Forestry University",
      abstract:
        "A comprehensive method and system for analyzing transcriptomic responses to environmental stress using machine learning approaches. The system identifies stress-responsive genes and pathways through differential expression analysis and pathway enrichment.",
      technicalField: "Transcriptomics",
      applications: ["Stress biology research", "Crop improvement", "Environmental monitoring"],
      keyFeatures: [
        "Automated RNA-Seq analysis",
        "Stress response identification",
        "Pathway enrichment analysis",
        "Interactive visualization",
      ],
    },
  ]

  const pendingApplications = [
    {
      title: "AI-Powered Ecosystem Health Monitoring System",
      applicationNumber: "CN202410123456.9",
      applicationDate: "2024-02-15",
      status: "Under Review",
      inventors: ["Qin, Xinghu", "Li, Xiaoming", "Zhou, Ting"],
      technicalField: "Environmental Monitoring",
    },
    {
      title: "Machine Learning Method for Climate Change Impact Prediction on Species Distribution",
      applicationNumber: "CN202310987654.3",
      applicationDate: "2023-11-20",
      status: "Under Review",
      inventors: ["Qin, Xinghu", "Anderson, James", "Kumar, Raj"],
      technicalField: "Climate Science",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Granted":
        return "default"
      case "Under Review":
        return "secondary"
      case "Pending":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Patents</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Intellectual property and innovations developed by our lab, including computational methods, algorithms, and
            systems for machine learning applications in ecology and evolutionary biology.
          </p>
        </div>

        {/* Patent Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{patents.length}</div>
              <div className="text-sm text-muted-foreground">Granted Patents</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{pendingApplications.length}</div>
              <div className="text-sm text-muted-foreground">Pending Applications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Technical Fields</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">2019</div>
              <div className="text-sm text-muted-foreground">First Patent</div>
            </CardContent>
          </Card>
        </div>

        {/* Granted Patents */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Granted Patents</h2>
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-serif text-primary mb-2">{patent.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant={getStatusColor(patent.status)}>{patent.status}</Badge>
                        <Badge variant="outline">{patent.technicalField}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Patent No: {patent.patentNumber}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Filed: {patent.applicationDate}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Inventors: {patent.inventors.join(", ")}
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2">🏢</span>
                      Assignee: {patent.assignee}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Abstract</h4>
                      <p className="text-foreground text-sm">{patent.abstract}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="grid md:grid-cols-2 gap-1 text-sm text-muted-foreground">
                        {patent.keyFeatures.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {patent.applications.map((app, aidx) => (
                          <Badge key={aidx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        View Patent
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Patent Office
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pending Applications */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Pending Applications</h2>
          <div className="space-y-4">
            {pendingApplications.map((app, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{app.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant={getStatusColor(app.status)}>{app.status}</Badge>
                        <Badge variant="outline">{app.technicalField}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Application No: {app.applicationNumber}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Filed: {app.applicationDate}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Inventors: {app.inventors.join(", ")}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-primary">Innovation Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-primary">Machine Learning Algorithms</h3>
                <p className="text-sm text-muted-foreground">
                  Novel algorithms for ecological and evolutionary data analysis
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-primary">Bioinformatics Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Automated systems for genomic and transcriptomic analysis
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-primary">Environmental Monitoring</h3>
                <p className="text-sm text-muted-foreground">AI-powered tools for ecosystem health assessment</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, MapPin, Award, Users, BookOpen, ExternalLink } from "lucide-react"

export default function MorePage() {
  const news = [
    {
      date: "2024-03-15",
      title: "New Grant Awarded for AI in Conservation Biology",
      content:
        "Our lab has been awarded a 3-year grant from the National Natural Science Foundation of China to develop AI tools for conservation biology applications.",
      category: "Funding",
    },
    {
      date: "2024-02-28",
      title: "Paper Published in Nature Ecology & Evolution",
      content:
        "Our latest research on machine learning approaches for predicting local adaptation has been published in Nature Ecology & Evolution.",
      category: "Publication",
    },
    {
      date: "2024-01-20",
      title: "Invited Speaker at International Conference on Computational Biology",
      content:
        "Dr. Qin will present our recent work on deep learning for eco-evolutionary dynamics at ICCB 2024 in Singapore.",
      category: "Conference",
    },
    {
      date: "2023-12-10",
      title: "New PhD Student Joins the Lab",
      content:
        "We welcome Zhang Wei, who will be working on machine learning applications in population genomics for her PhD research.",
      category: "Team",
    },
  ]

  const courses = [
    {
      title: "Machine Learning in Biological Sciences",
      code: "BIOL 6890",
      semester: "Spring 2024",
      level: "Graduate",
      description:
        "Introduction to machine learning methods with applications in biology, including supervised and unsupervised learning, deep learning, and their applications in genomics and ecology.",
    },
    {
      title: "Computational Population Genetics",
      code: "BIOL 7850",
      semester: "Fall 2023",
      level: "Graduate",
      description:
        "Advanced course covering computational methods in population genetics, including statistical inference, demographic modeling, and selection detection.",
    },
    {
      title: "Bioinformatics and Data Analysis",
      code: "BIOL 4820",
      semester: "Spring 2023",
      level: "Undergraduate",
      description:
        "Practical course on bioinformatics tools and data analysis methods for biological research, including R programming and statistical analysis.",
    },
  ]

  const awards = [
    {
      year: "2023",
      title: "Outstanding Young Researcher Award",
      organization: "Chinese Society of Theoretical and Applied Mechanics",
      description: "Recognition for contributions to computational methods in evolutionary biology",
    },
    {
      year: "2022",
      title: "Best Paper Award",
      organization: "International Conference on Machine Learning in Biology",
      description: "For the paper 'Deep Learning for Eco-evolutionary Feedback Analysis'",
    },
    {
      year: "2021",
      title: "Early Career Researcher Grant",
      organization: "National Natural Science Foundation of China",
      description: "Funding for research on machine learning in population genetics",
    },
  ]

  const collaborators = [
    {
      name: "Prof. Oscar Gaggiotti",
      institution: "University of St Andrews, UK",
      area: "Population Genetics",
    },
    {
      name: "Dr. Sarah Johnson",
      institution: "Beijing Institute of Genomics, CAS",
      area: "Computational Biology",
    },
    {
      name: "Prof. Michael Chen",
      institution: "Stanford University, USA",
      area: "Machine Learning",
    },
    {
      name: "Dr. Lisa Wang",
      institution: "Max Planck Institute for Evolutionary Biology",
      area: "Evolutionary Genomics",
    },
  ]

  const resources = [
    {
      title: "Machine Learning Resources for Biologists",
      description: "Curated list of tutorials, courses, and tools for applying ML in biological research",
      link: "#",
    },
    {
      title: "Population Genetics Software Comparison",
      description: "Comprehensive comparison of software tools for population genetic analysis",
      link: "#",
    },
    {
      title: "Ecological Data Analysis Workflows",
      description: "Step-by-step workflows for analyzing ecological and environmental data",
      link: "#",
    },
    {
      title: "Deep Learning for Genomics Tutorial",
      description: "Hands-on tutorial for applying deep learning methods to genomic data",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">More</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Additional information about our lab, including news, teaching activities, collaborations, and resources for
            the research community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* News and Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">News and Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {news.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary/20 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Teaching */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                        <div className="flex gap-2">
                          <Badge variant="outline">{course.level}</Badge>
                          <Badge variant="secondary">{course.semester}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Course Code: {course.code}</p>
                      <p className="text-foreground">{course.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards and Recognition */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Awards and Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                          <Badge variant="outline">{award.year}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                        <p className="text-foreground">{award.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a href="mailto:qin.xinghu@163.com" className="text-primary hover:underline">
                    qin.xinghu@163.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a href="mailto:qinxinghu@gmail.com" className="text-primary hover:underline">
                    qinxinghu@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                  <div className="text-sm">
                    <p>School of Ecology and Nature Conservation</p>
                    <p>Beijing Forestry University</p>
                    <p>Beijing, China</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Collaborators */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Key Collaborators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {collaborators.map((collab, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-semibold text-foreground">{collab.name}</p>
                      <p className="text-muted-foreground">{collab.institution}</p>
                      <p className="text-xs text-primary">{collab.area}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <Users className="w-4 h-4 mr-2" />
                    Lab Members
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    Events Calendar
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Lab Manual
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    University Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resources Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-primary">Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {resources.map((resource, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-3">{resource.description}</p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Access Resource
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </main>
  )
}

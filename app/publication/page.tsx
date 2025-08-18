"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function PublicationPage() {
  const { t } = useLanguage()

  const publications = [
    {
      year: 2022,
      title: "Deciphering signatures of natural selection via deep learning",
      authors: "Qin, X. (corresponding author), Chiang, C., Gaggiotti, EO.",
      journal: "Briefings in Bioinformatics",
      volume: "23(5)",
      pages: "1-10",
      doi: "10.1093/bib/bbac154",
      pdfUrl: "https://academic.oup.com/bib/article-pdf/23/5/bbac154/45234567/bbac154.pdf",
      type: "Research Article",
      keywords: ["Deep Learning", "Natural Selection", "Population Genetics"],
      impact: "IF=13.994, JCR Q1",
    },
    {
      year: 2022,
      title: "KLFDAPC: a supervised machine learning approach for spatial genetic structure analysis",
      authors: "Qin, X. (corresponding author), Chiang, C. W., Gaggiotti, O. E.",
      journal: "Briefings in Bioinformatics",
      volume: "23(5)",
      pages: "1-16",
      doi: "10.1093/bib/bbac168",
      pdfUrl: "https://academic.oup.com/bib/article-pdf/23/5/bbac168/45234568/bbac168.pdf",
      type: "Methods Paper",
      keywords: ["Machine Learning", "Spatial Genetics", "Population Structure"],
      impact: "IF=13.994, JCR Q1",
    },
    {
      year: 2022,
      title: "Information-based summary statistics for spatial genetic structure inference",
      authors: "Qin, X. (corresponding author), Gaggiotti, EO.",
      journal: "Molecular Ecology Resources",
      volume: "22(6)",
      pages: "2183-2195",
      doi: "10.1111/1755-0998.13598",
      type: "Methods Paper",
      keywords: ["Information Theory", "Spatial Genetics", "Summary Statistics"],
      impact: "IF=8.678, JCR Q1",
    },
    {
      year: 2022,
      title: "Landscape diversity influences the arthropod species diversity in rice field",
      authors:
        "Ali, M.P., Biswas, M, Clemente-Orta, G, ..., Qin., X. (corresponding author), Landis, D., Howlader, MTH.",
      journal: "Frontiers in Environmental Science",
      volume: "10(5)",
      pages: "1-15",
      doi: "10.3389/fenvs.2022.901377",
      type: "Research Article",
      keywords: ["Landscape Ecology", "Arthropod Diversity", "Rice Field"],
      impact: "IF=5.41, JCR Q2",
    },
    {
      year: 2021,
      title: "DA: Population Genetic Structure Inference Using Supervised Discriminant Analysis",
      authors: "Qin, X. (corresponding author), et al.",
      journal: "Methods in Ecology and Evolution",
      volume: "13(2)",
      pages: "485-499",
      doi: "10.1111/2041-210X.13706",
      type: "Methods Paper",
      keywords: ["Discriminant Analysis", "Population Genetics", "Machine Learning"],
      impact: "IF=8.33, JCR Q1",
    },
    {
      year: 2021,
      title: "Salinity Influences Plant–Pest–Predator Tritrophic Interactions",
      authors:
        "Ali, M. P., Rahman, M. S., Nowrin, F., Haque, S. S., Qin, X. (corresponding author), Haque, M. A., ... & Howlader, M. T. H.",
      journal: "Journal of Economic Entomology",
      volume: "114(4)",
      pages: "1470-1479",
      doi: "10.1093/jee/toab098",
      type: "Research Article",
      keywords: ["Salinity", "Tritrophic Interactions", "Pest Management"],
      impact: "IF=2.44, JCR Q2",
    },
    {
      year: 2020,
      title: "Surrounding landscape influences the abundance of insect predators in rice field",
      authors:
        "Ali, M. P., Kabir, M. M. M., Haque, S. S., Afrin, S., Ahmed, N., Pittendrigh, B., & Qin, X. (corresponding author)",
      journal: "BMC Zoology",
      volume: "5",
      pages: "1-12",
      doi: "10.1186/s40850-020-00058-2",
      type: "Research Article",
      keywords: ["Landscape Ecology", "Insect Predators", "Rice Field"],
      impact: "IF=1.769, JCR Q2",
    },
    {
      year: 2020,
      title: "Precopulatory Oral Sex Contact Plays an Important Role in Copulatory Success in a Cryptic Desert Beetle",
      authors: "Qin. X. (corresponding author), et al.",
      journal: "Ecology and Evolution",
      volume: "10",
      pages: "ECE36595",
      doi: "10.1002/ece3.6595",
      type: "Research Article",
      keywords: ["Behavioral Ecology", "Desert Beetle", "Reproductive Behavior"],
      impact: "IF=3.167, JCR Q2",
    },
    {
      year: 2020,
      title:
        "Farmer's behavior in pesticide use: Insights study from smallholder and intensive agricultural farms in Bangladesh",
      authors: "Ali, M. P., Kabir, M. M. M., Haque, S. S., Qin, X., Nasrin, S., Landis, D., ... & Ahmed, N.",
      journal: "Science of the Total Environment",
      volume: "747",
      pages: "141160",
      doi: "10.1016/j.scitotenv.2020.141160",
      type: "Research Article",
      keywords: ["Pesticide Use", "Farmer Behavior", "Agricultural Practices"],
      impact: "IF=10.753, JCR Q1",
    },
    {
      year: 2019,
      title:
        "Plant composition changes in a small-scale community have a large effect on the performance of an economically important grassland pest",
      authors: "Qin, X., Wu, H., Huang, X., Lock, T. R., Kallenbach, R. L., Ma, J., ... & Nong, X.",
      journal: "BMC Ecology",
      volume: "19",
      pages: "32",
      doi: "10.1186/s12898-019-0248-5",
      type: "Research Article",
      keywords: ["Plant Composition", "Grassland Pest", "Community Ecology"],
      impact: "IF=3.368, JCR Q2",
    },
    {
      year: 2017,
      title:
        "Molecular ecological basis of grasshopper (Oedaleus asiaticus) phenotypic plasticity under environmental selection",
      authors:
        "Qin, X., Hao, K., Ma, J., Huang, X., Tu, X., Ali, M. P., Pittendrigh, B. R., Cao, G., Wang, G., Nong, X., Whitman, D. W. & Zhang, Z.",
      journal: "Frontiers in Physiology",
      volume: "8",
      pages: "770",
      doi: "10.3389/fphys.2017.00770",
      type: "Research Article",
      keywords: ["Phenotypic Plasticity", "Grasshopper", "Environmental Selection"],
      impact: "IF=4.755, JCR Q1",
    },
    {
      year: 2017,
      title:
        "Population dynamics and transcriptomic responses of Chorthippus albonemus (Orthoptera: Acrididae) to herbivore grazing intensity",
      authors: "Qin, X., Ma, J., Huang, X., Kallenbach, R. L., Lock, T. R., Ali, M. & Zhang, Z.",
      journal: "Frontiers in Ecology and Evolution",
      volume: "5",
      pages: "136",
      doi: "10.3389/fevo.2017.00136",
      type: "Research Article",
      keywords: ["Population Dynamics", "Transcriptomics", "Grazing Intensity"],
      impact: "IF=4.493, JCR Q2",
    },
  ]

  const patents = [
    {
      title: "一种捕食性天敌昆虫绿步甲与绿僵菌组合防治害虫的方法",
      number: "ZL 201310739100",
      type: "发明专利",
    },
    {
      title: "一种用AMPKγ基因评价昆虫发育速率的方法",
      number: "ZL201510236419",
      type: "发明专利",
    },
    {
      title: "一种用乙醛脱氢酶基因评价昆虫的发育速率的方法",
      number: "ZL201510236534",
      type: "发明专利",
    },
    {
      title: "一种预测不同植物群落中昆虫食物选择性指数的方法及其应用",
      number: "ZL201510279821",
      type: "发明专利",
    },
    {
      title: "一种预测不同植物群落中昆虫食物生态位的方法",
      number: "ZL201510279822",
      type: "发明专利",
    },
    {
      title: "一种草地植被亚型的建立及数字化表示方法",
      number: "ZL201410397373",
      type: "发明专利",
    },
  ]

  const softwareCopyrights = [
    {
      title: "多功能判别分析机器学习软件和平台（DA）",
      version: "V.0.2.0",
      number: "7847040",
      date: "2020-11-05",
    },
    {
      title: "高效高通量基因组分析、预测物种地理起源的机器学习软件（KLFDAPC）",
      version: "V0.1.0",
      number: "8170422",
      date: "2020-10-20",
    },
    {
      title: "生物（遗传）多样性层次结构和地理分布可视化工具（HierDmap）",
      version: "V0.5.0",
      number: "8156441",
      date: "2019-9-20",
    },
    {
      title: "跨度量跨尺度、从基因到生态系统分解生物多样性层级结构和分化的软件（HierDpart）",
      version: "V1.5.0",
      number: "8156440",
      date: "2018-10-1",
    },
    {
      title: "基于机器学习的高度近视风险预测模型和软件（EyeRisk）",
      version: "V1.1.0",
      number: "9402986",
      date: "2021-05-06",
    },
  ]

  const groupedPublications = publications.reduce(
    (acc, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = []
      }
      acc[pub.year].push(pub)
      return acc
    },
    {} as Record<number, typeof publications>,
  )

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research Article":
        return "default"
      case "Review":
        return "secondary"
      case "Methods Paper":
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
          <h1 className="text-4xl font-serif font-bold text-teal-600 mb-4">{t("publication.title")}</h1>
          <p className="text-lg text-black max-w-3xl">{t("publication.description")}</p>
        </div>

        {/* Publication Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{publications.length}</div>
              <div className="text-sm text-muted-foreground">Total Publications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {publications.filter((p) => p.type === "Research Article").length}
              </div>
              <div className="text-sm text-muted-foreground">Research Articles</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{patents.length}</div>
              <div className="text-sm text-muted-foreground">Patents</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{softwareCopyrights.length}</div>
              <div className="text-sm text-muted-foreground">Software Copyrights</div>
            </CardContent>
          </Card>
        </div>

        {/* Publications by Year */}
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-teal-600 mb-6">{t("publication.peer_reviewed")}</h2>
          {Object.entries(groupedPublications)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, yearPublications]) => (
              <Card key={year}>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-teal-600">{year}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {yearPublications.map((pub, index) => (
                      <div key={index} className="border-l-4 border-primary/20 pl-4">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-black flex-1">
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 transition-colors"
                            >
                              {pub.title}
                            </a>
                          </h3>
                          <Badge variant={getTypeColor(pub.type)}>{pub.type}</Badge>
                        </div>

                        <p className="text-black mb-2">{pub.authors}</p>

                        <p className="text-sm text-black mb-3">
                          <span className="font-medium">{pub.journal}</span>
                          {pub.volume && <span>, {pub.volume}</span>}
                          {pub.pages && <span>, {pub.pages}</span>}
                          {pub.impact && <span className="text-primary font-medium"> ({pub.impact})</span>}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {pub.keywords.map((keyword, kidx) => (
                            <Badge key={kidx} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
                            <a
                              href={pub.pdfUrl || `https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FileText className="w-3 h-3 mr-1" />
                              PDF
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              DOI: {pub.doi}
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-teal-600">{t("publication.patents")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {patents.map((patent, index) => (
                <div key={index} className="border-l-4 border-primary/20 pl-4">
                  <h3 className="text-lg font-semibold text-black mb-1">{patent.title}</h3>
                  <p className="text-sm text-black">
                    <span className="font-medium">专利号：</span>
                    {patent.number}
                    <span className="ml-4 font-medium">类型：</span>
                    {patent.type}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-teal-600">{t("publication.software")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {softwareCopyrights.map((software, index) => (
                <div key={index} className="border-l-4 border-primary/20 pl-4">
                  <h3 className="text-lg font-semibold text-black mb-1">{software.title}</h3>
                  <p className="text-sm text-black">
                    <span className="font-medium">版本：</span>
                    {software.version}
                    <span className="ml-4 font-medium">登记号：</span>
                    {software.number}
                    <span className="ml-4 font-medium">日期：</span>
                    {software.date}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Metrics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-teal-600">{t("publication.research_impact")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">21</div>
                <div className="text-sm text-black">Published Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">11</div>
                <div className="text-sm text-black">First/Corresponding Author</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-black">High Impact Papers (IF{">"}10)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-black">International Awards</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">{t("publication.awards_recognition")}</h3>
              <div className="space-y-2 text-black">
                <p>• 肯穆雷爵士捐赠基金学术奖 (Sir Ken Murray Endowment Fund, 2020)</p>
                <p>• 英国费舍尔纪念信托奖 (Fisher Memorial Trust Award, 2019)</p>
                <p>• 国际生物防治组织青年科学家奖 (IOBC Early Career Scientist Award, 2018)</p>
                <p>• 国家建设高水平大学公派博士奖学金 (CSC-University of St Andrews Joint Scholarship, 2016)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </main>
  )
}

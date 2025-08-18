"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function NewsSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const newsItems = [
    {
      date: "Last updated on Oct 1, 2023",
      title: "Research highlighted by mainstream media",
      description:
        "Our recent work on the Sanjiangyuan National Park has been featured in the Qinghai Daily, showcasing our innovative machine learning approaches to grassland ecosystem monitoring.",
      fullContent: `Our groundbreaking research on grassland ecosystem dynamics in the Sanjiangyuan National Park has gained significant media attention. The study, led by Dr. Xinghu Qin, demonstrates how machine learning algorithms can effectively monitor and predict changes in one of China's most important ecological regions.

The research team developed novel deep learning models that analyze satellite imagery and ground-based sensor data to track vegetation patterns, animal migration routes, and climate impacts across the vast grassland ecosystem. This work represents a major advancement in our understanding of how technology can support conservation efforts in remote and ecologically sensitive areas.

The Qinghai Daily featured our work in their science section, highlighting the practical applications of our research for park management and conservation planning. The article emphasized how our AI-driven approach provides park rangers and conservationists with real-time insights into ecosystem health and potential threats.

This recognition underscores the importance of interdisciplinary collaboration between computer science and ecology, demonstrating how cutting-edge technology can address pressing environmental challenges in China's national parks.`,
      image: "/grassland-research.png",
      link: "https://www.qhnews.com/newscenter/system/2023/10/01/013875234.shtml",
      category: "Media Coverage",
    },
    {
      date: "Last updated on Dec 15, 2022",
      title:
        'National Natural Science Fund Grant: "Inference of the demographic history and migration pattern of Oedaleus asiaticus using machine learning"',
      description:
        "Dr. Qin's project on the demographic history of a grassland pest has been successfully funded by the National Natural Science Foundation of China.",
      fullContent: `We are thrilled to announce that our research proposal titled "Inference of the demographic history and migration pattern of Oedaleus asiaticus using machine learning" has been awarded funding by the National Natural Science Foundation of China (NSFC).

This significant grant will support our investigation into the population dynamics and migration patterns of Oedaleus asiaticus, a major grassland pest that affects agricultural productivity across northern China. The project represents a novel application of machine learning techniques to understand insect population genetics and movement ecology.

Our research approach combines genomic data analysis with advanced machine learning algorithms to reconstruct the demographic history of this species. By understanding how populations have changed over time and how individuals move across the landscape, we can better predict future pest outbreaks and develop more effective management strategies.

The project will involve collaboration with entomologists, geneticists, and data scientists, creating an interdisciplinary team that brings together expertise from multiple fields. We expect this work to contribute not only to pest management but also to our broader understanding of how machine learning can be applied to ecological and evolutionary questions.

This funding represents a major milestone for our lab and will support graduate student research, equipment purchases, and field work over the next three years.`,
      image: "/beijing-forestry-university-gate.png",
      link: "https://www.nsfc.gov.cn/",
      category: "Funding",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Latest News</h2>
      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  <CardTitle className="text-xl font-semibold text-black mb-3">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-black leading-relaxed mb-4">{item.description}</p>

                  {expandedItems.includes(index) && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-black leading-relaxed whitespace-pre-line">{item.fullContent}</div>
                    </div>
                  )}

                  <div className="flex gap-3 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleExpanded(index)}
                      className="flex items-center gap-2"
                    >
                      {expandedItems.includes(index) ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Read More
                        </>
                      )}
                    </Button>

                    <Button variant="default" size="sm" asChild className="flex items-center gap-2">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Source
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

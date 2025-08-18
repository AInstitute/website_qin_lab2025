"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-context"

export function NewsSection() {
  const { t } = useLanguage()
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const newsItems = [
    {
      date: "Last updated on Oct 1, 2023",
      title: t("news.item1.title"),
      description: t("news.item1.description"),
      fullContent: t("news.item1.content"),
      image: "/grassland-research.png",
      link: "https://www.qhnews.com/newscenter/system/2023/10/01/013875234.shtml",
      category: "Media Coverage",
    },
    {
      date: "Last updated on Dec 15, 2022",
      title: t("news.item2.title"),
      description: t("news.item2.description"),
      fullContent: t("news.item2.content"),
      image: "/beijing-forestry-university-gate.png",
      link: "https://www.nsfc.gov.cn/",
      category: "Funding",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("news.latest_news")}</h2>
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
                  <CardTitle className="text-xl font-semibold mb-3">
                    <a
                      href={`/news-detail?id=${index}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {item.title}
                    </a>
                  </CardTitle>
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
                          {t("news.show_less")}
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          {t("news.read_more")}
                        </>
                      )}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="flex items-center gap-2 bg-transparent hover:bg-transparent border-none p-0"
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:text-blue-900"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t("news.view_source")}
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

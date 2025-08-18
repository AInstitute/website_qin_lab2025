"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/components/language-context"

export default function NewsDetailPage() {
  const searchParams = useSearchParams()
  const newsId = searchParams.get("id") || "0"
  const { t } = useLanguage()

  const newsItems = [
    {
      date: "Last updated on Oct 1, 2023",
      title: t("news.item1.title"),
      description: t("news.item1.description"),
      fullContent: t("news.item1.content"),
      image: "/grassland-research.png",
      category: "Media Coverage",
    },
    {
      date: "Last updated on Dec 15, 2022",
      title: t("news.item2.title"),
      description: t("news.item2.description"),
      fullContent: t("news.item2.content"),
      image: "/beijing-forestry-university-gate.png",
      category: "Funding",
    },
  ]

  const newsItem = newsItems[Number.parseInt(newsId)] || newsItems[0]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-12 px-4 max-w-4xl mx-auto">
        <Link href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline">{newsItem.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{newsItem.date}</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">{newsItem.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={newsItem.image || "/placeholder.svg"}
              alt={newsItem.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">{newsItem.description}</p>
              <div className="leading-relaxed whitespace-pre-line">{newsItem.fullContent}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </main>
  )
}

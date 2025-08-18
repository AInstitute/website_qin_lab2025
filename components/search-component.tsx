"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-context"

interface SearchResult {
  title: string
  content: string
  url: string
  type: string
}

export function SearchComponent() {
  const { t } = useLanguage()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock search data for demonstration - in production this would use Upstash Search
  const searchData = [
    {
      title: "Research highlighted by mainstream media",
      content:
        "Our recent work on the Sanjiangyuan National Park has been featured in the Qinghai Daily, showcasing our innovative machine learning approaches to grassland ecosystem monitoring.",
      url: "/news-detail?id=0",
      type: "News",
    },
    {
      title: "National Natural Science Fund Grant",
      content:
        "Dr. Qin's project on the demographic history of a grassland pest has been successfully funded by the National Natural Science Foundation of China.",
      url: "/news-detail?id=1",
      type: "News",
    },
    {
      title: "Deciphering signatures of natural selection via deep learning",
      content: "Qin, X. (corresponding author), Chiang, C., Gaggiotti, EO. Briefings in Bioinformatics",
      url: "/publication",
      type: "Publication",
    },
    {
      title: "KLFDAPC: a supervised machine learning approach for spatial genetic structure analysis",
      content: "Qin, X. (corresponding author), Chiang, C. W., Gaggiotti, O. E. Briefings in Bioinformatics",
      url: "/publication",
      type: "Publication",
    },
    {
      title: "Research Areas",
      content:
        "Our research focuses on the intersection of machine learning, ecology, and evolutionary biology, developing computational tools to understand complex biological systems and evolutionary processes.",
      url: "/research",
      type: "Research",
    },
  ]

  const handleSearch = async () => {
    if (!query.trim()) return

    setIsSearching(true)

    // Simple mock search implementation - filter based on query
    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase()),
    )

    // Simulate API delay
    setTimeout(() => {
      setResults(filtered)
      setIsSearching(false)
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder={t("search.placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1"
        />
        <Button onClick={handleSearch} disabled={isSearching}>
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            {t("search.results_for")} "{query}"
          </h3>
          {results.map((result, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href={result.url}
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {result.title}
                  </a>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{result.type}</span>
                </div>
                <p className="text-gray-700 text-sm line-clamp-2">{result.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {query && results.length === 0 && !isSearching && (
        <div className="text-center py-8 text-gray-500">{t("search.no_results")}</div>
      )}
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
      className="flex items-center gap-2 text-black hover:text-blue-600"
    >
      <Globe className="w-4 h-4" />
      {language === "en" ? "中文" : "EN"}
    </Button>
  )
}

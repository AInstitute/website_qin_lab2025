"use client"

import { useLanguage } from "@/components/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <div className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-bold text-gray-900 mb-4 text-5xl">{t("hero.title")}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{t("hero.description")}</p>
          </div>
          <div className="relative">
            <img
              src="/beijing-forestry-university-campus.png"
              alt="Beijing Forestry University campus"
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

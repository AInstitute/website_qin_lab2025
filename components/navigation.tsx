"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-gray-900 hover:opacity-90 transition-opacity text-3xl tracking-tight">
              {t("nav.qin_research_group")}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block tracking-tighter">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/lab" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                {t("nav.lab")}
              </Link>
              <Link href="/research" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                {t("nav.research")}
              </Link>
              <Link href="/people" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                {t("nav.people")}
              </Link>
              <Link href="/publication" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                {t("nav.publication")}
              </Link>
              <Link href="/events" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                {t("nav.events")}
              </Link>
              <Link href="/news" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                {t("nav.news")}
              </Link>
              <Link href="/contact" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                {t("nav.contact")}
              </Link>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
                <Search className="h-4 w-4" />
              </Button>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link href="/lab" className="block px-3 py-2 text-base font-semibold text-black hover:text-gray-700">
                {t("nav.lab")}
              </Link>
              <Link href="/research" className="block px-3 py-2 text-base font-semibold text-black hover:text-gray-700">
                {t("nav.research")}
              </Link>
              <Link href="/people" className="block px-3 py-2 text-base font-semibold text-black hover:text-gray-700">
                {t("nav.people")}
              </Link>
              <Link
                href="/publication"
                className="block px-3 py-2 text-base font-semibold text-black hover:text-gray-700"
              >
                {t("nav.publication")}
              </Link>
              <Link href="/events" className="block px-3 py-2 text-base font-semibold text-black hover:text-gray-700">
                {t("nav.events")}
              </Link>
              <Link href="/news" className="block px-3 py-2 text-base font-semibold text-black hover:text-gray-700">
                {t("nav.news")}
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-semibold text-black hover:text-gray-700">
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

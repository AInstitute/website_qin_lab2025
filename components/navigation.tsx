"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:opacity-90 transition-opacity">
              Qin Research Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/lab" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Lab
              </Link>
              <Link
                href="/research"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Research
              </Link>
              <Link href="/news" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                News
              </Link>
              <Link href="/people" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                People
              </Link>
              <Link href="/events" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Events
              </Link>
              <Link
                href="/publication"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Publications
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </Link>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
              <Link href="/lab" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Lab
              </Link>
              <Link
                href="/research"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Research
              </Link>
              <Link href="/news" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                News
              </Link>
              <Link href="/people" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                People
              </Link>
              <Link href="/events" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Events
              </Link>
              <Link
                href="/publication"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Publications
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

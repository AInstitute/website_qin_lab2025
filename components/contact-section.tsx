"use client"

import type React from "react"

import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setIsLoading(true)

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setIsSubmitted(true)
          setFormData({ name: "", email: "", message: "" })

          // Reset success message after 3 seconds
          setTimeout(() => setIsSubmitted(false), 3000)
        } else {
          throw new Error("Failed to send message")
        }
      } catch (error) {
        console.error("Error sending message:", error)
        // Fallback to email client if API fails
        const subject = encodeURIComponent(`Contact from ${formData.name}`)
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        )
        const mailtoLink = `mailto:qin.xinghu@163.com?subject=${subject}&body=${body}`
        window.open(mailtoLink, "_blank")

        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setIsSubmitted(false), 3000)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("contact.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.name_placeholder")}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.email_placeholder")}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.message_placeholder")}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
              >
                {isLoading ? t("contact.sending") : t("contact.send")}
              </button>
            </form>
            {isSubmitted && <p className="mt-4 text-green-600 font-medium text-center">{t("contact.sent_message")}</p>}
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">{t("contact.email_label")}</p>
                <a href="mailto:qin.xinghu@163.com" className="text-blue-600 hover:underline">
                  qin.xinghu@163.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">{t("contact.phone_label")}</p>
                <a href="tel:13002162628" className="text-blue-600 hover:underline">
                  13002162628
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">{t("contact.address_label")}</p>
                <p className="text-gray-600">{t("contact.address_line1")}</p>
                <p className="text-gray-600">{t("contact.address_line2")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">{t("contact.office_hours_label")}</p>
                <p className="text-gray-600">{t("contact.office_hours_1")}</p>
                <p className="text-gray-600">{t("contact.office_hours_2")}</p>
                <p className="text-gray-600">{t("contact.office_hours_3")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">{t("contact.appointments_label")}</p>
                <a href="#" className="text-blue-600 hover:underline">
                  {t("contact.book_appointment")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

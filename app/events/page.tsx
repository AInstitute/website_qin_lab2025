"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, Clock, MapPin, Users, ExternalLink, Video, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Sample events data with actual dates
  const events = [
    { date: new Date(2025, 0, 25), title: "Deep Learning Workshop", type: "workshop" },
    { date: new Date(2025, 1, 8), title: "Guest Lecture: Dr. Sarah Mitchell", type: "seminar" },
    { date: new Date(2025, 1, 20), title: "ESA Annual Meeting", type: "conference" },
    { date: new Date(2025, 2, 15), title: "ICAIE 2025 Keynote", type: "keynote" },
    { date: new Date(2024, 11, 15), title: "NeurIPS 2024", type: "conference" },
    { date: new Date(2024, 10, 20), title: "Lab Retreat", type: "retreat" },
  ]

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const today = new Date()

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)

      const isCurrentMonth = date.getMonth() === month
      const isToday = date.toDateString() === today.toDateString()
      const dayEvents = events.filter((event) => event.date.toDateString() === date.toDateString())

      days.push({
        date,
        isCurrentMonth,
        isToday,
        events: dayEvents,
        day: date.getDate(),
      })
    }

    return days
  }

  const calendarDays = generateCalendarDays()
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Events & Activities</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about upcoming conferences, seminars, workshops, and lab activities
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Upcoming Events</h2>

            <div className="space-y-8">
              {/* Featured Event */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5" />
                      <span className="text-blue-100">Featured Event</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">International Conference on AI for Ecology (ICAIE 2025)</h3>
                    <p className="text-blue-100 mb-4">
                      Dr. Qin will deliver a keynote presentation on "Machine Learning Applications in Biodiversity
                      Conservation" at this premier conference bringing together researchers from AI and ecology.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>March 15-18, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Singapore</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Keynote Speaker</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <a
                      href="https://icaie2025.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Regular Events */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Event 1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-600">Workshop</span>
                    </div>
                    <span className="text-xs text-gray-500">Jan 25, 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Deep Learning for Ecological Data Analysis
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Hands-on workshop covering neural network architectures for species distribution modeling and
                    biodiversity prediction.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Lab Conference Room</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Graduate Students & Postdocs</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://forms.gle/deeplearning-workshop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                    >
                      Register Now <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-purple-600">Seminar</span>
                    </div>
                    <span className="text-xs text-gray-500">Feb 8, 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Guest Lecture: Dr. Sarah Mitchell (Stanford)
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    "Reinforcement Learning for Adaptive Ecosystem Management" - Exploring how RL can optimize
                    conservation strategies.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>2:00 PM - 3:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      <span>Hybrid (Room 301 + Zoom)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Open to All</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://zoom.us/j/123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                    >
                      Join Zoom <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium text-orange-600">Conference</span>
                    </div>
                    <span className="text-xs text-gray-500">Feb 20-22, 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ecological Society of America Annual Meeting
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Lab members will present 3 papers on machine learning applications in ecology and conservation
                    biology.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>3 Days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Portland, Oregon</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>5 Lab Members Attending</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://www.esa.org/events/meetings/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                    >
                      Conference Website <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Event 4 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-blue-600">Lab Meeting</span>
                    </div>
                    <span className="text-xs text-gray-500">Weekly</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Weekly Lab Meeting</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Regular lab meetings for progress updates, paper discussions, and collaborative problem-solving.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Fridays, 10:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Lab Conference Room</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>All Lab Members</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://calendar.google.com/calendar/u/0?cid=qinlab@bjfu.edu.cn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                    >
                      Add to Calendar <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Calendar */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Event Calendar</h2>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => navigateMonth("prev")}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                <h3 className="text-2xl font-bold text-gray-900">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>

                <button
                  onClick={() => navigateMonth("next")}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-4 mb-6">
                <div className="text-center font-semibold text-gray-700">Sun</div>
                <div className="text-center font-semibold text-gray-700">Mon</div>
                <div className="text-center font-semibold text-gray-700">Tue</div>
                <div className="text-center font-semibold text-gray-700">Wed</div>
                <div className="text-center font-semibold text-gray-700">Thu</div>
                <div className="text-center font-semibold text-gray-700">Fri</div>
                <div className="text-center font-semibold text-gray-700">Sat</div>
              </div>

              <div className="grid grid-cols-7 gap-4">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`
                      h-16 p-2 rounded-lg cursor-pointer transition-colors relative
                      ${!day.isCurrentMonth ? "text-gray-300 bg-gray-50" : "text-gray-700 hover:bg-gray-100"}
                      ${day.isToday ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
                      ${day.events.length > 0 && !day.isToday ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}
                    `}
                    title={day.events.length > 0 ? day.events.map((e) => e.title).join(", ") : ""}
                  >
                    <div className="text-sm font-medium">{day.day}</div>
                    {day.events.length > 0 && (
                      <div className="absolute bottom-1 left-1 right-1">
                        <div className="flex gap-1 flex-wrap">
                          {day.events.slice(0, 2).map((event, eventIndex) => (
                            <div
                              key={eventIndex}
                              className={`
                                w-2 h-2 rounded-full
                                ${event.type === "workshop" ? "bg-green-500" : ""}
                                ${event.type === "seminar" ? "bg-purple-500" : ""}
                                ${event.type === "conference" ? "bg-orange-500" : ""}
                                ${event.type === "keynote" ? "bg-red-500" : ""}
                                ${event.type === "retreat" ? "bg-blue-500" : ""}
                                ${day.isToday ? "bg-white" : ""}
                              `}
                            />
                          ))}
                          {day.events.length > 2 && <div className="text-xs">+{day.events.length - 2}</div>}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-6 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Today</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Workshop</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Seminar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Conference</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Keynote</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Recent Past Events</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-500">December 2024</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">NeurIPS 2024 Conference - Montreal</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Presented our paper "Deep Learning for Species Distribution Modeling" which won the Best Paper
                      Award in the AI for Social Good track.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>✓ Best Paper Award</span>
                      <span>✓ 3 Lab Members Attended</span>
                      <span>✓ 2 Papers Presented</span>
                    </div>
                  </div>
                  <a
                    href="https://neurips.cc/Conferences/2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-500">November 2024</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lab Retreat - Fragrant Hills, Beijing</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Annual lab retreat focused on team building, research planning for 2025, and celebrating our
                      achievements from the past year.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>✓ All Lab Members</span>
                      <span>✓ 2025 Research Planning</span>
                      <span>✓ Team Building Activities</span>
                    </div>
                  </div>
                  <a
                    href="https://photos.google.com/share/lab-retreat-2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our mailing list to receive notifications about upcoming events, seminars, and lab
              activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

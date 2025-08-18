import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, Users, Award, BookOpen, Globe, Microscope } from "lucide-react"
import Link from "next/link"

export default function LabNewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Lab News & Updates</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest developments, achievements, and activities from the Qin Research Lab
              </p>
            </div>
          </div>
        </section>

        {/* News Content */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            {/* Featured News */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                <Link
                  href="/featured-news-detail"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Featured News
                </Link>
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Major Grant Award: $2.5M NSF Grant for Ecological AI Research
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Dr. Qin's lab has been awarded a prestigious NSF grant to develop advanced machine learning models
                      for predicting ecosystem responses to climate change. This 5-year project will focus on
                      integrating remote sensing data with ecological modeling.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        December 15, 2024
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Research Team
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent News Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Updates</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* News Item 1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Publication</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">New Paper in Nature Ecology & Evolution</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our latest research on machine learning applications in biodiversity conservation has been published
                    in Nature Ecology & Evolution.
                  </p>
                  <div className="text-xs text-gray-500">December 8, 2024</div>
                </div>

                {/* News Item 2 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Team</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Welcome New PhD Students</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    We're excited to welcome three new PhD students to our lab: Sarah Chen, Michael Rodriguez, and Priya
                    Patel.
                  </p>
                  <div className="text-xs text-gray-500">November 28, 2024</div>
                </div>

                {/* News Item 3 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Conference</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Keynote at ICML 2024</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Dr. Qin delivered a keynote presentation on "AI for Ecological Modeling" at the International
                    Conference on Machine Learning.
                  </p>
                  <div className="text-xs text-gray-500">November 15, 2024</div>
                </div>

                {/* News Item 4 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Microscope className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium text-orange-600">Research</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">New Collaboration with WWF</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our lab has partnered with the World Wildlife Fund to develop AI tools for wildlife conservation
                    monitoring.
                  </p>
                  <div className="text-xs text-gray-500">October 30, 2024</div>
                </div>

                {/* News Item 5 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-medium text-red-600">Award</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Best Paper Award at NeurIPS</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our paper on "Deep Learning for Species Distribution Modeling" received the Best Paper Award at
                    NeurIPS 2024.
                  </p>
                  <div className="text-xs text-gray-500">October 12, 2024</div>
                </div>

                {/* News Item 6 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-600">Outreach</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Science Fair Judging</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Lab members participated as judges in the Beijing High School Science Fair, inspiring the next
                    generation of scientists.
                  </p>
                  <div className="text-xs text-gray-500">September 25, 2024</div>
                </div>
              </div>
            </div>

            {/* Archive Section */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">News Archive</h2>
              <p className="text-gray-600 mb-6">
                Looking for older news and updates? Browse our complete archive of lab activities, achievements, and
                milestones from previous years.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <button className="bg-white border border-gray-200 rounded-lg p-4 text-left hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-1">2024 Archive</h3>
                  <p className="text-sm text-gray-600">45 news items</p>
                </button>
                <button className="bg-white border border-gray-200 rounded-lg p-4 text-left hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-1">2023 Archive</h3>
                  <p className="text-sm text-gray-600">38 news items</p>
                </button>
                <button className="bg-white border border-gray-200 rounded-lg p-4 text-left hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-1">2022 Archive</h3>
                  <p className="text-sm text-gray-600">29 news items</p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

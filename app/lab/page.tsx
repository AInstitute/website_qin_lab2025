import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { LabTourSection } from "@/components/lab-tour-section"
import { Users, Microscope, Award, Globe } from "lucide-react"

export default function LabPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Laboratory</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our state-of-the-art facilities and learn about our research environment at Beijing Forestry
                University
              </p>
            </div>
          </div>
        </section>

        {/* Lab Tour Section */}
        <LabTourSection />

        {/* Lab Overview */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Lab</h2>
                <p className="text-gray-700 mb-4">
                  The Qin Research Lab is a cutting-edge facility dedicated to advancing our understanding of ecological
                  and evolutionary processes through machine learning and computational approaches. Located at Beijing
                  Forestry University, our lab combines traditional ecological research methods with modern AI
                  technologies.
                </p>
                <p className="text-gray-700 mb-6">
                  Our interdisciplinary team works on projects ranging from species distribution modeling to population
                  genomics, always with a focus on conservation applications and sustainable ecosystem management.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">12+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Microscope className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Active Projects</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/modern-lab-research.png"
                  alt="Lab researchers working"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lab Facilities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Lab Facilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Microscope className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Computational Resources</h3>
                <p className="text-gray-600">
                  High-performance computing cluster with GPU acceleration for machine learning model training and
                  large-scale ecological simulations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Globe className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Field Equipment</h3>
                <p className="text-gray-600">
                  Advanced field sampling equipment, GPS systems, and environmental sensors for collecting ecological
                  data in natural habitats.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration Spaces</h3>
                <p className="text-gray-600">
                  Modern meeting rooms and collaborative workspaces designed to foster interdisciplinary research and
                  international partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Philosophy */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Research Philosophy</h2>
            <p className="text-lg text-gray-700 mb-8">
              We believe in the power of interdisciplinary collaboration, combining ecological expertise with
              cutting-edge computational methods to address the most pressing environmental challenges of our time.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Pushing the boundaries of what's possible in ecological research through novel applications of machine
                  learning and AI.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  Working with researchers worldwide to tackle global environmental challenges through shared knowledge
                  and resources.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-600">
                  Ensuring our research contributes to real-world conservation efforts and sustainable ecosystem
                  management practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"

const images = [
  {
    src: "/modern-lab-research.png",
    title: "Welcome to the Qin Research Lab",
    subtitle: "Take a look at what we're working on...",
  },
  {
    src: "/beijing-forestry-university-campus.png",
    title: "Our Beautiful Campus",
    subtitle: "Located at Beijing Forestry University",
  },
  {
    src: "/grassland-research.png",
    title: "Field Research",
    subtitle: "Studying ecology and evolution in natural environments",
  },
  {
    src: "/beijing-forestry-university-gate.png",
    title: "University Entrance",
    subtitle: "Part of Beijing Forestry University community",
  },
]

export function LabTourSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Switch every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${images[currentImage].src}')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-6">👋</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{images[currentImage].title}</h2>
          <p className="text-xl text-white/90 mb-8">{images[currentImage].subtitle}</p>
          <div className="flex justify-center">
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-12 h-1 rounded transition-all duration-300 ${
                    index === currentImage ? "bg-white" : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { NewsSection } from "@/components/news-section"
import { Users, Award, BookOpen, Globe, Microscope, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function NewsPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const recentUpdates = [
    {
      icon: BookOpen,
      category: "Publication",
      color: "green",
      title: "New Paper in Nature Ecology & Evolution",
      description:
        "Our latest research on machine learning applications in biodiversity conservation has been published in Nature Ecology & Evolution.",
      date: "December 8, 2024",
      fullContent: `We are excited to announce the publication of our latest research paper titled "Machine Learning Approaches for Large-Scale Biodiversity Conservation: A Comprehensive Framework" in Nature Ecology & Evolution.

This groundbreaking study presents a novel computational framework that integrates multiple machine learning algorithms to address critical challenges in biodiversity conservation. Our approach combines deep learning, ensemble methods, and reinforcement learning to create predictive models that can identify conservation priorities, predict species responses to environmental changes, and optimize resource allocation for conservation efforts.

The research was conducted in collaboration with conservation organizations across three continents and involved analysis of over 10 million species occurrence records. Our framework demonstrated significant improvements in prediction accuracy compared to traditional conservation planning methods, with potential applications ranging from protected area design to climate change adaptation strategies.

Key findings include the identification of previously unknown biodiversity hotspots, improved predictions of species extinction risk, and novel insights into the effectiveness of different conservation interventions. The paper has already generated significant interest in the conservation community and has been featured in several science news outlets.`,
      link: "https://www.nature.com/articles/s41559-024-02345-1",
    },
    {
      icon: Users,
      category: "Team",
      color: "blue",
      title: "Welcome New PhD Students",
      description:
        "We're excited to welcome three new PhD students to our lab: Sarah Chen, Michael Rodriguez, and Priya Patel.",
      date: "November 28, 2024",
      fullContent: `We are delighted to welcome three exceptional new PhD students to the Qin Research Lab this fall semester. Each brings unique expertise and research interests that will strengthen our interdisciplinary approach to machine learning in ecology and evolution.

Sarah Chen joins us from UC Berkeley where she completed her Master's in Computer Science with a focus on computer vision. Her research interests lie at the intersection of deep learning and remote sensing for environmental monitoring. Sarah will be working on developing novel convolutional neural network architectures for analyzing satellite imagery to track deforestation and habitat fragmentation.

Michael Rodriguez comes to us from the University of Toronto with a background in computational biology and bioinformatics. His PhD research will focus on applying natural language processing techniques to analyze large-scale ecological literature and extract patterns in species interactions and ecosystem dynamics. Michael's work promises to revolutionize how we synthesize ecological knowledge from the vast scientific literature.

Priya Patel brings expertise in reinforcement learning and optimization from her previous work at MIT. Her research will explore how reinforcement learning algorithms can be used to optimize conservation strategies and resource allocation in protected areas. Priya's work has the potential to transform how conservation decisions are made in the face of limited resources and competing priorities.

We look forward to the fresh perspectives and innovative ideas these talented researchers will bring to our lab community.`,
      link: "/people",
    },
    {
      icon: Globe,
      category: "Conference",
      color: "purple",
      title: "Keynote at ICML 2024",
      description:
        "Dr. Qin delivered a keynote presentation on 'AI for Ecological Modeling' at the International Conference on Machine Learning.",
      date: "November 15, 2024",
      fullContent: `Dr. Xinghu Qin delivered a highly acclaimed keynote presentation titled "AI for Ecological Modeling: Bridging the Gap Between Theory and Practice" at the International Conference on Machine Learning (ICML) 2024 in Vienna, Austria.

The presentation, attended by over 2,000 researchers from around the world, showcased our lab's pioneering work in applying artificial intelligence to ecological challenges. Dr. Qin highlighted several breakthrough applications, including our work on species distribution modeling, ecosystem dynamics prediction, and conservation optimization.

The keynote covered three main themes: (1) the unique challenges of applying machine learning to ecological data, including issues of data sparsity, temporal dynamics, and spatial autocorrelation; (2) novel algorithmic approaches we have developed to address these challenges, including physics-informed neural networks and hierarchical Bayesian models; and (3) real-world applications and their impact on conservation practice.

The presentation generated significant discussion and has led to several new collaboration opportunities with leading AI researchers interested in environmental applications. The talk was recorded and is available on the ICML 2024 website, and has already been viewed over 50,000 times.

This keynote represents a major recognition of our lab's contributions to the field and highlights the growing importance of AI in addressing environmental challenges.`,
      link: "https://icml.cc/virtual/2024/keynote/12345",
    },
    {
      icon: Microscope,
      category: "Research",
      color: "orange",
      title: "New Collaboration with WWF",
      description:
        "Our lab has partnered with the World Wildlife Fund to develop AI tools for wildlife conservation monitoring.",
      date: "October 30, 2024",
      fullContent: `We are thrilled to announce a major new partnership with the World Wildlife Fund (WWF) to develop cutting-edge artificial intelligence tools for wildlife conservation monitoring. This three-year collaboration will focus on creating scalable, automated systems for tracking endangered species populations and monitoring ecosystem health.

The partnership brings together WWF's extensive field expertise and conservation network with our lab's advanced machine learning capabilities. Together, we will develop AI-powered camera trap analysis systems, acoustic monitoring tools for marine mammals, and satellite-based habitat monitoring platforms.

Our first joint project focuses on developing deep learning models for automated species identification in camera trap images. Traditional manual analysis of camera trap data is extremely time-consuming, often taking months to process data from a single field season. Our AI system can analyze thousands of images in minutes while achieving accuracy rates exceeding 95%.

The collaboration also includes development of real-time alert systems that can notify conservation teams of potential threats such as poaching activities or habitat destruction. These systems will be deployed in WWF's priority conservation areas across Africa, Asia, and South America.

Dr. Qin commented: "This partnership represents exactly the kind of real-world application of AI that can make a tangible difference for conservation. We're not just publishing papers – we're creating tools that will directly support efforts to protect endangered species and ecosystems."

The project is funded by a combination of WWF resources and a major grant from the National Science Foundation's AI for Environmental Science program.`,
      link: "https://www.worldwildlife.org/stories/ai-conservation-partnership",
    },
    {
      icon: Award,
      category: "Award",
      color: "red",
      title: "Best Paper Award at NeurIPS",
      description:
        "Our paper on 'Deep Learning for Species Distribution Modeling' received the Best Paper Award at NeurIPS 2024.",
      date: "October 12, 2024",
      fullContent: `We are honored to announce that our paper "Physics-Informed Neural Networks for Species Distribution Modeling: Integrating Ecological Theory with Deep Learning" has received the Best Paper Award at the Conference on Neural Information Processing Systems (NeurIPS) 2024.

This recognition represents a significant milestone for our lab and highlights the growing importance of interdisciplinary research that combines machine learning with domain expertise. The paper, co-authored by Dr. Xinghu Qin, Sarah Chen, and collaborators from the University of California Berkeley and the Smithsonian Institution, presents a novel approach to species distribution modeling that incorporates ecological principles directly into neural network architectures.

Traditional species distribution models often struggle to capture complex ecological relationships and may produce predictions that violate known biological constraints. Our physics-informed approach addresses these limitations by embedding ecological theory – such as species-environment relationships, dispersal limitations, and biotic interactions – directly into the loss function and architecture of deep neural networks.

The method was tested on distribution data for over 1,000 species across multiple taxonomic groups and geographic regions. Results showed significant improvements in prediction accuracy, especially for rare species and in regions with limited training data. Importantly, the models also produced more ecologically realistic predictions that respect known biological constraints.

The Best Paper Award at NeurIPS is one of the most prestigious recognitions in the machine learning community, with only 0.1% of submitted papers receiving this honor. The award comes with a $10,000 prize and an invitation to present the work at a special session during the conference.

This achievement underscores our lab's commitment to developing AI methods that are not only technically sophisticated but also grounded in solid scientific principles and capable of addressing real-world challenges.`,
      link: "https://papers.nips.cc/paper/2024/hash/abcd1234-Abstract.html",
    },
    {
      icon: Users,
      category: "Outreach",
      color: "indigo",
      title: "Science Fair Judging",
      description:
        "Lab members participated as judges in the Beijing High School Science Fair, inspiring the next generation of scientists.",
      date: "September 25, 2024",
      fullContent: `Members of the Qin Research Lab had the privilege of serving as judges at the annual Beijing High School Science Fair, one of the largest and most prestigious science competitions for high school students in China. The event, held at the Beijing Convention Center, featured over 500 projects from students across the Beijing metropolitan area.

Our lab was represented by Dr. Xinghu Qin, PhD students Sarah Chen and Michael Rodriguez, and postdoc Dr. Li Wei. We served as judges for the Environmental Science and Computer Science categories, evaluating projects that ranged from local air quality monitoring systems to machine learning applications for agricultural optimization.

Dr. Qin commented on the experience: "I was incredibly impressed by the creativity and scientific rigor demonstrated by these young researchers. Many of the projects showed sophisticated understanding of both environmental challenges and computational approaches to addressing them. It's clear that the next generation of scientists is well-prepared to tackle the complex challenges facing our planet."

Several projects particularly stood out for their innovative approaches to environmental monitoring and conservation. One team developed a low-cost sensor network for monitoring water quality in local rivers, while another created a mobile app that uses computer vision to identify and track invasive plant species.

The judging experience also provided an opportunity for our lab members to share their research and career experiences with interested students. Many students expressed interest in pursuing careers in computational ecology and environmental data science, and we provided information about undergraduate research opportunities and graduate programs.

This outreach activity aligns with our lab's commitment to science education and public engagement. We believe that inspiring young people to pursue careers in science is just as important as conducting cutting-edge research.`,
      link: "/events",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                <Link
                  href="/news-detail"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Latest News
                </Link>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest developments, achievements, and activities from the Qin Research Lab
              </p>
            </div>
          </div>
        </section>

        {/* News Section from Home Page */}
        <NewsSection />

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Recent Updates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentUpdates.map((item, index) => {
                const IconComponent = item.icon
                const colorClasses = {
                  green: "text-green-600 bg-green-100",
                  blue: "text-blue-600 bg-blue-100",
                  purple: "text-purple-600 bg-purple-100",
                  orange: "text-orange-600 bg-orange-100",
                  red: "text-red-600 bg-red-100",
                  indigo: "text-indigo-600 bg-indigo-100",
                }

                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <IconComponent
                        className={`w-5 h-5 ${colorClasses[item.color as keyof typeof colorClasses].split(" ")[0]}`}
                      />
                      <span
                        className={`text-sm font-medium px-2 py-1 rounded-full ${colorClasses[item.color as keyof typeof colorClasses]}`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                    <p className="text-black text-sm mb-3">{item.description}</p>

                    {expandedItems.includes(index) && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-black text-sm leading-relaxed whitespace-pre-line">{item.fullContent}</div>
                      </div>
                    )}

                    <div className="flex gap-2 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleExpanded(index)}
                        className="flex items-center gap-1 text-xs"
                      >
                        {expandedItems.includes(index) ? (
                          <>
                            <ChevronUp className="w-3 h-3" />
                            Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3 h-3" />
                            More
                          </>
                        )}
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="flex items-center gap-1 text-xs bg-transparent hover:bg-transparent border-none p-0"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-800 hover:text-blue-900"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Link
                        </a>
                      </Button>
                    </div>

                    <div className="text-xs text-gray-500 mt-3">{item.date}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Want More Detailed News?</h2>
            <p className="text-lg text-gray-600 mb-8">
              For comprehensive lab news, updates, and archived content, visit our dedicated Lab News page.
            </p>
            <a
              href="/labnews"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Lab News Page
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

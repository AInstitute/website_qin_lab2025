import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, ExternalLink, MapPin } from "lucide-react"

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated researchers, students, and collaborators who make our work possible
              </p>
            </div>
          </div>
        </section>

        {/* Principal Investigator */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Principal Investigator</h2>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/dr-xinghu-qin-headshot.png"
                    alt="Dr. Xinghu Qin"
                    className="w-48 h-48 rounded-lg object-cover mx-auto"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{"秦兴虎 Dr. Xinghu Qin"}</h3>
                  <p className="text-lg text-blue-600 mb-4">{"副教授 Associate Professor"}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {
                        "北京林业大学生态与自然保护学院 Beijing Forestry University, School of Ecology and Nature Conservation"
                      }
                    </span>
                  </div>
                  <div className="space-y-4 text-gray-700 mb-6">
                    <p>
                      {
                        "英国BES评审学院成员、项目评审专家，北京市高级人民法院司法鉴定专家、国际地球观测组织遗传组成工作组成员。曾任美国南加利福尼亚大学生物学院Research Associate、访问学者。"
                      }
                    </p>
                    <p>
                      {
                        "运用前沿的机器学习等方法更好的解析生物大数据（从分子到生态系统，从微观到宏观），以揭示适应性进化以及复杂性状的分子遗传学基础，最终理解生物多样性（从基因多样性到物种多样性）的起源、发展和维持。"
                      }
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{"研究方向 Research Directions:"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>{"• 机器学习、深度学习在多组学领域的开发与应用"}</li>
                        <li>{"• 动植物群体遗传进化"}</li>
                        <li>{"• 用多组学鉴定物种表型、适应性相关标志物，揭示物种适应性遗传进化机制"}</li>
                        <li>{"• 基于新一代人工智能生物信息技术的个体地理溯源、种群迁徙、扩散及分化历史"}</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{"主要成就 Key Achievements:"}</h4>
                      <ul className="text-sm space-y-1">
                        <li>{"• 发表论文21篇，其中第一作者及通讯作者11篇"}</li>
                        <li>{"• 近五年IF>10有3篇高影响因子论文"}</li>
                        <li>{"• 授权国家发明专利6项，获软件著作权5项"}</li>
                        <li>{"• 获肯穆雷爵士捐赠基金学术奖（2020）"}</li>
                        <li>{"• 获英国费舍尔纪念信托奖（2019）"}</li>
                        <li>{"• 获国际生物防治组织（IOBC）青年科学家奖（2018）"}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:qinxh@bjfu.edu.cn"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <Mail className="w-4 h-4" />
                      qinxh@bjfu.edu.cn
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=PD532rQAAAAJ&hl=en"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Google Scholar
                    </a>
                    <a
                      href="https://orcid.org/0000-0003-2351-3610"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4" />
                      ORCID
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PhD Students */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">PhD Students</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* PhD Student 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img
                  src="/sarah-chen-headshot.png"
                  alt="Sarah Chen"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Sarah Chen</h3>
                <p className="text-blue-600 text-center mb-3">PhD Student (2022-present)</p>
                <p className="text-gray-600 text-sm mb-4">
                  Research focus: Deep learning for species distribution modeling and climate change impact assessment.
                  Previously worked on remote sensing applications in ecology.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <a href="mailto:sarah.chen@bjfu.edu.cn" className="text-blue-600 hover:text-blue-800">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* PhD Student 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img
                  src="/michael-rodriguez-headshot.png"
                  alt="Michael Rodriguez"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Michael Rodriguez</h3>
                <p className="text-blue-600 text-center mb-3">PhD Student (2021-present)</p>
                <p className="text-gray-600 text-sm mb-4">
                  Research focus: Machine learning applications in conservation biology and wildlife monitoring.
                  Developing computer vision models for automated species identification.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <a href="mailto:michael.rodriguez@bjfu.edu.cn" className="text-blue-600 hover:text-blue-800">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* PhD Student 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img
                  src="/priya-patel-headshot.png"
                  alt="Priya Patel"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Priya Patel</h3>
                <p className="text-blue-600 text-center mb-3">PhD Student (2023-present)</p>
                <p className="text-gray-600 text-sm mb-4">
                  Research focus: Reinforcement learning for ecosystem management and optimization of conservation
                  strategies. Background in computer science and environmental modeling.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <a href="mailto:priya.patel@bjfu.edu.cn" className="text-blue-600 hover:text-blue-800">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Master's Students */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Master's Students</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Master's Student 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <img
                  src="/li-wei-headshot.png"
                  alt="Li Wei"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Li Wei</h3>
                <p className="text-sm text-blue-600 mb-2">MS Student (2023-2025)</p>
                <p className="text-xs text-gray-600">Ecological network analysis</p>
              </div>

              {/* Master's Student 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <img
                  src="/emma-johnson-headshot.png"
                  alt="Emma Johnson"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Emma Johnson</h3>
                <p className="text-sm text-blue-600 mb-2">MS Student (2023-2025)</p>
                <p className="text-xs text-gray-600">Biodiversity informatics</p>
              </div>

              {/* Master's Student 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <img
                  src="/ahmed-hassan-headshot.png"
                  alt="Ahmed Hassan"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Ahmed Hassan</h3>
                <p className="text-sm text-blue-600 mb-2">MS Student (2024-2026)</p>
                <p className="text-xs text-gray-600">Remote sensing ecology</p>
              </div>

              {/* Master's Student 4 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <img
                  src="/maria-silva-headshot.png"
                  alt="Maria Silva"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Maria Silva</h3>
                <p className="text-sm text-blue-600 mb-2">MS Student (2024-2026)</p>
                <p className="text-xs text-gray-600">Conservation genomics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Alumni</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">PhD Graduates</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Dr. Zhang Ming (2023)</h4>
                    <p className="text-sm text-gray-600">Now: Postdoc at Stanford University</p>
                    <p className="text-xs text-gray-500">Thesis: "Deep Learning for Ecosystem Service Mapping"</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Dr. Jennifer Park (2022)</h4>
                    <p className="text-sm text-gray-600">Now: Research Scientist at Google DeepMind</p>
                    <p className="text-xs text-gray-500">Thesis: "AI for Wildlife Conservation Monitoring"</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Dr. Carlos Mendez (2021)</h4>
                    <p className="text-sm text-gray-600">Now: Assistant Professor at UC Berkeley</p>
                    <p className="text-xs text-gray-500">Thesis: "Machine Learning in Forest Ecology"</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Master's Graduates</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Alex Thompson (2024)</h4>
                    <p className="text-sm text-gray-600">Now: PhD student at MIT</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Yuki Tanaka (2024)</h4>
                    <p className="text-sm text-gray-600">Now: Data Scientist at Microsoft</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Sophie Laurent (2023)</h4>
                    <p className="text-sm text-gray-600">Now: Research Analyst at WWF</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">David Kim (2023)</h4>
                    <p className="text-sm text-gray-600">Now: PhD student at Oxford University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborators */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Collaborators</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dr. Jane Smith</h3>
                <p className="text-blue-600 mb-2">Stanford University</p>
                <p className="text-sm text-gray-600">Computational Biology</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prof. Robert Johnson</h3>
                <p className="text-blue-600 mb-2">Oxford University</p>
                <p className="text-sm text-gray-600">Conservation Science</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dr. Maria Gonzalez</h3>
                <p className="text-blue-600 mb-2">Max Planck Institute</p>
                <p className="text-sm text-gray-600">Ecological Modeling</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

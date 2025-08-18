"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.lab": "Lab",
    "nav.research": "Research",
    "nav.people": "People",
    "nav.publication": "Publication",
    "nav.events": "Events",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.qin_research_group": "Qin Research Group",

    // Search
    "search.placeholder": "Search website content...",
    "search.no_results": "No results found",
    "search.results_for": "Results for",

    // News Section
    "news.latest_news": "Latest News",
    "news.featured_news": "Featured News",
    "news.read_more": "Read More",
    "news.show_less": "Show Less",
    "news.view_source": "View Source",

    // News Items
    "news.item1.title": "Research highlighted by mainstream media",
    "news.item1.description":
      "Our recent work on the Sanjiangyuan National Park has been featured in the Qinghai Daily, showcasing our innovative machine learning approaches to grassland ecosystem monitoring.",
    "news.item1.content":
      "Our groundbreaking research on grassland ecosystem dynamics in the Sanjiangyuan National Park has gained significant media attention. The study, led by Dr. Xinghu Qin, demonstrates how machine learning algorithms can effectively monitor and predict changes in one of China's most important ecological regions.\n\nThe research team developed novel deep learning models that analyze satellite imagery and ground-based sensor data to track vegetation patterns, animal migration routes, and climate impacts across the vast grassland ecosystem. This work represents a major advancement in our understanding of how technology can support conservation efforts in remote and ecologically sensitive areas.\n\nThe Qinghai Daily featured our work in their science section, highlighting the practical applications of our research for park management and conservation planning. The article emphasized how our AI-driven approach provides park rangers and conservationists with real-time insights into ecosystem health and potential threats.\n\nThis recognition underscores the importance of interdisciplinary collaboration between computer science and ecology, demonstrating how cutting-edge technology can address pressing environmental challenges in China's national parks.",

    "news.item2.title":
      'National Natural Science Fund Grant: "Inference of the demographic history and migration pattern of Oedaleus asiaticus using machine learning"',
    "news.item2.description":
      "Dr. Qin's project on the demographic history of a grassland pest has been successfully funded by the National Natural Science Foundation of China.",
    "news.item2.content":
      'We are thrilled to announce that our research proposal titled "Inference of the demographic history and migration pattern of Oedaleus asiaticus using machine learning" has been awarded funding by the National Natural Science Foundation of China (NSFC).\n\nThis significant grant will support our investigation into the population dynamics and migration patterns of Oedaleus asiaticus, a major grassland pest that affects agricultural productivity across northern China. The project represents a novel application of machine learning techniques to understand insect population genetics and movement ecology.\n\nOur research approach combines genomic data analysis with advanced machine learning algorithms to reconstruct the demographic history of this species. By understanding how populations have changed over time and how individuals move across the landscape, we can better predict future pest outbreaks and develop more effective management strategies.\n\nThe project will involve collaboration with entomologists, geneticists, and data scientists, creating an interdisciplinary team that brings together expertise from multiple fields. We expect this work to contribute not only to pest management but also to our broader understanding of how machine learning can be applied to ecological and evolutionary questions.\n\nThis funding represents a major milestone for our lab and will support graduate student research, equipment purchases, and field work over the next three years.',

    // Research Page
    "research.title": "Research",
    "research.description":
      "Our research focuses on the intersection of machine learning, ecology, and evolutionary biology, developing computational tools to understand complex biological systems and evolutionary processes.",
    "research.current_areas": "Current Research Areas",
    "research.methodologies": "Research Methodologies",
    "research.focus_areas": "Focus Areas",
    "research.collaborative": "Collaborative Research",
    "research.ml_population_genetics": "Machine Learning in Population Genetics",
    "research.ml_population_genetics_desc":
      "Developing and applying state-of-the-art machine learning methods including random forest classification/regression, UMAP, t-SNE, and deep learning to study spatial patterns of genetic variation and uncover the genetic basis of local adaptation.",
    "research.eco_evolutionary": "Eco-evolutionary Feedback Systems",
    "research.eco_evolutionary_desc":
      "Interpretation of eco-evolutionary feedback by linking environment, genetic diversity, and species diversity using machine learning approaches to understand complex ecosystem dynamics.",
    "research.computational_genomics": "Computational Population Genomics",
    "research.computational_genomics_desc":
      "Statistics, machine learning, and deep learning for population genetic inference, developing new computational tools to decipher signals of evolutionary changes in genomic data.",
    "research.computational_approaches": "Computational Approaches",
    "research.data_types": "Data Types & Sources",
    "research.genetic_diversity": "Genetic Diversity",
    "research.genetic_diversity_desc": "Understanding patterns and drivers of intraspecific genetic variation",
    "research.local_adaptation": "Local Adaptation",
    "research.local_adaptation_desc": "Identifying genetic basis of adaptation to local environmental conditions",
    "research.species_diversity": "Species Diversity",
    "research.species_diversity_desc": "Analyzing interspecies diversity patterns and ecological drivers",
    "research.collaborative_desc":
      "Our research involves collaborations with leading institutions and researchers worldwide, combining expertise in computational biology, ecology, and evolutionary genetics.",
    "research.key_collaborations": "Key Collaborations",
    "research.research_networks": "Research Networks",

    // Publication Page
    "publication.title": "Publications & Achievements",
    "publication.description":
      "Comprehensive research output including peer-reviewed publications, patents, and software developments in machine learning, ecology, evolutionary biology, and bioinformatics.",
    "publication.peer_reviewed": "Peer-Reviewed Publications",
    "publication.patents": "Patents (授权国家发明专利)",
    "publication.software": "Software Copyrights (软件著作权)",
    "publication.research_impact": "Research Impact & Achievements",
    "publication.awards_recognition": "Awards & Recognition",

    // Contact
    "contact.title": "Contact",
    "contact.description":
      "If you are interested in our research and would like to join us or collaborate with us. We welcome undergraduates, postgraduates and postdocs who are interested in working with us, please contact us using the below information.",
    "contact.name_placeholder": "Name",
    "contact.email_placeholder": "Email",
    "contact.message_placeholder": "Message",
    "contact.send": "Send",
    "contact.sending": "Sending...",
    "contact.sent": "Sent",
    "contact.sent_message": "Sent! Thank you for your message.",
    "contact.subscribe": "Subscribe",
    "contact.subscribed": "Subscribed",
    "contact.email_label": "Email",
    "contact.phone_label": "Phone",
    "contact.address_label": "Address",
    "contact.address_line1": "35 Qinghua E Rd, Hai Dian District, China 100107",
    "contact.address_line2": "1119, the main building of BJFU",
    "contact.office_hours_label": "Office Hours",
    "contact.office_hours_1": "Monday 9:00 to 12:30",
    "contact.office_hours_2": "Wednesday 09:00 to 12:00",
    "contact.office_hours_3": "Friday 14:00 to 17:00",
    "contact.appointments_label": "Appointments",
    "contact.book_appointment": "Book an appointment",

    // Hero Section
    "hero.title": "Qin Research Group",
    "hero.description":
      "The Qin Research Group lies in the intersection of ecology, genetics and evolution where we use statistical and machine learning tools to better understand how are genetic and phenotypic variation originated, developed and maintained.",

    // People Page
    "people.title": "People",
    "people.description":
      "Meet our research team members who are dedicated to advancing the frontiers of computational biology, ecology, and evolutionary genetics.",
    "people.principal_investigator": "Principal Investigator",
    "people.graduate_students": "Graduate Students",
    "people.undergraduate_students": "Undergraduate Students",
    "people.alumni": "Alumni",

    // Events Page
    "events.title": "Events",
    "events.description": "Stay updated with our latest seminars, workshops, conferences, and research presentations.",
    "events.upcoming": "Upcoming Events",
    "events.past": "Past Events",

    // Lab Page
    "lab.title": "Lab",
    "lab.description":
      "Explore our research facilities, equipment, and laboratory environment where cutting-edge computational biology research takes place.",
  },
  zh: {
    // Navigation
    "nav.lab": "实验室",
    "nav.research": "研究方向",
    "nav.people": "团队成员",
    "nav.publication": "学术成果",
    "nav.events": "学术活动",
    "nav.news": "新闻动态",
    "nav.contact": "联系我们",
    "nav.qin_research_group": "秦兴虎研究组",

    // Search
    "search.placeholder": "搜索网站内容...",
    "search.no_results": "未找到结果",
    "search.results_for": "搜索结果",

    // News Section
    "news.latest_news": "最新动态",
    "news.featured_news": "重要新闻",
    "news.read_more": "阅读更多",
    "news.show_less": "收起",
    "news.view_source": "查看原文",

    // News Items
    "news.item1.title": "研究成果被主流媒体报道",
    "news.item1.description":
      "我们在三江源国家公园的最新研究成果被《青海日报》报道，展示了我们在草地生态系统监测方面的创新机器学习方法。",
    "news.item1.content":
      "我们在三江源国家公园草地生态系统动态方面的突破性研究获得了媒体的广泛关注。这项由秦兴虎博士领导的研究展示了机器学习算法如何有效监测和预测中国最重要生态区域之一的变化。\n\n研究团队开发了新颖的深度学习模型，分析卫星图像和地面传感器数据，追踪广阔草地生态系统中的植被模式、动物迁徙路线和气候影响。这项工作代表了我们在理解技术如何支持偏远和生态敏感地区保护工作方面的重大进展。\n\n《青海日报》在其科学版块报道了我们的工作，强调了我们研究在公园管理和保护规划方面的实际应用。文章强调了我们基于人工智能的方法如何为公园管理员和保护主义者提供生态系统健康和潜在威胁的实时洞察。\n\n这一认可强调了计算机科学与生态学跨学科合作的重要性，展示了尖端技术如何解决中国国家公园面临的紧迫环境挑战。",

    "news.item2.title": '国家自然科学基金项目："基于机器学习的亚洲小车蝗种群历史和迁移模式推断"',
    "news.item2.description": "秦博士关于草地害虫种群历史的项目成功获得国家自然科学基金资助。",
    "news.item2.content":
      '我们很高兴宣布，我们题为"基于机器学习的亚洲小车蝗种群历史和迁移模式推断"的研究提案获得了国家自然科学基金委员会（NSFC）的资助。\n\n这项重要资助将支持我们对亚洲小车蝗种群动态和迁移模式的研究，这是一种影响中国北方农业生产力的主要草地害虫。该项目代表了机器学习技术在理解昆虫种群遗传学和运动生态学方面的新颖应用。\n\n我们的研究方法结合基因组数据分析和先进的机器学习算法来重建该物种的种群历史。通过了解种群如何随时间变化以及个体如何在景观中移动，我们可以更好地预测未来的害虫爆发并制定更有效的管理策略。\n\n该项目将涉及与昆虫学家、遗传学家和数据科学家的合作，创建一个汇集多个领域专业知识的跨学科团队。我们期望这项工作不仅有助于害虫管理，还有助于我们对机器学习如何应用于生态和进化问题的更广泛理解。\n\n这项资助代表了我们实验室的一个重要里程碑，将在未来三年内支持研究生研究、设备采购和实地工作。',

    // Research Page
    "research.title": "研究方向",
    "research.description":
      "我们的研究专注于机器学习、生态学和进化生物学的交叉领域，开发计算工具来理解复杂的生物系统和进化过程。",
    "research.current_areas": "当前研究领域",
    "research.methodologies": "研究方法",
    "research.focus_areas": "重点研究方向",
    "research.collaborative": "合作研究",
    "research.ml_population_genetics": "群体遗传学中的机器学习",
    "research.ml_population_genetics_desc":
      "开发和应用最先进的机器学习方法，包括随机森林分类/回归、UMAP、t-SNE和深度学习，研究遗传变异的空间模式并揭示局部适应的遗传基础。",
    "research.eco_evolutionary": "生态-进化反馈系统",
    "research.eco_evolutionary_desc":
      "通过使用机器学习方法连接环境、遗传多样性和物种多样性来解释生态-进化反馈，理解复杂的生态系统动态。",
    "research.computational_genomics": "计算群体基因组学",
    "research.computational_genomics_desc":
      "用于群体遗传推断的统计学、机器学习和深度学习，开发新的计算工具来解读基因组数据中的进化变化信号。",
    "research.computational_approaches": "计算方法",
    "research.data_types": "数据类型与来源",
    "research.genetic_diversity": "遗传多样性",
    "research.genetic_diversity_desc": "理解种内遗传变异的模式和驱动因素",
    "research.local_adaptation": "局部适应",
    "research.local_adaptation_desc": "识别适应局部环境条件的遗传基础",
    "research.species_diversity": "物种多样性",
    "research.species_diversity_desc": "分析种间多样性模式和生态驱动因素",
    "research.collaborative_desc":
      "我们的研究涉及与世界领先机构和研究人员的合作，结合计算生物学、生态学和进化遗传学的专业知识。",
    "research.key_collaborations": "主要合作",
    "research.research_networks": "研究网络",

    // Publication Page
    "publication.title": "学术成果与荣誉",
    "publication.description":
      "包括同行评议论文、专利和软件开发在内的综合研究成果，涵盖机器学习、生态学、进化生物学和生物信息学领域。",
    "publication.peer_reviewed": "同行评议论文",
    "publication.patents": "授权国家发明专利",
    "publication.software": "软件著作权",
    "publication.research_impact": "研究影响与成就",
    "publication.awards_recognition": "奖项与荣誉",

    // Contact
    "contact.title": "联系我们",
    "contact.description":
      "如果您对我们的研究感兴趣并希望加入我们或与我们合作，我们欢迎对与我们合作感兴趣的本科生、研究生和博士后，请使用以下信息联系我们。",
    "contact.name_placeholder": "姓名",
    "contact.email_placeholder": "邮箱",
    "contact.message_placeholder": "留言",
    "contact.send": "发送",
    "contact.sending": "发送中...",
    "contact.sent": "已发送",
    "contact.sent_message": "已发送！感谢您的留言。",
    "contact.subscribe": "订阅",
    "contact.subscribed": "已订阅",
    "contact.email_label": "邮箱",
    "contact.phone_label": "电话",
    "contact.address_label": "地址",
    "contact.address_line1": "中国北京市海淀区清华东路35号 100107",
    "contact.address_line2": "北京林业大学主楼1119室",
    "contact.office_hours_label": "办公时间",
    "contact.office_hours_1": "周一 9:00 至 12:30",
    "contact.office_hours_2": "周三 9:00 至 12:00",
    "contact.office_hours_3": "周五 14:00 至 17:00",
    "contact.appointments_label": "预约",
    "contact.book_appointment": "预约会面",

    // Hero Section
    "hero.title": "秦兴虎研究组",
    "hero.description":
      "秦兴虎研究组位于生态学、遗传学和进化生物学的交叉领域，我们使用统计学和机器学习工具来更好地理解遗传和表型变异是如何产生、发展和维持的。",

    // People Page
    "people.title": "团队成员",
    "people.description": "认识我们的研究团队成员，他们致力于推进计算生物学、生态学和进化遗传学的前沿。",
    "people.principal_investigator": "课题组长",
    "people.graduate_students": "研究生",
    "people.undergraduate_students": "本科生",
    "people.alumni": "校友",

    // Events Page
    "events.title": "学术活动",
    "events.description": "了解我们最新的研讨会、工作坊、会议和研究报告的最新信息。",
    "events.upcoming": "即将举行的活动",
    "events.past": "过往活动",

    // Lab Page
    "lab.title": "实验室",
    "lab.description": "探索我们的研究设施、设备和实验室环境，这里进行着前沿的计算生物学研究。",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "zh")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

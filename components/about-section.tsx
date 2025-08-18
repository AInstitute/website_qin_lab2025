import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-serif font-bold mb-4 text-sky-800">About me</h2>
              <div className="space-y-4 text-foreground">
                <p>
                  <strong>Dr Xinghu Qin 秦兴虎</strong>
                </p>
                <p>
                  I am currently an <strong>Associate Professor</strong> at{" "}
                  <a href="#" className="text-primary hover:underline">
                    School of Ecology and Nature Conservation, Beijing Forestry University
                  </a>
                  .
                </p>
                <p>
                  I worked as a research fellow & CAS Special Research Associate at Beijing Institute of Genomics (BIG),
                  Chinese Academy of Sciences (CAS) between 2022-2023.
                </p>
                <p>
                  I earned my PhD in pop genomics (2021, Supervisor: Prof Oscar Gaggiotti) at School of Biology,
                  University of St Andrews, UK.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Overview</h3>
              <div className="space-y-4 text-foreground">
                <p>
                  My research lies at the intersection of evolution, Omics (RNA-Seq, genomics) and machine learning,
                  where I develop computational tools to better understand evolution.
                </p>
                <p>My most recent projects focus on machine learning in genetics, specifically:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    ➤ Interpretation of Eco-evolutionary Feedback: Linking Environment, Genetic Diversity and Species
                    Diversity Using Machine Learning Approaches.
                  </li>
                  <li>➤ Statistics, Machine Learning and Deep Learning for Population Genetic Inference</li>
                </ul>
                <p>
                  For more details about projects and research topics, please see{" "}
                  <a href="#research" className="text-primary hover:underline font-medium">
                    Research
                  </a>
                  .
                </p>
                <p>
                  Until now, almost half of my past projects were involved in using statistical methods to study
                  genetic, ecological, demographic and evolutionary drivers of biodiversity, including intraspecific
                  phenotypic diversity and interspecies diversity (e.g., environment × phenotype; genes).
                </p>
                <p>
                  My more recent researches focuses on developing and utilizing the state-of-the-art machine learning
                  methods (i.e., random forest classification/regression, UMAP, t-SNE, deep learning) to study the
                  spatial patterns of genetic/species variation, and uncover genetic basis of local adaptation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Research experience</h3>
              <div className="space-y-4 text-foreground">
                <p>
                  I completed my M.Sc (3 years programme) in <em>Biological Control</em> of locusts at Institute of
                  Plant Protection, Chinese Academy of Agricultural Sciences (IPP, CAAS, the top research institute in
                  China where I worked on the RNA-Seq analysis to understand the environment factors, grasshopper
                  phenotypic traits, and gene expression. More about this work can be found at{" "}
                  <a href="#" className="text-primary hover:underline">
                    community genetics/transcriptomics
                  </a>
                  , and{" "}
                  <a href="#" className="text-primary hover:underline">
                    biological conservation
                  </a>
                  .
                </p>
                <p>
                  I obtained my PhD in population genetics/genomics at School of Biology, University of St Andrews, UK,
                  supervised by{" "}
                  <a href="#" className="text-primary hover:underline">
                    Prof Oscar Gaggiotti
                  </a>
                  . The purpose of my PhD project was to challenge the "metrics" and "approaches" at the scope of modern
                  population genetics/genomics. I proposed new statistical and machine learning methods to decipher
                  signals of evolutionary changes. Tools can be found{" "}
                  <a href="#" className="text-primary hover:underline">
                    here
                  </a>
                  .
                </p>
                <p>
                  <a href="mailto:qin.xinghu@163.com" className="text-primary hover:underline">
                    qin.xinghu@163.com
                  </a>
                  : qinxinghu@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <img src="/placeholder-699y1.png" alt="Dr. Xinghu Qin" className="w-full rounded-lg shadow-md" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

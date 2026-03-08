import { Search, FileText, Settings, GraduationCap, Wrench } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico da infraestrutura",
    description: "Analisamos a infraestrutura existente para identificar pontos de melhoria e oportunidades de otimização."
  },
  {
    icon: FileText,
    number: "02",
    title: "Planejamento da solução",
    description: "Desenvolvemos um projeto personalizado com as melhores soluções para atender às necessidades do seu negócio."
  },
  {
    icon: Settings,
    number: "03",
    title: "Implantação da rede",
    description: "Executamos a implantação com profissionais qualificados, minimizando impactos na operação."
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Treinamento da equipe",
    description: "Capacitamos sua equipe para utilizar e gerenciar a nova infraestrutura de forma eficiente."
  },
  {
    icon: Wrench,
    number: "05",
    title: "Suporte e manutenção",
    description: "Oferecemos suporte contínuo e manutenção preventiva para garantir o funcionamento ideal."
  }
]

export function ProcessSection() {
  return (
    <section id="processo" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Processo de Implantação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Como trabalhamos
          </h2>
          <p className="text-muted-foreground text-lg">
            Seguimos uma metodologia estruturada para garantir a entrega de projetos 
            com qualidade e dentro do prazo estabelecido.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                {/* Step Number Badge */}
                <span className="absolute top-0 right-1/2 translate-x-10 -translate-y-1 bg-[#2c6e7f] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

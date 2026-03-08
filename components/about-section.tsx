import { CheckCircle, Target, Award, Users } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Projetos personalizados de acordo com as necessidades do seu negócio."
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description: "Equipe certificada e atualizada com as melhores práticas do mercado."
  },
  {
    icon: Users,
    title: "Parceria de Confiança",
    description: "Acompanhamento contínuo e suporte dedicado aos nossos clientes."
  }
]

const highlights = [
  "Diagnóstico completo da infraestrutura existente",
  "Soluções escaláveis para crescimento do negócio",
  "Implantação com mínimo impacto na operação",
  "Suporte técnico especializado e ágil"
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              Sua parceira em infraestrutura de TI
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A Atlas Tecnologia é uma empresa brasileira especializada em soluções de infraestrutura 
              de TI para empresas de todos os portes. Com mais de 5 anos de experiência no mercado, 
              oferecemos serviços completos em redes corporativas, servidores, segurança digital e 
              suporte técnico especializado.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossa missão é ajudar organizações a modernizar seu ambiente tecnológico, 
              aumentar a segurança dos dados e otimizar o desempenho digital, sempre com 
              foco na qualidade e na satisfação do cliente.
            </p>

            {/* Highlights List */}
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-muted rounded-xl p-6 flex items-start gap-4 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

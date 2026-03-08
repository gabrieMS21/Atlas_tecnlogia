import { Network, Server, Cable, Shield, Monitor, HeadphonesIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Network,
    title: "Infraestrutura de redes corporativas",
    description: "Projeto e implantação de redes LAN e WAN de alta performance, garantindo conectividade e estabilidade para sua operação."
  },
  {
    icon: Server,
    title: "Servidores empresariais",
    description: "Configuração e manutenção de servidores físicos e virtuais, otimizando recursos e garantindo disponibilidade."
  },
  {
    icon: Cable,
    title: "Cabeamento estruturado",
    description: "Infraestrutura de cabeamento organizado e certificado, seguindo normas técnicas e de segurança."
  },
  {
    icon: Shield,
    title: "Segurança e backup de dados",
    description: "Proteção completa dos seus dados com firewall, antivírus corporativo e soluções de backup automatizado."
  },
  {
    icon: Monitor,
    title: "Monitoramento de redes",
    description: "Acompanhamento 24/7 da sua infraestrutura, identificando e resolvendo problemas antes que impactem seu negócio."
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte técnico especializado",
    description: "Atendimento rápido e eficiente para resolver qualquer demanda técnica da sua empresa."
  }
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Soluções completas para sua empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços de TI para atender todas as necessidades 
            da sua infraestrutura tecnológica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-background border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

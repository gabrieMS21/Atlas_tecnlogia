import { Building2, Cpu, FolderCheck, Clock } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "+50",
    label: "empresas atendidas"
  },
  {
    icon: Cpu,
    value: "+200",
    label: "equipamentos instalados"
  },
  {
    icon: FolderCheck,
    value: "+120",
    label: "projetos concluídos"
  },
  {
    icon: Clock,
    value: "+5",
    label: "anos de experiência"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Números da Empresa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Resultados que comprovam nossa experiência
          </h2>
          <p className="text-muted-foreground text-lg">
            Números que refletem nosso compromisso com a qualidade e a satisfação dos clientes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

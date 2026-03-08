const partners = [
  { name: "Dell", logo: "DELL" },
  { name: "Intel", logo: "intel" },
  { name: "Cisco", logo: "CISCO" },
  { name: "Intelbras", logo: "intelbras" },
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Ubiquiti", logo: "UBIQUITI" }
]

export function PartnersSection() {
  return (
    <section id="parceiros" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Parceiros e Fornecedores
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Trabalhamos com os melhores fabricantes
          </h2>
          <p className="text-muted-foreground text-lg">
            A Atlas Tecnologia é parceira dos principais fabricantes de tecnologia do mundo, 
            garantindo produtos de qualidade e as melhores soluções para nossos clientes.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-muted rounded-xl p-6 flex items-center justify-center h-24 border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <span className="text-foreground/70 font-bold text-lg tracking-wide">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Utilizamos equipamentos e tecnologias de ponta para garantir a melhor qualidade 
          e desempenho nos projetos que desenvolvemos para nossos clientes.
        </p>
      </div>
    </section>
  )
}

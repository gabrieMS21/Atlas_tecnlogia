const clients = [
  { name: "Havan", sector: "Varejo" },
  { name: "Smart Fit", sector: "Fitness" },
  { name: "Localiza", sector: "Mobilidade" },
  { name: "Grupo Boticário", sector: "Cosméticos" },
  { name: "Magazine Luiza", sector: "E-commerce" }
]

export function ClientsSection() {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-[#122c33]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2c6e7f] font-semibold text-sm uppercase tracking-wider">
            Clientes Atendidos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 text-balance">
            Empresas que confiam em nosso trabalho
          </h2>
          <p className="text-white/70 text-lg">
            Ao longo dos anos, tivemos o privilégio de atender empresas de diversos setores, 
            ajudando-as a transformar sua infraestrutura de TI.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center gap-2 border border-white/10 hover:bg-white/10 transition-all"
            >
              <span className="text-white font-bold text-xl">
                {client.name}
              </span>
              <span className="text-white/50 text-sm">
                {client.sector}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-white/60 mt-12 max-w-2xl mx-auto">
          Nossa experiência abrange diversos segmentos do mercado brasileiro, incluindo varejo, 
          indústria, saúde, educação e serviços, sempre entregando soluções personalizadas 
          para cada tipo de negócio.
        </p>
      </div>
    </section>
  )
}

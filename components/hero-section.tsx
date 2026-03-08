import { Button } from "@/components/ui/button"
import { Server, ArrowRight, Shield, Cpu, Network } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 bg-[#122c33] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/20 rounded-full" />
        <div className="absolute top-40 right-20 w-96 h-96 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Atlas Tecnologia</span>
            </div>

            {/* Tagline */}
            <p className="text-[#2c6e7f] font-medium text-lg mb-4">
              Tecnologia que conecta
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              Soluções completas em infraestrutura de TI para empresas
            </h1>

            {/* Description */}
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Transformamos a tecnologia da sua empresa com soluções robustas em redes, servidores e segurança digital.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="#servicos" className="flex items-center gap-2">
                  Conheça nossas soluções
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                <a href="#contato">Entre em contato</a>
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Main Icon Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center gap-4 border border-white/10">
                  <Network className="w-16 h-16 text-[#2c6e7f]" />
                  <span className="text-white font-medium">Redes</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center gap-4 border border-white/10 mt-8">
                  <Server className="w-16 h-16 text-[#2c6e7f]" />
                  <span className="text-white font-medium">Servidores</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center gap-4 border border-white/10 -mt-4">
                  <Shield className="w-16 h-16 text-[#2c6e7f]" />
                  <span className="text-white font-medium">Segurança</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center gap-4 border border-white/10 mt-4">
                  <Cpu className="w-16 h-16 text-[#2c6e7f]" />
                  <span className="text-white font-medium">Hardware</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useCallback } from "react"
import { Network, Server, Cable, Shield, Monitor, HeadphonesIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Network,
    title: "Infraestrutura",
    description: "Planejamento, implantação e manutenção de redes estruturadas (LAN e WAN), garantindo conectividade, desempenho e segurança para o ambiente corporativo.",
    image: "/images/nickolasLider.png",
    leader: "Líder de Redes"
  },
  {
    icon: Server,
    title: "Sistemas Operacionais",
    description: "Gerenciamento de sistemas operacionais Windows e macOS, incluindo instalação, configuração, atualização e padronização dos ambientes.",
    image: "/images/marcosLider.png",
    leader: "Líder de Servidores"
  },
  {
    icon: Cable,
    title: "Projetos",
    description: "Desenvolvimento e execução de projetos de TI personalizados, incluindo levantamento técnico, documentação e implementação de soluções.",
    image: "public/images/gabrielLider.png",
    leader: "Líder de Projetos"
  },
  {
    icon: Shield,
    title: "Comercial",
    description: "Gestão de relacionamento com clientes, elaboração de propostas, negociação de contratos e acompanhamento de demandas comerciais.",
    image: "/images/pedroLider.png",
    leader: "Líder Comercial"
  },
  {
    icon: Monitor,
    title: "Implantação",
    description: "Execução de implantações de infraestrutura e sistemas, garantindo configuração correta, testes e entrada em operação sem impacto no negócio.",
    image: "/images/leonarddoLider.png",
    leader: "Líder de Implantação"
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Técnico",
    description: "Atendimento técnico especializado para resolução de incidentes, suporte a usuários e manutenção contínua dos sistemas e infraestrutura.",
    image: "/images/bryanLider.png",
    leader: "Líder de Suporte"
  }
]

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const currentService = services[currentIndex]
  const ServiceIcon = currentService.icon

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#122c33] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-20 left-10 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2c6e7f] font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 text-balance">
            Soluções especializadas em TI
          </h2>
          <p className="text-white/70 text-lg">
            Cada área conta com profissionais dedicados para entregar a melhor solução para sua empresa.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image/Leader Section */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1f4d59] to-[#2c6e7f] rounded-2xl overflow-hidden relative">
                {/* Placeholder para a imagem do líder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-white/20">
                      <ServiceIcon className="w-16 h-16 text-white/60" />
                    </div>
                    <p className="text-white/60 text-sm">Imagem do Líder</p>
                    <p className="text-white/40 text-xs mt-1">{currentService.leader}</p>
                  </div>
                </div>
                {/* Badge de serviço */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <ServiceIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{currentService.leader}</p>
                        <p className="text-white/60 text-xs">{currentService.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1f4d59] rounded-2xl flex items-center justify-center">
                  <ServiceIcon className="w-8 h-8 text-[#2c6e7f]" />
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <span className="font-bold text-white text-2xl">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span>/</span>
                  <span>{String(services.length).padStart(2, '0')}</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {currentService.title}
              </h3>
              
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {currentService.description}
              </p>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                {/* Dots */}
                <div className="flex items-center gap-2 ml-4">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        index === currentIndex 
                          ? "w-8 bg-[#2c6e7f]" 
                          : "w-2 bg-white/30 hover:bg-white/50"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Icons Preview */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300",
                    index === currentIndex
                      ? "bg-[#1f4d59] border border-[#2c6e7f]"
                      : "bg-white/5 hover:bg-white/10 border border-transparent"
                  )}
                >
                  <Icon className={cn(
                    "w-6 h-6 transition-colors",
                    index === currentIndex ? "text-[#2c6e7f]" : "text-white/50"
                  )} />
                  <span className={cn(
                    "text-xs text-center transition-colors",
                    index === currentIndex ? "text-white" : "text-white/50"
                  )}>
                    {service.title.split(' ')[0]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

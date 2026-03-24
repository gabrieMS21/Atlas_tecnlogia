"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Network,
  Server,
  Cable,
  Shield,
  Monitor,
  HeadphonesIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Network,
    title: "Infraestrutura",
    description: "Planejamento, implantação e manutenção de redes estruturadas...",
    image: "/images/nickolasLider.png",
    leader: "Líder de Redes",
    name: "Nickolas",
  },
  {
    icon: Server,
    title: "Sistemas Operacionais",
    description: "Gerenciamento de sistemas operacionais Windows e macOS...",
    image: "/images/marcosLider.png",
    leader: "Líder de Servidores",
    name: "Marcos",
  },
  {
    icon: Cable,
    title: "Projetos",
    description: "Desenvolvimento e execução de projetos de TI personalizados...",
    image: "/images/gabrielLider.png",
    leader: "Líder de Projetos",
    name: "Gabriel Mendes",
  },
  {
    icon: Shield,
    title: "Comercial",
    description: "Gestão de relacionamento com clientes...",
    image: "/images/pedroLider.png",
    leader: "Líder Comercial",
    name: "Pedro",
  },
  {
    icon: Monitor,
    title: "Implantação",
    description: "Execução de implantações de infraestrutura e sistemas...",
    image: "/images/leonarddoLider.png",
    leader: "Líder de Implantação",
    name: "Leonardo",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Técnico",
    description: "Atendimento técnico especializado...",
    image: "/images/bryanLider.png",
    leader: "Líder de Suporte",
    name: "Bryan",
  },
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

    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 7000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const currentService = services[currentIndex]
  const ServiceIcon = currentService.icon

  return (
    <section
      id="servicos"
      className="py-20 md:py-28 bg-[#122c33] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-20 left-10 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2c6e7f] font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 text-balance">
            Soluções especializadas em TI
          </h2>

          <p className="text-white/70 text-lg">
            Cada área conta com profissionais dedicados para entregar a melhor
            solução para sua empresa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1f4d59] to-[#2c6e7f] rounded-2xl overflow-hidden relative">
                <img
                  src={currentService.image}
                  alt={currentService.leader}
                  className="w-full h-full object-cover scale-90 object-center"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <ServiceIcon className="w-5 h-5 text-white" />
                      </div>

                      <div>
                        <p className="text-white font-medium text-sm">
                          {currentService.leader}
                        </p>
                        <p className="text-white/60 text-xs">
                          {currentService.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1f4d59] rounded-2xl flex items-center justify-center">
                  <ServiceIcon className="w-8 h-8 text-[#2c6e7f]" />
                </div>

                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <span className="font-bold text-white text-2xl">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span>/</span>
                  <span>{String(services.length).padStart(2, "0")}</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {currentService.title}
              </h3>

              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {currentService.description}
              </p>

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
                  <Icon
                    className={cn(
                      "w-6 h-6 transition-colors",
                      index === currentIndex
                        ? "text-[#2c6e7f]"
                        : "text-white/50"
                    )}
                  />

                  <span
                    className={cn(
                      "text-xs text-center transition-colors",
                      index === currentIndex ? "text-white" : "text-white/50"
                    )}
                  >
                    {service.title.split(" ")[0]}
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

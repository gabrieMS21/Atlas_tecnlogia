"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@atlastecnologia.com",
    href: "mailto:contato@atlastecnologia.com"
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 4000-0000",
    href: "tel:+551140000000"
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, Brasil",
    href: null
  }
]

export function ContactSection() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Entre em contato conosco para agendar uma conversa e descobrir como podemos 
              ajudar sua empresa a transformar sua infraestrutura de TI.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border bg-background">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border bg-background">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Envie uma mensagem
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      autoComplete="off"
                      data-lpignore="true"
                      data-form-type="other"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Nome da empresa"
                      autoComplete="off"
                      data-lpignore="true"
                      data-form-type="other"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    autoComplete="off"
                    data-lpignore="true"
                    data-form-type="other"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(11) 99999-9999"
                    autoComplete="off"
                    data-lpignore="true"
                    data-form-type="other"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

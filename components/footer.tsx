import { Server, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Clientes", href: "#clientes" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" }
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export function Footer() {
  return (
    <footer className="bg-[#122c33] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/ATLASlogo.png" alt="Atlas Logo" className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Atlas</span>
                <span className="text-xs text-white/60 leading-tight">Tecnologia</span>
              </div>
            </div>
            <p className="text-white/70 max-w-md mb-6">
              Soluções completas em infraestrutura de TI para empresas. 
              Tecnologia que conecta pessoas, processos e resultados.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Atlas Tecnologia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

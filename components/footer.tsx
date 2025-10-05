"use client"

import { IconBrandWhatsapp } from "@tabler/icons-react"
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/run.4fit",
      label: "Instagram",
    },
    { icon: IconBrandWhatsapp, href: "https://wa.me/258846212121?text=Olá,%20tenho%20interesse%20na%20Run4Fit", label: "WhatsApp" },
  ]

  const footerLinks = {
    Academia: ["Sobre Nós", "Nossa Equipe", "Instalações", "Depoimentos"],
    Serviços: ["Musculação", "Cardio", "Aulas em Grupo", "Personal Trainer"],
    Suporte: ["Central de Ajuda", "Contato", "Política de Privacidade", "Termos de Uso"],
  }

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 red-gradient rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Run4Fit</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Academia excelência em fitness e performance. Um ginásio moderno, equipado com tecnologia de ponta, aulas dinâmicas e spinning para elevar seus treinos. com equipamentos de última geração e
              profissionais qualificados .
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Run4Fit - Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/jota.dev258"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Jota Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

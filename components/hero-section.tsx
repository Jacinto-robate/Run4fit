"use client"

import { Button } from "@/components/ui/button"
import { IconBrandWhatsapp } from "@tabler/icons-react"
import { Download } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const heroImages = [
    {
      src: "/athletic-person-working-out-in-modern-gym-with-red.jpg",
      alt: "Pessoa atlética treinando em academia moderna",
    },
    {
      src: "/strength-training-area-with-modern-equipment.jpg",
      alt: "Área de musculação com equipamentos modernos",
    },
    {
      src: "/back/1.jpg",
      alt: "Aula de fitness em grupo com atmosfera energética",
    },
    {
      src: "/back/6.jpg",
      alt: "Interior premium da academia com acentos vermelhos",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change every 1 minute (5000ms)

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Image with Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-30" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Transforme Seu
            <span className="block text-primary">Corpo e Mente</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 text-pretty max-w-2xl mx-auto">
            Excelência em fitness e performance com equipamentos de última geração, treinadores especializados e ambiente motivador para
            alcançar seus objetivos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Button asChild className="red-gradient hover:opacity-90 transition-opacity">
              <a
                href="https://wa.me/258846212121?text=Olá,%20tenho%20interesse%20na%20Run4Fit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <IconBrandWhatsapp className="w-4 h-4" />
                Comece Agora
              </a>
            </Button>

            <Button asChild className="red-gradient hover:opacity-90 transition-opacity">
              <a
                href="https://drive.google.com/file/d/1e2pkGXz8VVm8vw1nHLqmHKdhHhuM-09k/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Baixar Regulamento
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

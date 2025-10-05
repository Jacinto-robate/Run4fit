"use client"

import { Users, Clock, Star, Trophy } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      icon: Users,
      number: 150,
      suffix: "+",
      label: "Alunos Ativos",
      description: "Comunidade forte e motivada",
    },
    {
      icon: Clock,
      number: 24,
      suffix: "/7",
      label: "Funcionamento",
      description: "Aberto todos os dias",
    },
    {
      icon: Star,
      number: 3,
      suffix: "+",
      label: "Avaliação",
      description: "Excelência reconhecida",
    },
    {
      icon: Trophy,
      number: 2,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Tradição em resultados",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const animateCounters = () => {
      stats.forEach((stat, index) => {
        const duration = 2000 + index * 200
        let startTime: number

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)

          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentCount = Math.floor(easeOutQuart * stat.number)

          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = currentCount
            return newCounts
          })

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)
      })
    }

    animateCounters()
  }, [isVisible])

  return (
    <section className="py-20 bg-card" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 red-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

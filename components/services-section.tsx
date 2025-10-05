"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Heart, Users, Zap, ChartNoAxesCombined, Calendar } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Dumbbell,
      title: "Musculação",
      description: "Equipamentos de última geração para todos os níveis de treinamento",
      features: ["Equipamentos importados", "Área climatizada", "Orientação profissional"],
    },
    {
      icon: Heart,
      title: "Cardio",
      description: "Zona cardio completa com equipamentos modernos e tecnologia",
      features: ["Esteiras inteligentes", "Bikes ergométricas", "Elípticos premium"],
    },
    {
      icon: Users,
      title: "Aulas em Grupo",
      description: "Variedade de modalidades para todos os gostos e objetivos",
      features: ["Spinning", "Pilates", "Yoga", "Funcional"],
    },
    {
      icon: Zap,
      title: "Treino Funcional",
      description: "Área dedicada ao treinamento funcional com equipamentos especializados",
      features: ["TRX", "Kettlebells", "Cordas navais"],
    },
    {
      icon: ChartNoAxesCombined,
      title: "Personal Trainer",
      description: "Acompanhamento com profissionais qualificados",
      features: ["Avaliação física", "Treino personalizado", "Acompanhamento nutricional"],
    },
    {
      icon: Calendar,
      title: "Flexibilidade",
      description: "Horários flexíveis para se adaptar à sua rotina",
      features: ["24h nos dias úteis", "Finais de semana", "Feriados especiais"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Nossos <span className="text-red-500">Serviços</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            Oferecemos uma gama completa de serviços para atender todas as suas necessidades fitness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 red-gradient rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                <p className="text-gray-300 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/*<Button
                  className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors bg-transparent"
                >
                  Saiba Mais
                </Button>*/}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star } from "lucide-react"

export function PricingSection() {
  const unlimitedAccess = [
    { name: "Diário", price: "350", period: "MT", description: "Acesso por 1 dia" },
    { name: "15 Dias", price: "2,000", period: "MT", description: "Acesso por 15 dias" },
    { name: "Mensal Corporativo", price: "2,900", period: "MT", description: "Para empresas" },
    { name: "Mensal Familiar", price: "3,000", period: "MT", description: "Para toda família" },
    { name: "Mensal Individual", price: "3,300", period: "MT", description: "Plano individual", popular: true },
    { name: "Trimestral", price: "9,000", period: "MT", description: "3 meses de acesso" },
    { name: "Semestral", price: "17,500", period: "MT", description: "6 meses de acesso" },
    { name: "Anual", price: "30,000", period: "MT", description: "12 meses de acesso" },
  ]

  const limitedAccess = [
    { name: "Mensal Estudante", price: "2,500", period: "MT", description: "Desconto estudantil"},
    { name: "Mensal", price: "2,800", period: "MT", description: "Acesso das 9h às 14h", popular: true },
    { name: "Semestral", price: "14,000", period: "MT", description: "6 meses (9h-14h)" },
    { name: "Anual", price: "28,000", period: "MT", description: "12 meses (9h-14h)" },
  ]

  return (
    <section id="plans" className="py-10 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Nossos Planos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty mb-8">
            Escolha o plano que melhor se adapta ao seu estilo de vida e objetivos
          </p>
          <div className="inline-flex items-center space-x-2 red-gradient px-6 py-3 rounded-full">
            <Users className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">OFERECEMOS INSTRUTORES EM TODOS OS PLANOS</span>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-primary" />
              <h3 className="text-3xl font-bold text-primary">Acesso Ilimitado</h3>
              <Star className="w-6 h-6 text-primary" />
            </div>
            <p className="text-gray-300">Acesso completo a todas as instalações e horários</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {unlimitedAccess.map((plan, index) => (
              <Card
                key={index}
                className={`glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="red-gradient px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">Popular</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-bold text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </CardHeader>

                {/*<CardContent className="pt-0">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "red-gradient hover:opacity-90"
                        : "border-primary/30 text-primary hover:bg-primary hover:text-white"
                    } transition-all duration-300`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Escolher
                  </Button>
                </CardContent>*/}
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-3xl font-bold text-primary">Acesso das 9:00 às 14:00</h3>
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <p className="text-gray-300">Horário reduzido com preços especiais</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {limitedAccess.map((plan, index) => (
              <Card
                key={index}
                className={`glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="red-gradient px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">Estudante</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-bold text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </CardHeader>

                {/*<CardContent className="pt-0">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "red-gradient hover:opacity-90"
                        : "border-primary/30 text-primary hover:bg-primary hover:text-white"
                    } transition-all duration-300`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Escolher
                  </Button>
                </CardContent>*/}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

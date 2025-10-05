"use client"

import { AnimatedTeam } from "./ui/animated-team"

const teamMembers = [
  {
    name: "Francisco Sigauque",
    specialty: "Diretor tecn. e Instrutor",
    description:
      "Lic. em ciencias do desporto(UEM),Instrutor de cardio fitness e treino personalizado, professor de spinning, aerobica, tabata, circuito, TRX, certificado em suporte básico de vida.",
    src: "/1.jpg",
  },
  {
    name: "Inário  Miambo",
    specialty: "Instrutor",
    description:
      "Instrutor de cardio fitness e treino personalizado, especializado em treino de hipertrofia muscular, dominio de manobras de suporte básico de vida.",
    src: "/2.jpg",
  },
  {
    name: "Farida Saborinho",
    specialty: "Instrutora",
    description:
      "Instrutor de cardio fitness e treino personalizado, especializado em treino de hipertrofia muscular, professora de spinning e aerobica.",
    src: "/3.jpg",
  },
  {
    name: "Nogueira Júnior",
    specialty: "Instrutor",
    description:
      "Instrutor de cardio fitness e treino personalizado, especializado em treino de hipertrofia muscular, professor de aerobica e step.",
    src: "/4.jpg",
  },
  {
    name: "Lucas Joaquim",
    specialty: "Instrutor",
    description:
      "Instrutor de cardio fitness e treino personalizado, especializado em treino de hipertrofia muscular, dominio de manobras de suporte básico de vida.",
    src: "/5.jpg",
  },
   {
    name: "Edivaldo Malingamoio",
    specialty: "Instrutor",
    description:
      "Instrutor de cardio fitness e treino personalizado, especializado em treino de hipertrofia muscular, dominio de manobras de suporte básico de vida.",
    src: "/6.jpg",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-10 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-pretty">
            Conheça os profissionais dedicados que vão te ajudar a alcançar seus objetivos fitness
          </p>
        </div>

        <AnimatedTeam teamMembers={teamMembers} autoplay={true} />
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Download } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Tete Junction Shopping Matema EN7, Tete, Mozambique"],
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["+258 84 621 2121"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["gym.run4fit@gmail.com"],
    },
    {
      icon: Clock,
      title: "Horários",
      details: ["Seg à sexta-feira: 05h às 21h", "Sábado: 05h às 17h", "Domingo: encerrado"],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Entre em Contato</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            Estamos prontos para ajudar você a começar sua jornada fitness
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-effect border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 red-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 red-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Regulamento Interno</h3>
                    <p className="text-gray-300 mb-4">
                      Baixe nosso regulamento interno e conheça todas as normas da academia
                    </p>
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
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-input border-border/50 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-input border-border/50 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <Input
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-input border-border/50 text-white placeholder:text-gray-400"
                />

                <Textarea
                  placeholder="Sua mensagem"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-input border-border/50 text-white placeholder:text-gray-400"
                />

                <Button type="submit" className="w-full red-gradient hover:opacity-90 transition-opacity">
                  Enviar Mensagem
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border/30">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  Nossa Localização
                </h3>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.593325224813!2d33.6083550761911!3d-16.13832483152013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19264700068dc493%3A0xcab66692b7c8e473!2sRun%204%20Fit!5e0!3m2!1spt-PT!2smz!4v1759007130966!5m2!1spt-PT!2smz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Clique no mapa para abrir no Google Maps</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

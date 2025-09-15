"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Heart, Shield } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 pt-28 lg:pt-20">
      <div className="absolute inset-0 bg-[url('/serene-nature-landscape-with-soft-mountains-and-ca.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200">
                <Heart className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Psicología Online Chillán</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Psicología Online en Chillán - Tu bienestar mental es nuestra <span className="text-emerald-600">prioridad</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              Terapia psicológica profesional desde la comodidad de tu hogar. Conecta con psicólogos especializados en
              Chillán para comenzar tu proceso de sanación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('contacto')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Cita Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 text-lg bg-transparent cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('nosotros')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                Conocer Más
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <span>Horarios Flexibles</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Profesionales Certificados</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/psychologist-online-session.jpg"
                alt="Psicóloga profesional en sesión online desde Chillán"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Pacientes atendidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

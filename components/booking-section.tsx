"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Phone, Mail, CheckCircle, Send, MessageCircle, MapPin } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function BookingSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Form card animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Info cards animation
      gsap.fromTo(infoRef.current?.children || [],
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const service = formData.get('service') as string
    const message = formData.get('message') as string

    if (!firstName || !lastName || !email || !phone || !service) {
      setError('Por favor completa todos los campos obligatorios')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Por favor ingresa un email válido')
      return
    }

    const whatsappMessage = `
Hola! Me interesa agendar una cita de psicología online.

*MIS DATOS:*
- Nombre: ${firstName} ${lastName}
- Email: ${email}
- Teléfono: ${phone}
- Servicio: ${service}

${message ? `*MENSAJE ADICIONAL:*\n${message}\n` : ''}
Enviado desde el formulario web el ${new Date().toLocaleDateString('es-CL')} a las ${new Date().toLocaleTimeString('es-CL')}

¿Podrían confirmarme disponibilidad? ¡Gracias!
    `.trim()

    const phoneNumber = "+56999406614"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, '_blank')
    setIsSubmitted(true)
    form.reset()
  }

  if (isSubmitted) {
    return (
      <section id="contacto" className="section-padding gradient-radial-sage relative overflow-hidden">
        <div className="absolute inset-0 texture-noise pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="w-16 h-16 md:w-20 md:h-20 gradient-sage rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg shadow-sage-500/30">
                <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl text-warm-900 mb-3 md:mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                WhatsApp Abierto
              </h2>
              <p className="text-base md:text-lg text-warm-600 mb-6 md:mb-8 leading-relaxed">
                Se ha abierto WhatsApp con todos tus datos organizados. Solo envía el mensaje y nos pondremos en contacto contigo dentro de las próximas 24 horas para confirmar tu sesión.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-2 border-sage-300 text-sage-700 hover:bg-sage-50 cursor-pointer rounded-xl px-6 md:px-8 py-2 md:py-3"
              >
                Agendar Otra Cita
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="section-padding gradient-radial-sage relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sage-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sand-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Texture */}
      <div className="absolute inset-0 texture-noise pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6 shadow-sm">
            <Calendar className="h-4 w-4 text-sage-600" aria-hidden="true" />
            <span className="text-sm font-medium text-sage-700 tracking-wide">Agenda tu cita</span>
          </div>
          <h2
            id="contact-heading"
            className="text-headline text-warm-900 mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Comienza tu camino hacia{' '}
            <span className="text-sage-600">el bienestar</span>
          </h2>
          <p className="text-body-lg text-warm-500 max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para coordinar tu primera sesión
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          {/* Form Card */}
          <Card
            ref={formRef}
            className="lg:col-span-3 bg-white border-0 shadow-2xl shadow-warm-900/10 rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <CardHeader className="bg-gradient-to-r from-sage-50 to-sand-50 border-b border-warm-100 pb-4 md:pb-6 px-4 md:px-6">
              <CardTitle className="flex items-center gap-2 md:gap-3 text-warm-900 text-lg md:text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                <div className="w-8 h-8 md:w-10 md:h-10 gradient-sage rounded-lg md:rounded-xl flex items-center justify-center shadow-md">
                  <Send className="h-4 w-4 md:h-5 md:w-5 text-white" aria-hidden="true" />
                </div>
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {error && (
                  <div className="p-3 md:p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm" role="alert">
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-warm-700 font-medium text-sm md:text-base">Nombre</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Tu nombre"
                      required
                      className="rounded-xl border-warm-200 focus:border-sage-400 focus:ring-sage-400 text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-warm-700 font-medium text-sm md:text-base">Apellido</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Tu apellido"
                      required
                      className="rounded-xl border-warm-200 focus:border-sage-400 focus:ring-sage-400 text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-warm-700 font-medium text-sm md:text-base">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="rounded-xl border-warm-200 focus:border-sage-400 focus:ring-sage-400 text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-warm-700 font-medium text-sm md:text-base">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    required
                    className="rounded-xl border-warm-200 focus:border-sage-400 focus:ring-sage-400 text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-warm-700 font-medium text-sm md:text-base">Tipo de Servicio</Label>
                  <Select name="service" required>
                    <SelectTrigger className="rounded-xl border-warm-200 focus:border-sage-400 focus:ring-sage-400 text-sm md:text-base">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="individual">Terapia Individual</SelectItem>
                      <SelectItem value="familiar">Terapia Familiar</SelectItem>
                      <SelectItem value="coaching">Coaching Personal</SelectItem>
                      <SelectItem value="estres">Manejo del Estrés</SelectItem>
                      <SelectItem value="bienestar">Bienestar Emocional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-warm-700 font-medium text-sm md:text-base">Mensaje (Opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos brevemente qué te gustaría trabajar en terapia..."
                    rows={4}
                    className="rounded-xl border-warm-200 focus:border-sage-400 focus:ring-sage-400 resize-none text-sm md:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-primary py-5 md:py-6 text-base md:text-lg cursor-pointer"
                  aria-label="Enviar solicitud de cita por WhatsApp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div ref={infoRef} className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Hours Card */}
            <Card className="bg-white border-0 shadow-xl shadow-warm-900/5 rounded-2xl md:rounded-3xl overflow-hidden hover-lift">
              <CardHeader className="pb-3 md:pb-4 px-4 md:px-6">
                <CardTitle className="flex items-center gap-2 md:gap-3 text-warm-900 text-base md:text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-sage-100 rounded-lg md:rounded-xl flex items-center justify-center">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-sage-600" aria-hidden="true" />
                  </div>
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4 px-4 md:px-6 pb-4 md:pb-6">
                <div className="flex justify-between items-center py-2 border-b border-warm-100">
                  <span className="text-warm-600 text-sm md:text-base">Lunes - Viernes</span>
                  <span className="font-medium text-warm-900 bg-sage-50 px-2 md:px-3 py-1 rounded-lg text-sm md:text-base">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-warm-100">
                  <span className="text-warm-600 text-sm md:text-base">Sábados</span>
                  <span className="font-medium text-warm-900 bg-sand-50 px-2 md:px-3 py-1 rounded-lg text-sm md:text-base">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-warm-600 text-sm md:text-base">Domingos</span>
                  <span className="font-medium text-warm-400 text-sm md:text-base">Cerrado</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-white border-0 shadow-xl shadow-warm-900/5 rounded-2xl md:rounded-3xl overflow-hidden hover-lift">
              <CardHeader className="pb-3 md:pb-4 px-4 md:px-6">
                <CardTitle className="flex items-center gap-2 md:gap-3 text-warm-900 text-base md:text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-sand-100 rounded-lg md:rounded-xl flex items-center justify-center">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-sand-600" aria-hidden="true" />
                  </div>
                  Contacto Directo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-5 px-4 md:px-6 pb-4 md:pb-6">
                <button
                  className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-sage-50 transition-colors cursor-pointer group w-full text-left"
                  onClick={() => window.open('https://wa.me/56999406614', '_blank')}
                  aria-label="Contactar por WhatsApp"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 gradient-sage rounded-lg md:rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-warm-900 text-sm md:text-base">+56 9 9940 6614</p>
                    <p className="text-xs md:text-sm text-sage-600">WhatsApp disponible</p>
                  </div>
                </button>
                <button
                  className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-sand-50 transition-colors cursor-pointer group w-full text-left"
                  onClick={() => window.location.href = 'mailto:psicologiaonlineypresencial14@gmail.com'}
                  aria-label="Enviar email"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-sand-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-warm-900 text-xs md:text-sm truncate">psicologiaonlineypresencial14@gmail.com</p>
                    <p className="text-xs md:text-sm text-sand-600">Respuesta en 24 horas</p>
                  </div>
                </button>
                <div className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl bg-warm-50">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-warm-200 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-warm-600" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-warm-900 text-sm md:text-base">Atención en todo Chile</p>
                    <p className="text-xs md:text-sm text-warm-500">100% Online</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

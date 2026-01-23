"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Users2, Lightbulb, Shield, Smile, ArrowRight } from "lucide-react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: Brain,
      title: "Terapia Individual",
      description: "Sesiones personalizadas para abordar ansiedad, depresión, estrés, trauma complejo y otros desafíos emocionales.",
      features: ["Evaluación inicial completa", "Terapia reparatoria en trauma", "Plan de tratamiento personalizado", "Seguimiento continuo"],
      image: "/individual-therapy-session-400.webp",
      accent: "sage"
    },
    {
      icon: Users2,
      title: "Terapia Familiar",
      description: "Mejora la dinámica familiar y crea un ambiente más armonioso en el hogar.",
      features: ["Dinámicas familiares", "Comunicación intergeneracional", "Resolución de crisis"],
      image: "/family-therapy-session-400.webp",
      accent: "sand"
    },
    {
      icon: Lightbulb,
      title: "Coaching Personal",
      description: "Desarrolla tu potencial y alcanza tus metas personales y profesionales.",
      features: ["Definición de objetivos", "Desarrollo de habilidades", "Plan de acción"],
      image: "/personal-coaching-session-400.webp",
      accent: "sage"
    },
    {
      icon: Shield,
      title: "Manejo del Estrés",
      description: "Técnicas especializadas para manejar el estrés laboral y personal de manera efectiva.",
      features: ["Técnicas de relajación", "Mindfulness", "Gestión del tiempo"],
      image: "/stress-management-therapy-400.webp",
      accent: "sand"
    },
    {
      icon: Smile,
      title: "Bienestar Emocional",
      description: "Programas integrales para mejorar tu autoestima y bienestar general.",
      features: ["Autoconocimiento", "Inteligencia emocional", "Hábitos saludables"],
      image: "/emotional-wellness-session-400.webp",
      accent: "sage"
    },
  ]

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

      // Cards staggered animation
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="section-padding gradient-warm relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-sage-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-sand-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Texture overlay */}
      <div className="absolute inset-0 texture-noise pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6 shadow-sm">
            <Heart className="h-4 w-4 text-sage-600" aria-hidden="true" />
            <span className="text-sm font-medium text-sage-700 tracking-wide">Nuestros servicios</span>
          </div>
          <h2
            id="services-heading"
            className="text-headline text-warm-900 mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Servicios especializados para{' '}
            <span className="text-sage-600">tu bienestar</span>
          </h2>
          <p className="text-body-lg text-warm-500 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios psicológicos adaptados a tus necesidades específicas
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="group h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg shadow-warm-900/5 hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl md:rounded-3xl hover-lift"
            >
              {/* Image section */}
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - Psicología online Chile`}
                  width={400}
                  height={220}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/40 via-warm-900/10 to-transparent" />

                {/* Icon badge */}
                <div className={`absolute top-3 left-3 md:top-4 md:left-4 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                  service.accent === 'sage'
                    ? 'bg-sage-600 shadow-sage-600/30'
                    : 'bg-sand-500 shadow-sand-500/30'
                }`}>
                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-white" aria-hidden="true" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-sage-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <CardHeader className="pb-2 px-4 md:px-6">
                <CardTitle
                  className="text-lg md:text-xl text-warm-900 group-hover:text-sage-700 transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-4 md:px-6 pb-4 md:pb-6">
                <p className="service-description text-warm-500 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 md:space-y-2.5" role="list">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs md:text-sm text-warm-600 group-hover:text-warm-700 transition-colors"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 md:mr-3 flex-shrink-0 ${
                        service.accent === 'sage' ? 'bg-sage-500' : 'bg-sand-500'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action link */}
                <div className="mt-4 md:mt-6 pt-4 border-t border-warm-100">
                  <button
                    className={`inline-flex items-center text-sm font-medium transition-all cursor-pointer group/btn ${
                      service.accent === 'sage'
                        ? 'text-sage-600 hover:text-sage-700'
                        : 'text-sand-600 hover:text-sand-700'
                    }`}
                    onClick={scrollToContact}
                    aria-label={`Solicitar información sobre ${service.title}`}
                  >
                    Solicitar información
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

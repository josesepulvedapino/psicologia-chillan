"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Award, MapPin, Check } from "lucide-react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: MapPin,
      title: "Atención en Todo Chile",
      description: "Pacientes de Arica a Punta Arenas, sin importar la ciudad",
      color: "sage"
    },
    {
      icon: Users,
      title: "Equipo Certificado",
      description: "Psicólogos titulados con práctica en terapia online",
      color: "sand"
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Lunes a sábado, en horarios que se ajusten a ti",
      color: "sage"
    },
    {
      icon: Award,
      title: "+500 Pacientes",
      description: "Que ya mejoraron su salud mental con nosotros",
      color: "sand"
    },
  ]

  const benefits = [
    "Sesiones individuales según lo que necesitas trabajar",
    "Videollamada segura y sencilla de usar",
    "Seguimiento de tu avance entre sesiones",
    "Comunicación directa con tu psicólogo por WhatsApp",
    "Posibilidad de reprogramar si surge un imprevisto"
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

      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Content animation
      gsap.fromTo(contentRef.current?.children || [],
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Features grid animation
      gsap.fromTo(featuresRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="section-padding bg-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sand-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-sage-50 px-4 py-2 rounded-full mb-4 md:mb-6">
            <div className="w-2 h-2 bg-sage-500 rounded-full" />
            <span className="text-sm font-medium text-sage-700 tracking-wide">Por qué elegirnos</span>
          </div>
          <h2
            id="about-heading"
            className="text-headline text-warm-900 mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Terapia online que se adapta{' '}
            <span className="text-sage-600">a tu vida</span>
          </h2>
          <p className="text-body-lg text-warm-500 max-w-2xl mx-auto">
            Un espacio profesional y seguro para tu salud mental,
            con la flexibilidad que tu rutina necesita.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Image side */}
          <div ref={imageRef} className="relative">
            <div className="relative">
              {/* Decorative shape */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-sage-100 to-sand-100 rounded-[2rem] md:rounded-[3rem] -rotate-2 md:-rotate-3" />

              {/* Image container */}
              <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-sage-900/10">
                <Image
                  src="/therapy-session-comfortable-space-500.webp"
                  alt="Espacio cómodo para terapia online desde casa en Chile"
                  width={500}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="w-full h-auto object-cover"
                  quality={90}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 glass rounded-xl md:rounded-2xl px-4 py-2 md:px-5 md:py-3 shadow-xl">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 gradient-sage rounded-lg md:rounded-xl flex items-center justify-center">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-warm-900">Desde tu hogar</div>
                    <div className="text-[10px] md:text-xs text-warm-500">Sin traslados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div ref={contentRef}>
            <h3
              className="text-title text-warm-900 mb-4 md:mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Atención profesional a tu alcance
            </h3>
            <p className="service-description text-warm-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
              Sabemos que dar el primer paso cuesta. Por eso trabajamos para que el proceso
              sea lo más simple y cómodo posible. Te atendemos por videollamada con el mismo
              rigor y calidez que en una consulta presencial, pero sin que tengas que salir de tu casa.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 md:space-y-4" role="list">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 md:gap-4 group"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-sage-100 flex items-center justify-center group-hover:bg-sage-200 transition-colors flex-shrink-0">
                    <Check className="h-3 w-3 md:h-3.5 md:w-3.5 text-sage-600" aria-hidden="true" />
                  </div>
                  <span className="text-sm md:text-base text-warm-700 group-hover:text-warm-900 transition-colors">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features grid */}
        <div
          ref={featuresRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group text-center p-4 md:p-6 border-0 shadow-lg shadow-warm-900/5 hover:shadow-xl transition-all duration-300 rounded-xl md:rounded-2xl hover-lift ${
                feature.color === 'sage' ? 'bg-sage-50/50' : 'bg-sand-50/50'
              }`}
            >
              <CardContent className="p-0 pt-2 md:pt-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  feature.color === 'sage'
                    ? 'bg-sage-100 group-hover:bg-sage-200'
                    : 'bg-sand-100 group-hover:bg-sand-200'
                }`}>
                  <feature.icon className={`h-5 w-5 md:h-6 md:w-6 ${
                    feature.color === 'sage' ? 'text-sage-600' : 'text-sand-600'
                  }`} aria-hidden="true" />
                </div>
                <h3
                  className="font-medium text-warm-900 mb-1 md:mb-2 text-sm md:text-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-warm-500 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

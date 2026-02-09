"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Sparkles } from "lucide-react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "María González",
      age: "32 años",
      location: "Santiago",
      text: "Llevaba meses postergando ir al psicólogo por falta de tiempo. Cuando descubrí que podía atenderme por videollamada, todo fue más fácil. Mi psicóloga me ayudó mucho con la ansiedad que sentía en el trabajo.",
      rating: 5,
      avatar: "/patient-avatar-maria-48.webp",
    },
    {
      name: "Carlos Mendoza",
      age: "28 años",
      location: "Concepción",
      text: "Me costó dar el paso de pedir ayuda. La verdad es que la modalidad online me lo hizo menos difícil, porque podía conectarme desde mi pieza sin que nadie supiera. Fue una buena decisión.",
      rating: 5,
      avatar: "/patient-avatar-carlos-48.webp",
    },
    {
      name: "Laura Fernández",
      age: "35 años",
      location: "Valparaíso",
      text: "Después de años cargando con traumas que no sabía cómo manejar, por fin encontré un espacio donde me sentí escuchada. La terapia me ayudó a entender muchas cosas y a estar mejor conmigo misma.",
      rating: 5,
      avatar: "/patient-avatar-couple-48.webp",
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

      // Cards animation with rotation
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50, rotateY: -10 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Logos fade in
      gsap.fromTo(logosRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: logosRef.current,
            start: "top 90%",
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
      id="testimonios"
      className="section-padding bg-white relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 gradient-radial-sage opacity-30 pointer-events-none" />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-sage-100/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-sand-100/40 rounded-full blur-2xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-sand-50 px-4 py-2 rounded-full mb-4 md:mb-6">
            <Sparkles className="h-4 w-4 text-sand-600" aria-hidden="true" />
            <span className="text-sm font-medium text-sand-700 tracking-wide">Testimonios</span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-headline text-warm-900 mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Lo que dicen{' '}
            <span className="text-sage-600">nuestros pacientes</span>
          </h2>
          <p className="text-body-lg text-warm-500 max-w-2xl mx-auto">
            Experiencias reales de personas que decidieron cuidar su salud mental con nosotros
          </p>
        </div>

        {/* Testimonials grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative bg-white border-0 shadow-xl shadow-warm-900/5 hover:shadow-2xl transition-all duration-500 rounded-2xl md:rounded-3xl overflow-hidden hover-lift"
            >
              {/* Decorative accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                index === 0 ? 'bg-sage-500' : index === 1 ? 'bg-sand-500' : 'bg-sage-400'
              }`} />

              <CardContent className="pt-8 md:pt-10 pb-6 md:pb-8 px-5 md:px-8">
                {/* Quote icon */}
                <div className="absolute top-5 right-5 md:top-6 md:right-6">
                  <Quote className="h-8 w-8 md:h-10 md:w-10 text-sage-100 group-hover:text-sage-200 transition-colors" aria-hidden="true" />
                </div>

                {/* Testimonial text */}
                <blockquote className="text-warm-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 md:mb-6" aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 md:h-5 md:w-5 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Author info */}
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden ring-4 ring-sage-50">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={`Foto de ${testimonial.name}`}
                        width={56}
                        height={56}
                        sizes="56px"
                        className="w-full h-full object-cover"
                        quality={85}
                      />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-sage-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <p
                      className="font-medium text-warm-900 text-sm md:text-base"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-warm-500">
                      {testimonial.age} - {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div ref={logosRef} className="text-center">
          <p className="text-xs md:text-sm text-warm-400 mb-6 md:mb-8 uppercase tracking-wider">
            Certificados y avalados por
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity">
            <Image
              src="/colegio-psicologos-chile-logo-120.webp"
              alt="Colegio de Psicólogos de Chile"
              width={120}
              height={60}
              sizes="120px"
              className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              quality={85}
            />
            <Image
              src="/ministerio-salud-chile-logo-120.webp"
              alt="Ministerio de Salud Chile"
              width={120}
              height={60}
              sizes="120px"
              className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              quality={85}
            />
            <Image
              src="/telemedicina-certificacion-logo-120.webp"
              alt="Certificación Telemedicina"
              width={120}
              height={60}
              sizes="120px"
              className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

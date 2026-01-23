"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Sparkles, Shield, Clock, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const floatingCard1Ref = useRef<HTMLDivElement>(null)
  const floatingCard2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial timeline for hero entrance
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      })

      // Badge animation
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: -30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )

      // Heading animation
      .fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.4"
      )

      // Description
      .fromTo(descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )

      // CTA Buttons
      .fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )

      // Trust indicators
      .fromTo(trustRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.3"
      )

      // Image section
      .fromTo(imageRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: "power2.out" },
        "-=1.2"
      )

      // Floating cards
      .fromTo(floatingCard1Ref.current,
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      )

      .fromTo(floatingCard2Ref.current,
        { opacity: 0, scale: 0.8, y: -30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      )

      // Floating animation for cards
      gsap.to(floatingCard1Ref.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      gsap.to(floatingCard2Ref.current, {
        y: 10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      })

      // Parallax effect on scroll
      gsap.to(".hero-bg-shape", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-sage-50 via-sand-50/50 to-white"
      aria-label="Inicio - Psicología Online Chile"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-bg-shape absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-sage-100/40 rounded-full blur-3xl" />
        <div className="hero-bg-shape absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-sand-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-sage-200/20 rounded-full blur-2xl animate-float" />
      </div>

      {/* Texture */}
      <div className="absolute inset-0 texture-noise pointer-events-none" />

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Content Column */}
          <div ref={contentRef} className="text-center lg:text-left order-2 lg:order-1">

            {/* Badge */}
            <div ref={badgeRef} className="flex justify-center lg:justify-start mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm">
                <Sparkles className="h-4 w-4 text-sage-600" aria-hidden="true" />
                <span className="text-sm font-medium text-sage-700 tracking-wide">
                  Psicoterapia Online en Chile
                </span>
              </div>
            </div>

            {/* Heading - SEO optimized H1 */}
            <h1
              ref={headingRef}
              className="text-display font-medium text-warm-900 mb-6 md:mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Tu espacio seguro{' '}
              <span className="block sm:inline">
                para{' '}
                <span className="relative inline-block text-sage-600">
                  sanar
                  <svg
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8c40-6 80-6 120-3s60 5 76 3"
                      stroke="var(--sage-400)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Description - SEO optimized */}
            <p
              ref={descriptionRef}
              className="hero-description text-body-lg text-warm-600 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Conecta con psicólogos certificados desde cualquier lugar de Chile.
              Terapia personalizada para ansiedad, depresión, trauma y crecimiento personal.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-10 md:mb-12"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto btn-primary text-base md:text-lg cursor-pointer group"
                onClick={() => scrollToSection('contacto')}
                aria-label="Agendar primera sesión de terapia online"
              >
                <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                Agendar Primera Sesión
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto btn-secondary text-base md:text-lg cursor-pointer"
                onClick={() => scrollToSection('servicios')}
                aria-label="Ver servicios de psicología online"
              >
                Conocer Servicios
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              ref={trustRef}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6"
            >
              {[
                { icon: Shield, text: "100% Confidencial", color: "sage" },
                { icon: Clock, text: "Horarios Flexibles", color: "sand" },
                { icon: CheckCircle2, text: "Psicólogos Certificados", color: "sage" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-warm-600"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.color === 'sage' ? 'bg-sage-100' : 'bg-sand-100'
                  }`}>
                    <item.icon className={`h-4 w-4 ${
                      item.color === 'sage' ? 'text-sage-600' : 'text-sand-600'
                    }`} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div ref={imageRef} className="relative order-1 lg:order-2">
            {/* Decorative background */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-sage-200/40 to-sand-200/40 rounded-[2rem] md:rounded-[3rem] rotate-2 md:rotate-3" />

            {/* Main Image */}
            <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sage-900/10">
              <Image
                src="/psychologist-online-session-600.webp"
                alt="Psicóloga profesional en sesión de terapia online en Chile - Atención virtual certificada"
                width={600}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="w-full h-auto object-cover"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/10 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div
              ref={floatingCard1Ref}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-left-12 glass rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 z-10"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 gradient-sage rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-sage-500/30">
                  <span className="text-xl md:text-2xl font-bold text-white">+</span>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-warm-900" style={{ fontFamily: 'var(--font-heading)' }}>
                    500
                  </div>
                  <div className="text-xs md:text-sm text-warm-500">Pacientes atendidos</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div
              ref={floatingCard2Ref}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-right-8 glass-dark text-white rounded-xl md:rounded-2xl px-4 py-2 md:px-5 md:py-3 shadow-xl z-10"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-sage-400 border-2 border-white" />
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-sand-400 border-2 border-white" />
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-sage-300 border-2 border-white" />
                </div>
                <span className="text-xs md:text-sm font-medium">Todo Chile</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

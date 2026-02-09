"use client"

import { useEffect, useRef } from "react"
import { Heart, MapPin, Phone, Mail, Clock, Instagram, ArrowUpRight } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grid columns animation
      const columns = gridRef.current?.children
      if (columns) {
        gsap.fromTo(columns,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Bottom section animation
      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      )

    }, footerRef)

    return () => ctx.revert()
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "+56999406614"
    const message = "Hola, me interesa conocer más sobre los servicios de psicología online. ¿Podrían darme más información?"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:psicologiaonlineypresencial14@gmail.com"
  }

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/psicologia_online_presencial", '_blank')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer
      ref={footerRef}
      className="relative bg-sage-900 text-white overflow-hidden"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-sage-800/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-52 md:w-80 h-52 md:h-80 bg-sand-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-sage-700 via-sand-500 to-sage-700" />

      <div className="container-custom relative z-10 py-12 md:py-16">
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-sand-400" aria-hidden="true" />
              </div>
              <div>
                <span className="text-lg md:text-xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                  Psicología Online
                </span>
                <div className="text-[10px] md:text-xs text-sage-400 tracking-wider uppercase">Chile</div>
              </div>
            </div>
            <p className="text-sage-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Psicólogos certificados que atienden por videollamada a todo Chile.
              Terapia individual, familiar y tratamiento de ansiedad, depresión y trauma.
            </p>
            <div className="flex items-center gap-2 text-sand-400">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs md:text-sm">Atención en todo Chile</span>
            </div>
          </div>

          {/* Services column */}
          <nav aria-label="Servicios">
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Servicios
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Terapia Individual",
                "Terapia Familiar",
                "Coaching Personal",
                "Manejo del Estrés",
                "Bienestar Emocional"
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-sage-300 hover:text-white transition-colors cursor-pointer text-left group flex items-center gap-2 text-sm md:text-base"
                  >
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-sage-600 rounded-full group-hover:bg-sand-400 transition-colors flex-shrink-0" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navigation column */}
          <nav aria-label="Navegación del sitio">
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Navegación
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "Inicio", id: "inicio" },
                { label: "Nosotros", id: "nosotros" },
                { label: "Servicios", id: "servicios" },
                { label: "Testimonios", id: "testimonios" },
                { label: "Preguntas Frecuentes", id: "preguntas-frecuentes" },
                { label: "Contacto", id: "contacto" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sage-300 hover:text-white transition-colors cursor-pointer text-left group flex items-center gap-2 text-sm md:text-base"
                  >
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-sage-600 rounded-full group-hover:bg-sand-400 transition-colors flex-shrink-0" />
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/blog"
                  className="text-sage-300 hover:text-white transition-colors cursor-pointer text-left group flex items-center gap-2 text-sm md:text-base"
                >
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-sage-600 rounded-full group-hover:bg-sand-400 transition-colors flex-shrink-0" />
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Contacto
            </h3>
            <address className="space-y-3 md:space-y-4 not-italic">
              <button
                className="flex items-center gap-2 md:gap-3 cursor-pointer group w-full text-left"
                onClick={handleWhatsAppClick}
                aria-label="Contactar por WhatsApp"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                  <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-sand-400" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-sage-200 group-hover:text-white transition-colors text-sm md:text-base">+56 9 9940 6614</span>
                  <p className="text-[10px] md:text-xs text-sage-500">WhatsApp</p>
                </div>
              </button>

              <button
                className="flex items-center gap-2 md:gap-3 cursor-pointer group w-full text-left"
                onClick={handleEmailClick}
                aria-label="Enviar email"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                  <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 text-sand-400" aria-hidden="true" />
                </div>
                <span className="text-sage-200 group-hover:text-white transition-colors text-xs md:text-sm break-all">
                  psicologiaonlineypresencial14@gmail.com
                </span>
              </button>

              <button
                className="flex items-center gap-2 md:gap-3 cursor-pointer group w-full text-left"
                onClick={handleInstagramClick}
                aria-label="Seguir en Instagram"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                  <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4 text-sand-400" aria-hidden="true" />
                </div>
                <span className="text-sage-200 group-hover:text-white transition-colors text-xs md:text-sm">
                  @psicologia_online_presencial
                </span>
              </button>

              <div className="flex items-center gap-2 md:gap-3 pt-1 md:pt-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-3.5 w-3.5 md:h-4 md:w-4 text-sage-500" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-sage-300 text-xs md:text-sm">Lun-Vie: 9:00-20:00</span>
                  <p className="text-[10px] md:text-xs text-sage-500">Sáb: 10:00-16:00</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom section */}
        <div ref={bottomRef} className="pt-6 md:pt-8 border-t border-sage-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-sage-400 text-center md:text-left">
              © {currentYear} Psicología Online Chile. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-xs md:text-sm text-sage-400">
              <span>Desarrollado por</span>
              <a
                href="https://astraconsulting.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-400 hover:text-sand-300 transition-colors font-medium cursor-pointer inline-flex items-center gap-1 group"
              >
                Astra Consulting
                <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, Phone, Instagram, Sparkles } from "lucide-react"
import { gsap } from "gsap"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isStudioPage, setIsStudioPage] = useState(false)

  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkStudioPage = () => {
      setIsStudioPage(window.location.pathname === "/studio")
    }

    checkStudioPage()

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      if (window.location.pathname === "/") {
        const sections = ["nosotros", "servicios", "testimonios", "contacto"]
        const scrollPosition = window.scrollY + 200

        let currentSection = ""

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              currentSection = section
              break
            }
          }
        }

        setActiveSection(currentSection)
      }
    }

    const updateActiveSection = () => {
      const currentPath = window.location.pathname
      if (currentPath === "/") {
        setActiveSection("")
      } else {
        setActiveSection("")
      }
    }

    updateActiveSection()

    const handleRouteChange = () => {
      checkStudioPage()
      updateActiveSection()
    }

    const handleHashChange = () => {
      if (window.location.pathname === "/") {
        const hash = window.location.hash.replace('#', '')
        if (hash && ["nosotros", "servicios", "testimonios", "contacto"].includes(hash)) {
          setActiveSection(hash)
        }
      }
    }

    // Initial animation
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("popstate", handleRouteChange)
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("popstate", handleRouteChange)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        )
      } else {
        gsap.to(mobileMenuRef.current,
          { height: 0, opacity: 0, duration: 0.2, ease: "power2.in" }
        )
      }
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/psicologia_online_presencial", '_blank')
  }

  const navItems = [
    { id: "nosotros", label: "Nosotros", href: "/#nosotros" },
    { id: "servicios", label: "Servicios", href: "/#servicios" },
    { id: "testimonios", label: "Testimonios", href: "/#testimonios" },
    { id: "contacto", label: "Contacto", href: "/#contacto" },
  ]

  if (isStudioPage) {
    return null
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-sage-900/5 border-b border-sage-100"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Ir al inicio - Psicología Online Chile"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0 relative">
              <div className="absolute inset-0 gradient-sage rounded-lg md:rounded-xl opacity-10" />
              <img
                src="/logo.svg"
                alt="Psicología Online Chile"
                width={56}
                height={56}
                className="w-full h-full object-contain p-0.5 md:p-1 relative z-10"
                loading="eager"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-base md:text-lg font-medium text-warm-900" style={{ fontFamily: 'var(--font-heading)' }}>
                Psicología Online
              </span>
              <div className="text-[10px] md:text-xs text-sage-600 font-medium tracking-wider uppercase">
                Chile
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer rounded-xl ${
                  activeSection === item.id
                    ? "text-sage-700 bg-sage-50"
                    : "text-warm-600 hover:text-sage-700 hover:bg-sage-50/50"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sage-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = "/blog"}
              className="text-warm-600 hover:text-sage-700 hover:bg-sage-50 cursor-pointer rounded-xl text-sm"
              aria-label="Ver blog"
            >
              Blog
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleInstagramClick}
              className="text-warm-500 hover:text-pink-600 hover:bg-pink-50 cursor-pointer rounded-xl"
              aria-label="Síguenos en Instagram"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contacto")}
              className="hidden lg:inline-flex text-warm-600 hover:text-sage-700 hover:bg-sage-50 cursor-pointer rounded-xl text-sm"
              aria-label="Llamar para consultas"
            >
              <Phone className="h-4 w-4 mr-1.5" aria-hidden="true" />
              Llamar
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection("contacto")}
              className="gradient-sage text-white cursor-pointer rounded-xl shadow-md shadow-sage-500/20 hover:shadow-lg hover:shadow-sage-500/30 transition-all text-sm"
              aria-label="Agendar cita de terapia online"
            >
              <Calendar className="h-4 w-4 mr-1.5" aria-hidden="true" />
              <span className="hidden xl:inline">Agendar</span> Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all cursor-pointer ${
              isMobileMenuOpen
                ? "bg-sage-100 text-sage-700"
                : "text-warm-700 hover:bg-sage-50"
            }`}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className="lg:hidden overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-sage-100 shadow-xl">
          <div className="container-custom py-4 md:py-6">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all cursor-pointer ${
                    activeSection === item.id
                      ? "bg-sage-100 text-sage-700 font-medium"
                      : "text-warm-600 hover:bg-sage-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-sage-100 space-y-2 md:space-y-3">
              <Button
                variant="outline"
                className="w-full border-sage-200 text-sage-700 hover:bg-sage-50 cursor-pointer rounded-xl"
                onClick={() => window.location.href = "/blog"}
              >
                <Sparkles className="h-4 w-4 mr-2" aria-hidden="true" />
                Blog
              </Button>
              <Button
                variant="outline"
                className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 cursor-pointer rounded-xl"
                onClick={handleInstagramClick}
              >
                <Instagram className="h-4 w-4 mr-2" aria-hidden="true" />
                Instagram
              </Button>
              <Button
                className="w-full gradient-sage text-white cursor-pointer rounded-xl shadow-md shadow-sage-500/20"
                onClick={() => scrollToSection("contacto")}
              >
                <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                Agendar Cita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

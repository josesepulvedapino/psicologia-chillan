"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X, Calendar, Phone, Instagram } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isStudioPage, setIsStudioPage] = useState(false)

  useEffect(() => {
    // Verificar si estamos en el Studio
    const checkStudioPage = () => {
      setIsStudioPage(window.location.pathname === "/studio")
    }
    
    checkStudioPage()
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Solo detectar secciones por scroll si estamos en la página principal
      if (window.location.pathname === "/") {
        const sections = ["nosotros", "servicios", "testimonios", "contacto"]
        const scrollPosition = window.scrollY + 200 // Aumentar offset para mejor detección

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

    // Detectar sección activa basada en la URL actual
    const updateActiveSection = () => {
      const currentPath = window.location.pathname
      if (currentPath === "/") {
        // No marcar ninguna sección por defecto, solo por scroll
        setActiveSection("")
      } else {
        setActiveSection("") // No hay sección activa si no estamos en la página principal
      }
    }

    // Actualizar al cargar
    updateActiveSection()

    // Escuchar cambios de ruta
    const handleRouteChange = () => {
      checkStudioPage()
      updateActiveSection()
    }

    // Escuchar cambios de hash (para navegación interna)
    const handleHashChange = () => {
      if (window.location.pathname === "/") {
        const hash = window.location.hash.replace('#', '')
        if (hash && ["nosotros", "servicios", "testimonios", "contacto"].includes(hash)) {
          setActiveSection(hash)
        }
      }
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

  const scrollToSection = (sectionId: string) => {
    // Siempre redirigir a la página principal con la sección específica
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }
    
    // Si estamos en la página principal, hacer scroll suave
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false) // Cerrar menú móvil al navegar
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

  // No renderizar navbar si estamos en el Studio
  if (isStudioPage) {
    return null
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-emerald-100 animate-fade-in-down ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
              {/* Logo - Separado para evitar layout shift */}
              <div 
                className="flex items-center gap-2 sm:gap-3 cursor-pointer animate-hover-scale flex-shrink-0"
                onClick={() => window.location.href = "/"}
              >
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <img
                src="/logo.svg"
                alt="Psicología Online Chillán - Terapia psicológica profesional"
                width={64}
                height={64}
                className="w-full h-full object-contain p-1"
                loading="eager"
                style={{ minWidth: '40px', minHeight: '40px' }}
              />
            </div>
            <div className="flex-shrink-0">
              <span className="text-sm sm:text-lg font-bold text-gray-900 whitespace-nowrap">
                Psicología Online
              </span>
              <div className="text-xs sm:text-sm text-emerald-600 whitespace-nowrap">
                Chillán
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Separado para evitar layout shift */}
          <div className="hidden lg:flex items-center space-x-8 flex-shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors relative py-2 cursor-pointer animate-hover-scale whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
                )}
              </button>
            ))}
          </div>

              {/* CTA Buttons - Separado para evitar layout shift */}
              <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.location.href = "/blog"}
                  className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 cursor-pointer animate-hover-scale whitespace-nowrap"
                >
                  Blog
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleInstagramClick}
                  className="text-gray-600 hover:text-pink-600 hover:bg-pink-50 cursor-pointer animate-hover-scale flex-shrink-0"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 cursor-pointer animate-hover-scale whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar
                </Button>
                <Button
                  size="sm"
                  onClick={() => scrollToSection("contacto")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer animate-hover-glow whitespace-nowrap"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Cita
                </Button>
              </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-emerald-50 text-emerald-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white cursor-pointer"
                    onClick={() => window.location.href = "/blog"}
                  >
                    Blog
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white cursor-pointer"
                    onClick={handleInstagramClick}
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white cursor-pointer"
                    onClick={() => scrollToSection("contacto")}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contactar
                  </Button>
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                    onClick={() => scrollToSection("contacto")}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Cita
                  </Button>
                </div>
          </div>
        </div>
      )}
    </nav>
  )
}

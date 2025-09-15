"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X, Calendar, Phone, Instagram } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detectar sección activa
      const sections = ["inicio", "nosotros", "servicios", "testimonios", "contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
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
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "testimonios", label: "Testimonios" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-emerald-100 animate-fade-in-down ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer animate-hover-scale"
            onClick={() => scrollToSection("inicio")}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16">
              <Image
                src="/logo-psicologia.png"
                alt="Psicología Online Chillán - Terapia psicológica profesional"
                width={64}
                height={64}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900">
                Psicología Online
              </span>
              <div className="text-sm text-emerald-600">
                Chillán
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors relative py-2 cursor-pointer animate-hover-scale ${
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

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleInstagramClick}
              className="text-gray-600 hover:text-pink-600 hover:bg-pink-50 cursor-pointer animate-hover-scale"
            >
              <Instagram className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contacto")}
              className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 cursor-pointer animate-hover-scale"
            >
              <Phone className="h-4 w-4 mr-2" />
              Llamar
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection("contacto")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer animate-hover-glow"
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

"use client"

import { Heart, MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+56999406614"
    const message = "Hola! Me interesa saber más sobre los servicios de psicología online. ¿Podrían brindarme más información?"
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
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">Psicología Online Chillán</span>
            </div>
            <p className="text-gray-300 mb-6 text-pretty leading-relaxed">
              Comprometidos con tu bienestar mental. Ofrecemos terapia psicológica profesional y accesible desde la
              comodidad de tu hogar, con psicólogos especializados en Chillán.
            </p>
            <div className="flex items-center gap-2 text-emerald-400">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Chillán, Región de Ñuble, Chile</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Terapia Individual
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Terapia Familiar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Coaching Personal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Manejo del Estrés
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Bienestar Emocional
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("nosotros")}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonios")}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contacto")}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div 
                className="flex items-center gap-2 cursor-pointer hover:text-emerald-400 transition-colors"
                onClick={handleWhatsAppClick}
              >
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>+56 9 9940 6614</span>
              </div>
              <div 
                className="flex items-center gap-2 cursor-pointer hover:text-emerald-400 transition-colors"
                onClick={handleEmailClick}
              >
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="break-all">psicologiaonlineypresencial14@gmail.com</span>
              </div>
              <div 
                className="flex items-center gap-2 cursor-pointer hover:text-emerald-400 transition-colors"
                onClick={handleInstagramClick}
              >
                <Instagram className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>@psicologia_online_presencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Lun-Vie: 9:00-20:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 Psicología Online Chillán. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Desarrollado por</span>
              <a 
                href="https://astraconsulting.cl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium cursor-pointer"
              >
                Astra Consulting
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

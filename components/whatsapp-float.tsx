"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { gsap } from "gsap"

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isStudioPage, setIsStudioPage] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkStudioPage = () => {
      setIsStudioPage(window.location.pathname === "/studio")
    }

    checkStudioPage()

    const handleRouteChange = () => {
      checkStudioPage()
    }

    // Show button after a delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
      clearTimeout(timer)
    }
  }, [])

  // Button entrance animation
  useEffect(() => {
    if (isVisible && buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      )
    }
  }, [isVisible])

  // Popup animation
  useEffect(() => {
    if (isOpen && popupRef.current) {
      gsap.fromTo(popupRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      )
    }
  }, [isOpen])

  const phoneNumber = "+56999406614"
  const message = "Hola! Me interesa saber mas sobre los servicios de psicologia online. Podrian brindarme mas informacion?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  if (isStudioPage || !isVisible) {
    return null
  }

  return (
    <>
      {/* Floating button */}
      <div ref={buttonRef} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 whatsapp-float">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative gradient-sage text-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl shadow-sage-500/30 transition-all duration-500 cursor-pointer ${
            isOpen ? 'rotate-90 scale-95' : 'hover:scale-110 animate-pulse-soft'
          }`}
          aria-label={isOpen ? "Cerrar chat de WhatsApp" : "Abrir chat de WhatsApp"}
          aria-expanded={isOpen}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 gradient-sage rounded-xl md:rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />

          <div className="relative">
            {isOpen ? (
              <X className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
            ) : (
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
            )}
          </div>

          {/* Notification dot */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-sand-400 rounded-full border-2 border-white animate-pulse" />
          )}
        </button>
      </div>

      {/* WhatsApp popup */}
      {isOpen && (
        <div
          ref={popupRef}
          className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Chat de WhatsApp"
        >
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl shadow-warm-900/20 border border-warm-100 p-4 md:p-6 w-72 md:w-80 max-w-[calc(100vw-2rem)]">
            {/* Header */}
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5 pb-4 md:pb-5 border-b border-warm-100">
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 gradient-sage rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-sage-500/30">
                  <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-white" aria-hidden="true" />
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="font-medium text-warm-900 text-sm md:text-base" style={{ fontFamily: 'var(--font-heading)' }}>
                  Psicología Online
                </h3>
                <p className="text-xs md:text-sm text-sage-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full inline-block" aria-hidden="true" />
                  En línea ahora
                </p>
              </div>
            </div>

            {/* Message bubble */}
            <div className="mb-4 md:mb-5">
              <div className="bg-sage-50 rounded-xl md:rounded-2xl rounded-tl-sm p-3 md:p-4 relative">
                <p className="text-warm-700 leading-relaxed text-sm md:text-base">
                  ¡Hola! Estamos aquí para ayudarte. Cuéntanos cómo podemos apoyarte en tu bienestar mental.
                </p>
                {/* Bubble tail */}
                <div className="absolute top-0 -left-2 w-3 h-3 md:w-4 md:h-4 bg-sage-50 transform rotate-45" />
              </div>
              <p className="text-[10px] md:text-xs text-warm-400 mt-2 ml-1">
                Respuesta típica: menos de 1 hora
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full gradient-sage text-white py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 cursor-pointer shadow-lg shadow-sage-500/20 hover:shadow-xl hover:shadow-sage-500/30 group text-sm md:text-base"
            >
              <Send className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              Iniciar conversación
            </button>

            {/* Privacy note */}
            <p className="text-[10px] md:text-xs text-center text-warm-400 mt-3 md:mt-4">
              100% confidencial y seguro
            </p>
          </div>
        </div>
      )}

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-warm-900/10 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

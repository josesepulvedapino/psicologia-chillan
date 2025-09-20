"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isStudioPage, setIsStudioPage] = useState(false)

  useEffect(() => {
    const checkStudioPage = () => {
      setIsStudioPage(window.location.pathname === "/studio")
    }
    
    checkStudioPage()
    
    // Escuchar cambios de ruta
    const handleRouteChange = () => {
      checkStudioPage()
    }
    
    window.addEventListener("popstate", handleRouteChange)
    
    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])
  const phoneNumber = "+56999406614"
  const message = "Hola! Me interesa saber más sobre los servicios de psicología online. ¿Podrían brindarme más información?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  // No renderizar WhatsApp float si estamos en el Studio
  if (isStudioPage) {
    return null
  }

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-soft animate-float cursor-pointer"
            aria-label="Contactar por WhatsApp"
          >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Popup de WhatsApp */}
      {isOpen && (
        <div className="fixed bottom-24 right-2 sm:right-6 z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-72 sm:w-80 max-w-[calc(100vw-1rem)] animate-scale-in">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Psicología Online Chillán</h3>
                <p className="text-sm text-green-600">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-4">
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-700">
                ¡Hola! 👋 ¿En qué podemos ayudarte hoy?
              </p>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              Responderemos tu mensaje lo antes posible
            </p>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer animate-hover-glow"
          >
            <MessageCircle className="h-4 w-4" />
            Iniciar conversación
          </button>
        </div>
      )}

      {/* Overlay para cerrar el popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

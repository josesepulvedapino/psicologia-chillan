"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Phone, Mail, CheckCircle } from "lucide-react"

export function BookingSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const service = formData.get('service') as string
    const message = formData.get('message') as string

    // Validación básica
    if (!firstName || !lastName || !email || !phone || !service) {
      setError('Por favor completa todos los campos obligatorios')
      return
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Por favor ingresa un email válido')
      return
    }

    // Crear el mensaje para WhatsApp
    const whatsappMessage = `
¡Hola! Me interesa agendar una cita de psicología online.

📋 *MIS DATOS:*
• Nombre: ${firstName} ${lastName}
• Email: ${email}
• Teléfono: ${phone}
• Servicio: ${service}

${message ? `💬 *MENSAJE ADICIONAL:*\n${message}\n` : ''}
📅 Enviado desde el formulario web el ${new Date().toLocaleDateString('es-CL')} a las ${new Date().toLocaleTimeString('es-CL')}

¿Podrían confirmarme disponibilidad? ¡Gracias!
    `.trim()

    // Crear el link de WhatsApp
    const phoneNumber = "+56999406614"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Mostrar confirmación
    setIsSubmitted(true)
    form.reset()
  }

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-emerald-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¡WhatsApp Abierto!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Se ha abierto WhatsApp con todos tus datos organizados. Solo envía el mensaje y nos pondremos en contacto contigo dentro de las próximas 24 horas para confirmar tu sesión.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white cursor-pointer"
          >
            Agendar Otra Cita
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">Agenda tu Primera Sesión</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Completa el formulario y nos pondremos en contacto contigo para coordinar tu cita
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-600" />
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" name="firstName" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" name="lastName" placeholder="Tu apellido" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+56 9 1234 5678" required />
                </div>

                <div>
                  <Label htmlFor="service">Tipo de Servicio</Label>
                  <Select name="service" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Terapia Individual</SelectItem>
                      <SelectItem value="familiar">Terapia Familiar</SelectItem>
                      <SelectItem value="coaching">Coaching Personal</SelectItem>
                      <SelectItem value="estres">Manejo del Estrés</SelectItem>
                      <SelectItem value="bienestar">Bienestar Emocional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensaje (Opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos brevemente qué te gustaría trabajar en terapia..."
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                >
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes</span>
                  <span className="font-medium">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábados</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingos</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Contacto Directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">+56 9 9940 6614</p>
                    <p className="text-sm text-gray-600">WhatsApp disponible</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">contacto@psicologiachillan.cl</p>
                    <p className="text-sm text-gray-600">Respuesta en 24 horas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}

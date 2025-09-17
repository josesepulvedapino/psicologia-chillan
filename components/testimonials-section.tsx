import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      age: "32 años",
      text: "La terapia online me cambió la vida. Pude trabajar mi ansiedad desde casa, con horarios que se adaptaban a mi trabajo. La psicóloga fue muy empática y profesional.",
      rating: 5,
      avatar: "/patient-avatar-maria-48.webp",
    },
    {
      name: "Carlos Mendoza",
      age: "28 años",
      text: "Excelente servicio. Como hombre, me costaba mucho buscar ayuda psicológica, pero la modalidad online me dio la confianza que necesitaba para comenzar.",
      rating: 5,
      avatar: "/patient-avatar-carlos-48.webp",
    },
    {
      name: "Laura Fernández",
      age: "35 años",
      text: "Después de años luchando con traumas del pasado, encontré la ayuda que necesitaba. La terapia reparatoria me ayudó a sanar y reconstruir mi vida con confianza.",
      rating: 5,
      avatar: "/patient-avatar-couple-48.webp",
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance animate-fade-in-up animate-stagger-1">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up animate-stagger-2">
            Testimonios reales de personas que han transformado su bienestar con nuestra ayuda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-gray-50 border-0 hover:shadow-lg transition-shadow animate-fade-in-up animate-hover-lift" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="pt-8 pb-6">
                <Quote className="h-8 w-8 text-emerald-600 mb-4 animate-float" />
                <p className="text-gray-700 mb-6 text-pretty leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`Foto de ${testimonial.name}`}
                      width={48}
                      height={48}
                      sizes="48px"
                      className="w-full h-full object-cover"
                      quality={85}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.age}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-8">Certificados y avalados por:</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <Image
              src="/colegio-psicologos-chile-logo-120.webp"
              alt="Colegio de Psicólogos de Chile"
              width={120}
              height={60}
              sizes="120px"
              className="h-12 w-auto object-contain"
              quality={85}
            />
            <Image
              src="/ministerio-salud-chile-logo-120.webp"
              alt="Ministerio de Salud Chile"
              width={120}
              height={60}
              sizes="120px"
              className="h-12 w-auto object-contain"
              quality={85}
            />
            <Image
              src="/telemedicina-certificacion-logo-120.webp"
              alt="Certificación Telemedicina"
              width={120}
              height={60}
              sizes="120px"
              className="h-12 w-auto object-contain"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

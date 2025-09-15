import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Users2, Lightbulb, Shield, Smile } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Terapia Individual",
      description: "Sesiones personalizadas para abordar ansiedad, depresión, estrés y otros desafíos emocionales.",
      features: ["Evaluación inicial gratuita", "Plan de tratamiento personalizado", "Seguimiento continuo"],
      image: "/individual-therapy-session.jpg",
    },
    {
      icon: Heart,
      title: "Terapia de Pareja",
      description: "Fortalece tu relación con herramientas de comunicación y resolución de conflictos.",
      features: ["Comunicación efectiva", "Resolución de conflictos", "Reconstrucción de confianza"],
      image: "/couple-therapy-online.jpg",
    },
    {
      icon: Users2,
      title: "Terapia Familiar",
      description: "Mejora la dinámica familiar y crea un ambiente más armonioso en el hogar.",
      features: ["Dinámicas familiares", "Comunicación intergeneracional", "Resolución de crisis"],
      image: "/family-therapy-session.jpg",
    },
    {
      icon: Lightbulb,
      title: "Coaching Personal",
      description: "Desarrolla tu potencial y alcanza tus metas personales y profesionales.",
      features: ["Definición de objetivos", "Desarrollo de habilidades", "Plan de acción"],
      image: "/personal-coaching-session.jpg",
    },
    {
      icon: Shield,
      title: "Manejo del Estrés",
      description: "Técnicas especializadas para manejar el estrés laboral y personal de manera efectiva.",
      features: ["Técnicas de relajación", "Mindfulness", "Gestión del tiempo"],
      image: "/stress-management-therapy.jpg",
    },
    {
      icon: Smile,
      title: "Bienestar Emocional",
      description: "Programas integrales para mejorar tu autoestima y bienestar general.",
      features: ["Autoconocimiento", "Inteligencia emocional", "Hábitos saludables"],
      image: "/emotional-wellness-session.jpg",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Ofrecemos una amplia gama de servicios psicológicos adaptados a tus necesidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow bg-white overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - Psicología online Chillán`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-pretty leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

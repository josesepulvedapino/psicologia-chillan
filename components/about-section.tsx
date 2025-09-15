import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Award, MapPin } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            ¿Por qué elegir nuestra terapia online?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Ofrecemos un espacio seguro y profesional para tu crecimiento personal, con la flexibilidad que necesitas en
            tu día a día.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Image
              src="/therapy-session-comfortable-space.jpg"
              alt="Espacio cómodo para terapia online desde casa"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Desde tu hogar
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Terapia profesional adaptada a ti</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nuestro enfoque combina la calidez humana con la tecnología más avanzada para brindarte una experiencia
              terapéutica única. Cada sesión está diseñada para que te sientas cómodo y seguro en tu proceso de
              crecimiento personal.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span className="text-gray-700">Sesiones personalizadas según tus necesidades</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span className="text-gray-700">Plataforma segura y fácil de usar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span className="text-gray-700">Seguimiento continuo de tu progreso</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ubicados en Chillán</h3>
              <p className="text-sm text-gray-600 text-pretty">
                Conocemos la realidad local y cultural de nuestra región
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Equipo Especializado</h3>
              <p className="text-sm text-gray-600 text-pretty">
                Psicólogos certificados con experiencia en terapia online
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Horarios Flexibles</h3>
              <p className="text-sm text-gray-600 text-pretty">
                Sesiones adaptadas a tu rutina, incluso fines de semana
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Resultados Comprobados</h3>
              <p className="text-sm text-gray-600 text-pretty">
                Más de 500 pacientes han mejorado su bienestar con nosotros
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

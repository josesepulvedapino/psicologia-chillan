"use client"

import { useEffect, useRef } from "react"
import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const faqs = [
  {
    question: "¿Cómo funciona la terapia psicológica online en Chile?",
    answer: "Las sesiones se realizan por videollamada desde cualquier lugar con conexión a internet. Primero agendas tu cita por WhatsApp al +56 9 9940 6614 o por el formulario de esta página. Te enviamos un enlace seguro y a la hora acordada te conectas desde tu computador, tablet o celular. Cada sesión dura entre 45 y 60 minutos. Todo es confidencial.",
  },
  {
    question: "¿Cuánto cuesta una sesión de psicólogo online en Chile?",
    answer: "Los valores dependen del tipo de terapia que necesites (individual, familiar o coaching). La primera sesión tiene un 20% de descuento. Aceptamos transferencia bancaria, tarjetas de crédito, débito y efectivo. Para conocer los precios actualizados, escríbenos por WhatsApp al +56 9 9940 6614.",
  },
  {
    question: "¿Es efectiva la terapia psicológica online?",
    answer: "Sí. La investigación científica respalda que la terapia por videollamada tiene resultados equivalentes a la presencial para tratar ansiedad, depresión, estrés y trauma. Además, permite mayor flexibilidad de horarios, ahorro de tiempo en traslados y la posibilidad de atenderse desde cualquier punto del país.",
  },
  {
    question: "¿Qué problemas trata un psicólogo online?",
    answer: "Trabajamos con ansiedad y ataques de pánico, depresión, estrés laboral y burnout, trauma complejo y TEPT, conflictos de pareja y familia, baja autoestima, duelo y pérdidas, fobias, trastornos alimentarios y dificultades en habilidades sociales. También acompañamos procesos de desarrollo personal.",
  },
  {
    question: "¿Cómo agendo una cita con psicólogo online en Chile?",
    answer: "Tienes tres opciones: escribir por WhatsApp al +56 9 9940 6614 (es lo más rápido), completar el formulario de contacto en esta página, o enviar un correo a psicologiaonlineypresencial14@gmail.com. Te respondemos en menos de 24 horas para confirmar día y hora.",
  },
  {
    question: "¿Los psicólogos online están certificados?",
    answer: "Todos nuestros profesionales son psicólogos titulados de universidades chilenas acreditadas. Están inscritos en el Colegio de Psicólogos de Chile y cumplen con la normativa del Ministerio de Salud para atención por telemedicina. Cuentan con años de práctica clínica tanto presencial como online.",
  },
  {
    question: "¿La terapia online es confidencial?",
    answer: "Sí, completamente. Usamos plataformas de videollamada con cifrado de extremo a extremo. Toda la información que compartes está protegida por el secreto profesional y por la Ley N°19.628 de Protección de la Vida Privada. Tu privacidad es parte central de nuestro trabajo.",
  },
  {
    question: "¿Atienden psicólogos online en todo Chile?",
    answer: "Sí. Al ser un servicio 100% online, atendemos pacientes en todas las regiones: Santiago, Concepción, Valparaíso, Viña del Mar, Temuco, Antofagasta, Chillán, Talca, Puerto Montt, Rancagua, La Serena, Iquique y cualquier otra ciudad o localidad del país. Solo necesitas internet estable.",
  },
]

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      gsap.fromTo(accordionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: accordionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="preguntas-frecuentes"
      className="section-padding gradient-warm relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-sage-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-sand-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6 shadow-sm">
            <HelpCircle className="h-4 w-4 text-sage-600" aria-hidden="true" />
            <span className="text-sm font-medium text-sage-700 tracking-wide">Preguntas frecuentes</span>
          </div>
          <h2
            id="faq-heading"
            className="text-headline text-warm-900 mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Resolvemos tus{' '}
            <span className="text-sage-600">dudas</span>
          </h2>
          <p className="text-body-lg text-warm-500 max-w-2xl mx-auto">
            Las preguntas que más nos hacen sobre la terapia online en Chile
          </p>
        </div>

        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl shadow-warm-900/5 p-4 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-warm-100">
                  <AccordionTrigger className="text-left text-warm-900 hover:text-sage-700 text-base md:text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="faq-answer text-warm-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

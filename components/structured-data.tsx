export function StructuredData() {
  // Comprehensive structured data for SEO 2026 + AI Search Optimization
  const businessData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization/Business Schema
      {
        "@type": ["LocalBusiness", "MedicalBusiness", "ProfessionalService"],
        "@id": "https://psicologiachillan.cl/#organization",
        "name": "Psicología Online Chile",
        "alternateName": ["Psicólogo Online Chile", "Terapia Online Chile", "Psicología Virtual Chile", "Telemedicina Psicológica Chile"],
        "description": "Servicio profesional de psicología online en Chile. Psicólogos certificados especializados en terapia individual, familiar, trauma complejo, ansiedad y depresión. Atención por videollamada a todo Chile.",
        "url": "https://psicologiachillan.cl",
        "logo": {
          "@type": "ImageObject",
          "url": "https://psicologiachillan.cl/logo.svg",
          "width": 512,
          "height": 512,
          "caption": "Logo Psicología Online Chile"
        },
        "image": [
          {
            "@type": "ImageObject",
            "url": "https://psicologiachillan.cl/og-image.webp",
            "width": 1200,
            "height": 630,
            "caption": "Psicología Online Chile - Terapia Virtual Profesional"
          }
        ],
        "telephone": "+56999406614",
        "email": "psicologiaonlineypresencial14@gmail.com",
        "priceRange": "$$",
        "currenciesAccepted": "CLP",
        "paymentAccepted": ["Efectivo", "Transferencia bancaria", "Tarjeta de crédito", "Tarjeta de débito"],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CL",
          "addressRegion": "Chile"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -33.4489,
          "longitude": -70.6693
        },
        "areaServed": [
          { "@type": "Country", "name": "Chile", "sameAs": "https://es.wikipedia.org/wiki/Chile" },
          { "@type": "City", "name": "Santiago", "containedInPlace": "Región Metropolitana, Chile" },
          { "@type": "City", "name": "Concepción", "containedInPlace": "Región del Biobío, Chile" },
          { "@type": "City", "name": "Valparaíso", "containedInPlace": "Región de Valparaíso, Chile" },
          { "@type": "City", "name": "Viña del Mar", "containedInPlace": "Región de Valparaíso, Chile" },
          { "@type": "City", "name": "Temuco", "containedInPlace": "Región de La Araucanía, Chile" },
          { "@type": "City", "name": "Antofagasta", "containedInPlace": "Región de Antofagasta, Chile" },
          { "@type": "City", "name": "Chillán", "containedInPlace": "Región de Ñuble, Chile" },
          { "@type": "City", "name": "Talca", "containedInPlace": "Región del Maule, Chile" },
          { "@type": "City", "name": "Puerto Montt", "containedInPlace": "Región de Los Lagos, Chile" },
          { "@type": "City", "name": "Rancagua", "containedInPlace": "Región de O'Higgins, Chile" },
          { "@type": "City", "name": "La Serena", "containedInPlace": "Región de Coquimbo, Chile" },
          { "@type": "City", "name": "Iquique", "containedInPlace": "Región de Tarapacá, Chile" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "16:00"
          }
        ],
        "sameAs": ["https://www.instagram.com/psicologia_online_presencial"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "María González" },
            "datePublished": "2024-12-15",
            "reviewBody": "La terapia online me cambió la vida. Pude trabajar mi ansiedad desde casa, con horarios que se adaptaban a mi trabajo."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Carlos Mendoza" },
            "datePublished": "2024-11-20",
            "reviewBody": "Excelente servicio. La modalidad online me dio la confianza que necesitaba para comenzar mi proceso terapéutico."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Laura Fernández" },
            "datePublished": "2024-10-05",
            "reviewBody": "La terapia reparatoria me ayudó a sanar traumas del pasado. Los profesionales son muy empáticos y preparados."
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Psicología Online",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia Individual Online",
                "description": "Sesiones personalizadas para abordar ansiedad, depresión, estrés, trauma complejo y otros desafíos emocionales",
                "serviceType": "Psicología Clínica"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia Familiar Online",
                "description": "Mejora la dinámica familiar, comunicación intergeneracional y resolución de conflictos",
                "serviceType": "Terapia Familiar"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Coaching Personal Online",
                "description": "Desarrollo de potencial, definición de objetivos y alcance de metas personales y profesionales",
                "serviceType": "Coaching Personal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tratamiento de Ansiedad Online",
                "description": "Terapia especializada para ansiedad, ataques de pánico y fobias",
                "serviceType": "Tratamiento de Ansiedad"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tratamiento de Depresión Online",
                "description": "Apoyo terapéutico profesional para depresión y estados de ánimo",
                "serviceType": "Tratamiento de Depresión"
              }
            }
          ]
        },
        "medicalSpecialty": ["Psicología Clínica", "Psicoterapia", "Terapia Familiar", "Terapia de Trauma"],
        "isAcceptingNewPatients": true,
        "availableService": [
          { "@type": "MedicalTherapy", "name": "Terapia Cognitivo-Conductual" },
          { "@type": "MedicalTherapy", "name": "Terapia de Trauma" },
          { "@type": "MedicalTherapy", "name": "Terapia Familiar Sistémica" },
          { "@type": "MedicalTherapy", "name": "Mindfulness" }
        ]
      },
      // WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://psicologiachillan.cl/#website",
        "url": "https://psicologiachillan.cl",
        "name": "Psicología Online Chile",
        "description": "Psicólogos online certificados en Chile. Terapia individual, familiar, ansiedad, depresión y trauma complejo.",
        "publisher": { "@id": "https://psicologiachillan.cl/#organization" },
        "inLanguage": "es-CL",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://psicologiachillan.cl/blog?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://psicologiachillan.cl/#contacto"
            },
            "result": { "@type": "Reservation", "name": "Cita de Psicología Online" }
          }
        ]
      },
      // WebPage Schema with Speakable for voice assistants
      {
        "@type": "WebPage",
        "@id": "https://psicologiachillan.cl/#webpage",
        "url": "https://psicologiachillan.cl",
        "name": "Psicólogo Online Chile | Terapia Psicológica Virtual Certificada",
        "isPartOf": { "@id": "https://psicologiachillan.cl/#website" },
        "about": { "@id": "https://psicologiachillan.cl/#organization" },
        "description": "Psicólogos online certificados en Chile. Terapia individual, familiar y trauma complejo. +500 pacientes atendidos. Agenda tu sesión por WhatsApp.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".hero-description", ".service-description", ".faq-answer", "h1", "h2"]
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://psicologiachillan.cl" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://psicologiachillan.cl/#servicios" },
            { "@type": "ListItem", "position": 3, "name": "Testimonios", "item": "https://psicologiachillan.cl/#testimonios" },
            { "@type": "ListItem", "position": 4, "name": "Blog", "item": "https://psicologiachillan.cl/blog" },
            { "@type": "ListItem", "position": 5, "name": "Contacto", "item": "https://psicologiachillan.cl/#contacto" }
          ]
        },
        "mainEntity": { "@id": "https://psicologiachillan.cl/#organization" }
      },
      // FAQ Page Schema - Optimized for AI search and featured snippets
      {
        "@type": "FAQPage",
        "@id": "https://psicologiachillan.cl/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo funciona la terapia psicológica online en Chile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La terapia online funciona mediante videollamadas seguras desde cualquier lugar de Chile. El proceso es: 1) Agendas tu cita por WhatsApp al +56 9 9940 6614, 2) Recibes el enlace de videollamada, 3) Te conectas a la hora acordada desde cualquier dispositivo con internet. Las sesiones duran 45-60 minutos, son 100% confidenciales y tienen la misma efectividad que la terapia presencial."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta una sesión de psicólogo online en Chile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los precios de las sesiones de psicología online varían según el tipo de terapia (individual, familiar, coaching). Ofrecemos primera sesión con 20% de descuento. Aceptamos transferencia bancaria, tarjetas de crédito/débito y efectivo. Para conocer los valores actualizados, contacta por WhatsApp al +56 9 9940 6614."
            }
          },
          {
            "@type": "Question",
            "name": "¿Es efectiva la terapia psicológica online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, múltiples estudios científicos han demostrado que la terapia online es igual de efectiva que la presencial para tratar ansiedad, depresión, estrés, trauma y otros problemas emocionales. Además ofrece ventajas adicionales: mayor comodidad, ahorro de tiempo en traslados, horarios más flexibles y acceso desde cualquier lugar de Chile."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué problemas trata un psicólogo online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestros psicólogos online tratan: ansiedad y ataques de pánico, depresión, estrés laboral y burnout, trauma complejo y TEPT, problemas de pareja y familia, baja autoestima e inseguridad, duelo y pérdidas, fobias específicas, trastornos alimentarios, dificultades en habilidades sociales, y desarrollo personal."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo agendar una cita con psicólogo online en Chile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Puedes agendar tu cita de 3 formas: 1) Por WhatsApp al +56 9 9940 6614 (respuesta inmediata), 2) Completando el formulario en nuestra página web, 3) Por email a psicologiaonlineypresencial14@gmail.com. Te responderemos en menos de 24 horas para confirmar tu horario preferido."
            }
          },
          {
            "@type": "Question",
            "name": "¿Los psicólogos online en Chile están certificados?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, todos nuestros profesionales son psicólogos titulados de universidades chilenas acreditadas, están inscritos en el Colegio de Psicólogos de Chile, y cumplen con las regulaciones del Ministerio de Salud para telemedicina. Cuentan con años de experiencia en atención clínica presencial y online."
            }
          },
          {
            "@type": "Question",
            "name": "¿La terapia online es confidencial?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutamente. Utilizamos plataformas de videollamada seguras con encriptación de extremo a extremo. Toda la información compartida está protegida por el secreto profesional y la Ley N°19.628 de Protección de la Vida Privada de Chile. Tu privacidad es nuestra prioridad."
            }
          },
          {
            "@type": "Question",
            "name": "¿Atienden psicólogos online en todo Chile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, al ser un servicio 100% online, atendemos pacientes en todas las regiones de Chile: Santiago, Concepción, Valparaíso, Viña del Mar, Temuco, Antofagasta, Chillán, Talca, Puerto Montt, Rancagua, La Serena, Iquique y cualquier otra ciudad. Solo necesitas una conexión estable a internet."
            }
          }
        ]
      },
      // HowTo Schema for booking process
      {
        "@type": "HowTo",
        "@id": "https://psicologiachillan.cl/#howto",
        "name": "Cómo agendar una cita de psicología online en Chile",
        "description": "Guía paso a paso para reservar tu primera sesión de terapia psicológica online",
        "totalTime": "PT5M",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Contacta por WhatsApp o formulario",
            "text": "Envía un mensaje al +56 9 9940 6614 o completa el formulario de contacto en la web con tus datos",
            "url": "https://psicologiachillan.cl/#contacto"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Selecciona tu servicio",
            "text": "Indica qué tipo de terapia necesitas: individual, familiar, coaching, manejo del estrés, etc."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Elige tu horario",
            "text": "Selecciona el día y hora que mejor se adapte a tu rutina. Horarios de lunes a viernes 9:00-20:00 y sábados 10:00-16:00"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Recibe confirmación",
            "text": "Te enviaremos un mensaje confirmando tu cita junto con el enlace de videollamada"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Conéctate a tu sesión",
            "text": "A la hora acordada, ingresa al enlace desde tu computador, tablet o celular con internet"
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessData),
      }}
    />
  )
}

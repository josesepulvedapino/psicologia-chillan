export function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization/Business Schema
      {
        "@type": ["LocalBusiness", "MedicalBusiness", "ProfessionalService"],
        "@id": "https://psicologiachillan.cl/#organization",
        "name": "Psicología Online Chile",
        "alternateName": ["Psicólogo Online Chile", "Terapia Online Chile", "Psicología Virtual Chile", "Telemedicina Psicológica Chile"],
        "description": "Psicólogos certificados que atienden por videollamada a todo Chile. Terapia individual, familiar, trauma complejo, ansiedad y depresión. Más de 500 pacientes atendidos.",
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
            "reviewBody": "Llevaba meses postergando ir al psicólogo por falta de tiempo. La terapia online me lo hizo más fácil. Mi psicóloga me ayudó mucho con la ansiedad que sentía en el trabajo."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Carlos Mendoza" },
            "datePublished": "2024-11-20",
            "reviewBody": "Me costó dar el paso de pedir ayuda. La modalidad online me lo hizo menos difícil. Fue una buena decisión."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Laura Fernández" },
            "datePublished": "2024-10-05",
            "reviewBody": "Después de años cargando con traumas, por fin encontré un espacio donde me sentí escuchada. La terapia me ayudó a entender muchas cosas."
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
                "description": "Sesiones uno a uno para trabajar ansiedad, depresión, estrés, trauma complejo u otros problemas emocionales",
                "serviceType": "Psicología Clínica"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia Familiar Online",
                "description": "Trabajo con toda la familia para mejorar la comunicación, resolver conflictos y fortalecer vínculos",
                "serviceType": "Terapia Familiar"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Coaching Personal Online",
                "description": "Acompañamiento para definir metas claras y construir un plan de acción personal y profesional",
                "serviceType": "Coaching Personal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tratamiento de Ansiedad Online",
                "description": "Terapia para ansiedad, ataques de pánico y fobias con técnicas basadas en evidencia",
                "serviceType": "Tratamiento de Ansiedad"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tratamiento de Depresión Online",
                "description": "Apoyo profesional para depresión y estados de ánimo con seguimiento continuo",
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
      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://psicologiachillan.cl/#webpage",
        "url": "https://psicologiachillan.cl",
        "name": "Psicólogo Online Chile | Terapia Psicológica Virtual Certificada",
        "isPartOf": { "@id": "https://psicologiachillan.cl/#website" },
        "about": { "@id": "https://psicologiachillan.cl/#organization" },
        "description": "Psicólogos online certificados en Chile. Terapia individual, familiar y trauma complejo. Más de 500 pacientes atendidos. Agenda tu sesión por WhatsApp.",
        "dateModified": new Date().toISOString().split('T')[0],
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
      // FAQ Page Schema - matches visible FAQ section
      {
        "@type": "FAQPage",
        "@id": "https://psicologiachillan.cl/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo funciona la terapia psicológica online en Chile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Las sesiones se realizan por videollamada desde cualquier lugar con conexión a internet. Primero agendas tu cita por WhatsApp al +56 9 9940 6614 o por el formulario de esta página. Te enviamos un enlace seguro y a la hora acordada te conectas desde tu computador, tablet o celular. Cada sesión dura entre 45 y 60 minutos. Todo es confidencial."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta una sesión de psicólogo online en Chile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los valores dependen del tipo de terapia que necesites (individual, familiar o coaching). La primera sesión tiene un 20% de descuento. Aceptamos transferencia bancaria, tarjetas de crédito, débito y efectivo. Para conocer los precios actualizados, escríbenos por WhatsApp al +56 9 9940 6614."
            }
          },
          {
            "@type": "Question",
            "name": "¿Es efectiva la terapia psicológica online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. La investigación científica respalda que la terapia por videollamada tiene resultados equivalentes a la presencial para tratar ansiedad, depresión, estrés y trauma. Además, permite mayor flexibilidad de horarios, ahorro de tiempo en traslados y la posibilidad de atenderse desde cualquier punto del país."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué problemas trata un psicólogo online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trabajamos con ansiedad y ataques de pánico, depresión, estrés laboral y burnout, trauma complejo y TEPT, conflictos de pareja y familia, baja autoestima, duelo y pérdidas, fobias, trastornos alimentarios y dificultades en habilidades sociales. También acompañamos procesos de desarrollo personal."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo agendo una cita con psicólogo online en Chile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tienes tres opciones: escribir por WhatsApp al +56 9 9940 6614 (es lo más rápido), completar el formulario de contacto en esta página, o enviar un correo a psicologiaonlineypresencial14@gmail.com. Te respondemos en menos de 24 horas para confirmar día y hora."
            }
          },
          {
            "@type": "Question",
            "name": "¿Los psicólogos online en Chile están certificados?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Todos nuestros profesionales son psicólogos titulados de universidades chilenas acreditadas. Están inscritos en el Colegio de Psicólogos de Chile y cumplen con la normativa del Ministerio de Salud para atención por telemedicina. Cuentan con años de práctica clínica tanto presencial como online."
            }
          },
          {
            "@type": "Question",
            "name": "¿La terapia online es confidencial?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, completamente. Usamos plataformas de videollamada con cifrado de extremo a extremo. Toda la información que compartes está protegida por el secreto profesional y por la Ley N°19.628 de Protección de la Vida Privada. Tu privacidad es parte central de nuestro trabajo."
            }
          },
          {
            "@type": "Question",
            "name": "¿Atienden psicólogos online en todo Chile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Al ser un servicio 100% online, atendemos pacientes en todas las regiones: Santiago, Concepción, Valparaíso, Viña del Mar, Temuco, Antofagasta, Chillán, Talca, Puerto Montt, Rancagua, La Serena, Iquique y cualquier otra ciudad o localidad del país. Solo necesitas internet estable."
            }
          }
        ]
      },
      // HowTo Schema
      {
        "@type": "HowTo",
        "@id": "https://psicologiachillan.cl/#howto",
        "name": "Cómo agendar una cita de psicología online en Chile",
        "description": "Pasos para reservar tu primera sesión de terapia psicológica online",
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
            "name": "Indica qué servicio necesitas",
            "text": "Cuéntanos si buscas terapia individual, familiar, coaching, manejo del estrés u otro servicio"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Elige tu horario",
            "text": "Selecciona el día y hora que mejor se ajuste a tu rutina. Atendemos de lunes a viernes de 9:00 a 20:00 y sábados de 10:00 a 16:00"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Recibe la confirmación",
            "text": "Te enviamos un mensaje confirmando tu cita junto con el enlace de videollamada"
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

export function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://psicologia-chillan.cl/#business",
        "name": "Psicología Online Chillán",
        "alternateName": "Psicólogos Online Chillán",
        "description": "Servicio profesional de psicología online en Chillán, Chile. Especialistas en terapia individual y familiar con certificación profesional.",
        "url": "https://psicologia-chillan.cl",
        "telephone": "+56999406614",
        "email": "contacto@psicologiachillan.cl",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chillán",
          "addressRegion": "Ñuble",
          "addressCountry": "CL",
          "postalCode": "3780000"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -36.6063,
          "longitude": -72.1039
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Chillán"
          },
          {
            "@type": "State",
            "name": "Región de Ñuble"
          },
          {
            "@type": "Country",
            "name": "Chile"
          }
        ],
        "serviceType": "Psicología Online",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Psicología Online",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia Individual Online",
                "description": "Sesiones personalizadas para abordar ansiedad, depresión, estrés y otros desafíos emocionales"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia Familiar Online",
                "description": "Mejora la dinámica familiar y crea un ambiente más armonioso en el hogar"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Coaching Personal",
                "description": "Desarrolla tu potencial y alcanza tus metas personales y profesionales"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Manejo del Estrés",
                "description": "Técnicas especializadas para manejar el estrés laboral y personal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bienestar Emocional",
                "description": "Programas integrales para mejorar tu autoestima y bienestar general"
              }
            }
          ]
        },
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
        "sameAs": [
          "https://www.facebook.com/psicologiaonlinechillan",
          "https://www.instagram.com/psicologiaonlinechillan"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://psicologia-chillan.cl/#website",
        "url": "https://psicologia-chillan.cl",
        "name": "Psicología Online Chillán",
        "description": "Terapia psicológica online profesional en Chillán, Chile",
        "inLanguage": "es-CL",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://psicologia-chillan.cl/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://psicologia-chillan.cl/#organization",
        "name": "Psicología Online Chillán",
        "url": "https://psicologia-chillan.cl",
        "logo": {
          "@type": "ImageObject",
          "url": "https://psicologia-chillan.cl/placeholder-logo.png",
          "width": 300,
          "height": 300
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+56999406614",
          "contactType": "customer service",
          "areaServed": "CL",
          "availableLanguage": "Spanish"
        }
      }
    ]
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo funciona la terapia psicológica online en Chillán?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestras sesiones de terapia online se realizan a través de videollamadas seguras desde la comodidad de tu hogar. Los psicólogos están certificados y especializados en terapia virtual, ofreciendo la misma calidad que una consulta presencial."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipos de terapia psicológica ofrecen en Chillán?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos terapia individual, terapia familiar, coaching personal, manejo del estrés y programas de bienestar emocional. Todos nuestros servicios están adaptados para modalidad online."
        }
      },
      {
        "@type": "Question",
        "name": "¿Los psicólogos online están certificados en Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todos nuestros psicólogos están certificados por el Colegio de Psicólogos de Chile y cuentan con experiencia en terapia online. Cumplimos con todas las regulaciones del Ministerio de Salud."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son los horarios de atención para terapia online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atendemos de lunes a viernes de 9:00 a 20:00 horas y sábados de 10:00 a 16:00 horas. Ofrecemos horarios flexibles para adaptarnos a tu rutina."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}

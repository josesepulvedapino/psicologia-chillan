export function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://psicologiachillan.cl/#business",
        "name": "Psicología Online Chillán",
        "alternateName": "Psicólogos Online Chillán",
        "description": "Servicio profesional de psicología online en Chillán, Chile. Especialistas en terapia individual y familiar con certificación profesional.",
        "url": "https://psicologiachillan.cl",
        "telephone": "+56999406614",
        "email": "psicologiaonlineypresencial14@gmail.com",
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
                "description": "Sesiones personalizadas para abordar ansiedad, depresión, estrés y trauma complejo",
                "provider": {
                  "@type": "Organization",
                  "name": "Psicología Online Chillán"
                },
                "areaServed": "Chile",
                "serviceType": "Psicología Clínica"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia Familiar Online",
                "description": "Mejora la dinámica familiar y crea un ambiente más armonioso en el hogar",
                "provider": {
                  "@type": "Organization",
                  "name": "Psicología Online Chillán"
                },
                "areaServed": "Chile",
                "serviceType": "Terapia Familiar"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Coaching Personal Online",
                "description": "Desarrolla tu potencial y alcanza tus metas personales y profesionales",
                "provider": {
                  "@type": "Organization",
                  "name": "Psicología Online Chillán"
                },
                "areaServed": "Chile",
                "serviceType": "Coaching Personal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Manejo del Estrés Online",
                "description": "Técnicas especializadas para manejar el estrés laboral y personal",
                "provider": {
                  "@type": "Organization",
                  "name": "Psicología Online Chillán"
                },
                "areaServed": "Chile",
                "serviceType": "Terapia de Estrés"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bienestar Emocional Online",
                "description": "Programas integrales para mejorar tu autoestima y bienestar general",
                "provider": {
                  "@type": "Organization",
                  "name": "Psicología Online Chillán"
                },
                "areaServed": "Chile",
                "serviceType": "Psicología del Bienestar"
              }
            }
          ]
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        "paymentAccepted": ["Efectivo", "Transferencia bancaria", "Tarjeta de crédito"],
        "currenciesAccepted": "CLP",
        "sameAs": [
          "https://www.instagram.com/psicologia_online_presencial"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "María González"
            },
            "reviewBody": "La terapia online me cambió la vida. Pude trabajar mi ansiedad desde casa, con horarios que se adaptaban a mi trabajo. La psicóloga fue muy empática y profesional."
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Carlos Mendoza"
            },
            "reviewBody": "Excelente servicio. Como hombre, me costaba mucho buscar ayuda psicológica, pero la modalidad online me dio la confianza que necesitaba para comenzar."
          }
        ]
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://psicologiachillan.cl/#medical",
        "name": "Psicología Online Chillán",
        "medicalSpecialty": "Psicología Clínica",
        "description": "Servicio especializado en psicología clínica online con enfoque en terapia individual, familiar y manejo de trauma complejo",
        "provider": {
          "@type": "Organization",
          "name": "Psicología Online Chillán",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chillán",
            "addressRegion": "Ñuble",
            "addressCountry": "CL"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://psicologiachillan.cl/#website",
        "url": "https://psicologiachillan.cl",
        "name": "Psicología Online Chillán",
        "description": "Terapia psicológica online profesional en Chillán, Chile",
        "inLanguage": "es-CL",
        "isPartOf": {
          "@id": "https://psicologiachillan.cl/#business"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://psicologiachillan.cl/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://psicologiachillan.cl/#webpage",
        "url": "https://psicologiachillan.cl",
        "name": "Psicología Online Chillán | Terapia Psicológica Virtual en Chile",
        "isPartOf": {
          "@id": "https://psicologiachillan.cl/#website"
        },
        "about": {
          "@id": "https://psicologiachillan.cl/#business"
        },
        "description": "Terapia psicológica online profesional en Chillán, Chile. Psicólogos certificados especializados en terapia individual, familiar y trauma complejo.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://psicologiachillan.cl"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Servicios",
              "item": "https://psicologiachillan.cl#servicios"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Contacto",
              "item": "https://psicologiachillan.cl#contacto"
            }
          ]
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessData, null, 2),
      }}
    />
  )
}
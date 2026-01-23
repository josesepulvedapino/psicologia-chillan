import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { StructuredData } from '@/components/structured-data'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { GSAPProvider } from '@/components/gsap-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// SEO 2026 + AI Optimization
export const metadata: Metadata = {
  title: {
    default: 'Psicólogo Online Chile | Terapia Psicológica Virtual Certificada',
    template: '%s | Psicología Online Chile'
  },
  description: 'Psicólogos online certificados en Chile. Terapia individual, familiar, trauma complejo, ansiedad y depresión. +500 pacientes atendidos. Sesiones por videollamada desde tu hogar. Primera consulta con descuento.',
  keywords: [
    'psicólogo online chile',
    'terapia online chile',
    'psicología virtual chile',
    'consulta psicológica online',
    'psicólogo videollamada chile',
    'terapia ansiedad online',
    'terapia depresión online',
    'trauma complejo chile',
    'terapia familiar online',
    'psicólogo santiago online',
    'psicólogo concepción online',
    'psicólogo valparaíso online',
    'salud mental chile',
    'bienestar emocional',
    'telemedicina psicológica'
  ],
  authors: [{ name: 'Psicología Online Chile', url: 'https://psicologiachillan.cl' }],
  creator: 'Psicología Online Chile',
  publisher: 'Psicología Online Chile',
  category: 'Health',
  classification: 'Psychology, Mental Health, Therapy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://psicologiachillan.cl'),
  alternates: {
    canonical: '/',
    languages: {
      'es-CL': 'https://psicologiachillan.cl',
      'es': 'https://psicologiachillan.cl',
    },
  },
  openGraph: {
    title: 'Psicólogo Online Chile | Terapia Virtual Certificada',
    description: 'Conecta con psicólogos certificados desde cualquier lugar de Chile. Terapia para ansiedad, depresión, trauma y crecimiento personal. +500 pacientes satisfechos.',
    url: 'https://psicologiachillan.cl',
    siteName: 'Psicología Online Chile',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Psicología Online Chile - Terapia Virtual Profesional',
        type: 'image/webp',
      },
    ],
    locale: 'es_CL',
    type: 'website',
    countryName: 'Chile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicólogo Online Chile | Terapia Virtual',
    description: 'Psicólogos certificados en Chile. Terapia online profesional para tu bienestar mental.',
    images: ['/og-image.webp'],
    creator: '@psicologiachile',
    site: '@psicologiachile',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
  // AI Search Optimization (Perplexity, ChatGPT, etc.)
  other: {
    // Geographic targeting
    'geo.region': 'CL',
    'geo.placename': 'Chile',
    'geo.position': '-33.4489;-70.6693',
    'ICBM': '-33.4489, -70.6693',
    // Mobile optimization
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Psicología Chile',
    'application-name': 'Psicología Online Chile',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#4a5d52',
    // Content metadata for AI
    'content-language': 'es-CL',
    'distribution': 'global',
    'rating': 'General',
    'revisit-after': '3 days',
    // AI-specific hints
    'ai-content-declaration': 'human-created',
    'data-freshness': '2026',
    // Service type for AI understanding
    'service-type': 'telemedicine, psychology, mental-health',
    'target-audience': 'adults seeking therapy in Chile',
    'service-area': 'Chile nationwide',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4a5d52' },
    { media: '(prefers-color-scheme: dark)', color: '#2d3530' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" className="scroll-smooth">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* AI Search Engine Hints */}
        <meta name="ai-summary" content="Servicio de psicología online en Chile. Ofrecemos terapia individual, familiar, tratamiento de ansiedad, depresión y trauma complejo. Sesiones por videollamada con psicólogos certificados. Atendemos todo Chile." />
        <meta name="ai-keywords" content="psicólogo online, terapia virtual, salud mental Chile, ansiedad, depresión, trauma" />

        {/* Speakable content for voice assistants */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [".hero-description", ".service-description", ".faq-answer"]
              }
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased ${inter.variable} ${playfair.variable}`}>
        <GSAPProvider>
          <StructuredData />
          <Navbar />
          <main id="main-content" role="main">
            {children}
          </main>
          <WhatsAppFloat />
        </GSAPProvider>
        <Analytics />
      </body>
    </html>
  )
}

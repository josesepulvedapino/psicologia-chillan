import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { StructuredData } from '@/components/structured-data'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

export const metadata: Metadata = {
  title: 'Psicología Online Chillán | Terapia Psicológica Virtual en Chile',
  description: 'Terapia psicológica online profesional en Chillán, Chile. Psicólogos certificados especializados en terapia individual, familiar y trauma complejo. Horarios flexibles, consultas por WhatsApp y sesiones virtuales seguras.',
  keywords: 'psicología online Chillán, terapia virtual Chile, psicólogos Chillán, terapia individual Chile, salud mental Chillán, psicología virtual Ñuble, WhatsApp psicólogo, consulta psicológica online, terapia familiar Chile, trauma complejo, terapia reparatoria, psicólogo certificado Chile, telemedicina psicológica',
  authors: [{ name: 'Psicología Online Chillán' }],
  creator: 'Psicología Online Chillán',
  publisher: 'Psicología Online Chillán',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://psicologiachillan.cl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Psicología Online Chillán | Terapia Psicológica Virtual en Chile',
    description: 'Terapia psicológica online profesional en Chillán, Chile. Psicólogos certificados especializados en terapia individual, familiar y trauma complejo. Consultas por WhatsApp y sesiones virtuales seguras.',
    url: 'https://psicologiachillan.cl',
    siteName: 'Psicología Online Chillán',
    images: [
      {
        url: '/psychologist-online-session.jpg',
        width: 1200,
        height: 630,
        alt: 'Psicóloga profesional en sesión online desde Chillán',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicología Online Chillán | Terapia Psicológica Virtual',
    description: 'Terapia psicológica online profesional en Chillán, Chile. Psicólogos certificados especializados en trauma complejo con horarios flexibles.',
    images: ['/psychologist-online-session.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'CL-NB',
    'geo.placename': 'Chillán',
    'geo.position': '-36.6063;-72.1039',
    'ICBM': '-36.6063, -72.1039',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#059669',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Psicología Chillán',
    'application-name': 'Psicología Online Chillán',
    'msapplication-TileColor': '#059669',
    'msapplication-TileImage': '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <StructuredData />
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}

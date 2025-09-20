import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { StructuredData } from '@/components/structured-data'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

export const metadata: Metadata = {
  title: 'Psicología Chillán Online | Psicólogo Virtual Chillán',
  description: 'Terapia psicológica online profesional en Chillán, Chile. Psicólogos certificados especializados en terapia individual, familiar y trauma complejo.',
  keywords: 'psicología chillán online, psicología online chillán, psicólogo virtual chillán, terapia online chillán, psicología online ñuble, psicólogo chillán online, terapia virtual chillán, consulta psicológica online chillán, psicólogo online ñuble, terapia online ñuble, psicólogos chillán, terapia individual chillán, salud mental chillán, WhatsApp psicólogo chillán, psicólogo certificado chillán, telemedicina psicológica chillán',
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
    title: 'Psicología Chillán Online | Psicólogo Virtual Chillán',
    description: 'Terapia psicológica online profesional en Chillán, Chile. Psicólogos certificados especializados en terapia individual, familiar y trauma complejo.',
    url: 'https://psicologiachillan.cl',
    siteName: 'Psicología Online Chillán',
    images: [
      {
        url: '/psychologist-online-session-600.webp',
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
    title: 'Psicología Chillán Online | Psicólogo Virtual Chillán',
    description: 'Terapia psicológica online profesional en Chillán, Chile. Psicólogos certificados especializados en trauma complejo con horarios flexibles.',
    images: ['/psychologist-online-session-600.webp'],
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

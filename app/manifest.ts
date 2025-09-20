import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Psicología Online Chillán',
    short_name: 'Psicología Chillán',
    description: 'Terapia psicológica online profesional en Chillán, Chile. Psicólogos certificados especializados en terapia individual y familiar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#059669',
    categories: ['health', 'medical', 'lifestyle'],
    icons: [
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48',
        type: 'image/x-icon',
      }
    ],
  }
}

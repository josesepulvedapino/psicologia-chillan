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
        src: '/placeholder-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/placeholder-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

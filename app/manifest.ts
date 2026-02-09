import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Psicología Online Chile',
    short_name: 'Psicología Chile',
    description: 'Psicólogos online certificados en Chile. Terapia individual, familiar, ansiedad, depresión y trauma. Sesiones por videollamada a todo el país.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4a5d52',
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

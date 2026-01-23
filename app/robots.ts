import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/studio/'],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/blog/',
          '/blog/*',
        ],
        disallow: ['/api/', '/admin/', '/studio/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/*.webp', '/*.jpg', '/*.png'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/studio/'],
      },
    ],
    sitemap: 'https://psicologiachillan.cl/sitemap.xml',
    host: 'https://psicologiachillan.cl',
  }
}

import { MetadataRoute } from 'next'
import { getAllBlogPostSlugs, getBlogPostsPaginated } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://psicologiachillan.cl'
  const blogSlugs = await getAllBlogPostSlugs()

  // URLs estáticas principales
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#servicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#testimonios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contacto`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // URLs dinámicas del blog con alta prioridad para contenido reciente
  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug, index) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: index < 5 ? 0.9 : 0.8, // Los 5 más recientes tienen mayor prioridad
  }))

  // URLs de paginación del blog
  const { totalPages } = await getBlogPostsPaginated(1, 9)
  const paginationUrls: MetadataRoute.Sitemap = []

  for (let page = 2; page <= totalPages; page++) {
    paginationUrls.push({
      url: `${baseUrl}/blog?page=${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  }

  // URLs de imágenes principales (ayuda a Google Images)
  const imageUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/psychologist-online-session-600.webp`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  return [...staticUrls, ...blogUrls, ...paginationUrls, ...imageUrls]
}

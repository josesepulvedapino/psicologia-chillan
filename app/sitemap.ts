import { MetadataRoute } from 'next'
import { getAllBlogPostSlugs, getBlogPostsPaginated } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://psicologiachillan.cl'
  const blogSlugs = await getAllBlogPostSlugs()

  // URLs estáticas principales (sin hash fragments)
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // URLs dinámicas del blog
  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug, index) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: index < 5 ? 0.9 : 0.8,
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

  return [...staticUrls, ...blogUrls, ...paginationUrls]
}

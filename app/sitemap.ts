import { MetadataRoute } from 'next'
import { getAllBlogPostSlugs, getBlogPostsPaginated } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://psicologiachillan.cl'
  const blogSlugs = await getAllBlogPostSlugs()

  // URLs estáticas
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // URLs dinámicas del blog
  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // URLs de paginación del blog
  const { totalPages } = await getBlogPostsPaginated(1, 9)
  const paginationUrls: MetadataRoute.Sitemap = []
  
  for (let page = 2; page <= totalPages; page++) {
    paginationUrls.push({
      url: `${baseUrl}/blog?page=${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  }

  return [...staticUrls, ...blogUrls, ...paginationUrls]
}

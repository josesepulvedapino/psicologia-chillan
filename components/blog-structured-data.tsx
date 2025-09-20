import { BlogPost } from '@/types/sanity'
import { urlFor } from '@/lib/sanity'

interface BlogStructuredDataProps {
  post: BlogPost
}

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const authorName = post.author?.name || 'Psicólogo Especializado'
  const publishedDate = new Date(post.publishedAt).toISOString()
  const modifiedDate = new Date(post._updatedAt).toISOString()

  // Extraer texto del contenido para wordCount
  const extractText = (body: any[]): string => {
    if (!body || !Array.isArray(body)) return ''
    
    let text = ''
    for (const block of body) {
      if (block._type === 'block' && block.children) {
        for (const child of block.children) {
          if (child._type === 'span' && child.text) {
            text += child.text + ' '
          }
        }
      }
    }
    return text.trim()
  }

  const articleText = extractText(post.body)
  const wordCount = articleText.split(' ').length

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://psicologiachillan.cl/blog/${post.slug.current}#article`,
    "headline": post.title,
    "description": post.mainImage?.alt || post.title,
    "image": post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : 'https://psicologiachillan.cl/psychologist-online-session-600.webp',
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": "https://psicologiachillan.cl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Psicología Online Chillán",
      "logo": {
        "@type": "ImageObject",
        "url": "https://psicologiachillan.cl/logo.svg"
      },
      "url": "https://psicologiachillan.cl"
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://psicologiachillan.cl/blog/${post.slug.current}`
    },
    "articleSection": post.categories?.map(cat => cat.title).join(', ') || 'Psicología',
    "keywords": `${post.title}, psicología chillán, bienestar mental, terapia online`,
    "wordCount": wordCount,
    "timeRequired": `PT${post.readingTime}M`,
    "inLanguage": "es-CL",
    "isPartOf": {
      "@type": "Blog",
      "name": "Blog de Psicología Online Chillán",
      "url": "https://psicologiachillan.cl/blog"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://psicologiachillan.cl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://psicologiachillan.cl/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://psicologiachillan.cl/blog/${post.slug.current}`
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  )
}

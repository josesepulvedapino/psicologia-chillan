import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Heart, BookOpen } from 'lucide-react'
import { ShareButton } from '@/components/share-button'
import { BlogStructuredData } from '@/components/blog-structured-data'

export async function generateStaticParams() {
  const slugs = await getAllBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) return {}

  // Extraer descripción del contenido (primeros 160 caracteres)
  const extractDescription = (body: any[]): string => {
    if (!body || !Array.isArray(body)) return ''
    
    let text = ''
    for (const block of body) {
      if (block._type === 'block' && block.children) {
        for (const child of block.children) {
          if (child._type === 'span' && child.text) {
            text += child.text + ' '
            if (text.length > 160) break
          }
        }
        if (text.length > 160) break
      }
    }
    
    return text.trim().substring(0, 157) + (text.length > 160 ? '...' : '')
  }

  const description = extractDescription(post.body) || 
    `Artículo especializado en psicología y bienestar mental en Chillán. ${post.author?.name ? `Por ${post.author.name}. ` : ''}Consejos profesionales para tu crecimiento personal y salud mental.`

  const authorName = post.author?.name || 'Psicólogo Especializado'
  const publishedDate = new Date(post.publishedAt).toISOString()

  return {
    title: `${post.title} | Blog Psicología Chillán Online`,
    description: description,
    keywords: `${post.title.toLowerCase()}, psicología chillán, bienestar mental, terapia online, salud mental ñuble, psicólogo chillán, consejos psicológicos, ${post.categories?.map(cat => cat.title?.toLowerCase()).join(', ') || ''}`,
    authors: [{ name: authorName }],
    openGraph: {
      title: post.title,
      description: description,
      url: `https://psicologiachillan.cl/blog/${post.slug.current}`,
      siteName: 'Psicología Online Chillán',
      type: 'article',
      publishedTime: publishedDate,
      authors: [authorName],
      images: post.mainImage ? [{ 
        url: urlFor(post.mainImage).width(1200).height(630).url(), 
        alt: post.mainImage.alt || post.title,
        width: 1200,
        height: 630,
      }] : [{
        url: 'https://psicologiachillan.cl/psychologist-online-session-600.webp',
        alt: post.title,
        width: 1200,
        height: 630,
      }],
      locale: 'es_CL',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : ['https://psicologiachillan.cl/psychologist-online-session-600.webp'],
    },
    alternates: {
      canonical: `https://psicologiachillan.cl/blog/${post.slug.current}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) notFound()

  return (
    <>
      <BlogStructuredData post={post} />
      <div className="min-h-screen">
      {/* Hero Section - Consistente con la página principal */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 pt-28 lg:pt-20 animate-gradient">
        <div className="absolute inset-0 bg-[url('/serene-nature-landscape-with-soft-mountains-and-ca.jpg')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium group animate-fade-in-down"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Volver al blog
            </Link>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 animate-fade-in-down animate-stagger-1">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Artículo de Psicología</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance animate-fade-in-up animate-stagger-2">
              {post.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 mb-8 animate-fade-in-up animate-stagger-3">
              {post.author?.name && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-emerald-600" />
                  <span>{post.author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <span>{new Date(post.publishedAt).toLocaleDateString('es-CL', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-600" />
                <span>{post.readingTime} min de lectura</span>
              </div>
              <ShareButton 
                title={post.title}
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
              />
            </div>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="relative max-w-4xl mx-auto mb-8 animate-fade-in-up animate-stagger-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(600).url()}
                    alt={post.mainImage.alt || post.title}
                    width={1200}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    className="w-full h-auto object-cover"
                    priority
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            )}

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up animate-stagger-5">
                {post.categories.map((category, index) => (
                  <span 
                    key={category._id || category._ref || index} 
                    className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {category.title || 'Categoría'}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content Section - Consistente con about-section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Article Body */}
            <div className="prose prose-lg prose-emerald max-w-none text-gray-800 leading-relaxed">
              <PortableText value={post.body} />
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author?.name || 'Autor'}</p>
                    <p className="text-sm text-gray-500">Psicólogo especializado</p>
                  </div>
                </div>

                {/* Share Button */}
                <div className="flex items-center gap-4">
                  <ShareButton 
                    title={post.title}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full hover:bg-emerald-100 transition-colors cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Call to Action Section - Consistente con booking-section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Si necesitas apoyo profesional o tienes preguntas sobre tu bienestar mental, 
              nuestros psicólogos están aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 animate-hover-glow"
              >
                <Heart className="h-5 w-5" />
                Agendar Consulta
              </Link>
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200"
              >
                Ver Más Artículos
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
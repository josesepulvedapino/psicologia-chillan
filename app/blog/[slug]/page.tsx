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
import { blogContentComponents } from '@/components/blog-content'

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
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-start justify-center bg-gradient-to-br from-emerald-50 to-teal-50 pt-24 md:pt-32 lg:pt-28 animate-gradient">
        <div className="absolute inset-0 bg-[url('/serene-nature-landscape-with-soft-mountains-and-ca.jpg')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          {/* Back Button */}
          <div className="mb-6 md:mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium group animate-fade-in-down"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Volver al blog
            </Link>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 animate-fade-in-down animate-stagger-1">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Artículo de Psicología</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 text-balance animate-fade-in-up animate-stagger-2">
              {post.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-gray-600 mb-6 md:mb-8 animate-fade-in-up animate-stagger-3">
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

      {/* Article Content Section - Diseño mejorado con fondo cálido */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20 relative">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-50/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <article className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 md:p-12 lg:p-16">
            {/* Article Body con diseño personalizado */}
            <div className="max-w-none blog-content lg:max-w-5xl lg:mx-auto">
              <PortableText 
                value={post.body} 
                components={blogContentComponents}
              />
            </div>

            {/* Article Footer mejorado */}
            <div className="mt-16 pt-8 border-t border-emerald-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Author Info mejorado */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-2xl border border-emerald-100/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-lg">
                    <User className="h-7 w-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{post.author?.name || 'Autor'}</p>
                    <p className="text-sm text-emerald-600 font-medium">Psicólogo especializado</p>
                    <p className="text-xs text-gray-500 mt-1">Artículo publicado el {new Date(post.publishedAt).toLocaleDateString('es-CL', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                  </div>
                </div>

                {/* Share Button mejorado */}
                <div className="flex items-center gap-4">
                  <ShareButton 
                    title={post.title}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Call to Action Section mejorada */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-slate-50 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-200/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
                <Heart className="h-10 w-10 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Si necesitas apoyo profesional o tienes preguntas sobre tu bienestar mental, 
              nuestros psicólogos están aquí para ayudarte con terapia online especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 cursor-pointer animate-hover-lift"
              >
                <Heart className="h-5 w-5" />
                Agendar Consulta
              </Link>
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 cursor-pointer animate-hover-lift"
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
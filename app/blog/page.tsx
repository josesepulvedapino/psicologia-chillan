import { getBlogPostsPaginated } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Calendar, Clock, User, ArrowRight, BookOpen, Heart } from 'lucide-react'
import { BlogPagination } from '@/components/blog-pagination'
import { Metadata } from 'next'

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const currentPage = parseInt(searchParams.page || '1', 10)
  const { totalPosts, totalPages } = await getBlogPostsPaginated(currentPage, 9)

  const isFirstPage = currentPage === 1
  const pageTitle = isFirstPage
    ? 'Blog de Psicología Online Chile | Artículos de Salud Mental y Bienestar'
    : `Blog de Psicología Chile | Página ${currentPage} de ${totalPages} - Artículos de Bienestar`

  const pageDescription = isFirstPage
    ? 'Artículos de psicología y salud mental en Chile. Consejos profesionales sobre ansiedad, depresión, estrés, relaciones y crecimiento personal. Recursos gratuitos de psicólogos certificados.'
    : `Artículos de psicología y bienestar mental en Chile. Página ${currentPage} de ${totalPages}. Guías y consejos de psicólogos certificados para tu salud mental.`

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: 'blog psicología chile, artículos salud mental chile, consejos psicológicos, psicología online chile, bienestar mental, terapia psicológica chile, ansiedad artículos, depresión consejos, estrés laboral chile, crecimiento personal, autoayuda psicología, recursos salud mental',
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://psicologiachillan.cl/blog${isFirstPage ? '' : `?page=${currentPage}`}`,
      siteName: 'Psicología Online Chile',
      type: 'website',
      images: [
        {
          url: 'https://psicologiachillan.cl/psychologist-online-session-600.webp',
          width: 1200,
          height: 630,
          alt: 'Blog de Psicología Online Chile - Artículos de salud mental y bienestar',
        },
      ],
      locale: 'es_CL',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ['https://psicologiachillan.cl/psychologist-online-session-600.webp'],
    },
    alternates: {
      canonical: `https://psicologiachillan.cl/blog${isFirstPage ? '' : `?page=${currentPage}`}`,
    },
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = parseInt(searchParams.page || '1', 10)
  const { posts, totalPosts, totalPages, hasNextPage, hasPrevPage } = await getBlogPostsPaginated(currentPage, 9)
  

  if (posts.length === 0) {
    return (
      <div className="min-h-screen">
        {/* Hero Section - Consistente con la página principal */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-start justify-center bg-gradient-to-br from-emerald-50 to-teal-50 pt-24 md:pt-32 lg:pt-28 animate-gradient">
          <div className="absolute inset-0 bg-[url('/serene-nature-landscape-with-soft-mountains-and-ca.jpg')] bg-cover bg-center opacity-10" />
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 animate-fade-in-down animate-stagger-1">
                  <BookOpen className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">Blog de Psicología</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 text-balance animate-fade-in-up animate-stagger-2">
                Blog de Psicología Online Chile - <span className="text-emerald-600">Próximamente</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up animate-stagger-3">
                Estamos preparando contenido interesante y útil para tu bienestar mental. 
                Artículos, consejos y recursos especializados.
              </p>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto animate-fade-in-up animate-stagger-4">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">¡Mantente atento!</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pronto tendremos artículos y recursos para tu bienestar mental.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Consistente con la página principal */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-start justify-center bg-gradient-to-br from-emerald-50 to-teal-50 pt-24 md:pt-32 lg:pt-28 animate-gradient">
        <div className="absolute inset-0 bg-[url('/serene-nature-landscape-with-soft-mountains-and-ca.jpg')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 animate-fade-in-down animate-stagger-1">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Blog de Psicología</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 text-balance animate-fade-in-up animate-stagger-2">
              Blog de Psicología Online Chile - <span className="text-emerald-600">Tu bienestar mental</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up animate-stagger-3">
              Artículos, consejos y recursos especializados para tu crecimiento personal y bienestar mental.
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in-up animate-stagger-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-600" />
                <span>{totalPosts} Artículos</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span>Contenido Especializado</span>
              </div>
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">Página {currentPage} de {totalPages}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section mejorada */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Últimos Artículos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
              Descubre contenido especializado para tu bienestar mental y crecimiento personal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article 
                key={post._id} 
                className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden animate-fade-in-up animate-hover-lift hover:shadow-2xl transition-all duration-300" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Image mejorada */}
                {post.mainImage && (
                  <Link href={`/blog/${post.slug.current}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(400).height(200).url()}
                        alt={post.mainImage.alt || post.title}
                        width={400}
                        height={200}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-hover-scale">
                        <BookOpen className="h-6 w-6 text-emerald-600" />
                      </div>
                      {/* Overlay con efecto hover */}
                      <div className="absolute inset-0 bg-emerald-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 hover:scale-100 transition-transform duration-300">
                          <ArrowRight className="h-6 w-6 text-emerald-600" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
                
                {/* Content mejorado */}
                <div className="p-6">
                  {/* Meta info mejorada */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full">
                      <Calendar className="h-3 w-3 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">{new Date(post.publishedAt).toLocaleDateString('es-CL', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-teal-50 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3 text-teal-600" />
                      <span className="text-teal-700 font-medium">{post.readingTime} min</span>
                    </div>
                  </div>

                  {/* Title mejorado */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    <Link 
                      href={`/blog/${post.slug.current}`} 
                      className="hover:text-emerald-600 transition-colors duration-200 group"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  {/* Read more button mejorado */}
                  <div className="mt-6">
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm group transition-colors duration-200 cursor-pointer animate-hover-lift"
                    >
                      Leer artículo
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Paginación */}
          <BlogPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </div>
      </section>

      {/* Call to Action Section mejorada */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-slate-50 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-200/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
                <Heart className="h-10 w-10 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              ¿Necesitas ayuda profesional?
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Nuestros psicólogos están aquí para acompañarte en tu camino hacia el bienestar mental con terapia online especializada.
            </p>
            <Link 
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 cursor-pointer animate-hover-lift"
            >
              <Heart className="h-5 w-5" />
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
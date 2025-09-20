import { getAllBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Calendar, Clock, ArrowRight, BookOpen, Heart, User } from 'lucide-react'

export async function BlogSection() {
  const posts = await getAllBlogPosts()

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance animate-fade-in-up animate-stagger-1">
            Blog de Psicología Online Chillán
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up animate-stagger-2">
            Artículos, consejos y recursos especializados para tu bienestar mental y crecimiento personal
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Próximamente</h3>
              <p className="text-gray-600 leading-relaxed">
                Estamos preparando contenido interesante y útil para tu bienestar mental. 
                Artículos, consejos y recursos especializados.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, index) => (
              <article 
                key={post._id} 
                className="h-full hover:shadow-lg transition-shadow bg-white overflow-hidden animate-fade-in-up animate-hover-lift" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Image */}
                {post.mainImage && (
                  <Link href={`/blog/${post.slug.current}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(400).height(200).url()}
                        alt={post.mainImage.alt || post.title}
                        width={400}
                        height={200}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center animate-hover-scale">
                        <BookOpen className="h-6 w-6 text-emerald-600" />
                      </div>
                    </div>
                  </Link>
                )}
                
                {/* Content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('es-CL', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readingTime} min</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    <Link 
                      href={`/blog/${post.slug.current}`} 
                      className="hover:text-emerald-600 transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h3>


                  {/* Read more button */}
                  <div className="mt-4">
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
                    >
                      Leer artículo
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Ver más artículos */}
        {posts.length > 3 && (
          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 animate-hover-glow"
            >
              <BookOpen className="h-5 w-5" />
              Ver Todos los Artículos
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

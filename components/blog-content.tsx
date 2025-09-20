import { PortableTextComponents } from 'next-sanity'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { PortableText } from 'next-sanity'
import { Info, AlertTriangle, Lightbulb, AlertCircle } from 'lucide-react'

// Componente personalizado para renderizar el contenido del blog
export const blogContentComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      
      return (
        <div className="my-8 flex justify-center">
          <div className="relative max-w-4xl w-full">
            <Image
              src={urlFor(value).width(800).height(400).url()}
              alt={value.alt || 'Imagen del artículo'}
              width={800}
              height={400}
              className="rounded-2xl shadow-lg border border-gray-200 w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
            />
            {(value.caption || value.alt) && (
              <p className="text-sm text-gray-500 text-center mt-2 italic">
                {value.caption || value.alt}
              </p>
            )}
          </div>
        </div>
      )
    },
    
    // Separador visual
    divider: ({ value }) => {
      if (!value) return null
      
      switch (value.style) {
        case 'line':
          return <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
        case 'line-with-text':
          return (
            <div className="my-12 flex items-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-emerald-300"></div>
              <span className="px-4 text-emerald-600 font-medium text-sm">{value.text}</span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-300 to-transparent"></div>
            </div>
          )
        case 'spacing':
          return <div className="my-16"></div>
        default:
          return <hr className="my-8 border-emerald-200" />
      }
    },
    
    // Caja de información destacada
    infoBox: ({ value }) => {
      if (!value) return null
      
      const getIcon = (type: string) => {
        switch (type) {
          case 'info': return <Info className="h-5 w-5" />
          case 'warning': return <AlertTriangle className="h-5 w-5" />
          case 'tip': return <Lightbulb className="h-5 w-5" />
          case 'important': return <AlertCircle className="h-5 w-5" />
          default: return <Info className="h-5 w-5" />
        }
      }
      
      const getStyles = (type: string) => {
        switch (type) {
          case 'info':
            return 'bg-blue-50 border-blue-200 text-blue-800'
          case 'warning':
            return 'bg-yellow-50 border-yellow-200 text-yellow-800'
          case 'tip':
            return 'bg-emerald-50 border-emerald-200 text-emerald-800'
          case 'important':
            return 'bg-red-50 border-red-200 text-red-800'
          default:
            return 'bg-gray-50 border-gray-200 text-gray-800'
        }
      }
      
      return (
        <div className={`my-8 p-6 rounded-xl border-l-4 ${getStyles(value.type)}`}>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              {getIcon(value.type)}
            </div>
            <div className="flex-1">
              {value.title && (
                <h4 className="font-semibold mb-2">{value.title}</h4>
              )}
              <div className="prose prose-sm max-w-none">
                <PortableText value={value.content} components={blogContentComponents} />
              </div>
            </div>
          </div>
        </div>
      )
    },
  },
  block: {
    // Títulos
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 mt-12 first:mt-0 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6 mt-10 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4 mt-8 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl md:text-2xl font-bold text-emerald-600 mb-4 mt-8 leading-tight flex items-center gap-3">
        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg md:text-xl font-bold text-emerald-600 mb-3 mt-6 leading-tight">
        {children}
      </h5>
    ),
    
    // Estilos especiales
    highlight: ({ children }) => (
      <div className="my-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-r-lg">
        <div className="text-gray-800 leading-relaxed">
          {children}
        </div>
      </div>
    ),
    
    callout: ({ children }) => (
      <div className="my-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-400 rounded-r-lg">
        <div className="text-gray-800 leading-relaxed font-medium">
          {children}
        </div>
      </div>
    ),
    
    // Párrafos
    normal: ({ children }) => (
      <p className="text-gray-700 text-lg leading-relaxed mb-6 first:mt-0">
        {children}
      </p>
    ),
    
    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-400 bg-gradient-to-r from-emerald-50/50 to-teal-50/30 pl-6 pr-4 py-4 rounded-r-lg text-gray-700 italic font-medium my-8 relative">
        <div className="absolute top-2 left-2 text-emerald-400 text-2xl">"</div>
        <div className="ml-4">{children}</div>
        <div className="absolute bottom-2 right-2 text-emerald-400 text-2xl">"</div>
      </blockquote>
    ),
  },
  list: {
    // Listas con viñetas
    bullet: ({ children }) => (
      <ul className="text-gray-700 space-y-4 my-8 pl-0">
        {children}
      </ul>
    ),
    // Listas numeradas
    number: ({ children }) => (
      <ol className="text-gray-700 space-y-4 my-8 pl-0">
        {children}
      </ol>
    ),
  },
  listItem: {
    // Elementos de lista con viñetas
    bullet: ({ children }) => (
      <li className="text-gray-700 leading-relaxed relative pl-10 mb-4 bg-gradient-to-r from-emerald-50/30 to-transparent p-4 rounded-lg border-l-4 border-emerald-200">
        <span className="absolute left-3 top-4 w-2 h-2 bg-emerald-500 rounded-full"></span>
        <div className="text-base leading-relaxed">{children}</div>
      </li>
    ),
    // Elementos de lista numerada
    number: ({ children }) => {
      // Extraer el número del contenido si es posible
      const content = children?.toString() || ''
      const numberMatch = content.match(/^(\d+)\.?\s*(.*)/)
      const number = numberMatch ? numberMatch[1] : '•'
      const text = numberMatch ? numberMatch[2] : content
      
      return (
        <li className="text-gray-700 leading-relaxed relative pl-12 mb-4 bg-gradient-to-r from-teal-50/30 to-transparent p-4 rounded-lg border-l-4 border-teal-200">
          <div className="absolute left-3 top-4 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {number}
          </div>
          <div className="text-base leading-relaxed">{text}</div>
        </li>
      )
    },
  },
  marks: {
    // Texto en negrita
    strong: ({ children }) => (
      <strong className="text-gray-900 font-semibold">
        {children}
      </strong>
    ),
    // Texto en cursiva
    em: ({ children }) => (
      <em className="text-emerald-600 font-medium">
        {children}
      </em>
    ),
    // Subrayado
    underline: ({ children }) => (
      <span className="underline decoration-emerald-400 decoration-2">
        {children}
      </span>
    ),
    // Tachado
    strike: ({ children }) => (
      <span className="line-through text-gray-500">
        {children}
      </span>
    ),
    // Código
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    // Resaltado
    highlight: ({ children }) => (
      <mark className="bg-yellow-200 text-gray-900 px-1 rounded">
        {children}
      </mark>
    ),
    // Enlaces
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 font-medium no-underline hover:text-emerald-700 hover:underline transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  // Separadores entre secciones
  hardBreak: () => <br className="my-4" />,
  
  // Componente personalizado para secciones numeradas
  customSection: ({ children, value }: any) => {
    if (value?.style === 'numbered-section') {
      return (
        <div className="my-8 p-6 bg-gradient-to-r from-emerald-50/50 to-teal-50/30 rounded-xl border-l-4 border-emerald-400">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
              {value?.number || '•'}
            </div>
            <div className="text-gray-700 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      )
    }
    return <div>{children}</div>
  },
}

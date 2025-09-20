"use client"

import Link from 'next/link'
import Head from 'next/head'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export function BlogPagination({ 
  currentPage, 
  totalPages, 
  hasNextPage, 
  hasPrevPage 
}: BlogPaginationProps) {
  // No mostrar paginación si solo hay una página
  if (totalPages <= 1) return null

  // Generar números de páginas a mostrar
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      // Mostrar todas las páginas si son pocas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Lógica para mostrar páginas con ellipsis
      if (currentPage <= 3) {
        // Al inicio: 1, 2, 3, 4, ..., last
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        if (totalPages > 4) {
          pages.push('...')
          pages.push(totalPages)
        }
      } else if (currentPage >= totalPages - 2) {
        // Al final: 1, ..., last-3, last-2, last-1, last
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // En el medio: 1, ..., current-1, current, current+1, ..., last
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <>
      {/* SEO Links para paginación */}
      <Head>
        {hasPrevPage && (
          <link 
            rel="prev" 
            href={currentPage === 2 ? 'https://psicologiachillan.cl/blog' : `https://psicologiachillan.cl/blog?page=${currentPage - 1}`} 
          />
        )}
        {hasNextPage && (
          <link 
            rel="next" 
            href={`https://psicologiachillan.cl/blog?page=${currentPage + 1}`} 
          />
        )}
      </Head>
      
      <div className="flex justify-center items-center gap-2 mt-12">
      {/* Botón Anterior */}
      {hasPrevPage ? (
        <Link
          href={currentPage === 2 ? '/blog' : `/blog?page=${currentPage - 1}`}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 transition-colors duration-200 animate-hover-scale"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Anterior</span>
        </Link>
      ) : (
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed">
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Anterior</span>
        </div>
      )}

      {/* Números de página */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span 
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-gray-400"
              >
                ...
              </span>
            )
          }

          const pageNumber = page as number
          const isActive = pageNumber === currentPage

          return (
            <Link
              key={pageNumber}
              href={pageNumber === 1 ? '/blog' : `/blog?page=${pageNumber}`}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 animate-hover-scale ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600'
              }`}
            >
              {pageNumber}
            </Link>
          )
        })}
      </div>

      {/* Botón Siguiente */}
      {hasNextPage ? (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 transition-colors duration-200 animate-hover-scale"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed">
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="h-4 w-4" />
        </div>
      )}
      </div>
    </>
  )
}

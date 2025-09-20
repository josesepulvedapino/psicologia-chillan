"use client"

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
  url?: string
  className?: string
  children?: React.ReactNode
}

export function ShareButton({ title, url, className = "", children }: ShareButtonProps) {
  const handleShare = async () => {
    const shareUrl = url || window.location.href
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Artículo de psicología: ${title}`,
          url: shareUrl,
        })
      } catch (error) {
        // Usuario canceló el compartir
        console.log('Compartir cancelado')
      }
    } else {
      // Fallback: copiar URL al portapapeles
      try {
        await navigator.clipboard.writeText(shareUrl)
        alert('URL copiada al portapapeles')
      } catch (error) {
        console.error('Error al copiar URL:', error)
      }
    }
  }

  return (
    <button 
      onClick={handleShare}
      className={`cursor-pointer ${className}`}
    >
      {children || (
        <>
          <Share2 className="h-4 w-4" />
          <span>Compartir</span>
        </>
      )}
    </button>
  )
}

"use client"

import { useEffect } from 'react'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Agregar clase al body para fallback CSS
    document.body.classList.add('studio-active')
    
    // Limpiar al desmontar
    return () => {
      document.body.classList.remove('studio-active')
    }
  }, [])

  return (
    <div className="studio-layout">
      {children}
    </div>
  )
}

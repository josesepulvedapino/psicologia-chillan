"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Declaración de tipos para Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', gaId, {
        page_path: pathname,
      })
    }
  }, [pathname, gaId])

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Hook para tracking de eventos
export function useAnalytics() {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  const trackFormSubmit = (formName: string) => {
    trackEvent('submit', 'form', formName)
  }

  const trackButtonClick = (buttonName: string) => {
    trackEvent('click', 'button', buttonName)
  }

  const trackSectionView = (sectionName: string) => {
    trackEvent('view', 'section', sectionName)
  }

  return {
    trackEvent,
    trackFormSubmit,
    trackButtonClick,
    trackSectionView,
  }
}

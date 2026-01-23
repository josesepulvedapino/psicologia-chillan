"use client"

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPContextType {
  gsap: typeof gsap
  ScrollTrigger: typeof ScrollTrigger
}

const GSAPContext = createContext<GSAPContextType | null>(null)

export function useGSAP() {
  const context = useContext(GSAPContext)
  if (!context) {
    throw new Error("useGSAP must be used within a GSAPProvider")
  }
  return context
}

interface GSAPProviderProps {
  children: ReactNode
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    // Global GSAP configuration
    gsap.config({
      nullTargetWarn: false,
    })

    // Set default ease
    gsap.defaults({
      ease: "power3.out",
      duration: 1,
    })

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <GSAPContext.Provider value={{ gsap, ScrollTrigger }}>
      {children}
    </GSAPContext.Provider>
  )
}

// Custom hook for scroll-triggered animations
export function useScrollAnimation(
  ref: React.RefObject<HTMLElement | null>,
  animation: gsap.TweenVars,
  triggerOptions?: ScrollTrigger.Vars
) {
  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        ...animation,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          ...triggerOptions,
        },
      })
    })

    return () => ctx.revert()
  }, [ref, animation, triggerOptions])
}

// Stagger animation hook for lists
export function useStaggerAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  itemSelector: string,
  animation: gsap.TweenVars,
  stagger: number = 0.1
) {
  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(itemSelector, {
        ...animation,
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, itemSelector, animation, stagger])
}

// Text reveal animation
export function useSplitTextAnimation(
  ref: React.RefObject<HTMLElement | null>,
  delay: number = 0
) {
  useEffect(() => {
    if (!ref.current) return

    const text = ref.current
    const chars = text.textContent?.split("") || []

    text.innerHTML = chars
      .map((char) =>
        `<span class="inline-block" style="opacity: 0; transform: translateY(20px)">${char === " " ? "&nbsp;" : char}</span>`
      )
      .join("")

    const ctx = gsap.context(() => {
      gsap.to(text.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        delay,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      })
    })

    return () => ctx.revert()
  }, [ref, delay])
}

// Parallax effect hook
export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  speed: number = 0.5
) {
  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [ref, speed])
}

// Magnetic button effect
export function useMagneticEffect(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const strength = 0.5

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      })
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [ref])
}

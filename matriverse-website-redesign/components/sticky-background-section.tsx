"use client"

import type React from "react"
import Image from "next/image"

interface StickyBackgroundSectionProps {
  imageUrl: string
  imageAlt: string
  children: React.ReactNode
  overlayOpacity?: number
  minHeight?: string
}

export function StickyBackgroundSection({
  imageUrl,
  imageAlt,
  children,
  overlayOpacity = 0.7,
  minHeight = "100vh",
}: StickyBackgroundSectionProps) {
  return (
    <section
      className="relative"
      style={{
        clipPath: "inset(0 0 0 0)",
      }}
    >
      {/* Fixed background image - stays in place while content scrolls */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background" style={{ opacity: overlayOpacity }} />
      </div>

      {/* Scrollable content */}
      <div className="relative" style={{ minHeight }}>
        {children}
      </div>
    </section>
  )
}

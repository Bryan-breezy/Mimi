"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface ParallaxSectionProps {
  imageUrl: string
  imageAlt: string
  children: React.ReactNode
  overlayOpacity?: number
  height?: string
  imageQuery?: string
}

export function ParallaxSection({
  imageUrl,
  imageAlt,
  children,
  overlayOpacity = 0.7,
  height = "min-h-screen",
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div className="absolute inset-0 w-full h-[130%]" style={{ y }}>
        <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background" style={{ opacity: overlayOpacity }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </section>
  )
}

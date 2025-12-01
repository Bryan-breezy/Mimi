"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { StickyBackgroundSection } from "./sticky-background-section"
import { Heart } from "lucide-react"

export function CtaParallax() {
  return (
    <StickyBackgroundSection
      imageUrl="/african-women-hands-together-unity-sisterhood-warm.jpg"
      imageAlt="African women unity"
      overlayOpacity={0.8}
    >
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Join The Movement
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Rise With Us, Lead Together
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Become part of a transformative community where African women support, empower, and uplift each other
              toward collective liberation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium w-full sm:w-auto px-8"
              >
                <Link href="#contact">Join The Matriverse</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary w-full sm:w-auto px-8 bg-transparent"
              >
                <Link href="#donate" className="inline-flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Support Our Mission
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </StickyBackgroundSection>
  )
}

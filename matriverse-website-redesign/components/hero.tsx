"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { StickyBackgroundSection } from "./sticky-background-section"

export function Hero() {
  return (
    <StickyBackgroundSection
      imageUrl="/elegant-african-women-silhouettes-against-sunset-g.jpg"
      imageAlt="African women silhouettes"
      overlayOpacity={0.65}
      minHeight="150vh"
    >
      {/* First viewport - main hero content */}
      <div className="min-h-screen flex items-center justify-center pt-16 relative">
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">
                100+ Women Across The Continent
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              <span className="text-balance">Welcome To The</span>
              <br />
              <span className="text-primary">Matriverse</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-xl sm:text-2xl md:text-3xl text-primary/90 italic mb-8"
            >
              Rooted In Her, Rising For All.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              A sacred space for African Women to reconnect with their roots, rise in their power, and lead together
              toward collective liberation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium w-full sm:w-auto px-8"
              >
                <Link href="#about">Discover Our Mission</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary w-full sm:w-auto px-8 bg-transparent"
              >
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground max-w-3xl mx-auto leading-relaxed">
            "We are the daughters of the women who <span className="text-primary">refused to be silenced</span>."
          </p>
        </motion.div>
      </div>
    </StickyBackgroundSection>
  )
}

"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Heart, BookOpen, Users, Zap, Brain, Wallet, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: Zap,
    title: "Liberation",
    description: "Breaking free from societal constraints and embracing authentic self-expression.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Continuous learning and knowledge sharing to empower minds and elevate communities.",
  },
  {
    icon: Users,
    title: "Sisterhood",
    description: "Building bonds of support, trust, and collective strength among African women.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "Nurturing confidence and capability to take action and lead with purpose.",
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Prioritizing emotional wellbeing and creating safe spaces for healing.",
  },
  {
    icon: Wallet,
    title: "Financial Freedom",
    description: "Economic independence through financial literacy and entrepreneurship.",
  },
  {
    icon: Sparkles,
    title: "Spirituality",
    description: "Honoring ancestral wisdom and nurturing the spirit through cultural connection.",
  },
]

export function Pillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)
  const [dragStart, setDragStart] = useState(0)

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(4)
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.ceil(pillars.length / itemsPerView) - 1

  // Swipe handlers
  const handleDragStart = (e: any) => {
    setDragStart(e.clientX || e.touches[0].clientX)
  }

  const handleDragEnd = (e: any) => {
    const dragEnd = e.clientX || e.changedTouches[0].clientX
    const dragDistance = dragStart - dragEnd

    // Minimum drag distance to trigger slide change
    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0 && currentIndex < maxIndex) {
        // Swipe left - next slide
        setCurrentIndex(prev => prev + 1)
      } else if (dragDistance < 0 && currentIndex > 0) {
        // Swipe right - previous slide
        setCurrentIndex(prev => prev - 1)
      }
    }
  }

  // Auto-advance for mobile
  useEffect(() => {
    if (itemsPerView === 1) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => prev === maxIndex ? 0 : prev + 1)
      }, 4000) // Change slide every 4 seconds

      return () => clearInterval(interval)
    }
  }, [currentIndex, maxIndex, itemsPerView])

  return (
    <section id="pillars" className="py-16 lg:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-3 lg:mb-4 block">
            Our Foundation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6 text-balance">
            Seven Celestial Pillars
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            The Matriverse is built upon seven interconnected pillars that guide our community toward transformation,
            equality, and abundance.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Slider with swipe support */}
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            <motion.div
              className="flex gap-4 lg:gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 group p-4 sm:p-5 lg:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  style={{ 
                    width: `calc((100% - ${(itemsPerView - 1) * 16}px) / ${itemsPerView})`,
                    minHeight: itemsPerView === 1 ? '280px' : 'auto'
                  }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile-friendly dots indicator */}
          {itemsPerView === 1 && (
            <div className="flex justify-center mt-6 lg:mt-8 gap-1.5 lg:gap-2">
              {pillars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-4 lg:w-6' : 'bg-border'
                  }`}
                  aria-label={`Go to pillar ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Desktop dots for multi-item view */}
          {itemsPerView > 1 && maxIndex > 0 && (
            <div className="flex justify-center mt-6 lg:mt-8 gap-1.5 lg:gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-4 lg:w-6' : 'bg-border'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Swipe hint for mobile */}
          {itemsPerView === 1 && (
            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">
                Swipe or tap dots to navigate
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
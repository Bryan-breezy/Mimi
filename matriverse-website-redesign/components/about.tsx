"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative" ref={ref}>
      {/* PERSISTENT BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative h-full w-full"
        >
          <Image
            src="/group-of-joyful-african-women-celebrating-together.jpg"
            alt="African women celebrating sisterhood"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75" />
        </motion.div>
      </div>

      {/* SCROLLING CONTENT */}
      <div className="relative z-10 min-h-screen">
        {/* First screen - Content centered */}
        <div className="h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-primary text-sm sm:text-base font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6 block">
                Who We Are
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight sm:leading-[1.1]">
                A Sacred Space for <span className="text-primary">African Women</span> To Reconnect, Rise, and Lead.
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                <p className="text-pretty">
                  The Matriverse is a digital matriarchal universe. A feminist community built around seven celestial
                  pillars: Liberation, Education, Sisterhood, Empowerment, Mental Health, Financial Freedom, and
                  Spirituality.
                </p>
                <p className="text-pretty">
                  It is a space where women connect, learn, and lead through discussions, resources, and events that
                  inspire transformation, equality, and abundance.
                </p>
              </div>
              
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 sm:px-8 text-sm sm:text-base"
                >
                  <Link href="/ubuntu">Read more</Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-6 sm:px-8 text-sm sm:text-base backdrop-blur-sm"
                >
                  <Link href="/join">Join the community</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
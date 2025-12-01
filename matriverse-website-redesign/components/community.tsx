"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Quote } from "lucide-react"

const stats = [
  { number: "100+", label: "Active Members" },
  { number: "7", label: "African Countries" },
  { number: "50+", label: "Events Hosted" },
  { number: "15+", label: "Partnerships" },
]

const testimonials = [
  {
    quote:
      "The Matriverse gave me a sisterhood I didn't know I needed. Finding women who understand my journey has been transformative.",
    author: "Amara O.",
    role: "Community Member",
    image: "/african-woman-portrait-professional-headshot.jpg",
  },
  {
    quote:
      "Through Kora Hub, I gained skills and confidence that helped me launch my own business. The support here is unmatched.",
    author: "Fatima K.",
    role: "Entrepreneur",
    image: "/african-woman-entrepreneur-portrait-headshot.jpg",
  },
]

export function Community() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="community" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Voices of the Matriverse
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Stories of Transformation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contact">Join Our Community</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

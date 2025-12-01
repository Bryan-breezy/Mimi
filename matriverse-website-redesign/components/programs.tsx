"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { StickyBackgroundSection } from "./sticky-background-section"
import Link from "next/link"

const programs = [
  {
    id: "ubuntu",
    title: "Ubuntu",
    subtitle: "Community Circles",
    description:
      "Weekly discussion circles where women share experiences, support each other, and build lasting connections rooted in African philosophy of togetherness.",
    image: "/african-women-in-community-circle-discussion-ubunt.jpg",
    color: "from-amber-500/20",
    href: "/ubuntu"
  },
  {
    id: "kora-hub",
    title: "Kora Hub",
    subtitle: "Learning & Development",
    description:
      "Workshops, masterclasses, and skill-building sessions led by accomplished African women in various fields—from entrepreneurship to wellness.",
    image: "/african-women-workshop-learning-professional-devel.jpg",
    color: "from-emerald-500/20",
    href: "/kora-hub"
  },
  {
    id: "binti",
    title: "Binti",
    subtitle: "Youth Mentorship",
    description:
      "Mentorship program connecting young African girls with successful women leaders, fostering the next generation of change-makers.",
    image: "/african-women-mentoring-young-girls-youth-empowerm.jpg",
    color: "from-rose-500/20",
    href: "/binti"
  },
]

export function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="programs" className="bg-card" ref={ref}>
      {/* Header */}
      <div className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Our Programs</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pathways to Empowerment
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Discover transformative programs designed to nurture growth, connection, and leadership in African women
            across the continent.
          </p>
        </motion.div>
      </div>

      {programs.map((program, index) => (
        <StickyBackgroundSection
          key={program.id}
          imageUrl={program.image}
          imageAlt={program.title}
          overlayOpacity={0.65}
        >
          <Link href={program.href} className="block min-h-[80vh]">
            <div className="min-h-[80vh] flex items-center cursor-pointer group">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`max-w-xl ${index % 2 === 1 ? "ml-auto text-right" : ""} group-hover:scale-[1.02] transition-transform duration-300`}
                >
                  <span className="text-primary/70 text-sm font-medium tracking-widest uppercase mb-2 block">
                    {program.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                    {program.description}
                  </p>
                  <Button
                    variant="outline"
                    className={`group border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary bg-transparent ${
                      index % 2 === 1 ? "flex-row-reverse" : ""
                    }`}
                  >
                    {index % 2 === 1 && (
                      <ArrowRight className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform rotate-180" />
                    )}
                    Learn More
                    {index % 2 === 0 && (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </motion.div>
              </div>
            </div>
          </Link>
        </StickyBackgroundSection>
      ))}
    </section>
  )
}
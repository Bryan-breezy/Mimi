"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyBackgroundSection } from "@/components/sticky-background-section"
import { Pillars } from "@/components/pillars"
import { Users, Target, Eye, Sparkles, Heart, Zap, Linkedin, Twitter } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

// Define interface before usage
interface TeamMember {
  name: string
  title: string
  image: string
  description: string
  social?: {
    linkedin?: string
    twitter?: string
  }
}

export default function AboutPage() {
  const contentRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const isContentInView = useInView(contentRef, { once: true, margin: "100px 0px 0px 0px" })
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  // Optimized animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const values = [
    { 
      icon: Users, 
      title: "Sisterhood", 
      desc: "Building unity, trust, and unwavering support among women across the diaspora",
      color: "from-rose-500/20 to-pink-500/20"
    },
    { 
      icon: Sparkles, 
      title: "Empowerment", 
      desc: "Cultivating confidence, capability, and collective growth through shared knowledge",
      color: "from-amber-500/20 to-orange-500/20"
    },
    { 
      icon: Target, 
      title: "Liberation", 
      desc: "Freedom from patriarchal conditioning and limiting beliefs that hold us back",
      color: "from-purple-500/20 to-violet-500/20"
    },
    { 
      icon: Eye, 
      title: "Wisdom", 
      desc: "Honoring ancestral knowledge while creating new pathways for future generations",
      color: "from-blue-500/20 to-cyan-500/20"
    },
  ]

  const team: TeamMember[] = [
    {
      name: "Alexis Ngunyi",
      title: "Founder & CEO",
      image: "https://matriverse.co.ke/wp-content/uploads/2025/10/Alexis-profile-768x1052.jpeg",
      description:
        "Holds the overarching vision and direction of The Matriverse, guiding strategy, partnerships, and brand expansion while embodying the mission to birth a modern matriarchy.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Bustani Daisy",
      title: "Managing Director",
      image: "https://matriverse.co.ke/wp-content/uploads/2025/10/Bustani-Daisy-image-profile-747x1024.jpeg",
      description:
        "Serves as the CEO's strategic mirror and anchor and ensures daily operations, projects, and teams run smoothly. Bridges the gap between vision and execution while supporting all department leads.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Winston Maruki",
      title: "Chief Experience Curator",
      image: "https://matriverse.co.ke/wp-content/uploads/2025/10/Winston-768x1052.jpg",
      description:
        "Leads the vision and designs all community events, retreats, and experiences. Ensures every experience embodies sisterhood, empowerment, and purpose.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Harriet K.",
      title: "Chief Technical Officer",
      image: "https://matriverse.co.ke/wp-content/uploads/2025/10/Harriet-768x1052.jpg",
      description:
        "'Queen of the Cloud.' Oversees all digital systems, platforms, and innovations that power The Matriverse online, weaving technology into a living network that unites women worldwide.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Lavin A",
      title: "Chief Operations.",
      image: "https://matriverse.co.ke/wp-content/uploads/2025/10/Lavin.jpg",
      description:
      "Guides the heartbeat of the Matriverse. Systems, workflows, and team flow, ensuring structure serves creativity, accountability fuels purpose, and every moving part aligns with the larger vision.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Macharia C.",
      title: "Chief Financial Officer..",
      image: "https://matriverse.co.ke/wp-content/uploads/2025/10/Carol.jpg",
      description:
      "Guardian of the Matriverse’s financial flow. Finances, stipends, contracts, and budgeting  ensuring resources flow sustainably and transparently in service of the Matriverse vision.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <StickyBackgroundSection
        imageUrl="/hello.jpg"
        imageAlt="African women community gathering and sharing stories"
        minHeight="100vh"
        overlayOpacity={0.5}
      >
        <div className="flex flex-col items-center justify-center text-center px-4 min-h-[100vh]">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-5xl mx-auto"
          >
            
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground text-balance leading-[1.1] mb-6 md:mb-8"
            >
              A Sacred Space for African Women to{" "}
              <span className="text-primary italic">Reconnect</span>,{" "}
              <span className="text-primary italic">Rise</span>, and{" "}
              <span className="text-primary italic">Lead</span> Together
            </motion.h1>          

            <motion.div
              variants={fadeInUp}
              className="mt-12 md:mt-16"
            >
            </motion.div>
          </motion.div>
        </div>
      </StickyBackgroundSection>

      {/* About Content  */}
      <section ref={parallaxRef} className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden -z-10">
          <motion.div 
            className="relative h-full w-full"
            style={{ scale: imageScale }}
          >
            <motion.div style={{ opacity: imageOpacity }}>
              <Image
                src="/african-women-laughing-together-sisterhood.jpg"
                alt="African women laughing together in community, showing joy and sisterhood"
                fill
                className="object-cover"
                priority={false}
                sizes="50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/75" />
          </motion.div>
        </div>

        <div className="relative">
          {/* Spacer to push content down initially */}
          <div className="h-[10vh]" />
          
          {/* Content that scrolls up */}
          <div className="pb-32" ref={contentRef}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-1px", amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto p-8 sm:p-10 md:p-12 lg:p-16 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
            >
              <div className="space-y-8 md:space-y-10 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="border-l-4 border-primary pl-6"
                >
                  <p className="text-xl md:text-2xl leading-relaxed font-light">
                    Our story starts way back, when our Founder Alexis Ngunyi, 
                    started sharing messages of empowerment on TikTok.
                  </p>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-lg md:text-xl leading-relaxed text-white/90"
                >
                  <span className="font-semibold text-primary">The Matriverse</span> was born from a vision. 
                  A calling to reawaken <span className="font-semibold text-primary">the divine feminine power</span> within women and rebuild the world 
                  through a matriarchal lens. 
                  It began when our founder, <span className="font-semibold text-primary">Alexis Ngunyi</span> , 
                  started sharing messages of <span className="font-semibold text-primary">women's empowerment</span> and <span className="font-semibold text-primary">feminist awakening</span> on TikTok, 
                  urging women to decenter patriarchy, heal their conditioning, 
                  and reclaim their place as creators of life, legacy, and liberation.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-lg md:text-xl leading-relaxed text-white/90"
                >
                  What began as one woman's expression soon became a collective movement. Those conversations blossomed into a thriving <span className="font-semibold text-primary">Pan-African</span> WhatsApp community called <span className="font-semibold text-primary">Her Queendom</span>, where women gather to rise together, unlearn patriarchal beliefs, lead with purpose, and love themselves back into wholeness.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg md:text-xl leading-relaxed font-medium text-white"
                >
                  From that sisterhood, <span className="font-semibold text-primary">The Matriverse</span> emerged—a digital ecosystem reimagining power, leadership, and liberation through the feminine. 
                  Today, it stands as both a <span className="font-semibold text-primary">feminist movement</span> and a mirror of transformation, reflecting the truth that when one woman rises in her power, she opens the door for millions more to do the same.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg md:text-xl leading-relaxed font-medium text-white"
                >
                    Our <span className="font-semibold text-primary">vision</span> is bold yet simple: to make matriarchy mainstream. 
                    To build a world where feminine power is not feared, but foundational. 
                    A world guided by <span className="font-semibold text-primary">compassion, wisdom, balance, 
                    and creation</span> rather than domination or control.
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-background py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm tracking-wider uppercase font-medium">
                  Meet Our Team
                </span>
              </span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
              The Visionaries Behind The Matriverse
            </h2>
            <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A diverse team of passionate leaders dedicated to creating spaces where African women can reconnect, rise, and lead together.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12">
            {team.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-secondary/40 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/30 h-full flex flex-col">
                  
                  {/* Image Container - Fixed responsive height */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {person.social?.linkedin && (
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                          <Linkedin className="w-4 h-4 text-foreground" />
                        </button>
                      )}
                      {person.social?.twitter && (
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                          <Twitter className="w-4 h-4 text-foreground" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {person.name}
                      </h3>
                      
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-primary text-sm font-medium tracking-wide">
                          {person.title}
                        </span>
                      </div>
                      
                      <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                        {person.description}
                      </p>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="mt-6 pt-4 border-t border-border/30">
                      <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center mt-16 md:mt-20"
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Ready to Join Our Movement?
              </h3>
              <p className="text-foreground/70 text-lg mb-6 max-w-2xl mx-auto">
                Become part of a growing community of African women redefining leadership and creating lasting impact.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300 font-medium">
                <Sparkles className="w-5 h-5" />
                Join The Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-b from-background via-secondary/20 to-background py-16 md:py-24 lg:py-32 xl:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 md:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span className="text-primary text-xs md:text-sm tracking-wider uppercase font-medium">
                  What Guides Us
                </span>
              </span>
            </motion.div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 md:mb-6 text-balance leading-tight">
              Our Core Values
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
              These principles form the foundation of everything we do at The Matriverse
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-secondary/40 to-secondary/20 hover:from-secondary/60 hover:to-secondary/40 border border-border/30 hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-xl sm:hover:shadow-2xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl text-foreground mb-3 sm:mb-4 text-center group-hover:text-primary transition-colors duration-300 leading-tight">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose group-hover:text-foreground/90 transition-colors duration-300 text-center">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Optional: Add a subtle decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center mt-12 md:mt-16 lg:mt-20"
          >
            <div className="inline-flex items-center gap-3 text-foreground/40">
              <div className="w-8 h-px bg-current"></div>
              <Sparkles className="w-4 h-4" />
              <div className="w-8 h-px bg-current"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
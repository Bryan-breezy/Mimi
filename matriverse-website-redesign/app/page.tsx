import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Pillars } from "@/components/pillars"
import { Programs } from "@/components/programs"
import { CtaParallax } from "@/components/cta-parallax"
import { Community } from "@/components/community"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Pillars />
      <Programs />
      <CtaParallax />
      <Community />
      <Contact />
      <Footer />
    </main>
  )
}

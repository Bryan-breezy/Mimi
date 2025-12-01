import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyBackgroundSection } from "@/components/sticky-background-section"
import Link from "next/link"
import { Users, MessageCircle, Calendar, BookOpen, Heart,Eye, ArrowRight } from "lucide-react"

export default function UbuntuPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <StickyBackgroundSection
        imageUrl="/african-women-circle-discussion-ubuntu-community.jpg"
        imageAlt="African women sitting in a circle sharing stories and connecting in sisterhood"
        minHeight="80vh"
        overlayOpacity={0.3}
      >
        <div className="flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 px-4 min-h-[80vh]">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground mb-6 md:mb-8 leading-[0.9]">
            Ubuntu
          </h1>

          <div className="max-w-2xl mx-auto">
            <p className="text-foreground/90 text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-loose text-balance mb-6 font-light">
              <span className="italic text-primary">"I am because we are"</span> — A sacred sisterhood circle for deep connection, healing, and collective growth.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <a 
              href="https://forms.gle/kj157GhjEgd99Lv59" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              <Users className="w-5 h-5" />
              Writers
            </a>
            <a 
              href="https://forms.gle/kj157GhjEgd99Lv59" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-foreground border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 font-medium"
            >
              <Eye className="w-5 h-5" />
              Book Club
            </a>           
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-foreground/50">
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <div className="w-px h-8 bg-foreground/30"></div>
            </div>
          </div>
        </div>
      </StickyBackgroundSection>

      {/* What is Ubuntu */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">What is Ubuntu?</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
                A Philosophy of Interconnected Humanity
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p className="text-lg leading-relaxed">
                  Ubuntu is an African philosophy that emphasizes our shared humanity and interconnectedness. At The
                  Matriverse, Ubuntu is our flagship community program where women come together in sacred circles of
                  sisterhood.
                </p>
                <p className="text-lg leading-relaxed">
                  Through weekly gatherings, facilitated discussions, and shared experiences, Ubuntu members build deep,
                  meaningful connections that transcend geographical boundaries and life circumstances.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/african-women-hands-together-unity-circle.jpg"
                  alt="Women in unity circle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Program Features</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">What You'll Experience</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: "Weekly Circles",
                desc: "Safe spaces for sharing, listening, and growing together with your sisters.",
              },
              {
                icon: Calendar,
                title: "Monthly Events",
                desc: "Special gatherings, workshops, and celebrations that deepen our bonds.",
              },
              {
                icon: BookOpen,
                title: "Resource Library",
                desc: "Access to curated content on healing, growth, and empowerment.",
              },
              {
                icon: Users,
                title: "Sister Matching",
                desc: "Connect with accountability partners who understand your journey.",
              },
              {
                icon: Heart,
                title: "Wellness Support",
                desc: "Mental health resources and peer support when you need it most.",
              },
              {
                icon: ArrowRight,
                title: "Leadership Paths",
                desc: "Opportunities to facilitate and lead within the community.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <StickyBackgroundSection imageUrl="/african-women-embracing-friendship-sunset.jpg" imageAlt="Women embracing" minHeight="60vh">
        <div className="max-w-3xl mx-auto text-center px-4">
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground italic mb-6">
            "Ubuntu taught me that my struggles are not mine alone to carry. In this sisterhood, I found my voice, my
            strength, and my purpose."
          </blockquote>
          <p className="text-primary font-medium">— Amara, Ubuntu Member since 2023</p>
        </div>
      </StickyBackgroundSection>

      {/* CTA */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Ready to Join the Circle?</h2>
          <p className="text-foreground/60 max-w-xl mx-auto mb-8">
            Become part of a community that celebrates, uplifts, and empowers African women across the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
            >
              Join Ubuntu
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground hover:bg-secondary/80 px-8 py-4 rounded-full font-medium transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

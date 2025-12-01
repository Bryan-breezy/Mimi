import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyBackgroundSection } from "@/components/sticky-background-section"
import Link from "next/link"
import { Sparkles, BookOpen, Heart, Shield, Users, Star, ArrowRight } from "lucide-react"

export default function BintiPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <StickyBackgroundSection imageUrl="/young-african-girls-learning-education-empowerment.jpg" imageAlt="Young African girls" minHeight="80vh">
        <div className="flex flex-col items-center justify-center text-center px-4 pt-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 pt-12">Youth Empowerment</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-6">Binti</h1>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl text-balance">
            "Daughter" in Swahili — Nurturing the next generation of African women leaders.
          </p>
        </div>
      </StickyBackgroundSection>

      {/* What is Binti */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">About Binti</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
                Investing in Our Future Leaders
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p className="text-lg leading-relaxed">
                  Binti is The Matriverse's youth program dedicated to empowering young African girls aged 13-21. We
                  believe that investing in our daughters today creates the leaders, innovators, and changemakers of
                  tomorrow.
                </p>
                <p className="text-lg leading-relaxed">
                  Through mentorship, life skills training, and safe spaces for growth, Binti helps young women navigate
                  the challenges of adolescence while building confidence, resilience, and purpose.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="/african-teenage-girl-confident-smiling-portrait.jpg" alt="Young African girl" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary/20 backdrop-blur-sm rounded-xl p-4 border border-primary/30">
                <p className="font-serif text-2xl text-primary">13-21</p>
                <p className="text-foreground/60 text-sm">Age Range</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Program Pillars</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Building Strong Foundations</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Education Support",
                desc: "Tutoring, study groups, and academic guidance to help Binti scholars excel.",
              },
              {
                icon: Heart,
                title: "Wellness & Self-Care",
                desc: "Mental health support, body positivity, and emotional intelligence training.",
              },
              {
                icon: Shield,
                title: "Safety & Rights",
                desc: "Education on personal safety, consent, and understanding their rights.",
              },
              {
                icon: Sparkles,
                title: "Identity & Culture",
                desc: "Exploring and celebrating African heritage, identity, and womanhood.",
              },
              {
                icon: Users,
                title: "Peer Community",
                desc: "Safe spaces to connect with girls who understand their experiences.",
              },
              {
                icon: Star,
                title: "Leadership Development",
                desc: "Opportunities to lead projects and develop their unique voice.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{pillar.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="/african-woman-mentoring-teenage-girl-guidance.jpg" alt="Mentorship moment" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Mentorship</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Every Girl Deserves a Guide</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Our Binti mentorship program pairs young women with experienced Ubuntu and Kora Hub members who serve as
                guides, role models, and advocates. Through one-on-one relationships, group sessions, and ongoing
                support, our mentees receive personalized guidance for their unique journeys.
              </p>
              <ul className="space-y-3">
                {[
                  "Monthly one-on-one meetings",
                  "Group mentorship circles",
                  "Career exploration sessions",
                  "Life skills workshops",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/60">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <StickyBackgroundSection
        imageUrl="/group-of-young-african-girls-smiling-together.jpg"
        imageAlt="Group of young African girls"
        minHeight="50vh"
      >
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Support Our Daughters</h2>
          <p className="text-foreground/70 mb-8">
            Help us empower the next generation of African women leaders. Whether through mentorship, donations, or
            partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
            >
              Donate to Binti
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground hover:bg-secondary/80 px-8 py-4 rounded-full font-medium transition-colors"
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </StickyBackgroundSection>

      <Footer />
    </main>
  )
}

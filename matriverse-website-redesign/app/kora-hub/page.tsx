import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyBackgroundSection } from "@/components/sticky-background-section"
import Link from "next/link"
import { Briefcase, BookOpen, Lightbulb, Users, TrendingUp, Award, ArrowRight } from "lucide-react"

export default function KoraHubPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <StickyBackgroundSection imageUrl="/african-women-professional-workspace-laptop-busine.jpg" imageAlt="Kora Hub workspace" minHeight="80vh">
        <div className="flex flex-col items-center justify-center text-center px-4 pt-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 pt-12">Professional Development</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-6">Kora Hub</h1>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl text-balance">
            Empowering African women with skills, resources, and networks for career and entrepreneurial success.
          </p>
        </div>
      </StickyBackgroundSection>

      {/* What is Kora Hub */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/african-woman-entrepreneur-confident-business-lead.jpg"
                  alt="African woman entrepreneur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Welcome to Kora Hub</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
                Your Launchpad for Professional Excellence
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p className="text-lg leading-relaxed">
                  Inspired by the groundbreaking <span className="text-primary">Dr. Sona Jobarteh</span>, 
                  the first woman from a griot family to master the sacred kora  
                  and the indomitable <span className="text-primary">Dr. Tererai Trent</span>, 
                  whose dream carried her from the dust roads of Zimbabwe to global recognition, 
                  <span className="italic text-primary">Kora Hub</span> stands as a living tribute to women who rise, rebuild, and reimagine.
                </p>
                <p className="text-lg leading-relaxed">
                  Both women remind us that <span className="text-primary">legacy is not confined to bloodline or circumstance</span>, 
                  it is shaped by courage, conviction, 
                  and the will to transform what was once forbidden into what is now possible. 
                  Through their music, their words, and their spirit, 
                  they echo the same truth: 
                  <span className="text-primary">when a woman remembers her power, the world remembers its rhythm.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">What Our Community Says.</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Here are the words of those who have walked with us, each one a reminder of the beauty that unfolds when we come together.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Ceci",
                desc: "For the longest of time, I’ve been searching for a community, a community of women who share the same interests, values and perspective as me but honestly, I found more than that in this community. I found a safe space to be comfortable and be understood. Learn new things and be understanding and to provide grace in a world that doesn’t provide it to women. The shift in mindset that I've had is that there are still good women out here because I've had bad experiences in friendships so it continues to give me hope  I want to thank @Lady Lexi for creating a safe space for women in Africa and BEYOND.",
                features: ["Digital Marketing", "Financial Literacy", "Leadership Skills"],
              },
              {
                icon: Briefcase,
                title: "Deity Anya",
                desc: "Being part of this community has been an empowering and transformative experience. The vision of the Matriverse, a matriarchal universe grounded in the strength, wisdom, and leadership of African women deeply resonates with me. As a West African woman, I believe our voices carry ancestral insight that is vital in shaping a new era of leadership and balance. This community has provided a sacred space to connect, reflect, and build together toward a future where feminine power is celebrated and restored.",
                features: ["Resume Building", "Interview Prep", "Salary Negotiation"],
              },
              {
                icon: Lightbulb,
                title: "Suzanne Nyawira",
                desc:"What l love about this community is the fact that we are women that have risen above the oppressive need to please men and are ok with being outcasts and the hated. I love that we believe in ourselves enough to know that we are sufficient on our own, a rare contrast to a lot of women l meet unfortunately. Here, we don’t shrink to fit the world’s comfort; we expand to redefine it. In the Matriverse, our connection, our sisterhood is a remembrance of who we truly are." ,
                features: ["Business Planning", "Funding Access", "Market Strategy"],
              },
              {
                icon: Users,
                title: "Linda Maina",
                desc: "I joined this community earlier this year to find like minded women after my deconstructing journey. It felt a bit lonely earlier on discovering that my life and experiences as a woman have been chosen for me. Since I joined this community my experiences have been validated, my voice as a woman is appreciated I'm reminded everyday that I have other women who see me and can offer the support and emotional fulfilment I've been seeking all along.",
                features: ["1-on-1 Mentoring", "Group Sessions", "Industry Insights"],
              },
              {
                icon: TrendingUp,
                title: "Success",
                desc: "This community has helped me, encouraged me, and opened my eyes to other women who think like I do. For a long time, I thought I was alone. Alone in my desire to achieve gender equality, to create a space where women feel safe and can also be themselves without fear. I’m deeply thankful for this community and how it has pushed me to challenge my own preconceived notions about how things are supposed to be. It has inspired me to learn more, to research before forming opinions, especially after some of the powerful conversations and debates we’ve had. This place truly feels like a sisterhood. I live in a highly conservative society where I can’t freely voice my opinions even among friends and family without being judged or silenced. But here, I can speak my truth without fear of being called crazy or ostracized. This community has become a safe haven where I can be honest, learn and grow.",
                features: ["Investment Basics", "Group Investing", "Wealth Building"],
              },
              {
                icon: Award,
                title: "Carisle Nyambura",
                desc: "The Matriverse, for me, is coming home. As someone who has been “othered” all my life either I’m too brilliant to be a woman, or too opinionated to be one, this space feels like the first place where I can simply be. I am everything I am and everything I’m not, and it’s all okay. It’s perfectly all right for me to settle into my space, into my being. What I love about this space is that we can talk to each other on a deeply human level. We can argue, challenge each other’s ideas, even those that may no longer serve the world we’re trying to build, and still come out holding each other with respect. That, for me, is authenticity: a space where I can truly feel seen. This is the kind of space I’ve been trying to build for so many years, but I had never found people who were aligned. I’m so grateful for this generation of my younger sisters, for the way we hold one another in the capacities we have. The Matriverse, for me, is truly coming home.",
                features: ["Executive Presence", "Public Speaking", "Strategic Thinking"],
              },
            ].map((program, i) => (
              <div
                key={i}
                className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:border-primary/30 transition-all group"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">{program.title}</h3>
                <p className="text-foreground/60 leading-relaxed mb-4">{program.desc}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <StickyBackgroundSection imageUrl="/african-women-networking-event-professional.jpg" imageAlt="Women networking" minHeight="50vh">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Unlock Your Potential</h2>
          <p className="text-foreground/70 mb-8">
            Join Kora Hub and access the resources, mentorship, and community you need to achieve your professional
            goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </StickyBackgroundSection>

      <Footer />
    </main>
  )
}

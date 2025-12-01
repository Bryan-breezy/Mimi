import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyBackgroundSection } from "@/components/sticky-background-section"
import { Heart, Users, BookOpen, Shield, Check } from "lucide-react"

const donationTiers = [
  {
    name: "Supporter",
    amount: "$25",
    description: "Help provide resources for community members",
    features: ["Monthly newsletter", "Name on supporter wall", "Tax-deductible receipt"],
  },
  {
    name: "Champion",
    amount: "$50",
    description: "Sponsor a Binti mentee for one month",
    features: [
      "All Supporter benefits",
      "Quarterly impact reports",
      "Exclusive updates",
      "Invitation to virtual events",
    ],
    popular: true,
  },
  {
    name: "Patron",
    amount: "$100",
    description: "Fund a workshop or community event",
    features: ["All Champion benefits", "Recognition in events", "Annual appreciation gift", "Direct impact stories"],
  },
  {
    name: "Visionary",
    amount: "$500",
    description: "Become a founding supporter of our programs",
    features: [
      "All Patron benefits",
      "Private donor briefings",
      "Named scholarship option",
      "Advisory council invitation",
    ],
  },
]

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <StickyBackgroundSection
        imageUrl="/african-women-holding-hands-unity-support.jpg"
        imageAlt="Women supporting each other"
        minHeight="60vh"
      >
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/40">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Support Our Mission</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Thank you for choosing to invest in The Matriverse.</h1>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl text-balance">
            Every contribution fuels the creation of a new world for conscious women.
            We’re deeply grateful for your intention to give. Our donation portals are currently being set up and will be live soon. Thank you for holding space with us as we grow this vision together.
          </p>
        </div>
      </StickyBackgroundSection>


      {/* Other Ways to Give */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Other Ways to Support</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Financial contributions aren't the only way to help. Here are other meaningful ways to support our
              mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Volunteer", desc: "Share your skills and time with our community programs." },
              { title: "Partner", desc: "Organizations can collaborate on initiatives and events." },
              { title: "Spread the Word", desc: "Follow, share, and amplify our message on social media." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-secondary/30 border border-border/30 text-center">
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

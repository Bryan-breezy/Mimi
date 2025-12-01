import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Contact Us</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Have questions about The Matriverse? Want to join our community or partner with us? We'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">Reach Out</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:hello@matriverse.co.ke"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        hello@matriverse.co.ke
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-foreground/60">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+254700000000" className="text-foreground/60 hover:text-primary transition-colors">
                        +254 700 000 000
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "https://instagram.com/matriverse", label: "Instagram" },
                    { icon: Twitter, href: "https://twitter.com/matriverse", label: "Twitter" },
                    { icon: Facebook, href: "https://facebook.com/matriverse", label: "Facebook" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-secondary/80 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
                <h3 className="font-serif text-xl text-foreground mb-3">Common Questions</h3>
                <p className="text-foreground/60 text-sm mb-4">
                  Looking for quick answers? Check out some of our most frequently asked questions.
                </p>
                <details className="group">
                  <summary className="cursor-pointer text-primary text-sm font-medium flex items-center gap-2">
                    How do I join The Matriverse?
                  </summary>
                  <p className="mt-2 text-foreground/60 text-sm pl-4">
                    Fill out the contact form or email us directly. We'll get back to you with membership information
                    within 48 hours.
                  </p>
                </details>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-border/30">
                <h2 className="font-serif text-2xl text-foreground mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

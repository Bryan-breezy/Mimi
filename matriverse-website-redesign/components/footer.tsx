import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Heart, Youtube, BookOpen } from "lucide-react"

const footerLinks = {
  programs: [
    { label: "Ubuntu", href: "#programs" },
    { label: "Kora Hub", href: "#programs" },
    { label: "Binti", href: "#programs" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Pillars", href: "#pillars" },
    { label: "Contact", href: "#contact" },
  ],
  support: [
    { label: "Donate", href: "#donate" },
    { label: "Volunteer", href: "#contact" },
    { label: "Partner With Us", href: "#contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582510575419", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/matriverse?igsh=MTE0d29uenN1ZjloMA==", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@thematriverse?si=1_mENIfXEAKQDipW", label: "Youtube" },
  { icon: BookOpen, href: "https://substack.com/@matriverse?utm_campaign=profile&utm_medium=profile-page", label: "Substack" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-primary">Matriverse</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Rooted In Her, Rising For All. A sacred space for African women to reconnect, rise, and lead together.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support Us</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Matriverse. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary fill-primary" /> for African Women
          </p>
        </div>
      </div>
    </footer>
  )
}

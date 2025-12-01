"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/ubuntu", label: "Ubuntu" },
  { href: "/kora-hub", label: "Kora Hub" },
  { href: "/binti", label: "Binti" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg"
            : "bg-gradient-to-b from-background/90 to-transparent",
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 group-hover:bg-primary/30 transition-colors">
                <span className="font-serif text-primary text-base md:text-lg font-bold">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-bold text-primary leading-none">Matriverse</span>
                <span className="hidden sm:block text-[10px] text-foreground/50 tracking-[0.2em] uppercase">
                  Empowering Women
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-secondary/40 backdrop-blur-sm rounded-full px-1.5 py-1.5 border border-border/30">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary/60",
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Desktop Donate Button */}
            <Link
              href="/donate"
              className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-secondary/60 border border-border/50 text-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/90 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-xs bg-background border-l border-border z-50 lg:hidden transition-transform duration-300 ease-out shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <span className="font-serif text-xl font-bold text-primary">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground hover:text-primary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:bg-secondary/50 active:bg-secondary",
                    )}
                  >
                    <span
                      className={cn("w-2 h-2 rounded-full", isActive ? "bg-primary-foreground" : "bg-primary/40")}
                    />
                    <span className="text-base font-medium">{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-border/50 space-y-3">
            <Link
              href="/donate"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3.5 rounded-xl font-medium text-base transition-colors"
            >
              <Heart className="w-5 h-5" />
              Support Our Mission
            </Link>
            <p className="text-center text-xs text-foreground/40">Empowering African Women Together</p>
          </div>
        </div>
      </div>
    </>
  )
}

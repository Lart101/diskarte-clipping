'use client'

import React, { useState, useEffect } from 'react'
import { Sun, Moon, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react'
import { whopTrack } from '@/lib/whop'

interface NavbarProps {
  onOpenBooking: () => void
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-card/85 backdrop-blur-xl border border-diskarte-gold/25 shadow-lg shadow-black/20'
            : 'bg-card/60 backdrop-blur-md border border-border/80'
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-diskarte-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img
              src="/diskarteClippingLogo.jpg"
              alt="Diskarte Clipping Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight flex items-center gap-1.5 text-foreground">
              Diskarte <span className="gold-gradient-text font-black">Clipping</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground -mt-1 hidden sm:block">
              Viral Distribution
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-foreground/[0.04] px-4 py-1.5 rounded-full border border-border/50 text-sm font-medium text-muted-foreground">
          <a href="#how-it-works" className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-foreground/[0.06] transition-colors">
            How It Works
          </a>
          <a href="#case-studies" className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-foreground/[0.06] transition-colors">
            Case Studies
          </a>
          <a href="#verticals" className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-foreground/[0.06] transition-colors">
            Verticals
          </a>
          <a href="#clippers" className="px-3.5 py-1.5 rounded-full text-diskarte-gold hover:text-diskarte-gold-light hover:bg-diskarte-gold/10 transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> For Clippers
          </a>
          <a href="#compare" className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-foreground/[0.06] transition-colors">
            Compare
          </a>
          <a href="#pricing" className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-foreground/[0.06] transition-colors">
            Scope
          </a>
          <a href="#faq" className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-foreground/[0.06] transition-colors">
            FAQ
          </a>
        </div>

        {/* Right Actions: Theme Toggle & Booking CTA */}
        <div className="flex items-center gap-2.5">
          {/* Shadcn Theme Switcher */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark/Light Mode"
            className="p-2.5 rounded-full border border-border/70 bg-card hover:bg-accent text-foreground transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-diskarte-gold transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-diskarte-blue transition-transform duration-300 -rotate-12 hover:rotate-0" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => { whopTrack('lead'); onOpenBooking() }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-diskarte-dark gold-gradient-bg shadow-md shadow-diskarte-gold/20 hover:shadow-lg hover:shadow-diskarte-gold/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-border text-foreground hover:bg-accent"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-3xl bg-card/95 backdrop-blur-2xl border border-diskarte-gold/20 shadow-2xl flex flex-col gap-3 animate-accordion-down">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl font-medium hover:bg-accent text-foreground transition-colors"
          >
            How It Works
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl font-medium hover:bg-accent text-foreground transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#verticals"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl font-medium hover:bg-accent text-foreground transition-colors"
          >
            Verticals
          </a>
          <a
            href="#clippers"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl font-semibold text-diskarte-gold bg-diskarte-gold/10 flex items-center justify-between"
          >
            <span>Join as a Clipper</span>
            <Sparkles className="w-4 h-4" />
          </a>
          <a
            href="#compare"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl font-medium hover:bg-accent text-foreground transition-colors"
          >
            Clipping vs. Paid Ads
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl font-medium hover:bg-accent text-foreground transition-colors"
          >
            Campaign Scope
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl font-medium hover:bg-accent text-foreground transition-colors"
          >
            FAQ
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false)
              whopTrack('lead')
              onOpenBooking()
            }}
            className="w-full mt-2 py-3 rounded-2xl font-bold text-sm text-diskarte-dark gold-gradient-bg shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Email Us (diskarteclipping@gmail.com)</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  )
}

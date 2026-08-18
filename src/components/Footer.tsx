'use client'

import React from 'react'
import { ArrowUpRight, Sparkles, Heart } from 'lucide-react'
import { whopTrack } from '@/lib/whop'

interface FooterProps {
  onOpenBooking: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="relative pt-16 pb-12 overflow-hidden border-t border-border/80 bg-card/60 backdrop-blur-md">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-diskarte-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glowing Bottom Call to Action Card */}
        <div className="mb-20 p-8 sm:p-14 rounded-3xl bg-card border-2 border-diskarte-gold/30 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-diskarte-gold/5 via-transparent to-diskarte-blue/5 pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-diskarte-gold/30 bg-diskarte-gold/10 text-diskarte-gold text-xs font-bold uppercase tracking-wider mb-4 z-10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Your Next Wave</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight max-w-3xl mb-4 z-10">
            Ready to Flood the Algorithm with <span className="gold-gradient-text">Millions of Verified Views?</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 z-10">
            Join visionary artists, top podcasters, and high-growth brands who dominate social feeds through the Diskarte Clipping engine.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto">
            <button
              onClick={() => { whopTrack('lead'); onOpenBooking() }}
              className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-base text-diskarte-dark gold-gradient-bg shadow-xl shadow-diskarte-gold/25 hover:shadow-2xl hover:shadow-diskarte-gold/45 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Us via Email</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href="https://whop.com/diskarte-clipping/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => whopTrack('submit_application')}
              className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm text-foreground bg-accent hover:bg-muted border border-border transition-colors flex items-center justify-center gap-2"
            >
              <span>Join as a Clipper on Whop</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Brand Columns & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/80">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-diskarte-gold/40 shadow-sm">
                <img
                  src="/diskarteClippingLogo.jpg"
                  alt="Diskarte Clipping Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-foreground">
                Diskarte <span className="gold-gradient-text">Clipping</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              The aspiring managed clipping agency turning long-form assets and music into culture-defining short-form momentum across TikTok, Instagram Reels, and YouTube Shorts.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-diskarte-gold">
              <span className="w-2 h-2 rounded-full bg-diskarte-gold animate-pulse" />
              <span>whop.com/diskarte-clipping</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-4">Agency</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#case-studies" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#verticals" className="hover:text-foreground transition-colors">Verticals</a></li>
              <li><a href="#compare" className="hover:text-foreground transition-colors">Clipping vs. Ads</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Campaign Scope</a></li>
            </ul>
          </div>

          {/* Clipper Hub */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-4">Clippers</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="https://whop.com/diskarte-clipping/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Join on Whop</a></li>
              <li><a href="https://whop.com/diskarte-clipping/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Active Bounties</a></li>
              <li><a href="https://whop.com/diskarte-clipping/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Whop Reviews</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">Clipper FAQ</a></li>
            </ul>
          </div>

          {/* Contact / Legal */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-4">Inquiries</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Direct Campaign Inquiries:
            </p>
            <a
              href="mailto:diskarteclipping@gmail.com"
              className="text-sm font-bold text-diskarte-gold hover:underline block mb-4"
            >
              diskarteclipping@gmail.com
            </a>
            <p className="text-xs text-muted-foreground">
              Custom campaign proposals within 24h.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Diskarte Clipping. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-diskarte-red fill-diskarte-red" />
            <span>and Filipino Creator Diskarte</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

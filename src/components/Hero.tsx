'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Star, ShieldCheck, Zap, Play } from 'lucide-react'
import { whopTrack } from '@/lib/whop'

interface HeroProps {
  onOpenBooking: () => void
}

const rotatingKeywords = ['CAMPAIGNS', 'MOMENTS', 'AUDIO HITS', 'TAKEOVERS']

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [keywordIndex, setKeywordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % rotatingKeywords.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Ambient Sunburst Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] sm:w-[50rem] sm:h-[50rem] bg-gradient-to-tr from-diskarte-gold/15 via-diskarte-blue/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Proof Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-diskarte-gold/30 bg-card/80 backdrop-blur-md shadow-sm mb-6 sm:mb-8 hover:border-diskarte-gold/60 transition-all duration-300">
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
              alt="Creator Avatar"
              className="w-6 h-6 rounded-full border-2 border-background object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
              alt="Creator Avatar"
              className="w-6 h-6 rounded-full border-2 border-background object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
              alt="Creator Avatar"
              className="w-6 h-6 rounded-full border-2 border-background object-cover"
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            The Aspiring Managed Clipping Agency
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-diskarte-gold animate-ping" />
        </div>

        {/* Dynamic Kinetic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[1.08] max-w-5xl mb-6">
          <span className="block">CLIPPING</span>
          <span className="inline-flex items-center gap-3 mt-1">
            <span
              key={rotatingKeywords[keywordIndex]}
              className="font-serif italic font-normal text-diskarte-gold inline-block transition-all duration-500 transform scale-100 opacity-100"
            >
              {rotatingKeywords[keywordIndex]}
            </span>
          </span>
          <span className="block font-black tracking-tight text-foreground/90">
            THAT MOVE CULTURE.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8 sm:mb-10 font-normal">
          The aspiring managed clipping agency built for explosive organic distribution across{' '}
          <strong className="text-foreground font-semibold">TikTok, Instagram Reels, and Shorts</strong>. Powered by a hungry network of vetted video clippers, 100% human submission reviews, and verified view delivery.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
          <button
            onClick={() => { whopTrack('lead'); onOpenBooking() }}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-diskarte-dark gold-gradient-bg shadow-xl shadow-diskarte-gold/25 hover:shadow-2xl hover:shadow-diskarte-gold/45 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Contact Us via Email</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-base text-foreground bg-card border border-border/80 hover:border-diskarte-gold/50 hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <Play className="w-4 h-4 text-diskarte-gold fill-diskarte-gold" />
            <span>See How It Works</span>
          </a>
        </div>

        {/* Social Proof Review Rating Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="flex text-diskarte-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-diskarte-gold text-diskarte-gold" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9 / 5.0</span>
            <span>from verified campaigns & clippers</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />

          <div className="flex items-center gap-1.5 text-diskarte-blue font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Human Reviewed Submissions</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />

          <div className="flex items-center gap-1.5 text-diskarte-gold font-medium">
            <Zap className="w-4 h-4" />
            <span>1–2 Day Rapid Campaign Launch</span>
          </div>
        </div>
      </div>
    </section>
  )
}

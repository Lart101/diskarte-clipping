'use client'

import React from 'react'
import { Music, Mic, Gamepad2, Rocket, Crown, ArrowUpRight } from 'lucide-react'
import { whopTrack } from '@/lib/whop'

interface VerticalsProps {
  onOpenBooking: () => void
}

const verticals = [
  {
    icon: Music,
    title: 'Music & Record Labels',
    badge: 'Trending Audio',
    description: 'Transform music stems and hook snippets into viral TikTok & Reels audio trends that shoot singles up Spotify & Apple Music streaming charts.',
    results: 'Avg. +25M Sound Uses & Streams',
    color: 'text-diskarte-gold',
    bg: 'bg-diskarte-gold/10 border-diskarte-gold/30',
  },
  {
    icon: Mic,
    title: 'Podcasts & Long-Form Shows',
    badge: 'Subscriber Funnel',
    description: 'Extract punchy 30-second revelations, debates, and stories from 2-hour episodes to flood feeds and pull viewers into full episodes.',
    results: 'Avg. +60K Full Episode Listeners',
    color: 'text-diskarte-blue',
    bg: 'bg-diskarte-blue/10 border-diskarte-blue/30',
  },
  {
    icon: Gamepad2,
    title: 'Gaming & Esports Creators',
    badge: 'Fandom Growth',
    description: 'Clip clutch plays, tournament highlights, and funny moments to build a loyal cult following across TikTok and YouTube Shorts.',
    results: 'Avg. +450K New Community Followers',
    color: 'text-diskarte-red',
    bg: 'bg-diskarte-red/10 border-diskarte-red/30',
  },
  {
    icon: Rocket,
    title: 'Startups, SaaS & Apps',
    badge: 'Organic Acquisition',
    description: 'Drive high-intent product demos, feature reveals, and problem-solving content that delivers direct app downloads and trial signups.',
    results: 'Avg. 3.8x Lower CAC vs. Meta Ads',
    color: 'text-diskarte-gold-light',
    bg: 'bg-diskarte-gold-light/10 border-diskarte-gold-light/30',
  },
  {
    icon: Crown,
    title: 'CEOs & Personal Brands',
    badge: 'Industry Omnipresence',
    description: 'Position yourself as an undeniable thought leader by transforming keynote talks, interviews, and insights into short-form authority.',
    results: '100% Native Feed Ubiquity',
    color: 'text-diskarte-blue',
    bg: 'bg-diskarte-blue/10 border-diskarte-blue/30',
  },
]

export const Verticals: React.FC<VerticalsProps> = ({ onOpenBooking }) => {
  return (
    <section id="verticals" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-diskarte-gold bg-diskarte-gold/10 px-4 py-1.5 rounded-full border border-diskarte-gold/30 mb-4">
          Industry Solutions
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-3xl">
          Engineered for <span className="gold-gradient-text">High-Growth Verticals</span>.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg">
          Whether you are launching a record, scaling a podcast, or marketing an app, our clipping engine adapts to your exact audience.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {verticals.map((v, idx) => {
          const Icon = v.icon
          return (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-card border border-border/80 hover:border-diskarte-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${v.bg} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent text-foreground border border-border">
                    {v.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-bold text-diskarte-gold">
                  {v.results}
                </span>
                <button
                  onClick={() => { whopTrack('lead'); onOpenBooking() }}
                  className="text-xs font-semibold text-foreground hover:text-diskarte-gold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Launch Campaign</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

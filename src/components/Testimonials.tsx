'use client'

import React, { useState } from 'react'
import { Star, Quote, CheckCircle2 } from 'lucide-react'
import { testimonialsData } from '../data/testimonialsData'

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'client' | 'clipper'>('all')

  const filtered = filter === 'all'
    ? testimonialsData
    : testimonialsData.filter(t => t.type === filter)

  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-diskarte-gold bg-diskarte-gold/10 px-4 py-1.5 rounded-full border border-diskarte-gold/30 mb-4">
          Proof & Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-3xl">
          Trusted by <span className="gold-gradient-text">Brands & Clippers</span> Alike.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg">
          See the impact of our managed clipping campaigns from both sides of the distribution engine.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-diskarte-gold text-diskarte-dark font-bold'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setFilter('client')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              filter === 'client'
                ? 'bg-diskarte-blue text-white font-bold'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            From Brand Clients
          </button>
          <button
            onClick={() => setFilter('clipper')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              filter === 'clipper'
                ? 'bg-diskarte-gold text-diskarte-dark font-bold'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            From Video Clippers
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-3xl bg-card border border-border/80 hover:border-diskarte-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
          >
            <div>
              {/* Top Tag & Stars */}
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-accent text-xs font-bold text-foreground border border-border flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-diskarte-gold" />
                  {item.tag}
                </span>

                <div className="flex text-diskarte-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-diskarte-gold text-diskarte-gold" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-diskarte-gold/20 mb-3" />
              <p className="text-foreground/90 font-medium text-base sm:text-lg leading-relaxed mb-6">
                "{item.quote}"
              </p>
            </div>

            {/* Author Bar & Verified Metric */}
            <div className="pt-6 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-diskarte-gold/40"
                />
                <div>
                  <h4 className="font-bold text-sm text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.role}, {item.company}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-diskarte-gold bg-diskarte-gold/10 px-2.5 py-1 rounded-lg border border-diskarte-gold/25 block">
                  {item.stats}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'

import React, { useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { showreelData, showreelCategories, ShowreelItem } from '../data/showreelData'

export const Showreel: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeItem, setActiveItem] = useState<ShowreelItem>(showreelData[0])
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const filteredItems = selectedCategory === 'all'
    ? showreelData
    : showreelData.filter(item => item.category === selectedCategory)

  return (
    <section id="case-studies" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-diskarte-gold/30 bg-diskarte-gold/10 text-diskarte-gold text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Whop Clipper Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Master The Formats. <span className="gold-gradient-text">Start Clipping on Whop.</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl text-base sm:text-lg">
            See the exact high-retention short-form hook formats we distribute. Join our community on Whop to access raw footage, claim live bounties, and get paid for verified views.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {showreelCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id)
                  const matches = cat.id === 'all' ? showreelData : showreelData.filter(i => i.category === cat.id)
                  if (matches.length > 0) setActiveItem(matches[0])
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-diskarte-gold text-diskarte-dark shadow-md shadow-diskarte-gold/25 scale-105'
                    : 'bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-diskarte-gold/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Showreel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Active Player Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-md aspect-[9/16] rounded-3xl overflow-hidden border-2 border-diskarte-gold/30 shadow-2xl shadow-black/40 bg-card group">
              {/* Media Image / Background Simulation */}
              <img
                src={activeItem.thumbnailUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none" />

              {/* Top Bar on Video: Platform & Verified Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-diskarte-gold animate-pulse" />
                  {activeItem.platform}
                </span>
                <span className="px-3 py-1 rounded-full bg-diskarte-gold/90 text-diskarte-dark text-xs font-extrabold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Whop Bounty
                </span>
              </div>

              {/* Center Play/Pause Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl cursor-pointer"
                  aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
                >
                  {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1 fill-white" />}
                </button>
              </div>

              {/* Bottom Info Card inside Player */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-2.5">
                <div className="p-4 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 text-white">
                  <div className="flex items-center justify-between text-xs font-semibold text-diskarte-gold mb-1">
                    <span>{activeItem.bountyType}</span>
                    <span className="font-bold text-white/90">{activeItem.views}</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg leading-snug line-clamp-2">
                    "{activeItem.hook}"
                  </h3>

                  {/* Direct Whop Button inside Player Card */}
                  <a
                    href="https://whop.com/diskarte-clipping/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full py-2.5 rounded-xl bg-diskarte-gold text-diskarte-dark font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-diskarte-gold-light transition-all"
                  >
                    <span>Clip This on Whop</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Audio Control Pill */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 hover:bg-black/80 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-diskarte-gold" />}
                    <span>{isMuted ? 'Muted' : 'Sound On'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span>Viral Hook Blueprints</span>
              </h3>
              <a
                href="https://whop.com/diskarte-clipping/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-diskarte-gold hover:underline flex items-center gap-1"
              >
                <span>Join Whop</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                  activeItem.id === item.id
                    ? 'bg-card border-diskarte-gold shadow-lg shadow-diskarte-gold/15 scale-[1.02]'
                    : 'bg-card/60 border-border/70 hover:border-diskarte-gold/40 hover:bg-accent'
                }`}
              >
                <div className="relative w-16 h-20 rounded-xl overflow-hidden shrink-0 border border-border">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span className="font-semibold text-diskarte-gold truncate">{item.bountyType}</span>
                    <span className="font-bold text-foreground ml-2">{item.platform}</span>
                  </div>
                  <h4 className="font-bold text-sm text-foreground leading-tight truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate mt-1">
                    Hook: <span className="text-foreground">"{item.hook}"</span>
                  </p>
                </div>
              </div>
            ))}

            {/* Big Join Whop Box in Sidebar */}
            <div className="mt-2 p-5 rounded-2xl bg-diskarte-gold/10 border border-diskarte-gold/30 text-center flex flex-col items-center">
              <h4 className="font-bold text-sm text-foreground mb-1">Ready to start earning per 1,000 views?</h4>
              <p className="text-xs text-muted-foreground mb-3">Join our community on Whop to access all raw editing footage & bounties.</p>
              <a
                href="https://whop.com/diskarte-clipping/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs text-diskarte-dark gold-gradient-bg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Join Whop Community (whop.com/diskarte-clipping/)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

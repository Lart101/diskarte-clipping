'use client'

import React from 'react'
import { Sparkles, DollarSign, Users, Award, ArrowUpRight, CheckCircle } from 'lucide-react'

export const ClipperPortal: React.FC = () => {
  return (
    <section id="clippers" className="py-20 md:py-28 relative overflow-hidden bg-foreground/[0.02] border-t border-border/60">
      {/* Background Ambient Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-diskarte-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Creator Value Prop */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-diskarte-gold/30 bg-diskarte-gold/10 text-diskarte-gold text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>For Video Editors & Clippers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
              Get Paid to Edit & Post. <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Zero Followers Needed.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Join thousands of video clippers earning performance-backed payouts from top music labels, podcasts, and global brands. All active campaign bounties, source files, guidelines, and direct payouts are managed exclusively through our verified Whop portal.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-diskarte-gold/10 text-diskarte-gold flex items-center justify-center shrink-0 mt-0.5">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">Set Rate Per 1K Views</h4>
                  <p className="text-xs text-muted-foreground">Guaranteed earnings for every verified 1,000 views you deliver.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-diskarte-blue/10 text-diskarte-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">No Follower Minimums</h4>
                  <p className="text-xs text-muted-foreground">Create a fresh account or use existing ones. Pure meritocracy.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-diskarte-red/10 text-diskarte-red flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">Top Brand Bounties</h4>
                  <p className="text-xs text-muted-foreground">Access exclusive source footage from famous artists & podcasters on Whop.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-diskarte-gold-light/10 text-diskarte-gold-light flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">Instant Direct Payouts</h4>
                  <p className="text-xs text-muted-foreground">Automated payout verification directly through our Whop dashboard.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://whop.com/diskarte-clipping/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-base text-diskarte-dark gold-gradient-bg shadow-lg shadow-diskarte-gold/25 hover:shadow-xl hover:shadow-diskarte-gold/45 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Join Our Whop & Start Earning</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="https://whop.com/diskarte-clipping/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full font-semibold text-sm text-foreground bg-card border border-border hover:bg-accent transition-colors"
              >
                View Whop Leaderboard & Reviews
              </a>
            </div>
          </div>

          {/* Right Column: Clipper Card Showcase */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-card border-2 border-diskarte-gold/30 shadow-2xl relative">
              <div className="flex items-center justify-between pb-5 border-b border-border mb-6">
                <div>
                  <h3 className="font-bold text-lg text-foreground">Whop Clipper Portal</h3>
                  <p className="text-xs text-muted-foreground">Live Bounties on whop.com/diskarte-clipping/</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Live on Whop
                </span>
              </div>

              {/* Sample Active Campaign Bounties */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-border/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-diskarte-gold uppercase tracking-wide">Music Bounty</span>
                    <h5 className="font-bold text-sm text-foreground">Metro Single Drop Campaign</h5>
                    <p className="text-xs text-muted-foreground">$20 - $35 per 100K Views</p>
                  </div>
                  <a
                    href="https://whop.com/diskarte-clipping/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3 py-1.5 rounded-full bg-diskarte-gold text-diskarte-dark hover:scale-105 transition-transform"
                  >
                    Claim on Whop
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-border/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-diskarte-blue uppercase tracking-wide">Podcast Highlight</span>
                    <h5 className="font-bold text-sm text-foreground">Hustle Mindset Ep. 44</h5>
                    <p className="text-xs text-muted-foreground">$25 per 100K Views</p>
                  </div>
                  <a
                    href="https://whop.com/diskarte-clipping/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3 py-1.5 rounded-full bg-diskarte-blue text-white hover:scale-105 transition-transform"
                  >
                    Claim on Whop
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-border/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-diskarte-red uppercase tracking-wide">Gaming Clips</span>
                    <h5 className="font-bold text-sm text-foreground">Aegis Esports League</h5>
                    <p className="text-xs text-muted-foreground">$15 - $30 per 100K Views</p>
                  </div>
                  <a
                    href="https://whop.com/diskarte-clipping/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3 py-1.5 rounded-full bg-diskarte-red text-white hover:scale-105 transition-transform"
                  >
                    Claim on Whop
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>⚡ Verified Whop Partner Portal</span>
                <span className="font-bold text-foreground">whop.com/diskarte-clipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

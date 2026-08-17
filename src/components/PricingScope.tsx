'use client'

import React from 'react'
import { Check, Mail, ShieldCheck, Zap, Layers, ArrowUpRight } from 'lucide-react'

interface PricingScopeProps {
  onOpenBooking: () => void
}

const deliverables = [
  'Dedicated Campaign Strategist & Creator Coordinator',
  'Source Video & Audio Hook Extraction',
  '1–2 Day Rapid Clipper Network Mobilization',
  '100% Human Submission Review & Guideline Enforcement',
  'Simultaneous Multi-Account Distribution on TikTok, Reels, & Shorts',
  'Bounty Payout Management & Fraud Prevention',
  'Live Analytics Dashboard Tracking Verified Organic Views',
  'End-of-Campaign Performance Report & Best-Hook Insights',
]

export const PricingScope: React.FC<PricingScopeProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-diskarte-gold bg-diskarte-gold/10 px-4 py-1.5 rounded-full border border-diskarte-gold/30 mb-4">
          Managed Campaign Scope
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-3xl">
          Performance-Driven. <span className="gold-gradient-text">Verified Delivery.</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg">
          We don’t sell simple video editing hours or static clip bundles. We operate full-service distribution campaigns custom-built around your target view volume.
        </p>
      </div>

      {/* Main Scope Card */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-card border-2 border-diskarte-gold/30 shadow-2xl p-8 sm:p-12 relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-diskarte-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-diskarte-gold/15 text-diskarte-gold border border-diskarte-gold/30 text-xs font-bold uppercase tracking-wider">
              Full-Service Managed Campaigns
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-3">
              Turnkey Short-Form Distribution
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Custom-scoped based on your content schedule, sound release, or growth goals.
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Direct Campaign Inquiries
            </span>
            <a
              href="mailto:diskarteclipping@gmail.com"
              className="text-base sm:text-lg font-bold font-mono text-diskarte-gold hover:underline mt-1"
            >
              diskarteclipping@gmail.com
            </a>
            <span className="text-xs text-diskarte-blue font-semibold mt-1">
              Custom Proposals Within 24h
            </span>
          </div>
        </div>

        {/* Deliverables Checklist Grid */}
        <div className="py-8">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6 flex items-center gap-2">
            <Layers className="w-4 h-4 text-diskarte-gold" />
            <span>Everything Included in Every Managed Campaign:</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-diskarte-gold/20 text-diskarte-gold flex items-center justify-center shrink-0 mt-0.5 border border-diskarte-gold/30">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-foreground/90 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bar inside Card */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-diskarte-gold" />
              <span>1–2 Day Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-diskarte-blue" />
              <span>100% Brand Safety QA</span>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-diskarte-dark gold-gradient-bg shadow-xl shadow-diskarte-gold/25 hover:shadow-2xl hover:shadow-diskarte-gold/45 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            <span>Email Us for a Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

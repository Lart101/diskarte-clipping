import React from 'react'
import { FileVideo, Users2, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: FileVideo,
    title: 'Source Ingestion & Hook Strategy',
    description: 'We ingest your raw footage, podcasts, music stems, or brand announcements. Our creative strategists map out winning hook angles, clip parameters, and strict brand guidelines.',
    tag: 'Day 0',
    highlight: 'Curated Hooks',
  },
  {
    step: '02',
    icon: Users2,
    title: 'Rapid Clipper Mobilization',
    description: 'Within 1–2 days, campaign bounties go live across our network of vetted video editors. Clippers craft native, high-retention short-form edits tailored to algorithm trends.',
    tag: '1–2 Days',
    highlight: 'Mass Network Launch',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: '100% Human Review & Brand Safety',
    description: 'Every submitted clip undergoes strict human QA. We verify hashtags, audio stems, caption accuracy, and compliance before any post is approved for payout.',
    tag: 'Brand Safe',
    highlight: 'Zero Rogue Posts',
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Algorithmic Flood & Verified Reporting',
    description: 'Approved clippers post simultaneously from their own accounts, flooding TikTok, Reels, and Shorts feeds. You get real-time dashboards tracking verified organic view delivery.',
    tag: 'Performance',
    highlight: 'Real-Time Views',
  },
]

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-diskarte-gold bg-diskarte-gold/10 px-4 py-1.5 rounded-full border border-diskarte-gold/30 mb-4">
            The Managed Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-3xl">
            From Raw Asset to <span className="gold-gradient-text">Viral Flood</span> in 4 Simple Steps.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg">
            A fully managed operational engine designed for maximum distribution velocity with zero hassle for your team.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-card border border-border/80 hover:border-diskarte-gold/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-diskarte-gold/40 group-hover:text-diskarte-gold transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent text-muted-foreground border border-border">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-diskarte-gold/10 border border-diskarte-gold/25 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-diskarte-gold" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-diskarte-blue">
                  <span>{item.highlight}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Eye, Users, Zap, ShieldCheck } from 'lucide-react'

const stats = [
  {
    icon: Eye,
    value: '500,000,000+',
    label: 'Verified Organic Views Targeted',
    description: 'Tracked live on TikTok, Reels, & Shorts',
    color: 'text-diskarte-gold',
    bg: 'bg-diskarte-gold/10 border-diskarte-gold/30',
  },
  {
    icon: Users,
    value: '25,000+',
    label: 'Active Community Video Clippers',
    description: 'Hungry video editors ready to distribute',
    color: 'text-diskarte-blue',
    bg: 'bg-diskarte-blue/10 border-diskarte-blue/30',
  },
  {
    icon: Zap,
    value: '1–2 Days',
    label: 'Rapid Campaign Launch Speed',
    description: 'From raw audio/video asset to live posts',
    color: 'text-diskarte-gold-light',
    bg: 'bg-diskarte-gold-light/10 border-diskarte-gold-light/30',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Human-Reviewed Brand Safety',
    description: 'Zero unauthorized posts or rogue edits',
    color: 'text-diskarte-red',
    bg: 'bg-diskarte-red/10 border-diskarte-red/30',
  },
]

export const LiveStats: React.FC = () => {
  return (
    <section className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-card border border-border/80 hover:border-diskarte-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Corner Accent Glow */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-diskarte-gold/5 rounded-full blur-xl group-hover:bg-diskarte-gold/15 transition-all" />

              <div className={`w-12 h-12 rounded-2xl ${stat.bg} border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-2 font-mono">
                {stat.value}
              </div>

              <div className="text-sm font-bold text-foreground/90 mb-1">
                {stat.label}
              </div>

              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

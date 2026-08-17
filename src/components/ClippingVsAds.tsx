import React from 'react'
import { Check, X, Sparkles } from 'lucide-react'

const comparisonRows = [
  {
    feature: 'Core Distribution Method',
    clipping: 'Organic posts across 100K+ independent creator accounts',
    paidAds: 'Paid sponsored ad placements on 1 brand page',
    freelance: 'Zero distribution (You must upload files yourself)',
  },
  {
    feature: 'Viewer Perception',
    clipping: '100% authentic, organic short-form entertainment',
    paidAds: 'Flagged as "Sponsored" (High ad-blindness)',
    freelance: 'Depends on your own social account reach',
  },
  {
    feature: 'Speed & Scale',
    clipping: 'Hundreds of videos live within 1–2 days of launch',
    paidAds: 'Requires continuous auction bidding & ad setup',
    freelance: 'Bottlenecked by 1–2 individual editors',
  },
  {
    feature: 'Quality & Brand Safety',
    clipping: '100% human submission review before any live payout',
    paidAds: 'Meta/TikTok automated ad policies',
    freelance: 'Unpredictable quality & no performance guarantee',
  },
  {
    feature: 'Pricing Model',
    clipping: 'Tied to target verified-view volume ($15k+ baseline)',
    paidAds: 'Volatile CPM auctions ($15–$40+ CPM)',
    freelance: 'Per video file fee ($50–$200/clip without views)',
  },
  {
    feature: 'Account Ban Risk',
    clipping: 'Decentralized creator army (Zero risk to brand account)',
    paidAds: 'Ad-account suspension halts entire pipeline',
    freelance: 'Low risk, but zero algorithmic distribution',
  },
]

export const ClippingVsAds: React.FC = () => {
  return (
    <section id="compare" className="py-20 md:py-28 bg-foreground/[0.015] border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-diskarte-blue bg-diskarte-blue/10 px-4 py-1.5 rounded-full border border-diskarte-blue/30 mb-4">
            Comparison & Strategy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-3xl">
            Why Clipping Outperforms <span className="text-diskarte-blue">Traditional Ads</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg">
            Compare the power of organic decentralized distribution against high-cost paid placements and freelance editors.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="py-5 px-6 font-bold text-sm text-foreground w-1/4">
                  Feature / Parameter
                </th>
                <th className="py-5 px-6 font-extrabold text-base text-diskarte-dark gold-gradient-bg w-1/3 rounded-t-xl shadow-md">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Diskarte Clipping Engine</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-bold text-sm text-muted-foreground w-1/4">
                  Paid Social Ads (Meta/TikTok)
                </th>
                <th className="py-5 px-6 font-bold text-sm text-muted-foreground w-1/6">
                  Freelance Editors
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-accent/40 transition-colors"
                >
                  <td className="py-5 px-6 text-sm font-semibold text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-5 px-6 text-sm font-bold text-foreground bg-diskarte-gold/5 border-x border-diskarte-gold/20">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-diskarte-gold text-diskarte-dark flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.clipping}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-diskarte-red shrink-0 mt-0.5" />
                      <span>{row.paidAds}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-diskarte-red shrink-0 mt-0.5" />
                      <span>{row.freelance}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

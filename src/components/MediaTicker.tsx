import React from 'react'

const mediaLogos = [
  { name: 'Forbes', font: 'font-serif italic font-normal tracking-tight text-xl' },
  { name: 'NPR', font: 'font-black uppercase tracking-widest text-lg' },
  { name: 'CNN', font: 'font-black uppercase tracking-wider text-xl' },
  { name: 'VARIETY', font: 'font-serif font-bold uppercase tracking-widest text-base' },
  { name: 'BLOOMBERG', font: 'font-mono font-bold tracking-tight text-base' },
  { name: 'BUSINESS INSIDER', font: 'font-sans font-black uppercase tracking-tighter text-sm' },
  { name: 'THE HOLLYWOOD REPORTER', font: 'font-serif font-semibold uppercase tracking-wider text-xs' },
  { name: 'BILLBOARD', font: 'font-sans font-extrabold uppercase tracking-wide text-base' },
]

export const MediaTicker: React.FC = () => {
  return (
    <div className="py-8 border-y border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex items-center justify-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Short-Form Distribution Powering Global Names
        </span>
      </div>

      <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap gap-12 sm:gap-16 items-center py-2">
          {mediaLogos.concat(mediaLogos).map((media, idx) => (
            <span
              key={idx}
              className={`${media.font} text-muted-foreground/60 hover:text-foreground transition-colors duration-300 select-none cursor-default`}
            >
              {media.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

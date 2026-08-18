'use client'

import React, { useState } from 'react'
import { X, Mail, Copy, Check, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react'
import confetti from 'canvas-confetti'
import { whopTrack } from '@/lib/whop'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)
  const email = 'diskarteclipping@gmail.com'

  if (!isOpen) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    whopTrack('contact')
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E5B842', '#0055FE', '#EF4444'],
    })
    setTimeout(() => setCopied(false), 3000)
  }

  const mailtoLink = `mailto:${email}?subject=Diskarte%20Clipping%20Campaign%20Inquiry&body=Hi%20Diskarte%20Clipping%20Team,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20a%20managed%20clipping%20campaign.%0D%0A%0D%0ABrand%20/%20Artist%20/%20Podcast%20Name:%20%0D%0ALinks%20to%20our%20content:%20%0D%0ATarget%20Platforms%20(TikTok,%20Reels,%20Shorts):%20%0D%0ACampaign%20Goals:%20%0D%0A%0D%0AThank%20you!`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-card border-2 border-diskarte-gold/40 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-accent hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Header */}
          <div className="mb-6 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-diskarte-gold/15 border border-diskarte-gold/30 text-diskarte-gold flex items-center justify-center mb-3">
              <Mail className="w-7 h-7" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-diskarte-gold/10 text-diskarte-gold border border-diskarte-gold/30 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Campaign Inquiries</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Email Our Team Directly
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm">
              Send us your project links and distribution goals. We respond within 24 hours to schedule your kickoff.
            </p>
          </div>

          {/* Email Address Highlight Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.04] border border-diskarte-gold/30 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0 text-center sm:text-left">
              <Mail className="w-5 h-5 text-diskarte-gold shrink-0 hidden sm:block" />
              <span className="font-mono font-bold text-sm sm:text-base text-foreground break-all">
                {email}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-diskarte-gold text-diskarte-dark hover:bg-diskarte-gold-light transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Actions */}
          <div className="space-y-3 mb-6">
            <a
              href={mailtoLink}
              onClick={() => whopTrack('contact')}
              className="w-full py-4 rounded-2xl font-bold text-base text-diskarte-dark gold-gradient-bg shadow-lg shadow-diskarte-gold/25 hover:shadow-xl hover:shadow-diskarte-gold/45 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>Open Email Client</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Guidelines Box */}
          <div className="p-4 rounded-2xl bg-accent/60 border border-border/80 text-xs text-muted-foreground space-y-1.5">
            <div className="font-bold text-foreground mb-1">What to include in your email:</div>
            <div>• Brand, Artist, or Podcast Name</div>
            <div>• Links to your long-form video or audio assets</div>
            <div>• Target view volume & preferred platforms (TikTok, Reels, Shorts)</div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4">
            <ShieldCheck className="w-4 h-4 text-diskarte-blue" />
            <span>Fast 24-Hour Response Time</span>
          </div>
        </div>
      </div>
    </div>
  )
}

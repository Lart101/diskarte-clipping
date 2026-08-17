export interface FaqItem {
  question: string
  answer: string
  category: 'brands' | 'clippers' | 'general'
}

export const faqData: FaqItem[] = [
  {
    category: 'brands',
    question: 'How fast can a Diskarte Clipping campaign go live?',
    answer: 'Once we complete onboarding and ingest your approved source files (raw video, podcast links, audio tracks), your campaign launches to our clipper network within 1 to 2 business days.'
  },
  {
    category: 'brands',
    question: 'How do you ensure brand safety and prevent unauthorized content?',
    answer: 'Every single video submitted by our clippers undergoes a rigorous 100% human review process. Our moderation team verifies guideline compliance, banned topic exclusion, proper audio tag usage, and approved call-to-actions before any payout is approved.'
  },
  {
    category: 'brands',
    question: 'How are views verified and reported?',
    answer: 'We use automated tracking software to cross-reference live social media post metrics on TikTok, Instagram Reels, and YouTube Shorts. Only verified, organic views on approved clips count toward campaign delivery.'
  },
  {
    category: 'brands',
    question: 'How can brands and creators get a campaign proposal?',
    answer: 'Simply email our team at diskarteclipping@gmail.com with your content links, preferred launch timeline, and target distribution platforms. We deliver a custom proposal and scope within 24 hours.'
  },
  {
    category: 'clippers',
    question: 'Do I need followers to join the Diskarte Clipper Network?',
    answer: 'No! There are zero follower minimums. Payouts are based strictly on performance—you get paid a guaranteed set rate per 1,000 verified views on approved submissions.'
  },
  {
    category: 'clippers',
    question: 'How and when do clippers get paid?',
    answer: 'Clippers submit live links to our verification portal. Once human review confirms compliance, payouts are processed directly via Whop / Stripe with lightning-fast turnaround.'
  },
  {
    category: 'general',
    question: 'What platforms do you distribute to?',
    answer: 'We distribute across the big three short-form video algorithmic feeds: TikTok, Instagram Reels, and YouTube Shorts.'
  }
]

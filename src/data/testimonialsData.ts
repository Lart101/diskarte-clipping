export interface TestimonialItem {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  stats: string
  tag: string
  type: 'client' | 'clipper'
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Marcus Vance',
    role: 'Head of Digital Marketing',
    company: 'SoundWave Records',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Diskarte Clipping deployed over 250 verified short-form edits in under 48 hours. Our track shot straight to #2 on the TikTok trending sounds chart and streamed 4.2M on Spotify within 10 days.',
    stats: '+38M Verified Views in 14 Days',
    tag: 'Music Label Campaign',
    type: 'client'
  },
  {
    id: '2',
    name: 'Dave K.',
    role: 'Host & Creator',
    company: 'The Breakthrough Podcast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Traditional agencies charged us $10K for 4 static videos. With Diskarte, hundreds of hungry clippers distributed our podcast hooks across Shorts and Reels, netting 85,000+ new full-episode listeners.',
    stats: '+14.5M Views & +85K Subscribers',
    tag: 'Podcast Growth',
    type: 'client'
  },
  {
    id: '3',
    name: 'CJ Rodriguez',
    role: 'Community Video Clipper (Manila)',
    company: 'Diskarte Clipper Network',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'I started with 0 followers. Because payouts are strictly based on verified views, I earned over $2,400 last month just clipping music and podcast moments from my bedroom. Instant payouts via Whop!',
    stats: '$2,400+ Earned Last Month',
    tag: 'Verified Clipper',
    type: 'clipper'
  },
  {
    id: '4',
    name: 'Elena Rostova',
    role: 'Growth Lead',
    company: 'Apex Gaming Network',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'The human review process is what makes Diskarte exceptional. We never had to worry about brand safety or rogue edits—every single clip met our strict brand guidelines before going live.',
    stats: '100% Brand Safety Compliance',
    tag: 'Gaming Brand',
    type: 'client'
  }
]

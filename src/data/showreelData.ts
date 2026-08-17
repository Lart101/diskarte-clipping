export interface ShowreelItem {
  id: string
  title: string
  client: string
  category: 'music' | 'podcasts' | 'gaming' | 'brands'
  views: string
  platform: 'TikTok' | 'Instagram' | 'YouTube Shorts'
  creatorName: string
  hook: string
  thumbnailUrl: string
  bountyType: string
  likes: string
  shares: string
}

export const showreelCategories = [
  { id: 'all', label: 'All Formats' },
  { id: 'music', label: '🎵 Music Hooks' },
  { id: 'podcasts', label: '🎙️ Podcast Snippets' },
  { id: 'gaming', label: '🎮 Gaming Highlights' },
  { id: 'brands', label: '🚀 Product Demos' },
]

export const showreelData: ShowreelItem[] = [
  {
    id: '1',
    title: 'Beat Drop & Trend Sync Format',
    client: 'Music & Trending Sound Template',
    category: 'music',
    views: '10M+ Potential',
    platform: 'TikTok',
    creatorName: 'Audio Sync Blueprint',
    hook: 'Wait till the bass drops at 0:14...',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    bountyType: 'Music Audio Bounty',
    likes: '2.1M',
    shares: '142K',
  },
  {
    id: '2',
    title: 'High-Stakes Revelation Format',
    client: 'Podcast Highlight Template',
    category: 'podcasts',
    views: '5M+ Potential',
    platform: 'YouTube Shorts',
    creatorName: 'Story Hook Blueprint',
    hook: 'He made $500K in 48 hours doing THIS...',
    thumbnailUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    bountyType: 'Podcast Bounty',
    likes: '890K',
    shares: '67K',
  },
  {
    id: '3',
    title: 'Clutch Play Action Format',
    client: 'Gaming & Streamer Template',
    category: 'gaming',
    views: '8M+ Potential',
    platform: 'TikTok',
    creatorName: 'Clutch Edit Blueprint',
    hook: 'Nobody believed he could pull off this defuse...',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    bountyType: 'Gaming Bounty',
    likes: '1.2M',
    shares: '98K',
  },
  {
    id: '4',
    title: 'Problem-to-Solution App Demo Format',
    client: 'Tech & Brand Feature Template',
    category: 'brands',
    views: '4M+ Potential',
    platform: 'Instagram',
    creatorName: 'Feature Hook Blueprint',
    hook: 'Banks hate this 1 legal money transfer trick...',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    bountyType: 'App Demo Bounty',
    likes: '940K',
    shares: '185K',
  },
]

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://diskarteclipping.com'),
  title: 'Diskarte Clipping | Managed Short-Form Video Distribution Agency',
  description:
    'Diskarte Clipping is an aspiring managed clipping agency powering viral short-form distribution. 1–2 day rapid launch, 100% human-reviewed submissions, and verified reporting across TikTok, Reels, and Shorts.',
  openGraph: {
    title: 'Diskarte Clipping | Managed Short-Form Video Distribution Agency',
    description:
      'Turn long-form content and music into millions of organic short-form views across TikTok, Reels, and Shorts with our decentralized network of vetted clippers.',
    url: 'https://diskarteclipping.com',
    siteName: 'Diskarte Clipping',
    images: [
      {
        url: '/diskarteClippingLogo.jpg',
        width: 1200,
        height: 630,
        alt: 'Diskarte Clipping Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diskarte Clipping | Managed Short-Form Video Distribution Agency',
    description: 'Managed clipping campaigns that move culture. Rapid launch, human QA, and verified view reporting.',
    images: ['/diskarteClippingLogo.jpg'],
  },
  icons: {
    icon: '/diskarteClippingLogo.jpg',
    apple: '/diskarteClippingLogo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${instrumentSerif.variable} font-sans bg-background text-foreground antialiased selection:bg-diskarte-gold selection:text-diskarte-dark min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  )
}

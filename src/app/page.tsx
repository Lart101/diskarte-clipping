'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { MediaTicker } from '@/components/MediaTicker'
import { Showreel } from '@/components/Showreel'
import { LiveStats } from '@/components/LiveStats'
import { HowItWorks } from '@/components/HowItWorks'
import { ClippingVsAds } from '@/components/ClippingVsAds'
import { Verticals } from '@/components/Verticals'
import { ClipperPortal } from '@/components/ClipperPortal'
import { PricingScope } from '@/components/PricingScope'
import { Testimonials } from '@/components/Testimonials'
import { FaqSection } from '@/components/FaqSection'
import { BookingModal } from '@/components/BookingModal'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved !== null) {
      setDarkMode(saved === 'dark')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300">
      {/* Floating Glass Navigation */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <MediaTicker />
        <Showreel />
        <LiveStats />
        <HowItWorks />
        <ClippingVsAds />
        <Verticals onOpenBooking={() => setIsBookingOpen(true)} />
        <ClipperPortal />
        <PricingScope onOpenBooking={() => setIsBookingOpen(true)} />
        <Testimonials />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Strategy Call Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}

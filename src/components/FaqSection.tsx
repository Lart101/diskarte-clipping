'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqData, FaqItem } from '../data/faqData'

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeTab, setActiveTab] = useState<'all' | 'brands' | 'clippers'>('all')

  const filteredFaqs = activeTab === 'all'
    ? faqData
    : faqData.filter(f => f.category === activeTab || f.category === 'general')

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-diskarte-gold bg-diskarte-gold/10 px-4 py-1.5 rounded-full border border-diskarte-gold/30 mb-4 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
          Everything You Need to Know.
        </h2>
        <p className="mt-3 text-muted-foreground text-base sm:text-lg">
          Got questions? Here are straight answers about our clipping campaigns and clipper network.
        </p>

        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => {
              setActiveTab('all')
              setOpenIndex(0)
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-diskarte-gold text-diskarte-dark font-bold'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => {
              setActiveTab('brands')
              setOpenIndex(0)
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'brands'
                ? 'bg-diskarte-blue text-white font-bold'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            For Brands & Creators
          </button>
          <button
            onClick={() => {
              setActiveTab('clippers')
              setOpenIndex(0)
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'clippers'
                ? 'bg-diskarte-gold text-diskarte-dark font-bold'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            For Video Clippers
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq: FaqItem, idx: number) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-card border-diskarte-gold/50 shadow-md shadow-diskarte-gold/10'
                  : 'bg-card/70 border-border/80 hover:border-diskarte-gold/30'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-base sm:text-lg text-foreground pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'bg-diskarte-gold text-diskarte-dark rotate-180' : 'bg-accent text-muted-foreground'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40 animate-accordion-down">
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

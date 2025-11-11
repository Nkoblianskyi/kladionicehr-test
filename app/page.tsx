"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import HowWeRank from "@/components/how-we-rank"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import TopOffersModal from "@/components/top-offers-modal"
import { FirstBettingSitesList } from "@/components/first-betting-sites-list"
import { OurChoiceSection } from "@/components/our-choice-section"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTopOffersModalOpen, setIsTopOffersModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTopOffersModalOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen flex flex-col relative">
      {/* Background Image for entire page */}
      <div className="fixed inset-0 z-0">
        <img
          src="/croatian-sports-celebration-stadium.jpg"
          alt="Croatian Sports Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <SiteHeader />

        <HeroSection
          onTopOffersClick={() => setIsTopOffersModalOpen(true)}
          onAdvertiserInfoClick={() => setIsAdvertiserModalOpen(true)}
          onAgeRestrictionClick={() => setIsAgeModalOpen(true)}
        />

        <FirstBettingSitesList />

        <InfoSection />
        <HowWeRank />
        <OurChoiceSection />

        <TopOffersModal isOpen={isTopOffersModalOpen} onClose={() => setIsTopOffersModalOpen(false)} />
        <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
        <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
        <SiteFooter />
      </div>
    </main>
  )
}

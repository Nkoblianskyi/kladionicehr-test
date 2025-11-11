"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { firstListSites, type BettingSite } from "@/data/betting-sites"

export function FirstBettingSitesList() {
  const [sites, setSites] = useState<BettingSite[]>([])
  const [expandedDisclaimer, setExpandedDisclaimer] = useState<string | null>(null)

  useEffect(() => {
    setSites(firstListSites)
  }, [])

  const renderStars = (rating: number, className = "w-4 h-4") => {
    const starRating = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1
      const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

      if (fillPercentage >= 100) {
        // Full star
        return <Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />
      } else if (fillPercentage > 0) {
        // Partial star
        return (
          <div key={i} className={`relative ${className}`}>
            <Star className={`${className} text-gray-300 absolute`} />
            <div className="overflow-hidden absolute" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${className} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )
      } else {
        // Empty star
        return <Star key={i} className={`${className} text-gray-300`} />
      }
    })
  }

  const truncateText = (text: string, maxLength = 50) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim()
  }

  const getResponsiveTruncateLength = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) return 120 // Desktop/tablet - longer text
      return 50 // Mobile - shorter text with dots
    }
    return 50
  }

  const getMaxLength = () => {
    const length = getResponsiveTruncateLength()
    return length
  }

  const toggleDisclaimer = (siteId: string) => {
    setExpandedDisclaimer(expandedDisclaimer === siteId ? null : siteId)
  }

  const getBadgeText = (index: number) => {
    const badges = ["Vrhunski Izbor", "Ekskluzivna Ponuda", "Visoko Ocijenjeno", "U Trendu"]
    return badges[index] || null
  }

  return (
    <section id="first-rankings" className="py-4 sm:py-4 md:py-4 w-full">
      <div className="w-full max-w-[1080px] mx-auto">
        <div className="px-2 sm:px-4">
          <div className="space-y-4 sm:space-y-6">
            {sites.map((site, index) => (
              <Card
                key={site.id}
                className={`overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-fadeIn relative ${
                  index === 0
                    ? "shadow-lg shadow-yellow-400 bg-white border-4 border-yellow-400"
                    : "shadow-lg hover:shadow-xl bg-white border-4 border-green-600"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {index < 4 && (
                  <div
                    className={`w-full py-2 text-center font-bold text-sm ${
                      index === 0 ? "bg-yellow-400 text-black" : "bg-green-600 text-white"
                    }`}
                  >
                    {getBadgeText(index)}
                  </div>
                )}

                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-0 h-full">
                    {/* Mobile Layout */}
                    <div className="flex flex-col md:hidden">
                      <div className="grid grid-cols-2">
                        <div className="bg-gray-100 p-4 flex flex-col items-center justify-center space-y-3 py-4 px-4">
                          <div className="p-3 rounded-lg shadow-md bg-black border border-gray-200">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={160}
                              height={100}
                              className="h-12 max-w-full object-contain"
                            />
                          </div>

                          <div className="text-center">
                            <div className="text-xs text-gray-400 mb-1">{site.reviews} recenzija</div>
                            <div className="flex items-center justify-center gap-1">
                              {renderStars(site.rating, "w-3 h-3")}
                              <div className="ml-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <span className="text-sm font-bold text-gray-800">{site.rating.toFixed(1)}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-4 flex flex-col items-center justify-center space-y-3">
                          <div className="text-center">
                            <div className="text-yellow-600 mb-1 font-bold text-lg">Bonus Dobrodošlice</div>
                            <div className="text-xl font-bold text-gray-800 mb-1">{site.bonus}</div>
                            {site.dopBonus && <div className="text-gray-800 font-bold text-sm">{site.dopBonus}</div>}
                          </div>

                          <Button
                            className={`px-6 py-2 rounded-lg font-semibold ${
                              index === 0
                                ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                                : "bg-green-600 hover:bg-green-700 text-white"
                            }`}
                          >
                            PREUZMI BONUS
                          </Button>

                          <div className="text-sm font-bold text-gray-700">{site.name}</div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex flex-col">
                      <div className="flex items-center h-full">
                        <div className="bg-white p-8 h-full flex items-center border-r border-gray-200">
                          <div className="bg-black p-4 rounded-lg shadow-md mx-6 border border-gray-200">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={180}
                              height={100}
                              className="h-24 max-w-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="flex-1 p-6 bg-white text-center">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="mb-2 font-bold text-lg text-muted-foreground">Bonus Dobrodošlice</div>
                              <div className="font-bold text-gray-800 mb-1 text-xl">{site.bonus}</div>
                              {site.dopBonus && <div className="text-gray-800 font-bold text-lg">{site.dopBonus}</div>}
                            </div>

                            <div className="text-center mx-8 flex flex-col items-center gap-2">
                              <span className="font-extrabold text-border text-3xl">{site.rating.toFixed(1)}</span>
                              <div className="text-xs text-gray-400">{site.reviews} recenzija</div>
                              <div className="flex items-center gap-1">{renderStars(site.rating, "w-4 h-4")}</div>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                              <Button
                                className={`px-8 py-6 rounded-lg font-semibold text-lg ${
                                  index === 0
                                    ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                                    : "bg-green-600 hover:bg-green-700 text-white"
                                }`}
                              >
                                PREUZMI BONUS
                              </Button>

                              <div className="text-lg font-bold text-gray-700">{site.name}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full bg-gray-100 py-2 text-center text-xs text-gray-600 border-t border-gray-200">
                        18+ • Bezpečna gra • hupis.hr
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

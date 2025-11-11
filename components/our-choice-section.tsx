"use client"

import { firstListSites } from "@/data/betting-sites"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

export function OurChoiceSection() {
  const topSite = firstListSites[0]

  const renderStars = (rating: number, className = "w-4 h-4") => {
    const starRating = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

      if (fillPercentage >= 100) {
        return <Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />
      } else if (fillPercentage > 0) {
        return (
          <div key={i} className={`relative ${className}`}>
            <Star className={`${className} text-gray-300 absolute`} />
            <div className="overflow-hidden absolute" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${className} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )
      } else {
        return <Star key={i} className={`${className} text-gray-300`} />
      }
    })
  }

  return (
    <section className="py-12 sm:py-16 bg-white max-w-[1000px] w-full mx-auto">
      <div className="w-full max-w-[1080px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Naš Vrhunski Izbor</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nakon detaljne analize i testiranja svih vodećih kladionica u Hrvatskoj, naš tim stručnjaka je izdvojio
            najbolju platformu za sportsko klađenje. Ovaj izbor temelji se na sigurnosti, kvaliteti usluge, bonusima i
            cjelokupnom korisničkom iskustvu.
          </p>
        </div>

        <Card className="overflow-hidden transition-all duration-300 shadow-lg shadow-yellow-400 bg-white border-4 border-yellow-400">
          <div className="w-full bg-yellow-400 text-black py-2 text-center font-bold text-sm">Vrhunski Izbor</div>

          <Link href={topSite.url} target="_blank" rel="noopener noreferrer" className="block">
            <CardContent className="p-0 h-full">
              {/* Mobile Layout */}
              <div className="flex flex-col md:hidden">
                <div className="grid grid-cols-2">
                  <div className="bg-gray-100 p-4 flex flex-col items-center justify-center space-y-3 py-4 px-4">
                    <div className="p-3 rounded-lg shadow-md bg-black border border-gray-200">
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={160}
                        height={100}
                        className="h-12 max-w-full object-contain"
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">{topSite.reviews} recenzija</div>
                      <div className="flex items-center justify-center gap-1">
                        {renderStars(topSite.rating, "w-3 h-3")}
                        <div className="ml-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-sm font-bold text-gray-800">{topSite.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 flex flex-col items-center justify-center space-y-3">
                    <div className="text-center">
                      <div className="text-yellow-600 mb-1 font-bold text-lg">Bonus Dobrodošlice</div>
                      <div className="text-xl font-bold text-gray-800 mb-1">{topSite.bonus}</div>
                      {topSite.dopBonus && <div className="text-gray-800 font-bold text-sm">{topSite.dopBonus}</div>}
                    </div>

                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold">
                      PREUZMI BONUS
                    </Button>

                    <div className="text-sm font-bold text-gray-700">{topSite.name}</div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-col">
                <div className="flex items-center h-full">
                  <div className="bg-white p-8 h-full flex items-center border-r border-gray-200">
                    <div className="bg-black p-4 rounded-lg shadow-md mx-6 border border-gray-200">
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={180}
                        height={100}
                        className="h-24 max-w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 p-6 bg-white text-center">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-yellow-600 mb-2 font-bold text-lg">Bonus Dobrodošlice</div>
                        <div className="text-xl font-bold text-gray-800 mb-1">{topSite.bonus}</div>
                        {topSite.dopBonus && <div className="text-gray-800 font-bold text-lg">{topSite.dopBonus}</div>}
                      </div>

                      <div className="text-center mx-8 flex flex-col items-center gap-2">
                        <span className="text-2xl font-extrabold text-yellow-600">{topSite.rating.toFixed(1)}</span>
                        <div className="text-xs text-gray-400">{topSite.reviews} recenzija</div>
                        <div className="flex items-center gap-1">{renderStars(topSite.rating, "w-4 h-4")}</div>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 rounded-lg font-semibold text-lg">
                          PREUZMI BONUS
                        </Button>

                        <div className="text-lg font-bold text-gray-700">{topSite.name}</div>
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

        <div className="text-center mt-6 text-sm text-gray-600">{topSite.terms}</div>
      </div>
    </section>
  )
}

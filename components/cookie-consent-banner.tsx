"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1 text-red-800">Obavijest o Kolačićima</h3>
          <p className="text-sm text-red-600">
            Koristimo kolačiće kako bismo poboljšali vaše iskustvo pregledavanja, pružali personalizirane oglase ili
            sadržaj i analizirali naš promet. Klikom na "Prihvati Sve" pristajete na našu upotrebu kolačića.
          </p>
          {/* </CHANGE> */}
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
            className="text-sm px-4 py-2 h-auto text-red-700 border-red-200 bg-transparent"
          >
            Odbij
          </Button>
          <Button onClick={acceptCookies} className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 h-auto">
            Prihvati Sve
          </Button>
          {/* </CHANGE> */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBanner(false)}
            className="md:hidden p-1 h-auto text-red-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

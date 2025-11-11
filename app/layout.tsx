import type React from "react"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const inter = Mulish({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Najbolje Kladionice Hrvatska | kladionicehr.com",
  description:
    "Usporedite najbolje kladionice u Hrvatskoj s najboljim bonusima, koeficijentima i značajkama. Stručne recenzije legalnih kladionica dostupnih u Hrvatskoj.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieConsentBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

"use client"
import Image from "next/image"

interface HeroSectionProps {
  onTopOffersClick: () => void
  onAdvertiserInfoClick: () => void
  onAgeRestrictionClick: () => void
}

export function HeroSection({ onTopOffersClick, onAdvertiserInfoClick, onAgeRestrictionClick }: HeroSectionProps) {
  const currentDate = new Date()
  const formattedDate = `${currentDate.toLocaleString("hr-HR", { month: "long" })} ${currentDate.getFullYear()}`

  return (
    <section className="relative py-6 sm:py-8 md:py-10 text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2 animate-fade-in-up text-white">
          NAJBOLJE SPORTSKE KLADIONICE HRVATSKE
        </h1>
        <p
          className="text-xs sm:text-sm md:text-lg text-gray-300 mb-2 sm:mb-6 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Ažurirano {formattedDate}
        </p>
        <p
          className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base mb-3 sm:mb-6 animate-fade-in-up line-clamp-2 sm:line-clamp-none"
          style={{ animationDelay: "200ms" }}
        >
          Pronađite najsigurnije i najbolje kladionice za sportsko klađenje u Hrvatskoj. Sve kladionice su licencirane,
          provjerene i nude najbolje bonuse i koeficijente za hrvatske igrače.
        </p>

        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-3 sm:mb-8 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-xs sm:text-sm text-gray-100">100% Sigurne</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <Image src="/flag.png" alt="Licencirane u HR" width={20} height={20} />
            <span className="text-xs sm:text-sm text-gray-100">Licencirane u HR</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs sm:text-sm text-gray-100">Brze Isplate</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
            <span className="text-xs sm:text-sm text-gray-100">Najbolji Bonusi</span>
          </div>
        </div>
        {/* </CHANGE> */}

        <p className="text-xs animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          Kockajte se odgovorno. Primjenjuju se uvjeti i odredbe klađenja.{" "}
          <button
            onClick={onAdvertiserInfoClick}
            className="text-blue-300 hover:text-blue-200 underline font-medium transition-colors duration-300"
          >
            Informacije o oglašivaču
          </button>{" "}
          |{" "}
          <button
            onClick={onAgeRestrictionClick}
            className="text-blue-300 hover:text-blue-200 underline font-medium transition-colors duration-300"
          >
            Samo +18
          </button>
        </p>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}

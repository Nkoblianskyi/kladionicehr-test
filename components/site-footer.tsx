import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info - Larger Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/favicon.ico" alt="logo" width={48} height={48} />
              <h3 className="text-lg font-bold text-gray-900 uppercase">kladionicehr</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Vaš pouzdani vodič za najbolje online kladionice u Hrvatskoj. Stručne recenzije i usporedbe.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>© 2025 kladionicehr.com</p>
              <p>Sva prava pridržana</p>
            </div>
          </div>

          {/* Navigation - Two Columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Navigacija</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Početna
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                    O Nama
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Politika Privatnosti
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Politika Kolačića
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Odgovorno Kockanje</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>18+ Samo za punoljetne</li>
                <li>Kockajte odgovorno</li>
                <li>Bezpečna igra</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-gray-200 pt-8">
          <h4 className="font-semibold text-gray-700 mb-4 text-center text-sm">Regulacija i Partnerske Organizacije</h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/pbsvi.svg" alt="pbsvi" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/hupis.png" alt="hupis" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs text-center leading-relaxed">
            Ova web stranica sadrži partnerske linkove. Možemo primiti naknadu kada kliknete na linkove proizvoda koje
            recenziramo. Sve informacije na ovoj stranici pružene su isključivo u informativne svrhe.
          </p>
        </div>
      </div>
    </footer>
  )
}

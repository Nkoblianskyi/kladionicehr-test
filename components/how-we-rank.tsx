import { Shield, TrendingUp, Smartphone, CreditCard, Star, CheckCircle } from "lucide-react"

const rankingCriteria = [
  {
    id: 1,
    title: "Licenca i Regulacija",
    description:
      "Provjeravamo da li svaka kladionica posjeduje važeću licencu Ministarstva financija RH te slijedi sve propise o odgovornom klađenju i zaštiti igrača.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Kvaliteta Koeficijenata",
    description:
      "Analiziramo visinu koeficijenata za najpopularnije sportove i događaje. Bolje kvote znače veći potencijalni dobitak za vas.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Mobilna Aplikacija",
    description:
      "Testiramo funkcionalnost mobilnih aplikacija i web stranica. Moderna kladionica mora raditi besprijekorno na svim uređajima.",
    icon: Smartphone,
  },
  {
    id: 4,
    title: "Načini Plaćanja",
    description:
      "Procjenjujemo dostupnost platnih metoda kao što su kartice, bankovni transferi i e-novčanici, te brzinu isplate dobitaka.",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Korisnička Podrška",
    description:
      "Kvalitetna podrška dostupna na hrvatskom jeziku putem live chata, emaila ili telefona je ključna za pozitivno iskustvo.",
    icon: Star,
  },
  {
    id: 6,
    title: "Bonus Uvjeti",
    description:
      "Pažljivo čitamo sve uvjete bonusa kako bismo osigurali da su pošteni, ostvarivi i transparentni bez skrivenih klauzula.",
    icon: CheckCircle,
  },
]

export default function HowWeRank() {
  return (
    <section className="py-12 bg-gray-50 max-w-[1000px] w-full mx-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kako Ocjenjujemo Kladionice</h2>

          <div className="prose prose-gray max-w-none">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Naš tim stručnjaka provodi temeljitu analizu svake kladionice prema ustanovljenim kriterijima kako bismo
              vam predstavili samo najpouzdanije i najkvalitetnije opcije na hrvatskom tržištu. Proces ocjenjivanja
              obuhvaća više ključnih kategorija koje zajedno čine cjelovitu sliku o kvalitetu usluge.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Licenca i Regulacija</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Prvi i najvažniji korak u našoj evaluaciji jest provjera licenciranja. Svaka kladionica mora posjedovati
              važeću licencu Ministarstva financija Republike Hrvatske. Provjeravamo usklađenost s regulatornim
              zahtjevima, politike odgovornog klađenja i mehanizme zaštite igrača. Kladionice koje ne ispunjavaju ove
              standarde automatski se isključuju iz naših preporuka.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Kvaliteta Koeficijenata</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Analiziramo visinu koeficijenata za najpopularnije sportske lige i događaje uključujući nogomet, košarku,
              tenis i druge glavne sportove. Uspoređujemo margine kladionica i njihovu konkurentnost na tržištu. Bolje
              kvote direktno utječu na vaš potencijalni dobitak, stoga ovom aspektu posvećujemo posebnu pažnju.
              Kladionice s konzistentno višim koeficijentima dobivaju više ocjene u ovoj kategoriji.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Mobilno Iskustvo</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              U današnje vrijeme većina korisnika pristupa kladionicama putem mobilnih uređaja. Testiramo funkcionalnost
              mobilnih aplikacija za iOS i Android platforme, kao i responzivnost web stranica. Brzina učitavanja,
              intuitivnost sučelja, mogućnost klađenja uživo i stabilnost aplikacije ključni su faktori koje
              procjenjujemo. Kladionica mora pružiti besprijekorno iskustvo bez obzira na uređaj koji koristite.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Načini Plaćanja i Brzina Isplate</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Dostupnost raznih platnih metoda prilagođenih hrvatskom tržištu iznimno je važna. Ocjenjujemo podršku za
              kreditne kartice, bankovne transfere i e-novčanike. Posebno testiramo brzinu obrade isplata dobitaka jer
              to direktno utječe na korisničko zadovoljstvo. Transparentnost u vezi naknade za transakcije i jasnoća
              uvjeta isplate također se uzimaju u obzir. Kladionice koje nude brze isplate i raznolike opcije dobivaju
              više bodove.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Korisnička Podrška</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Kvalitetna korisnička služba dostupna na hrvatskom jeziku ključna je za pozitivno iskustvo. Testiramo
              dostupnost različitih kanala komunikacije uključujući live chat, email i telefonsku podršku. Procjenjujemo
              brzinu odgovora, stručnost osoblja i kvalitetu rješenja problema. Kladionice koje nude podršku 24 sata
              dnevno sedam dana u tjednu s kompetentnim timom dobivaju više ocjene.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Uvjeti Bonusa</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Bonusi mogu biti privlačni ali moraju biti pošteni i ostvarivi. Pažljivo analiziramo sve uvjete klađenja,
              vremenske rokove i ograničenja vezana uz bonus ponude. Provjeravamo transparentnost pravila i odsutnost
              skrivenih klauzula koje bi mogle ometati igrače. Kladionice s realnim zahtjevima i jasnim pravilima
              dobivaju pozitivne ocjene u ovoj kategoriji.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

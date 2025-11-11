import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "O Nama | hrvatskosportskokladenje",
  description:
    "Upoznajte naš tim stručnjaka za sportsko klađenje i našu misiju pružanja najboljih analiza kladionica u Hrvatskoj.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <div
        className="flex-1 relative"
        style={{
          backgroundImage: "url('/croatian-football-stadium-atmosphere-with-red-and-.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-8 text-white text-balance">O hrvatskosportskokladenje</h1>

          <div className="space-y-6">
            <section className="bg-black/50 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Naša Misija</h2>
              <p className="text-gray-100 leading-relaxed">
                Na platformi hrvatskosportskokladenje, naša primarna misija je pružiti hrvatskim ljubiteljima sporta i
                klađenja točne, ažurirane i nepristrane informacije o najboljim online kladionicama dostupnim na
                hrvatskom tržištu. Vjerujemo u potpunu transparentnost, iskrenost u našim preporukama i promociju
                odgovornog klađenja kao temelj zdrave industrije sportskog klađenja.
              </p>
            </section>

            <section className="bg-black/50 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Naš Stručni Tim</h2>
              <p className="text-gray-100 leading-relaxed">
                Naš tim čine iskusni analitičari sportskog klađenja, stručnjaci iz industrije igara na sreću i posvećeni
                istraživači koji detaljno testiraju i evaluiraju svaku kladionicu koju predstavljamo. Sa više od
                desetljeća kombiniranog iskustva u industriji online klađenja, posjedujemo znanje i ekspertizu potrebnu
                da vam pružimo pouzdane i provjerene preporuke prilagođene hrvatskom tržištu.
              </p>
            </section>

            <section className="bg-black/50 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Naš Proces Evaluacije</h2>
              <p className="text-gray-100 leading-relaxed mb-3">
                Naš proces recenziranja kladionica je sustavan i temeljit. Svaka kladionica prolazi kroz sveobuhvatnu
                evaluaciju na temelju striktnih kriterija:
              </p>
              <ul className="list-disc pl-6 text-gray-100 space-y-2 leading-relaxed">
                <li>Licenciranje i regulatorni status u Hrvatskoj</li>
                <li>Kvaliteta i vrijednost bonusa dobrodošlice</li>
                <li>Korisničko iskustvo i navigacija platforme</li>
                <li>Raznolikost sportskih tržišta i tipova oklada</li>
                <li>Konkurentnost kvota na popularne sportove</li>
                <li>Metode plaćanja prilagođene hrvatskim korisnicima</li>
                <li>Kvaliteta korisničke podrške na hrvatskom jeziku</li>
                <li>Mobilna kompatibilnost i aplikacije</li>
              </ul>
              <p className="text-gray-100 leading-relaxed mt-3">
                Redovito ažuriramo naše recenzije kako bismo osigurali da informacije ostanu aktualne i relevantne.
              </p>
            </section>

            <section className="bg-black/50 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Odgovorno Klađenje</h2>
              <p className="text-gray-100 leading-relaxed">
                Predani smo promociji odgovornog klađenja kao ključnog aspekta naše platforme. Sve kladionice koje
                preporučujemo su licencirane i regulirane u skladu s hrvatskim zakonima, što znači da poštuju stroge
                smjernice za odgovorno klađenje. Ohrabrujemo sve naše posjetitelje da se klade odgovorno, postave
                granice i potražite pomoć ako primjetite znakove problematičnog klađenja.
              </p>
            </section>

            <section className="bg-black/50 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Kontaktirajte Nas</h2>
              <p className="text-gray-100 leading-relaxed">
                Ako imate bilo kakva pitanja, prijedloge ili primjedbe, slobodno nas kontaktirajte putem emaila na
                adresu <span className="text-yellow-400 font-semibold">info@hrvatskosportskokladenje.com</span>.
                Cijenimo vaše povratne informacije i uvijek težimo poboljšanju našeg servisa kako bismo bolje služili
                hrvatskoj zajednici ljubitelja sportskog klađenja.
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}

import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "O Nama | kladionicehr",
  description:
    "Upoznajte naš tim stručnjaka za sportsko klađenje i našu misiju pružanja najboljih analiza kladionica u Hrvatskoj.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">O kladionicehr</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Vaš pouzdani vodič kroz svijet online sportskog klađenja u Hrvatskoj
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="space-y-12">
            {/* Mission Section */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Naša Misija</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Na platformi <strong>kladionicehr.com</strong>, naša primarna misija je pružiti hrvatskim ljubiteljima
                sporta i klađenja točne, ažurirane i nepristrane informacije o najboljim online kladionicama dostupnim
                na hrvatskom tržištu. Vjerujemo u potpunu transparentnost, iskrenost u našim preporukama i promociju
                odgovornog klađenja kao temelj zdrave industrije sportskog klađenja.
              </p>
            </section>

            {/* Team Section */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Tko Smo Mi?</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Naš tim čine iskusni analitičari sportskog klađenja, stručnjaci iz industrije igara na sreću i posvećeni
                istraživači koji detaljno testiraju i evaluiraju svaku kladionicu koju predstavljamo.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Sa više od desetljeća kombiniranog iskustva u industriji online klađenja, posjedujemo znanje i
                ekspertizu potrebnu da vam pružimo pouzdane i provjerene preporuke prilagođene hrvatskom tržištu.
              </p>
            </section>

            {/* Evaluation Process */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Kako Ocjenjujemo Kladionice</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Naš proces recenziranja kladionica je sustavan i temeljit. Svaka kladionica prolazi kroz sveobuhvatnu
                evaluaciju na temelju sljedećih kriterija:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Sigurnost i Licenciranje</h3>
                  <p className="text-gray-600 text-sm">Provjeravamo licenciranje i regulatorni status u Hrvatskoj</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Bonusi</h3>
                  <p className="text-gray-600 text-sm">Kvaliteta i vrijednost bonusa dobrodošlice i promocija</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Sportska Ponuda</h3>
                  <p className="text-gray-600 text-sm">Raznolikost sportskih tržišta i tipova oklada</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Kvaliteta Kvota</h3>
                  <p className="text-gray-600 text-sm">Konkurentnost kvota na popularne sportove</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-6 border border-pink-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Metode Plaćanja</h3>
                  <p className="text-gray-600 text-sm">Prilagođenost hrvatskim korisnicima</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Korisnička Podrška</h3>
                  <p className="text-gray-600 text-sm">Kvaliteta podrške na hrvatskom jeziku</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Redovito ažuriramo naše recenzije kako bismo osigurali da informacije ostanu aktualne i relevantne.
              </p>
            </section>

            {/* Responsible Gambling */}
            <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Odgovorno Klađenje</h2>
              <p className="leading-relaxed text-lg mb-4">
                Predani smo promociji odgovornog klađenja kao ključnog aspekta naše platforme. Sve kladionice koje
                preporučujemo su licencirane i regulirane u skladu s hrvatskim zakonima.
              </p>
              <p className="leading-relaxed text-lg">
                Ohrabrujemo sve naše posjetitelje da se klade odgovorno, postave granice i potražite pomoć ako
                primjetite znakove problematičnog klađenja. Klađenje treba biti zabava, a ne problem.
              </p>
            </section>

            {/* Contact Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Kontaktirajte Nas</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Ako imate bilo kakva pitanja, prijedloge ili primjedbe, slobodno nas kontaktirajte:
              </p>
              <a
                href="mailto:info@kladionicehr.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-3 rounded-lg transition-colors"
              >
                info@kladionicehr.com
              </a>
              <p className="text-gray-600 mt-4">
                Cijenimo vaše povratne informacije i uvijek težimo poboljšanju našeg servisa.
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}

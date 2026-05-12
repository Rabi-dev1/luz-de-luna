import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen des Restaurants Luz de Luna in Hannover-Linden.',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0C0A08] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A96E]/50" />
              <span className="text-[#C9A96E] text-[9px] tracking-[0.38em] uppercase font-inter font-light">Rechtliches</span>
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-[#FDFCFA] leading-[1.0] tracking-[0.01em]">
              Impressum
            </h1>
            <div className="w-10 h-px bg-[#C9A96E] mt-6" />
          </div>

          {/* Content */}
          <div className="space-y-10 text-[#D4C9B8]/65 font-inter font-light text-[14px] leading-[1.95]">

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Luz de Luna Restaurant &amp; Café<br />
                Falkenstraße 22A<br />
                30449 Hannover<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Kontakt
              </h2>
              <p>
                Telefon:{' '}
                <a href="tel:+4951112345" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">
                  +49 511 12345
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:info@luz-de-luna.de" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">
                  info@luz-de-luna.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
                DE 123 456 789
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)
              </h2>
              <p>
                Luz de Luna Restaurant &amp; Café<br />
                Falkenstraße 22A<br />
                30449 Hannover
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Haftungsausschluss
              </h2>
              <p className="mb-4">
                <strong className="text-[#FDFCFA]/80 font-medium">Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                <strong className="text-[#FDFCFA]/80 font-medium">Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>

          <div className="mt-14 pt-10 border-t border-[#FDFCFA]/8">
            <Link href="/" className="inline-flex items-center gap-2 text-[#C9A96E]/60 font-inter text-[10px] tracking-[0.28em] uppercase hover:text-[#C9A96E] transition-colors duration-200">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

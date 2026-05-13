import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie',
  description: 'Cookie-Richtlinie des Restaurants Luz de Luna in Hannover-Linden.',
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-stone-950 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">

          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A96E]/50" />
              <span className="text-[#C9A96E] text-[9px] tracking-[0.38em] uppercase font-inter font-light">Rechtliches</span>
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-[#FDFCFA] leading-[1.0] tracking-[0.01em]">
              Cookie-Richtlinie
            </h1>
            <div className="w-10 h-px bg-[#C9A96E] mt-6" />
          </div>

          <div className="space-y-10 text-[#D4C9B8]/65 font-inter font-light text-[14px] leading-[1.95]">

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Was sind Cookies?
              </h2>
              <p>
                Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Sie ermöglichen es Websites, Informationen zu speichern und beim nächsten Besuch wieder abzurufen.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Welche Cookies verwenden wir?
              </h2>
              <p className="mb-6">
                Diese Website verwendet <strong className="text-[#FDFCFA]/85 font-medium">ausschließlich technisch notwendige Cookies</strong>. Wir setzen keine Tracking-, Analyse- oder Marketing-Cookies ein.
              </p>

              {/* Cookie table */}
              <div className="border border-[#FDFCFA]/[0.07] overflow-hidden">
                <div className="grid grid-cols-3 gap-0 bg-[#FDFCFA]/[0.04] px-5 py-3 border-b border-[#FDFCFA]/[0.07]">
                  <span className="text-[#C9A96E]/70 text-[9px] tracking-[0.28em] uppercase font-inter">Name</span>
                  <span className="text-[#C9A96E]/70 text-[9px] tracking-[0.28em] uppercase font-inter">Zweck</span>
                  <span className="text-[#C9A96E]/70 text-[9px] tracking-[0.28em] uppercase font-inter">Laufzeit</span>
                </div>
                <div className="grid grid-cols-3 gap-0 px-5 py-4">
                  <span className="font-mono text-[12px] text-[#FDFCFA]/60">luzdeluna_cookie_consent</span>
                  <span className="text-[13px]">Speichert Ihre Cookie-Einwilligung (localStorage)</span>
                  <span className="text-[13px]">Unbegrenzt (bis zum manuellen Löschen)</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Rechtsgrundlage
              </h2>
              <p>
                Technisch notwendige Cookies sind nach § 25 Abs. 2 Nr. 2 TTDSG ohne Einwilligung zulässig, da sie ausschließlich der Übertragung einer Nachricht oder zur Bereitstellung eines ausdrücklich gewünschten Dienstes dienen.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Cookies verwalten & löschen
              </h2>
              <p className="mb-4">
                Sie können den localStorage-Eintrag jederzeit in den Entwicklerwerkzeugen Ihres Browsers löschen (meist: F12 → Anwendung → Lokaler Speicher → Eintrag entfernen).
              </p>
              <p>
                Darüber hinaus können Sie Cookies im Browser über folgende Pfade verwalten:
              </p>
              <ul className="mt-3 space-y-1.5 list-none">
                {[
                  ['Chrome', 'Einstellungen → Datenschutz → Cookies und andere Websitedaten'],
                  ['Firefox', 'Einstellungen → Datenschutz & Sicherheit → Cookies und Websitedaten'],
                  ['Safari', 'Einstellungen → Datenschutz → Cookies und Websitedaten verwalten'],
                  ['Edge', 'Einstellungen → Datenschutz → Cookies und Websiteberechtigungen'],
                ].map(([browser, path]) => (
                  <li key={browser} className="flex items-start gap-2">
                    <span className="text-[#C9A96E]/50 shrink-0">—</span>
                    <span><strong className="text-[#FDFCFA]/70 font-medium">{browser}:</strong> {path}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Drittanbieter-Cookies
              </h2>
              <p>
                Diese Website bindet Google Maps ein. Beim Laden der Karte können Cookies von Google gesetzt werden. Weitere Informationen dazu finden Sie in der Datenschutzerklärung von Google:{' '}
                <span className="text-[#C9A96E]/70">policies.google.com/privacy</span>.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                Kontakt
              </h2>
              <p>
                Bei Fragen zu unserer Cookie-Richtlinie wenden Sie sich an:<br />
                Azer Badal Dashto · Luz de Luna Restaurant &amp; Café<br />
                <a href="mailto:info@luz-de-luna.de" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">
                  info@luz-de-luna.de
                </a>
              </p>
            </section>

            <p className="text-[#D4C9B8]/30 text-[12px]">Stand: Mai 2026</p>
          </div>

          <div className="mt-14 pt-10 border-t border-[#FDFCFA]/8 flex gap-8">
            <Link href="/" className="inline-flex items-center gap-2 text-[#C9A96E]/60 font-inter text-[10px] tracking-[0.28em] uppercase hover:text-[#C9A96E] transition-colors duration-200">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Startseite
            </Link>
            <Link href="/datenschutz" className="text-[#C9A96E]/60 font-inter text-[10px] tracking-[0.28em] uppercase hover:text-[#C9A96E] transition-colors duration-200">
              Datenschutz
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

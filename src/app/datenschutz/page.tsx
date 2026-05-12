import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung des Restaurants Luz de Luna in Hannover-Linden gemäß DSGVO.',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
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
              Datenschutz
            </h1>
            <div className="w-10 h-px bg-[#C9A96E] mt-6" />
          </div>

          <div className="space-y-10 text-[#D4C9B8]/65 font-inter font-light text-[14px] leading-[1.95]">

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                1. Datenschutz auf einen Blick
              </h2>
              <p className="mb-4">
                <strong className="text-[#FDFCFA]/80 font-medium">Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <p>
                <strong className="text-[#FDFCFA]/80 font-medium">Datenerfassung auf dieser Website:</strong> Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem{' '}
                <Link href="/impressum" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">
                  Impressum
                </Link>{' '}
                dieser Website entnehmen.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                2. Verantwortliche Stelle
              </h2>
              <p>
                Luz de Luna Restaurant &amp; Café<br />
                Falkenstraße 22A, 30449 Hannover<br />
                E-Mail:{' '}
                <a href="mailto:info@luz-de-luna.de" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">
                  info@luz-de-luna.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                3. Cookies
              </h2>
              <p>
                Diese Website verwendet ausschließlich technisch notwendige Cookies. Diese dienen dazu, Ihre Cookie-Einstellungen zu speichern. Es werden keine Tracking- oder Marketing-Cookies eingesetzt. Eine Einwilligung ist für technisch notwendige Cookies nach § 25 Abs. 2 TTDSG nicht erforderlich.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                4. Kontaktformular / Reservierungsanfragen
              </h2>
              <p className="mb-4">
                Wenn Sie uns per Reservierungsformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p>
                Die von Ihnen im Formular eingegebenen Daten (Name, E-Mail, Telefon, Datum, Personenanzahl, Sonderwünsche) werden ausschließlich zur Bearbeitung Ihrer Reservierungsanfrage verwendet und nicht an Dritte weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                5. Server-Logfiles
              </h2>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                6. Google Maps
              </h2>
              <p>
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">
                7. Ihre Rechte
              </h2>
              <p className="mb-4">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im{' '}
                <Link href="/impressum" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">
                  Impressum
                </Link>{' '}
                angegebenen Adresse an uns wenden. Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            <section>
              <p className="text-[#D4C9B8]/35 text-[12px]">
                Stand: Mai 2026
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

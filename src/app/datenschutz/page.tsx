import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung des Restaurants Luz de Luna in Hannover-Linden gemäß DSGVO.',
  robots: { index: false, follow: false },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">{title}</h2>
      <div className="text-[#D4C9B8]/65 font-inter font-light text-[14px] leading-[1.95]">{children}</div>
    </section>
  )
}

export default function DatenschutzPage() {
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
              Datenschutz&shy;erklärung
            </h1>
            <div className="w-10 h-px bg-[#C9A96E] mt-6" />
          </div>

          <div className="space-y-10">

            <Section title="1. Verantwortliche Stelle">
              <p>
                <strong className="text-[#FDFCFA]/85 font-medium">Luz de Luna Restaurant &amp; Café</strong><br />
                Inhaber: Azer Badal Dashto<br />
                Falkenstraße 22A, 30449 Hannover<br />
                E-Mail:{' '}
                <a href="mailto:info@luz-de-luna.de" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">
                  info@luz-de-luna.de
                </a>
              </p>
            </Section>

            <Section title="2. Datenschutz auf einen Blick">
              <p className="mb-4">
                <strong className="text-[#FDFCFA]/80 font-medium">Allgemeines:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <p>
                <strong className="text-[#FDFCFA]/80 font-medium">Datenerhebung:</strong> Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber (Azer Badal Dashto). Die Kontaktdaten finden Sie im{' '}
                <Link href="/impressum" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">Impressum</Link>.
              </p>
            </Section>

            <Section title="3. Cookies">
              <p>
                Diese Website verwendet ausschließlich technisch notwendige Cookies (localStorage) zur Speicherung Ihrer Cookie-Einstellungen. Es werden keine Tracking-, Analyse- oder Marketing-Cookies eingesetzt. Eine Einwilligung ist für technisch notwendige Cookies nach § 25 Abs. 2 Nr. 2 TTDSG nicht erforderlich. Weitere Informationen finden Sie in unserer{' '}
                <Link href="/cookies" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">Cookie-Richtlinie</Link>.
              </p>
            </Section>

            <Section title="4. Kontaktformular / Reservierungsanfragen">
              <p className="mb-4">
                Wenn Sie uns per Reservierungsformular kontaktieren, werden Ihre Angaben (Name, E-Mail, Telefon, Datum, Personenanzahl, Sonderwünsche) zur Bearbeitung der Anfrage verarbeitet und per E-Mail an den Betreiber übermittelt. Diese Daten werden nicht an Dritte weitergegeben.
              </p>
              <p>
                <strong className="text-[#FDFCFA]/80 font-medium">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung / vorvertragliche Maßnahmen).<br />
                <strong className="text-[#FDFCFA]/80 font-medium">Speicherdauer:</strong> Die Daten werden gelöscht, sobald die Reservierung abgewickelt wurde und keine gesetzlichen Aufbewahrungspflichten mehr bestehen.
              </p>
            </Section>

            <Section title="5. Server-Logfiles">
              <p>
                Der Hosting-Anbieter erhebt automatisch Server-Logfiles (IP-Adresse, Browsertyp, Betriebssystem, Referrer, Uhrzeit). Diese Daten werden nicht mit anderen Quellen zusammengeführt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Stabilität und Sicherheit).
              </p>
            </Section>

            <Section title="6. Google Maps">
              <p>
                Diese Seite nutzt Google Maps (Google Ireland Limited, Gordon House, Dublin 4). Bei Nutzung wird Ihre IP-Adresse an Google übermittelt und ggf. in die USA übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Sie können die Übertragung verhindern, indem Sie JavaScript in Ihrem Browser deaktivieren.
              </p>
            </Section>

            <Section title="7. Hosting (Vercel)">
              <p>
                Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA, gehostet. Vercel verarbeitet Server-Logfiles gemäß seiner{' '}
                <span className="text-[#C9A96E]/70">Datenschutzrichtlinie</span>. Es besteht ein Auftragsverarbeitungsvertrag (DPA) mit Vercel.
              </p>
            </Section>

            <Section title="8. Ihre Rechte (DSGVO Art. 15–22)">
              <ul className="space-y-1 list-none">
                {[
                  'Recht auf Auskunft (Art. 15)',
                  'Recht auf Berichtigung (Art. 16)',
                  'Recht auf Löschung (Art. 17)',
                  'Recht auf Einschränkung der Verarbeitung (Art. 18)',
                  'Recht auf Datenübertragbarkeit (Art. 20)',
                  'Widerspruchsrecht (Art. 21)',
                  'Beschwerderecht bei der Aufsichtsbehörde (LfD Niedersachsen)',
                ].map(r => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="text-[#C9A96E]/50 mt-1">—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich an:{' '}
                <a href="mailto:info@luz-de-luna.de" className="text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-200">
                  info@luz-de-luna.de
                </a>
              </p>
            </Section>

            <p className="text-[#D4C9B8]/30 text-[12px]">Stand: Mai 2026</p>
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

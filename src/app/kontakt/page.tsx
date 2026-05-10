import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import PageHeader from '@/components/PageHeader'
import MapSection from '@/components/MapSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kontakt & Anfahrt – Luz de Luna Hannover | Öffnungszeiten',
  description: 'Luz de Luna in Hannover Mitte: Adresse, Öffnungszeiten, Telefon und Anfahrt. Georgstraße 10, 30159 Hannover. Mo–Fr 08–22 Uhr, Sa–So 09–23 Uhr.',
  keywords: ['Luz de Luna Adresse', 'Restaurant Hannover Öffnungszeiten', 'Café Hannover Kontakt', 'Georgstraße Hannover Restaurant', 'Restaurant Hannover Mitte'],
  alternates: { canonical: 'https://luz-de-luna-eight.vercel.app/kontakt' },
}

export default function KontaktPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Besuchen Sie uns"
        title="Anfahrt & Kontakt"
        subtitle="Georgstraße 10 · 30159 Hannover"
      />
      <MapSection hideHeader />
      <Footer />
    </main>
  )
}

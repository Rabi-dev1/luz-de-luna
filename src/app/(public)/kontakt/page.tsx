import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SubpageHeader from '@/components/SubpageHeader'
import MapSection from '@/components/MapSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kontakt & Öffnungszeiten – Luz de Luna Hannover',
  description: 'Luz de Luna in Hannover Mitte: Adresse Georgstraße 10, Öffnungszeiten Mo–Fr 08–22, Sa–So 09–23 Uhr. Telefon und Anfahrt.',
  keywords: ['Luz de Luna Adresse', 'Restaurant Hannover Öffnungszeiten', 'Café Hannover Kontakt', 'Georgstraße Hannover'],
}

export default function Page() {
  return (
    <main>
      <Navigation />
      <SubpageHeader
        eyebrow="Besuchen Sie uns"
        title="Anfahrt & Kontakt"
        subtitle="Georgstraße 10 · 30159 Hannover"
        imageUrl="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
        breadcrumb={{ label: 'Kontakt', href: '/kontakt' }}
      />
      <MapSection hideHeader />
      <Footer />
    </main>
  )
}

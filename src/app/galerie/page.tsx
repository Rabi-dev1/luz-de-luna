import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import PageHeader from '@/components/PageHeader'
import GallerySection from '@/components/GallerySection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Galerie – Luz de Luna Hannover | Restaurant & Café',
  description: 'Bilder und Eindrücke aus dem Luz de Luna in Hannover. Entdecken Sie die Atmosphäre unseres Restaurants, unsere Gerichte und das besondere Ambiente.',
  keywords: ['Restaurant Hannover Bilder', 'Café Hannover Galerie', 'Luz de Luna Galerie', 'Restaurant Atmosphäre Hannover'],
  alternates: { canonical: 'https://luz-de-luna-eight.vercel.app/galerie' },
}

export default function GaleriePage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Eindrücke"
        title="Galerie"
        subtitle="Lassen Sie sich von unserer Welt inspirieren"
      />
      <GallerySection hideHeader />
      <Footer />
    </main>
  )
}

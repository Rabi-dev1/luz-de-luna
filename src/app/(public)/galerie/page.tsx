import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SubpageHeader from '@/components/SubpageHeader'
import GallerySection from '@/components/GallerySection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Galerie – Luz de Luna Hannover',
  description: 'Eindrücke aus dem Luz de Luna in Hannover. Bilder unseres Restaurants, der Gerichte und des Ambientes.',
  keywords: ['Restaurant Hannover Bilder', 'Café Hannover Galerie', 'Luz de Luna Fotos'],
}

export default function Page() {
  return (
    <main>
      <Navigation />
      <SubpageHeader
        eyebrow="Eindrücke"
        title="Galerie"
        subtitle="Lassen Sie sich inspirieren"
        imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        breadcrumb={{ label: 'Galerie', href: '/galerie' }}
      />
      <GallerySection hideHeader />
      <Footer />
    </main>
  )
}

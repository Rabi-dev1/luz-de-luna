import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import PageHeader from '@/components/PageHeader'
import MenuSection from '@/components/MenuSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Speisekarte – Luz de Luna Hannover | Frühstück, Lunch & Dinner',
  description: 'Entdecken Sie die Speisekarte von Luz de Luna in Hannover. Frühstück, Lunch, Dinner und Cocktails mit regionalen Zutaten aus Niedersachsen. Vegetarische & vegane Optionen.',
  keywords: ['Speisekarte Hannover', 'Frühstück Hannover', 'Lunch Hannover', 'Dinner Hannover', 'vegane Küche Hannover', 'regionale Küche Hannover', 'Café Speisekarte Hannover'],
  alternates: { canonical: 'https://luz-de-luna-eight.vercel.app/speisekarte' },
}

export default function SpeisekartePage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Unsere Karte"
        title="Speisekarte"
        subtitle="Saisonal, regional, mit Leidenschaft zubereitet"
      />
      <MenuSection hideHeader />
      <Footer />
    </main>
  )
}

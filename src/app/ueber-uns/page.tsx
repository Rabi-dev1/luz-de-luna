import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import PageHeader from '@/components/PageHeader'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Über uns – Luz de Luna Hannover | Unsere Geschichte',
  description: 'Erfahren Sie mehr über Luz de Luna in Hannover. Seit 2018 stehen wir für regionale Küche, nachhaltige Zutaten und einzigartige Gastfreundschaft mitten in Hannover.',
  keywords: ['Luz de Luna Geschichte', 'Restaurant Hannover Über uns', 'regionale Küche Hannover', 'nachhaltig essen Hannover', 'Café Hannover Geschichte'],
  alternates: { canonical: 'https://luz-de-luna-eight.vercel.app/ueber-uns' },
}

export default function UeberUnsPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Unsere Geschichte"
        title="Über uns"
        subtitle="Leidenschaft, Regionalität und Hannover"
      />
      <AboutSection />
      <Footer />
    </main>
  )
}

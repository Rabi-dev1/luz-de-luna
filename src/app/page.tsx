import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import HighlightsSection from '@/components/HighlightsSection'
import ReservationTeaser from '@/components/ReservationTeaser'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Luz de Luna – Restaurant & Café in Hannover',
  description: 'Luz de Luna in Hannover: Frühstück, Kaffee & Kuchen, Abendkarte und Events. Regionale Küche, gemütliche Atmosphäre, mitten in der Stadt. Jetzt Tisch reservieren!',
  keywords: ['Restaurant Hannover', 'Café Hannover', 'Luz de Luna Hannover', 'Frühstück Hannover', 'Dinner Hannover Mitte'],
}

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <ReservationTeaser />
      <Footer />
    </main>
  )
}

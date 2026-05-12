import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import MenuCategoriesSection from '@/components/MenuCategoriesSection'
import MoodSection from '@/components/MoodSection'
import AboutSection from '@/components/AboutSection'
import FindUsSection from '@/components/FindUsSection'
import ReservationSection from '@/components/ReservationSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Luz de Luna – Restaurant & Café Hannover',
  description: 'Luz de Luna in Hannover-Linden: Frühstück, Abendkarte & Drinks. Regionale Küche, elegante Atmosphäre. Falkenstraße 22A. Jetzt Tisch reservieren!',
}

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <MenuCategoriesSection />
      <MoodSection />
      <AboutSection />
      <FindUsSection />
      <ReservationSection />
      <Footer />
    </main>
  )
}

import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import MenuCategoriesSection from '@/components/MenuCategoriesSection'
import MoodSection from '@/components/MoodSection'
import AboutSection from '@/components/AboutSection'
import MoonPhasesSection from '@/components/MoonPhasesSection'
import GallerySection from '@/components/GallerySection'
import FindUsSection from '@/components/FindUsSection'
import ReservationSection from '@/components/ReservationSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Luz de Luna – Restaurant & Café Hannover-Linden',
  description: 'Luz de Luna in Hannover-Linden: Mediterrane Küche mit regionalen Zutaten. Frühstück, Abendkarte & Drinks täglich frisch. Online reservieren – Falkenstraße 22A.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Luz de Luna – Restaurant & Café Hannover',
    description: 'Mediterrane Küche mit regionalen Zutaten in Hannover-Linden. Jetzt Tisch reservieren.',
    url: '/',
  },
}

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <MenuCategoriesSection />
      <MoodSection />
      <AboutSection />
      <MoonPhasesSection />
      <GallerySection />
      <FindUsSection />
      <ReservationSection />
      <Footer />
    </main>
  )
}

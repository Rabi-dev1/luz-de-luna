import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import HomeTeaser from '@/components/HomeTeaser'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Luz de Luna – Restaurant & Café in Hannover',
  description: 'Luz de Luna in Hannover: Genießen Sie Frühstück, Lunch & Dinner in unserem modernen Restaurant & Café. Regionale Küche, besondere Atmosphäre. Jetzt Tisch reservieren!',
  keywords: ['Restaurant Hannover', 'Café Hannover', 'Luz de Luna Hannover', 'Essen gehen Hannover', 'Dinner Hannover'],
  alternates: { canonical: 'https://luz-de-luna-eight.vercel.app/' },
}

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <HomeTeaser />
      <Footer />
    </main>
  )
}

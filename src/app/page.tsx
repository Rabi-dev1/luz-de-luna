import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import MenuSection from '@/components/MenuSection'
import AboutSection from '@/components/AboutSection'
import GallerySection from '@/components/GallerySection'
import ReservationSection from '@/components/ReservationSection'
import MapSection from '@/components/MapSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <ReservationSection />
      <MapSection />
      <Footer />
    </main>
  )
}

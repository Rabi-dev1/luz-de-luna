import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SubpageHeader from '@/components/SubpageHeader'
import ReservationSection from '@/components/ReservationSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tisch reservieren – Luz de Luna Hannover',
  description: 'Reservieren Sie jetzt online Ihren Tisch im Luz de Luna in Hannover. Einfach, schnell und kostenlos. Wir freuen uns auf Sie!',
  keywords: ['Tisch reservieren Hannover', 'Restaurant Hannover buchen', 'Luz de Luna Reservierung'],
}

export default function Page() {
  return (
    <main>
      <Navigation />
      <SubpageHeader
        eyebrow="Online Buchung"
        title="Reservierung"
        subtitle="Wir freuen uns auf Ihren Besuch"
        imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
        breadcrumb={{ label: 'Reservierung', href: '/reservierung' }}
      />
      <ReservationSection hideHeader />
      <Footer />
    </main>
  )
}

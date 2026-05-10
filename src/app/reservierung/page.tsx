import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import PageHeader from '@/components/PageHeader'
import ReservationSection from '@/components/ReservationSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tisch reservieren – Luz de Luna Hannover',
  description: 'Reservieren Sie jetzt Ihren Tisch im Luz de Luna in Hannover. Online-Buchung für Frühstück, Lunch & Dinner. Schnell, einfach und kostenlos.',
  keywords: ['Tisch reservieren Hannover', 'Restaurant Hannover reservieren', 'Luz de Luna Reservierung', 'online Reservierung Restaurant Hannover'],
  alternates: { canonical: 'https://luz-de-luna-eight.vercel.app/reservierung' },
}

export default function ReservierungPage() {
  return (
    <main>
      <Navigation />
      <PageHeader
        eyebrow="Online Buchung"
        title="Reservierung"
        subtitle="Wir freuen uns auf Ihren Besuch"
      />
      <ReservationSection hideHeader />
      <Footer />
    </main>
  )
}

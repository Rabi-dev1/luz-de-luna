import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SubpageHeader from '@/components/SubpageHeader'
import EventsContent from '@/components/subpages/EventsContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Events & Private Feiern Hannover – Luz de Luna',
  description: 'Geburtstage, Firmenfeiern und private Events bei Luz de Luna in Hannover. Wir machen Ihren Anlass unvergesslich. Jetzt anfragen!',
  keywords: ['Event Location Hannover', 'Geburtstag feiern Hannover', 'Firmenfeier Hannover', 'Private Feier Restaurant Hannover'],
}

export default function Page() {
  return (
    <main>
      <Navigation />
      <SubpageHeader
        eyebrow="Auf Anfrage"
        title="Events & Feiern"
        subtitle="Machen Sie Ihren Anlass unvergesslich"
        imageUrl="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80"
        breadcrumb={{ label: 'Events', href: '/events' }}
      />
      <EventsContent />
      <Footer />
    </main>
  )
}

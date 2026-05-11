import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SubpageHeader from '@/components/SubpageHeader'
import MenuPageContent from '@/components/subpages/MenuPageContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Frühstück & Brunch Hannover',
  description: 'Frühstück & Brunch bei Luz de Luna in Hannover. Hausgemachte Spezialitäten ab 08:00 Uhr – Avocado Toast, Shakshuka, Granola Bowl und mehr.',
  keywords: ['Frühstück Hannover', 'Brunch Hannover', 'Café Frühstück Hannover', 'Avocado Toast Hannover', 'Frühstück Hannover Mitte'],
}

export default function Page() {
  return (
    <main>
      <Navigation />
      <SubpageHeader
        eyebrow="Ab 08:00 Uhr"
        title="Frühstück & Brunch"
        subtitle="Der perfekte Start in den Tag"
        imageUrl="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1920&q=80"
        breadcrumb={{ label: 'Frühstück & Brunch', href: '/fruehstueck' }}
      />
      <MenuPageContent categoryId="breakfast" />
      <Footer />
    </main>
  )
}

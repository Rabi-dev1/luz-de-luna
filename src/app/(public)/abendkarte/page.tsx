import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SubpageHeader from '@/components/SubpageHeader'
import MenuPageContent from '@/components/subpages/MenuPageContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Abendkarte Hannover – Dinner bei Luz de Luna',
  description: 'Die Abendkarte von Luz de Luna in Hannover. Regionale Küche mit mediterranen Einflüssen – Rinderfilet, Branzino, Veganes Menü. Ab 17:00 Uhr.',
  keywords: ['Dinner Hannover', 'Abendessen Hannover', 'Restaurant Abendkarte Hannover', 'Dinner Hannover Mitte', 'Abendmenü Hannover'],
}

export default function Page() {
  return (
    <main>
      <Navigation />
      <SubpageHeader
        eyebrow="Ab 17:00 Uhr"
        title="Abendkarte"
        subtitle="Regionale Küche, mediterrane Einflüsse"
        imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
        breadcrumb={{ label: 'Abendkarte', href: '/abendkarte' }}
      />
      <MenuPageContent categoryId="dinner" />
      <Footer />
    </main>
  )
}

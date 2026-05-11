import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SubpageHeader from '@/components/SubpageHeader'
import MenuPageContent from '@/components/subpages/MenuPageContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kaffee & Kuchen Hannover',
  description: 'Hausgemachte Kuchen, Torten und Spezialitätenkaffees bei Luz de Luna in Hannover. Der beste Flat White und frische Backwaren täglich.',
  keywords: ['Kaffee Hannover', 'Kuchen Hannover', 'Café Hannover', 'Cappuccino Hannover', 'Kaffeehaus Hannover'],
}

export default function Page() {
  return (
    <main>
      <Navigation />
      <SubpageHeader
        eyebrow="Täglich frisch"
        title="Kaffee & Kuchen"
        subtitle="Hausgemacht, mit Liebe gebacken"
        imageUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
        breadcrumb={{ label: 'Kaffee & Kuchen', href: '/kaffee-kuchen' }}
      />
      <MenuPageContent categoryId="drinks" />
      <Footer />
    </main>
  )
}

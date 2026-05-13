import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { menuCategories } from '@/lib/menuData'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MenuCategoryPageClient from '@/components/MenuCategoryPageClient'

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return menuCategories.map(c => ({ category: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const cat = menuCategories.find(c => c.slug === category)
  if (!cat) return {}

  const title = `${cat.label} – Luz de Luna Hannover`
  const description = `${cat.label} bei Luz de Luna in Hannover-Linden. ${cat.description} Frisch zubereitet · Falkenstraße 22A, 30449 Hannover. Jetzt reservieren!`

  return {
    title,
    description,
    alternates: {
      canonical: `/menu/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `/menu/${category}`,
      type: 'website',
      images: [
        {
          url: cat.imageUrl,
          width: 1200,
          height: 800,
          alt: `${cat.label} – Luz de Luna Hannover`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [cat.imageUrl],
    },
  }
}

export default async function MenuCategoryPage({ params }: PageProps) {
  const { category } = await params
  const cat = menuCategories.find(c => c.slug === category)
  if (!cat) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: cat.label,
    description: cat.description,
    inLanguage: 'de',
    hasMenuSection: (cat.subsections ?? [{ id: cat.id, label: cat.label, items: cat.items }]).map(sub => ({
      '@type': 'MenuSection',
      name: sub.label,
      hasMenuItem: sub.items.map(item => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: item.price.replace(/[€+]/g, '').replace(',', '.').trim().split(' ')[0],
          priceCurrency: 'EUR',
        },
      })),
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <MenuCategoryPageClient category={cat} />
      <Footer />
    </main>
  )
}

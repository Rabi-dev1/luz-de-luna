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
  return {
    title: `${cat.label} – Luz de Luna Hannover`,
    description: `${cat.label} bei Luz de Luna in Hannover. ${cat.description} Falkenstraße 22A, 30449 Hannover.`,
  }
}

export default async function MenuCategoryPage({ params }: PageProps) {
  const { category } = await params
  const cat = menuCategories.find(c => c.slug === category)
  if (!cat) notFound()

  return (
    <main>
      <Navigation />
      <MenuCategoryPageClient category={cat} />
      <Footer />
    </main>
  )
}

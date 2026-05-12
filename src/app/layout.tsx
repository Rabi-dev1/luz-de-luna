import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://luz-de-luna-hannover.de')

const ogImage = 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1200&q=90'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Luz de Luna – Restaurant & Café Hannover-Linden',
    template: '%s | Luz de Luna Hannover',
  },
  description: 'Luz de Luna in Hannover-Linden: Mediterrane Küche mit regionalen Zutaten. Frühstück, Abendkarte & Drinks. Reservierung online. Falkenstraße 22A, 30449 Hannover.',
  keywords: [
    'Restaurant Hannover', 'Café Hannover', 'Luz de Luna Hannover',
    'Restaurant Hannover Linden', 'Frühstück Hannover', 'Brunch Hannover',
    'Abendessen Hannover', 'Mediterrane Küche Hannover', 'Reservierung Restaurant Hannover',
    'Falkenstraße Hannover', 'regionale Küche Hannover', 'Tisch reservieren Hannover',
  ],
  authors: [{ name: 'Luz de Luna' }],
  creator: 'Luz de Luna',
  publisher: 'Luz de Luna',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    title: 'Luz de Luna – Restaurant & Café Hannover',
    description: 'Mediterrane Küche mit regionalen Zutaten. Frühstück, Abendkarte & Drinks in Hannover-Linden.',
    url: siteUrl,
    siteName: 'Luz de Luna Hannover',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 800, alt: 'Luz de Luna Restaurant Hannover' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luz de Luna – Restaurant & Café Hannover',
    description: 'Mediterrane Küche mit regionalen Zutaten in Hannover-Linden.',
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'restaurant',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'CafeOrCoffeeShop', 'LocalBusiness'],
  name: 'Luz de Luna',
  description: 'Modernes Restaurant & Café in Hannover-Linden mit mediterraner Küche und regionalen Zutaten.',
  url: siteUrl,
  telephone: '+49-511-12345',
  email: 'info@luz-de-luna.de',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, EC-Karte',
  servesCuisine: ['Mediterran', 'Deutsch', 'International'],
  image: ogImage,
  logo: ogImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Falkenstraße 22A',
    addressLocality: 'Hannover',
    addressRegion: 'Niedersachsen',
    postalCode: '30449',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.3652,
    longitude: 9.7068,
  },
  hasMap: `https://maps.google.com/maps?q=Falkenstra%C3%9Fe+22A,+30449+Hannover`,
  menu: `${siteUrl}/menu/abendkarte`,
  acceptsReservations: true,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    bestRating: '5',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '23:00',
    },
  ],
  sameAs: [
    'https://www.lieferando.de/speisekarte/luz-de-luna-cafe-bar-restaurant',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/herobild.jpg.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}

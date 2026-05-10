import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Luz de Luna – Restaurant & Café in Hannover',
  description: 'Luz de Luna in Hannover: Genießen Sie Frühstück, Lunch & Dinner in unserem modernen Restaurant & Café. Regionale Küche, entspannte Atmosphäre. Jetzt Tisch reservieren!',
  keywords: ['Restaurant Hannover', 'Café Hannover', 'Luz de Luna Hannover', 'Frühstück Hannover', 'Dinner Hannover', 'Lunch Hannover', 'Essen in der Nähe'],
  openGraph: {
    title: 'Luz de Luna – Restaurant & Café in Hannover',
    description: 'Modernes Restaurant & Café mitten in Hannover. Frühstück, Lunch & Dinner mit regionalen Zutaten.',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Luz de Luna',
  description: 'Modernes Restaurant & Café in Hannover mit regionaler Küche',
  url: 'https://luz-de-luna-hannover.de',
  telephone: '+49-511-123456',
  email: 'info@luz-de-luna.de',
  priceRange: '€€',
  servesCuisine: ['Deutsch', 'Mediterran', 'International'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Georgstraße 10',
    addressLocality: 'Hannover',
    postalCode: '30159',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.3759,
    longitude: 9.7320,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '09:00', closes: '23:00' },
  ],
  hasMap: 'https://maps.google.com/?q=Luz+de+Luna+Hannover',
  sameAs: ['https://www.instagram.com/luzdluna_hannover'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#1a1a2e] text-[#f5f0e8] font-inter antialiased">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: { default: 'Luz de Luna – Restaurant & Café Hannover', template: '%s | Luz de Luna Hannover' },
  description: 'Luz de Luna in Hannover: Frühstück, Abendkarte & Drinks. Regionale Küche, luxuriöse Atmosphäre. Falkenstraße 22A, 30449 Hannover. Jetzt reservieren!',
  keywords: ['Restaurant Hannover', 'Café Hannover', 'Luz de Luna Hannover', 'Frühstück Hannover Linden', 'Dinner Hannover'],
  openGraph: {
    title: 'Luz de Luna – Restaurant & Café Hannover',
    description: 'Genussmomente mitten in Hannover',
    locale: 'de_DE',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Luz de Luna',
  description: 'Modernes Restaurant & Café in Hannover mit regionaler Küche',
  telephone: '+49-511-123456',
  email: 'info@luz-de-luna.de',
  priceRange: '€€',
  servesCuisine: ['Deutsch', 'Mediterran', 'International'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Falkenstraße 22A',
    addressLocality: 'Hannover',
    postalCode: '30449',
    addressCountry: 'DE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 52.3652, longitude: 9.7068 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '09:00', closes: '23:00' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}

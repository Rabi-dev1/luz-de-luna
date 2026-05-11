import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400', '700', '900'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: { default: 'Luz de Luna – Restaurant & Café Hannover', template: '%s | Luz de Luna Hannover' },
  description: 'Luz de Luna in Hannover: Frühstück, Kaffee & Kuchen, Abendkarte und Events. Regionale Küche, gemütliche Atmosphäre. Tisch reservieren!',
  keywords: ['Restaurant Hannover', 'Café Hannover', 'Luz de Luna Hannover', 'Frühstück Hannover', 'Kaffee Kuchen Hannover'],
  openGraph: { title: 'Luz de Luna – Restaurant & Café Hannover', description: 'Genussmomente mitten in Hannover', locale: 'de_DE', type: 'website' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Luz de Luna',
  description: 'Restaurant & Café in Hannover mit regionaler Küche',
  telephone: '+49-511-123456',
  priceRange: '€€',
  servesCuisine: ['Deutsch', 'Mediterran', 'International'],
  address: { '@type': 'PostalAddress', streetAddress: 'Georgstraße 10', addressLocality: 'Hannover', postalCode: '30159', addressCountry: 'DE' },
  geo: { '@type': 'GeoCoordinates', latitude: 52.3759, longitude: 9.7320 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '09:00', closes: '23:00' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#FAF7F2] text-[#1C160D] font-inter antialiased">
        {children}
      </body>
    </html>
  )
}

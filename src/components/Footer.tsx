import Link from 'next/link'
import { Phone, Mail, MapPin, Camera, Globe } from 'lucide-react'

const footerNav = [
  { label: 'Frühstück & Brunch', href: '/fruehstueck' },
  { label: 'Kaffee & Kuchen', href: '/kaffee-kuchen' },
  { label: 'Abendkarte', href: '/abendkarte' },
  { label: 'Events', href: '/events' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Reservierung', href: '/reservierung' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C160D] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="font-playfair text-2xl font-bold text-[#D4AF5A] block mb-4">
              Luz de Luna
            </Link>
            <p className="text-[#FAF7F2]/40 font-inter text-sm leading-relaxed mb-5">
              Restaurant & Café in Hannover. Regionale Küche, warme Atmosphäre, unvergessliche Momente.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/luzdluna_hannover" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#B8962E]/30 rounded-full flex items-center justify-center text-[#B8962E] hover:bg-[#B8962E]/10 transition-colors" aria-label="Instagram">
                <Camera size={15} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#B8962E]/30 rounded-full flex items-center justify-center text-[#B8962E] hover:bg-[#B8962E]/10 transition-colors" aria-label="Facebook">
                <Globe size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-playfair font-bold text-[#FAF7F2] mb-4 text-sm tracking-wide">Navigation</h3>
            <ul className="space-y-2">
              {footerNav.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#FAF7F2]/45 hover:text-[#D4AF5A] font-inter text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair font-bold text-[#FAF7F2] mb-4 text-sm tracking-wide">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#B8962E] mt-0.5 shrink-0" />
                <p className="text-[#FAF7F2]/45 font-inter text-sm">Georgstraße 10<br />30159 Hannover</p>
              </div>
              <a href="tel:+4951112345" className="flex items-center gap-3 group">
                <Phone size={14} className="text-[#B8962E] shrink-0" />
                <span className="text-[#FAF7F2]/45 font-inter text-sm group-hover:text-[#D4AF5A] transition-colors">+49 511 12345</span>
              </a>
              <a href="mailto:info@luz-de-luna.de" className="flex items-center gap-3 group">
                <Mail size={14} className="text-[#B8962E] shrink-0" />
                <span className="text-[#FAF7F2]/45 font-inter text-sm group-hover:text-[#D4AF5A] transition-colors">info@luz-de-luna.de</span>
              </a>
            </div>
            <div className="mt-6 pt-5 border-t border-[#B8962E]/10">
              <p className="text-[#FAF7F2]/25 text-xs font-inter">Mo–Fr 08–22 Uhr · Sa–So 09–23 Uhr</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#B8962E]/10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#FAF7F2]/25 font-inter text-xs">© 2025 Luz de Luna. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="#" className="text-[#FAF7F2]/25 hover:text-[#D4AF5A] font-inter text-xs transition-colors">Impressum</a>
            <a href="#" className="text-[#FAF7F2]/25 hover:text-[#D4AF5A] font-inter text-xs transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

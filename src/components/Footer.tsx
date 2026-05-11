import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1A1815] text-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <p className="font-cormorant text-3xl font-semibold text-[#C9A96E] tracking-widest uppercase mb-4">Luz de Luna</p>
            <p className="text-[#D4C9B8]/40 font-inter text-sm leading-relaxed max-w-xs">
              Restaurant & Café in Hannover-Linden. Regionale Küche, warme Atmosphäre, unvergessliche Momente.
            </p>
          </div>
          <div>
            <h4 className="text-[#D4C9B8]/40 font-inter text-[10px] tracking-[0.2em] uppercase mb-4">Karte</h4>
            <div className="space-y-2">
              {[['Frühstück & Brunch', '/menu/fruehstueck'], ['Abendkarte', '/menu/abendkarte'], ['Drinks & Kaffee', '/menu/drinks'], ['Reservierung', '/#reservation']].map(([l,h])=>(
                <Link key={h} href={h} className="block text-[#D4C9B8]/60 font-inter text-sm hover:text-[#C9A96E] transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#D4C9B8]/40 font-inter text-[10px] tracking-[0.2em] uppercase mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={12} className="text-[#C9A96E] mt-0.5 shrink-0" />
                <p className="text-[#D4C9B8]/60 font-inter text-sm">Falkenstraße 22A<br />30449 Hannover</p>
              </div>
              <a href="tel:+4951112345" className="flex items-center gap-2 group">
                <Phone size={12} className="text-[#C9A96E] shrink-0" />
                <span className="text-[#D4C9B8]/60 font-inter text-sm group-hover:text-[#C9A96E] transition-colors">+49 511 12345</span>
              </a>
              <a href="mailto:info@luz-de-luna.de" className="flex items-center gap-2 group">
                <Mail size={12} className="text-[#C9A96E] shrink-0" />
                <span className="text-[#D4C9B8]/60 font-inter text-sm group-hover:text-[#C9A96E] transition-colors">info@luz-de-luna.de</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#D4C9B8]/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#D4C9B8]/25 font-inter text-xs">© 2025 Luz de Luna. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="#" className="text-[#D4C9B8]/25 hover:text-[#C9A96E] font-inter text-xs transition-colors">Impressum</a>
            <a href="#" className="text-[#D4C9B8]/25 hover:text-[#C9A96E] font-inter text-xs transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

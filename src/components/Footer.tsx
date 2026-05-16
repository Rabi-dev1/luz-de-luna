import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-[#FDFCFA]/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/logo-circle.jpg"
                alt="Luz de Luna Logo"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-cormorant text-3xl font-semibold text-[#C9A96E] tracking-[0.06em] leading-none">Luz de Luna</p>
                <p className="text-[#FAF8F4]/20 font-inter text-[9px] tracking-[0.3em] uppercase mt-1">Hannover · Linden</p>
              </div>
            </div>
            <p className="text-[#D4C9B8]/35 font-inter font-light text-[13px] leading-[1.9] max-w-[260px]">
              Restaurant & Café in Hannover-Linden.<br />
              Regionale Küche, warme Atmosphäre,<br />
              unvergessliche Momente.
            </p>
          </div>

          {/* Menu links */}
          <div>
            <h4 className="text-[#FAF8F4]/25 font-inter text-[9px] tracking-[0.3em] uppercase mb-5">Karte</h4>
            <div className="space-y-3">
              {[
                ['Frühstück & Brunch', '/menu/fruehstueck'],
                ['Mittag & Abend',     '/menu/mittag-abend'],
                ['Snacks & Drinks',    '/menu/snacks-drinks'],
                ['Reservierung',       '/#reservation'],
              ].map(([l, h]) => (
                <Link
                  key={h}
                  href={h}
                  className="block text-[#D4C9B8]/45 font-inter font-light text-[13px] hover:text-[#C9A96E] transition-colors duration-200"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#FAF8F4]/25 font-inter text-[9px] tracking-[0.3em] uppercase mb-5">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={11} strokeWidth={1} className="text-[#C9A96E] mt-0.5 shrink-0" />
                <p className="text-[#D4C9B8]/45 font-inter font-light text-[13px] leading-[1.7]">
                  Falkenstraße 22A<br />30449 Hannover
                </p>
              </div>
              <a href="tel:+4951112345" className="flex items-center gap-3 group">
                <Phone size={11} strokeWidth={1} className="text-[#C9A96E] shrink-0" />
                <span className="text-[#D4C9B8]/45 font-inter font-light text-[13px] group-hover:text-[#C9A96E] transition-colors duration-200">
                  +49 511 12345
                </span>
              </a>
              <a href="mailto:info@luz-de-luna.de" className="flex items-center gap-3 group">
                <Mail size={11} strokeWidth={1} className="text-[#C9A96E] shrink-0" />
                <span className="text-[#D4C9B8]/45 font-inter font-light text-[13px] group-hover:text-[#C9A96E] transition-colors duration-200">
                  info@luz-de-luna.de
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#FDFCFA]/[0.06] pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#FAF8F4]/18 font-inter font-light text-[11px] tracking-[0.06em]">
            © 2026 Luz de Luna · Inhaber: Azer Badal Dashto. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-[#FAF8F4]/18 hover:text-[#C9A96E] font-inter font-light text-[11px] tracking-[0.08em] transition-colors duration-200">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-[#FAF8F4]/18 hover:text-[#C9A96E] font-inter font-light text-[11px] tracking-[0.08em] transition-colors duration-200">
              Datenschutz
            </Link>
            <Link href="/cookies" className="text-[#FAF8F4]/18 hover:text-[#C9A96E] font-inter font-light text-[11px] tracking-[0.08em] transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

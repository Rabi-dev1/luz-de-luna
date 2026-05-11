'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'fruehstueck',
    href: '/fruehstueck',
    eyebrow: 'Ab 08:00 Uhr',
    title: 'Frühstück\n& Brunch',
    desc: 'Starten Sie Ihren Tag mit frischen Produkten, hausgemachten Aufstrichen und dem besten Kaffee der Stadt.',
    imageUrl: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80',
    span: 'lg:col-span-7',
  },
  {
    id: 'kaffee-kuchen',
    href: '/kaffee-kuchen',
    eyebrow: 'Täglich',
    title: 'Kaffee\n& Kuchen',
    desc: 'Hausgemachte Tortenkunst, Spezialitätenkaffees und eine Atmosphäre zum Entschleunigen.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    span: 'lg:col-span-5',
  },
  {
    id: 'abendkarte',
    href: '/abendkarte',
    eyebrow: 'Ab 17:00 Uhr',
    title: 'Abendkarte',
    desc: 'Regionale Küche mit mediterranen Einflüssen — für besondere Abende zu zweit oder mit Freunden.',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    span: 'lg:col-span-5',
  },
  {
    id: 'events',
    href: '/events',
    eyebrow: 'Auf Anfrage',
    title: 'Events &\nReservierungen',
    desc: 'Geburtstage, Firmenevents, private Feiern — wir machen Ihren Anlass unvergesslich.',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    span: 'lg:col-span-7',
  },
]

export default function HighlightsSection() {
  return (
    <section id="karte" className="py-24 bg-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#B8962E] text-xs font-medium tracking-[0.2em] uppercase mb-3">Was wir bieten</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-[#1C160D]">Unsere Highlights</h2>
          </div>
          <p className="text-[#2E2010]/60 font-inter text-sm max-w-xs leading-relaxed">
            Für jeden Anlass das Richtige — von morgens bis spät in die Nacht.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={cat.span}
            >
              <Link href={cat.href} className="group block relative rounded-2xl overflow-hidden h-72 md:h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                  aria-hidden="true"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C160D]/90 via-[#1C160D]/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <p className="text-[#D4AF5A]/80 text-xs font-medium tracking-[0.2em] uppercase mb-1">{cat.eyebrow}</p>
                  <h3 className="font-playfair text-2xl md:text-3xl font-black text-[#FDFAF6] leading-tight mb-3 whitespace-pre-line">
                    {cat.title}
                  </h3>
                  <p className="text-[#FAF7F2]/60 font-inter text-sm leading-relaxed mb-5 max-w-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[#D4AF5A] text-sm font-medium">
                    <span>Mehr erfahren</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

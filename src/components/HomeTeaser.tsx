'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, UtensilsCrossed, Calendar, Camera, Heart, Phone } from 'lucide-react'

const teasers = [
  {
    icon: UtensilsCrossed,
    eyebrow: 'Frühstück · Lunch · Dinner',
    title: 'Speisekarte',
    desc: 'Regionale Küche, saisonale Gerichte und handgefertigte Cocktails — für jeden Anlass das Richtige.',
    href: '/speisekarte',
    bg: 'from-[#2d1810] to-[#1a1a2e]',
  },
  {
    icon: Calendar,
    eyebrow: 'Online Buchung',
    title: 'Tisch reservieren',
    desc: 'Sichern Sie sich Ihren Platz für das perfekte Abendessen, einen entspannten Brunch oder ein besonderes Ereignis.',
    href: '/reservierung',
    bg: 'from-[#101a2d] to-[#1a1a2e]',
  },
  {
    icon: Camera,
    eyebrow: 'Eindrücke',
    title: 'Galerie',
    desc: 'Lassen Sie sich von der Atmosphäre, unseren Gerichten und dem Ambiente inspirieren.',
    href: '/galerie',
    bg: 'from-[#1a2d10] to-[#1a1a2e]',
  },
  {
    icon: Heart,
    eyebrow: 'Seit 2018 in Hannover',
    title: 'Über uns',
    desc: 'Erfahren Sie mehr über die Geschichte von Luz de Luna und unsere Leidenschaft für regionale Zutaten.',
    href: '/ueber-uns',
    bg: 'from-[#2d2010] to-[#1a1a2e]',
  },
  {
    icon: Phone,
    eyebrow: 'Anfahrt & Öffnungszeiten',
    title: 'Kontakt',
    desc: 'Finden Sie uns in Hannover Mitte. Wir freuen uns auf Ihren Besuch — jeden Tag der Woche.',
    href: '/kontakt',
    bg: 'from-[#1a102d] to-[#1a1a2e]',
  },
]

export default function HomeTeaser() {
  return (
    <section className="py-20 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-3">Entdecken Sie</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-[#f5f0e8]">Luz de Luna</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teasers.map((t, i) => (
            <motion.div
              key={t.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={t.href}
                className={`group block bg-gradient-to-br ${t.bg} border border-[#c9a84c]/10 rounded-2xl p-6 hover:border-[#c9a84c]/40 transition-all duration-300 hover:scale-[1.02] h-full`}>
                <div className="w-10 h-10 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c9a84c]/20 transition-colors">
                  <t.icon size={20} className="text-[#c9a84c]" />
                </div>
                <p className="text-[#c9a84c]/60 text-xs font-medium tracking-wider uppercase mb-1">{t.eyebrow}</p>
                <h3 className="font-playfair text-xl font-bold text-[#f5f0e8] mb-2">{t.title}</h3>
                <p className="text-[#f5f0e8]/50 text-sm font-inter leading-relaxed mb-4">{t.desc}</p>
                <div className="flex items-center gap-1 text-[#c9a84c] text-sm font-medium group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

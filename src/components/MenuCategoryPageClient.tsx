'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { MenuCategory, MenuItem } from '@/lib/menuData'
import MenuItemModal from '@/components/MenuItemModal'

interface Props { category: MenuCategory }

const badgeStyles: Record<string, { text: string; dot: string }> = {
  gold:    { text: 'text-[#C9A96E]',   dot: 'bg-[#C9A96E]' },
  green:   { text: 'text-emerald-400', dot: 'bg-emerald-400' },
  red:     { text: 'text-rose-400',    dot: 'bg-rose-400' },
  default: { text: 'text-[#6B6560]',   dot: 'bg-[#6B6560]' },
}

function ItemRow({
  item, index, onSelect,
}: { item: MenuItem; index: number; onSelect: (item: MenuItem) => void }) {
  const badge = badgeStyles[item.badgeType ?? 'default']
  return (
    <motion.button
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5), ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
      onClick={() => onSelect(item)}
      className="group w-full text-left py-7 border-b border-[#FDFCFA]/[0.07]
        first:border-t first:border-[#FDFCFA]/[0.07]
        hover:border-[#C9A96E]/20 transition-colors duration-300
        focus-visible:outline-1 focus-visible:outline-[#C9A96E]"
    >
      <div className="flex items-baseline justify-between gap-8">
        <div className="flex items-baseline gap-3 min-w-0">
          <h3 className="font-cormorant text-[1.6rem] md:text-[1.85rem] font-semibold text-[#FDFCFA]
            tracking-[0.01em] leading-tight
            group-hover:text-[#C9A96E] transition-colors duration-200 shrink-0">
            {item.name}
          </h3>
          {item.badge && (
            <span className={`flex items-center gap-1.5 font-inter text-[9px] tracking-[0.22em] uppercase font-light ${badge.text} shrink-0`}>
              <span className={`w-1 h-1 rounded-full ${badge.dot} opacity-70`} />
              {item.badge}
            </span>
          )}
        </div>
        <span className="font-cormorant text-xl md:text-2xl font-semibold text-[#C9A96E] shrink-0 leading-none">
          {item.price}
        </span>
      </div>
      <p className="text-[#D4C9B8]/50 font-inter font-light text-[13px] leading-[1.85] mt-2 tracking-[0.01em] max-w-[540px]">
        {item.description}
      </p>
      <div className="flex items-center gap-2 mt-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
        <span className="text-[#C9A96E]/60 font-inter text-[9px] tracking-[0.28em] uppercase">Details & Zutaten</span>
        <div className="w-4 h-px bg-[#C9A96E]/40 transition-all duration-300 group-hover:w-8" />
      </div>
    </motion.button>
  )
}

export default function MenuCategoryPageClient({ category }: Props) {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null)

  return (
    <>
      {/* ── Category header image ── */}
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.04]"
          style={{ backgroundImage: `url('${category.imageUrl}')`, filter: 'brightness(0.7) contrast(1.05) saturate(0.85)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/35 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-4xl mx-auto px-6 lg:px-10 pb-12">
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 text-[#C9A96E]/70 font-inter text-[10px] tracking-[0.28em] uppercase mb-7
              hover:text-[#C9A96E] hover:gap-3 transition-all duration-300 group w-fit"
          >
            <ArrowLeft size={11} strokeWidth={1} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Zurück
          </Link>
          <p className="text-[#C9A96E]/70 text-[9px] tracking-[0.38em] uppercase font-inter font-light mb-2.5">
            {category.eyebrow}
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-[#FDFCFA] leading-[1.0] tracking-[0.01em]">
            {category.label}
          </h1>
        </div>
      </div>

      {/* ── Menu list ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.035]"
          style={{ backgroundImage: "url('/images/sitz.jpg')" }}
        />
        <div className="absolute inset-0 bg-stone-950" style={{ opacity: 0.97 }} />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-10">

          {/* Category description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-[#D4C9B8]/50 font-inter font-light text-[13px] leading-[2] tracking-[0.04em] mb-14 max-w-md"
          >
            {category.description}
          </motion.p>

          {/* ── Flat list (Frühstück, Mittag & Abend) ── */}
          {!category.subsections && (
            <div>
              {category.items.map((item, i) => (
                <ItemRow key={item.id} item={item} index={i} onSelect={setActiveItem} />
              ))}
            </div>
          )}

          {/* ── Subsections (Snacks & Drinks) ── */}
          {category.subsections && (
            <div className="space-y-16">
              {category.subsections.map((sub, si) => (
                <div key={sub.id}>
                  {/* Subsection header */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: si * 0.06 }}
                    className="flex items-center gap-4 mb-1"
                  >
                    <div className="w-5 h-px bg-[#C9A96E]/50" />
                    <h2 className="font-inter text-[9px] tracking-[0.38em] uppercase text-[#C9A96E] font-light">
                      {sub.label}
                    </h2>
                    <div className="flex-1 h-px bg-[#FDFCFA]/[0.05]" />
                  </motion.div>

                  <div>
                    {sub.items.map((item, i) => (
                      <ItemRow key={item.id} item={item} index={i} onSelect={setActiveItem} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Allergen footnote */}
          <div className="mt-16 pt-8 border-t border-[#FDFCFA]/[0.06]">
            <p className="text-[#D4C9B8]/25 font-inter text-[10px] leading-[1.9] tracking-[0.06em]">
              Allergenkennzeichnung: ¹ Gluten · ² Sellerie · ³ Eier · ⁴ Fisch · ⁷ Milch/Laktose<br />
              Alle Preise inkl. MwSt. · Allergene auf Anfrage · Saisonale Änderungen vorbehalten.
            </p>
          </div>
        </div>
      </section>

      <MenuItemModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  )
}

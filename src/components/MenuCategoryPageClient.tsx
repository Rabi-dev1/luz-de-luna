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
  green:   { text: 'text-emerald-500', dot: 'bg-emerald-500' },
  red:     { text: 'text-red-400',     dot: 'bg-red-400' },
  default: { text: 'text-[#6B6560]',  dot: 'bg-[#6B6560]' },
}

export default function MenuCategoryPageClient({ category }: Props) {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null)

  return (
    <>
      {/* ── Atmospheric header image ── */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.04]"
          style={{ backgroundImage: `url('${category.imageUrl}')` }}
        />
        {/* Multi-stop overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C09] via-[#0E0C09]/50 to-[#0E0C09]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C09]/40 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-4xl mx-auto px-6 lg:px-10 pb-14">
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 text-[#C9A96E]/70 font-inter text-[10px] tracking-[0.28em] uppercase mb-8
              hover:text-[#C9A96E] hover:gap-3 transition-all duration-300 group w-fit"
          >
            <ArrowLeft size={11} strokeWidth={1} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Zurück zur Übersicht
          </Link>
          <p className="text-[#C9A96E]/70 text-[9px] tracking-[0.38em] uppercase font-inter font-light mb-3">
            {category.eyebrow}
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-semibold text-[#FDFCFA] leading-[1.0] tracking-[0.01em]">
            {category.label}
          </h1>
        </div>
      </div>

      {/* ── Menu list ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* sitz.jpg — very subtle background texture */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sitz.jpg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-[#FAF8F4]/94" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-10">

          {/* Category description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#6B6560] font-inter font-light text-[13px] leading-[2] tracking-[0.04em] mb-16 max-w-md"
          >
            {category.description}
          </motion.p>

          {/* Item list */}
          <div>
            {category.items.map((item, i) => {
              const badge = badgeStyles[item.badgeType ?? 'default']
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  onClick={() => setActiveItem(item)}
                  className="group w-full text-left py-8 border-b border-[#D4C9B8]/35
                    first:border-t first:border-[#D4C9B8]/35
                    hover:border-[#C9A96E]/25 transition-colors duration-300
                    focus-visible:outline-1 focus-visible:outline-[#C9A96E]"
                >
                  <div className="flex items-baseline justify-between gap-8">
                    {/* Name + badge */}
                    <div className="flex items-baseline gap-3 min-w-0">
                      <h3 className="font-cormorant text-[1.65rem] md:text-[1.9rem] font-semibold text-[#1A1815]
                        tracking-[0.01em] leading-tight
                        group-hover:text-[#2C2A26] transition-colors duration-200 shrink-0">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className={`flex items-center gap-1.5 font-inter text-[9px] tracking-[0.22em] uppercase font-light ${badge.text} shrink-0`}>
                          <span className={`w-1 h-1 rounded-full ${badge.dot} opacity-70`} />
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <span className="font-cormorant text-xl md:text-2xl font-semibold text-[#C9A96E] shrink-0 leading-none">
                      {item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#6B6560] font-inter font-light text-[13px] leading-[1.85] mt-2.5 tracking-[0.01em]
                    max-w-[520px]">
                    {item.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#C9A96E]/70 font-inter text-[9px] tracking-[0.28em] uppercase">Details & Zutaten</span>
                    <div className="w-4 h-px bg-[#C9A96E]/50 transition-all duration-300 group-hover:w-8" />
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Legal footnote */}
          <p className="text-[#6B6560]/40 font-inter text-[10px] tracking-[0.1em] uppercase mt-16 leading-relaxed">
            Alle Preise inkl. MwSt. · Allergene auf Anfrage · Saisonale Änderungen vorbehalten
          </p>
        </div>
      </section>

      <MenuItemModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  )
}

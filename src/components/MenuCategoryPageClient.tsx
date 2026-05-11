'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { MenuCategory, MenuItem } from '@/lib/menuData'
import MenuItemModal from '@/components/MenuItemModal'

interface Props { category: MenuCategory }

const badgeConfig: Record<string, { bg: string; text: string; border: string }> = {
  gold:    { bg: 'bg-[#C5A17F]/12', text: 'text-[#C5A17F]',     border: 'border-[#C5A17F]/25' },
  green:   { bg: 'bg-emerald-950/40', text: 'text-emerald-400',  border: 'border-emerald-800/30' },
  red:     { bg: 'bg-red-950/40',    text: 'text-red-400',       border: 'border-red-800/30' },
  default: { bg: 'bg-[#2C2A26]',    text: 'text-[#D4C9B8]/70',  border: 'border-[#D4C9B8]/15' },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  }),
}

export default function MenuCategoryPageClient({ category }: Props) {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null)

  return (
    <>
      {/* ── Page header ── */}
      <div className="relative h-72 md:h-96 overflow-hidden grain">
        <div
          className="absolute inset-0 scale-[1.06] bg-cover bg-center food-img"
          style={{ backgroundImage: `url('${category.imageUrl}')` }}
        />
        {/* Warm cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0805] via-[#0A0805]/55 to-[#0A0805]/25" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,8,5,0.6) 100%)' }}
        />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-10 pb-10">
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 text-[#C5A17F] font-inter text-[10px] tracking-[0.25em] uppercase mb-5 group
              hover:gap-3 transition-all duration-300"
          >
            <ArrowLeft size={11} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Zurück zur Übersicht
          </Link>
          <p className="text-[#C5A17F] text-[9px] tracking-[0.35em] uppercase font-inter font-light mb-2">{category.eyebrow}</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-semibold text-[#FDFCFA] tracking-[0.01em]">
            {category.label}
          </h1>
        </div>
      </div>

      {/* ── Menu grid ── */}
      <section className="py-20 md:py-28 bg-[#0A0805]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Category description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#FAF8F4]/30 font-inter font-light text-sm tracking-[0.08em] mb-14 max-w-md leading-relaxed"
          >
            {category.description}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#FDFCFA]/5">
            {category.items.map((item, i) => {
              const badge = badgeConfig[item.badgeType ?? 'default']
              return (
                <motion.button
                  key={item.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  onClick={() => setActiveItem(item)}
                  className="group text-left bg-[#0A0805] overflow-hidden relative
                    hover:bg-[#14120E] transition-colors duration-400
                    focus-visible:outline-1 focus-visible:outline-[#C5A17F]"
                >
                  {/* ── Food image ── */}
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center food-img
                        transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                        group-hover:scale-[1.06]"
                      style={{ backgroundImage: `url('${item.imageUrl}')` }}
                    />
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0805]/80 via-transparent to-transparent" />

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-4 left-4">
                        <span className={`font-inter text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border ${badge.bg} ${badge.text} ${badge.border}`}>
                          {item.badge}
                        </span>
                      </div>
                    )}

                    {/* Price — prominent in gold */}
                    <div className="absolute bottom-0 right-0 px-4 py-3">
                      <span className="font-cormorant text-2xl font-semibold text-[#C5A17F] leading-none">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* ── Card text ── */}
                  <div className="p-5 md:p-6">
                    <h3 className="font-cormorant text-xl font-semibold text-[#FDFCFA] mb-1.5 tracking-[0.01em]">
                      {item.name}
                    </h3>
                    <p className="text-[#FAF8F4]/38 font-inter font-light text-[13px] leading-[1.7]
                      overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mt-5 text-[#C5A17F]">
                      <span className="font-inter text-[9px] tracking-[0.28em] uppercase font-light">Details ansehen</span>
                      <div className="w-4 h-px bg-[#C5A17F]/50 transition-all duration-400 group-hover:w-9" />
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          <p className="text-center text-[#FAF8F4]/18 font-inter text-[11px] tracking-[0.12em] uppercase mt-14">
            Alle Preise inkl. MwSt. · Allergene auf Anfrage · Saisonale Änderungen vorbehalten
          </p>
        </div>
      </section>

      <MenuItemModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  )
}

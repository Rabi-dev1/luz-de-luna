'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { MenuCategory, MenuItem } from '@/lib/menuData'
import MenuItemModal from '@/components/MenuItemModal'

interface Props { category: MenuCategory }

const badgeStyles: Record<string, string> = {
  gold: 'bg-[#C9A96E]/15 text-[#C9A96E]',
  green: 'bg-emerald-900/20 text-emerald-400',
  red: 'bg-red-900/20 text-red-400',
  default: 'bg-[#EDE8DF] text-[#6B6560]',
}

export default function MenuCategoryPageClient({ category }: Props) {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null)

  return (
    <>
      {/* Page header */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${category.imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815] via-[#1A1815]/50 to-[#1A1815]/30" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-8 pb-10">
          <Link href="/#menu" className="inline-flex items-center gap-2 text-[#C9A96E] font-inter text-xs tracking-[0.15em] uppercase mb-4 hover:gap-3 transition-all">
            <ArrowLeft size={12} /> Zurück
          </Link>
          <p className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-inter mb-2">{category.eyebrow}</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-semibold text-[#FDFCFA]">{category.label}</h1>
        </div>
      </div>

      {/* Menu grid */}
      <section className="py-16 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.items.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveItem(item)}
                className="group text-left bg-[#FDFCFA] border border-[#D4C9B8]/40 overflow-hidden hover:border-[#C9A96E]/60 hover:shadow-lg transition-all duration-300"
              >
                {/* Item image */}
                <div className="relative h-48 overflow-hidden bg-[#EDE8DF]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  />
                  {item.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`font-inter text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 ${badgeStyles[item.badgeType ?? 'default']}`}>
                        {item.badge}
                      </span>
                    </div>
                  )}
                  {/* Price overlay */}
                  <div className="absolute bottom-3 right-3 bg-[#2C2A26]/90 px-3 py-1.5">
                    <span className="font-cormorant text-lg font-semibold text-[#C9A96E]">{item.price}</span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="font-cormorant text-xl font-semibold text-[#1A1815] mb-1">{item.name}</h3>
                  <p className="text-[#6B6560] font-inter text-sm leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{item.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-[#C9A96E] font-inter text-xs tracking-[0.15em] uppercase">
                    <span>Details</span>
                    <div className="w-5 h-px bg-[#C9A96E] transition-all duration-300 group-hover:w-10" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <MenuItemModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  )
}

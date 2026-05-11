'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { menuCategories } from '@/lib/menuData'

export default function MenuCategoriesSection() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-inter">Die Karte</span>
            </div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-semibold text-[#1A1815] leading-tight">
              Unsere<br /><em>Highlights</em>
            </h2>
          </div>
          <p className="text-[#6B6560] font-inter text-sm max-w-xs leading-relaxed">
            Regionale Zutaten, saisonale Karte — täglich frisch zubereitet in unserer Küche in Hannover.
          </p>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/menu/${cat.slug}`}
                className="group block relative overflow-hidden rounded-none aspect-[3/4] md:aspect-auto md:h-[520px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815]/90 via-[#1A1815]/20 to-transparent" />

                {/* Category number */}
                <div className="absolute top-5 left-5">
                  <span className="font-cormorant text-5xl font-semibold text-[#C9A96E]/30 leading-none">0{i + 1}</span>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-5 right-5 w-9 h-9 border border-[#FAF8F4]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/10">
                  <ArrowUpRight size={14} className="text-[#C9A96E]" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                  <p className="text-[#C9A96E] text-[10px] tracking-[0.25em] uppercase font-inter mb-2">{cat.eyebrow}</p>
                  <h3 className="font-cormorant text-3xl md:text-4xl font-semibold text-[#FDFCFA] leading-tight mb-3">
                    {cat.label}
                  </h3>
                  <p className="text-[#FDFCFA]/50 font-inter text-sm leading-relaxed mb-5 max-w-[260px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C9A96E] font-inter text-xs tracking-[0.15em] uppercase">Karte ansehen</span>
                    <div className="w-6 h-px bg-[#C9A96E] transition-all duration-300 group-hover:w-12" />
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

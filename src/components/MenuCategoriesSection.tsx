'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { menuCategories } from '@/lib/menuData'

export default function MenuCategoriesSection() {
  return (
    <section id="menu" className="py-32 md:py-40 bg-[#14120E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C5A059]" />
              <span className="text-[#C5A059] text-[10px] tracking-[0.35em] uppercase font-inter font-light">Die Karte</span>
            </div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-semibold text-[#FDFCFA] leading-tight tracking-[0.02em]">
              Unsere<br /><em className="text-[#C5A059]">Highlights</em>
            </h2>
          </div>
          <p className="text-[#FAF8F4]/35 font-inter font-light text-sm max-w-xs leading-relaxed tracking-[0.05em]">
            Regionale Zutaten, saisonale Karte —<br />täglich frisch zubereitet in Hannover.
          </p>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/menu/${cat.slug}`}
                className="group block relative overflow-hidden aspect-[3/4] md:aspect-auto md:h-[560px]"
              >
                {/* Background image with food filter */}
                <div
                  className="absolute inset-0 bg-cover bg-center food-img transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                />

                {/* Base dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14120E]/95 via-[#14120E]/30 to-[#14120E]/10" />

                {/* Radial vignette */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(20,18,14,0.5) 100%)' }} />

                {/* Category number */}
                <div className="absolute top-6 left-6">
                  <span className="font-cormorant text-6xl font-semibold text-[#C5A059]/20 leading-none tracking-tighter">
                    0{i + 1}
                  </span>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-5 right-5 w-9 h-9 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#C5A059]/50">
                  <ArrowUpRight size={13} className="text-[#C5A059]" />
                </div>

                {/* Glassmorphism content box */}
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
                  <div className="glass-card p-5 md:p-6">
                    <p className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase font-inter font-light mb-2">
                      {cat.eyebrow}
                    </p>
                    <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-[#FDFCFA] leading-tight mb-3 tracking-[0.02em]">
                      {cat.label}
                    </h3>

                    {/* Description slides up on hover */}
                    <p className="text-[#FDFCFA]/55 font-inter font-light text-sm leading-relaxed mb-4 max-w-[260px]
                      opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-400 ease-out">
                      {cat.description}
                    </p>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[#C5A059] font-inter text-[10px] tracking-[0.25em] uppercase font-light">
                        Karte ansehen
                      </span>
                      <div className="w-5 h-px bg-[#C5A059] transition-all duration-400 group-hover:w-12" />
                    </div>
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

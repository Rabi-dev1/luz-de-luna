'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { menuCategories } from '@/lib/menuData'

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.14, duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  }),
}

export default function MenuCategoriesSection() {
  return (
    <section id="menu" className="relative py-24 md:py-36 overflow-hidden">
      {/* sitz.jpg — subtle ambient background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sitz.jpg.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[#FAF8F4]/92" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-20 md:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-6 h-px bg-[#C9A96E]/60" />
              <span className="text-[#C9A96E] text-[9px] tracking-[0.38em] uppercase font-inter font-light">Die Karte</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1A1815] leading-[1.0] tracking-[0.01em]"
            >
              Unsere<br /><em className="text-[#C9A96E]">Highlights</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#6B6560] font-inter font-light text-[13px] max-w-[230px] leading-[1.9] tracking-[0.03em] md:text-right"
          >
            Regionale Zutaten,<br />saisonale Karte —<br />täglich frisch.
          </motion.p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.13, duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            >
              <Link
                href={`/menu/${cat.slug}`}
                className="group block relative overflow-hidden aspect-[3/4] md:aspect-auto md:h-[540px]"
              >
                {/* Local category image */}
                <div
                  className="absolute inset-0 bg-cover bg-center
                    transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                    group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                />

                {/* Cinematic gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C09]/92 via-[#0E0C09]/25 to-[#0E0C09]/10" />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(14,12,9,0.45) 100%)' }} />

                {/* Decorative number */}
                <div className="absolute top-6 left-6">
                  <span className="font-cormorant text-6xl font-semibold text-[#C9A96E]/12 leading-none select-none">
                    0{i + 1}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-5 right-5 w-8 h-8 border border-white/10 flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight size={12} strokeWidth={1} className="text-[#C9A96E]" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-7">
                  <p className="text-[#C9A96E]/70 text-[9px] tracking-[0.35em] uppercase font-inter font-light mb-2.5">
                    {cat.eyebrow}
                  </p>
                  <h3 className="font-cormorant text-[1.75rem] md:text-[2rem] font-semibold text-[#FDFCFA] leading-tight mb-3 tracking-[0.01em]">
                    {cat.label}
                  </h3>

                  {/* Description reveals on hover */}
                  <p className="text-[#FDFCFA]/45 font-inter font-light text-[13px] leading-[1.75] mb-4 max-w-[240px]
                    opacity-0 translate-y-2.5
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-2.5">
                    <span className="text-[#C9A96E]/80 font-inter text-[9px] tracking-[0.3em] uppercase font-light">
                      Karte ansehen
                    </span>
                    <div className="w-5 h-px bg-[#C9A96E]/50 transition-all duration-500 group-hover:w-12" />
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

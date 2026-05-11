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
    <section id="menu" className="py-32 md:py-44 bg-[#14120E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-[#C5A17F]/50" />
              <span className="text-[#C5A17F] text-[9px] tracking-[0.38em] uppercase font-inter font-light">Die Karte</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-[#FDFCFA] leading-[1.0] tracking-[0.01em]"
            >
              Kuratiert für<br />
              <em className="text-[#C5A17F]">den Gaumen</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[#FAF8F4]/28 font-inter font-light text-sm max-w-[220px] leading-[1.85] tracking-[0.04em] md:text-right"
          >
            Regionale Zutaten,<br />
            saisonale Karte —<br />
            täglich frisch.
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <Link
                href={`/menu/${cat.slug}`}
                className="group block relative overflow-hidden aspect-[2/3] md:aspect-auto md:h-[580px]"
              >
                {/* ── Background image ── */}
                <div
                  className="absolute inset-0 bg-cover bg-center food-img
                    transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                    group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                />

                {/* ── Dark cinematic overlay ── */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0805]/96 via-[#0A0805]/25 to-[#0A0805]/08" />

                {/* ── Radial vignette ── */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(10,8,5,0.55) 100%)' }}
                />

                {/* ── Category number (decorative) ── */}
                <div className="absolute top-7 left-7">
                  <span className="font-cormorant text-7xl font-semibold text-[#C5A17F]/15 leading-none tracking-tighter select-none">
                    0{i + 1}
                  </span>
                </div>

                {/* ── Arrow icon (appears on hover) ── */}
                <motion.div
                  className="absolute top-6 right-6 w-9 h-9 border border-white/10 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowUpRight size={13} strokeWidth={1} className="text-[#C5A17F]" />
                </motion.div>

                {/* ── Glassmorphism content box ── */}
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
                  <div className="glass-card p-5 md:p-6">
                    <p className="text-[#C5A17F] text-[9px] tracking-[0.35em] uppercase font-inter font-light mb-2.5">
                      {cat.eyebrow}
                    </p>
                    <h3 className="font-cormorant text-[1.65rem] md:text-[1.85rem] font-semibold text-[#FDFCFA] leading-tight mb-3 tracking-[0.01em]">
                      {cat.label}
                    </h3>

                    {/* Description — slides up 10px on hover */}
                    <p
                      className="text-[#FDFCFA]/48 font-inter font-light text-[13px] leading-[1.75] mb-4 max-w-[240px]
                        opacity-0 translate-y-2.5
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    >
                      {cat.description}
                    </p>

                    <div className="flex items-center gap-2.5 pt-0.5">
                      <span className="text-[#C5A17F] font-inter text-[9px] tracking-[0.3em] uppercase font-light">
                        Karte ansehen
                      </span>
                      <div className="w-5 h-px bg-[#C5A17F]/60 transition-all duration-500 group-hover:w-14" />
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

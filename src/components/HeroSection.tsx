'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      {/* IMAGE PLACEHOLDER — replace src with real photo */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[#2E2010] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&q=85')" }}
            aria-hidden="true"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C160D] via-[#1C160D]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C160D]/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B8962E]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-5"
          >
            <MapPin size={13} className="text-[#B8962E]" />
            <span className="text-[#B8962E] text-xs font-medium tracking-[0.2em] uppercase">Hannover Mitte</span>
          </motion.div>

          <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl font-black text-[#FDFAF6] leading-[0.95] mb-5">
            Luz<br />de Luna
          </h1>

          <div className="w-12 h-px bg-[#B8962E] mb-6" />

          <p className="text-[#FAF7F2]/70 font-inter text-lg md:text-xl leading-relaxed mb-10 max-w-md">
            Wo jeder Moment zum Genuss wird —<br />
            <span className="text-[#D4AF5A] font-medium">mitten in Hannover.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#reservierung"
              className="inline-flex items-center justify-center bg-[#B8962E] text-[#FDFAF6] px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-[#D4AF5A] transition-all duration-200 hover:scale-105 active:scale-95">
              Tisch reservieren
            </Link>
            <Link href="/#karte"
              className="inline-flex items-center justify-center border border-[#FAF7F2]/30 text-[#FAF7F2] px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:border-[#D4AF5A] hover:text-[#D4AF5A] transition-all duration-200">
              Speisekarte ansehen
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="/#ueber-uns"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 text-[#FAF7F2]/40 hover:text-[#D4AF5A] transition-colors"
        aria-label="Nach unten scrollen"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mb-4">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}

'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110 vignette" style={{ y: bgY }}>
        <div
          className="absolute inset-0 bg-cover bg-center food-img"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&q=85')" }}
        />
        {/* Directional gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14120E]/75 via-[#14120E]/30 to-[#14120E]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14120E]/60 via-transparent to-transparent" />
        {/* Radial vignette for focus center */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 25%, rgba(20,18,14,0.7) 100%)' }} />
      </motion.div>

      {/* Decorative top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

      {/* Hero content with own parallax */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-px bg-[#C9A96E]" />
            <MapPin size={11} className="text-[#C9A96E]" />
            <span className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-inter">Hannover · Falkenstraße</span>
            <div className="w-8 h-px bg-[#C9A96E]" />
          </div>

          <h1 className="font-cormorant font-semibold text-[#FDFCFA] leading-[0.9] mb-8 tracking-[0.03em]">
            <span className="block text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem]">Luz</span>
            <span className="block text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-[#C5A059] italic">de Luna</span>
          </h1>

          <p className="text-[#FDFCFA]/50 font-inter font-extralight text-xs md:text-sm tracking-[0.35em] uppercase mb-14 max-w-xs">
            Wo jeder Moment zum Genuss wird
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#menu"
              className="inline-flex items-center justify-center bg-[#C5A059] text-[#1A1815] px-8 py-4 font-inter font-semibold text-xs tracking-[0.25em] uppercase hover:bg-[#D4AF6A] transition-colors duration-200">
              Speisekarte
            </Link>
            <Link href="/#reservation"
              className="inline-flex items-center justify-center border border-[#FDFCFA]/25 text-[#FDFCFA]/75 px-8 py-4 font-inter font-light text-xs tracking-[0.25em] uppercase hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-200">
              Tisch reservieren
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent origin-top"
          />
          <span className="text-[#C9A96E]/60 text-[9px] tracking-[0.3em] uppercase font-inter">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}

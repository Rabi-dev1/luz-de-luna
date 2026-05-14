'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
}

/* Full moon SVG — glowing orb in top-right of hero */
function FullMoonHero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-6 right-4 md:top-12 md:right-12 z-10 pointer-events-none"
      aria-hidden="true"
    >
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
        {/* Outer glow rings */}
        <circle cx="70" cy="70" r="68"  stroke="#C9A96E" strokeWidth="0.3" opacity="0.05" />
        <circle cx="70" cy="70" r="60"  stroke="#C9A96E" strokeWidth="0.4" opacity="0.08" />
        <circle cx="70" cy="70" r="52"  stroke="#C9A96E" strokeWidth="0.4" opacity="0.11" />
        <circle cx="70" cy="70" r="44"  stroke="#C9A96E" strokeWidth="0.5" opacity="0.15" />

        {/* Radial glow */}
        <radialGradient id="heroMoonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#C9A96E" stopOpacity="0.22" />
          <stop offset="55%"  stopColor="#C9A96E" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0"    />
        </radialGradient>
        <circle cx="70" cy="70" r="44" fill="url(#heroMoonGlow)" />

        {/* Moon disc */}
        <circle cx="70" cy="70" r="36" fill="rgba(201,169,110,0.11)" />
        <circle cx="70" cy="70" r="36" stroke="#C9A96E" strokeWidth="0.7" opacity="0.35" />

        {/* Subtle crater details */}
        <circle cx="62"  cy="63" r="5"  stroke="#C9A96E" strokeWidth="0.3" opacity="0.12" />
        <circle cx="80"  cy="75" r="4"  stroke="#C9A96E" strokeWidth="0.3" opacity="0.10" />
        <circle cx="68"  cy="82" r="3"  stroke="#C9A96E" strokeWidth="0.3" opacity="0.09" />
        <circle cx="76"  cy="58" r="2.5" stroke="#C9A96E" strokeWidth="0.3" opacity="0.08" />

        {/* Inner highlight */}
        <circle cx="62" cy="62" r="36" fill="rgba(253,252,250,0.025)" />
      </svg>
    </motion.div>
  )
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%',  '40%'])
  const midY    = useTransform(scrollYProgress, [0, 1], ['0%',  '18%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%',  '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] overflow-hidden flex items-center grain"
    >
      {/* ── Layer 1: Background image ── */}
      <motion.div
        className="absolute inset-0 scale-[1.08]"
        style={{ y: bgY, willChange: 'transform' }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/herobild.jpg')",
            filter: 'brightness(0.72) contrast(1.05) saturate(0.85)',
          }}
        />
      </motion.div>

      {/* ── Layer 2: Lighter overlays so the photo reads ── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: midY }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0805]/60 via-[#0A0805]/15 to-[#0A0805]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0805]/60 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 38% 50%, transparent 22%, rgba(10,8,5,0.52) 100%)' }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-56"
          style={{ background: 'linear-gradient(to top, rgba(197,161,127,0.05) 0%, transparent 100%)' }}
        />
      </motion.div>

      {/* ── Full moon watermark ── */}
      <FullMoonHero />

      {/* ── Gold hairline ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/35 to-transparent z-20" />

      {/* ── Layer 3: Text ── */}
      <motion.div
        style={{ y: textY, opacity, willChange: 'transform, opacity' }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full"
      >
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Location tag */}
          <motion.div variants={item} className="flex items-center gap-2.5 mb-8">
            <div className="w-10 h-px bg-[#C9A96E]/60" />
            <MapPin size={10} strokeWidth={1} className="text-[#C9A96E]" />
            <span className="text-[#C9A96E] text-[9px] tracking-[0.38em] uppercase font-inter font-light">
              Hannover · Linden · Falkenstraße 22A
            </span>
            <div className="w-10 h-px bg-[#C9A96E]/60" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-cormorant font-semibold text-[#FDFCFA] leading-[0.88] mb-5 tracking-[0.02em]"
          >
            <span className="block text-[clamp(4rem,12vw,11rem)]">Luz</span>
            <span className="block text-[clamp(4rem,12vw,11rem)] text-[#C9A96E] italic -mt-2 md:-mt-4">de Luna</span>
          </motion.h1>

          {/* Moonlight tagline */}
          <motion.div variants={item} className="flex items-center gap-3 mb-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#C9A96E]/70" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1" />
              <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.10" />
            </svg>
            <p className="font-inter font-extralight text-[#FDFCFA]/55 text-[11px] md:text-xs tracking-[0.42em] uppercase">
              Wo Mondlicht auf mediterrane Küche trifft
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="font-inter font-light text-[#FDFCFA]/35 text-[10px] tracking-[0.2em] mb-10 max-w-xs leading-relaxed"
          >
            Frische regionale Zutaten&nbsp;·&nbsp;Warme Atmosphäre&nbsp;·&nbsp;Jeder Abend ein Erlebnis
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#reservation"
              className="group inline-flex items-center justify-center gap-3 bg-[#C9A96E] text-[#0A0805] px-8 py-4 font-inter font-semibold text-[10px] tracking-[0.28em] uppercase
                hover:bg-[#D4B88A] transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(201,169,110,0.28)]"
            >
              Tisch reservieren
            </Link>
            <Link
              href="/#menu"
              className="inline-flex items-center justify-center gap-3 border border-[#FDFCFA]/18 text-[#FDFCFA]/70 px-8 py-4 font-inter font-light text-[10px] tracking-[0.28em] uppercase
                hover:border-[#C9A96E]/50 hover:text-[#C9A96E] transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              Speisekarte entdecken
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 inset-x-0 flex justify-center z-20"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2.5">
          <motion.div
            animate={{ scaleY: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-transparent via-[#C9A96E]/50 to-transparent origin-top"
          />
          <span className="text-[#C9A96E]/40 text-[8px] tracking-[0.35em] uppercase font-inter">Scroll</span>
        </div>
      </motion.div>
    </section>
  )
}

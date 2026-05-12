'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

/* Motion variants — reusable stagger pattern */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.35 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  /* Three-layer parallax — each at a different speed */
  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%',  '45%'])  // slowest — bg image
  const midY     = useTransform(scrollYProgress, [0, 1], ['0%',  '20%'])  // mid — gradient overlay
  const textY    = useTransform(scrollYProgress, [0, 1], ['0%',  '12%'])  // fastest — text
  const opacity  = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] overflow-hidden flex items-center grain"
    >
      {/* ── Layer 1: Background image (slowest parallax) ── */}
      <motion.div
        className="absolute inset-0 scale-[1.12]"
        style={{ y: bgY }}
        aria-hidden="true"
      >
        {/* IMAGE SLOT — swap URL for final photo */}
        <div
          className="absolute inset-0 bg-cover bg-center food-img"
          style={{ backgroundImage: "url('/images/herobild.jpg.jpeg')" }}
        />
      </motion.div>

      {/* ── Layer 2: Multi-stop cinematic gradient (mid parallax) ── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: midY }}
        aria-hidden="true"
      >
        {/* Warm dark base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0805]/80 via-[#0A0805]/30 to-[#0A0805]/90" />
        {/* Warm side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0805]/70 via-transparent to-transparent" />
        {/* Radial vignette for cinematic feel */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 40% 50%, transparent 20%, rgba(10,8,5,0.68) 100%)' }}
        />
        {/* Warm gold bottom glow — creates the "candlelight on marble" feel */}
        <div
          className="absolute bottom-0 inset-x-0 h-64"
          style={{ background: 'linear-gradient(to top, rgba(197,161,127,0.06) 0%, transparent 100%)' }}
        />
      </motion.div>

      {/* ── Decorative gold hairline at top ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A17F]/35 to-transparent z-20" />

      {/* ── Layer 3: Text content (faster parallax = stays more grounded) ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full"
      >
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Location tag */}
          <motion.div variants={item} className="flex items-center gap-2.5 mb-10">
            <div className="w-10 h-px bg-[#C5A17F]/60" />
            <MapPin size={10} strokeWidth={1} className="text-[#C5A17F]" />
            <span className="text-[#C5A17F] text-[9px] tracking-[0.38em] uppercase font-inter font-light">
              Hannover · Linden · Falkenstraße 22A
            </span>
            <div className="w-10 h-px bg-[#C5A17F]/60" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="font-cormorant font-semibold text-[#FDFCFA] leading-[0.88] mb-6 tracking-[0.02em]"
          >
            <span className="block text-[clamp(4rem,12vw,11rem)]">Luz</span>
            <span className="block text-[clamp(4rem,12vw,11rem)] text-[#C5A17F] italic -mt-2 md:-mt-4">de Luna</span>
          </motion.h1>

          {/* Subheadline — thin, wide tracking */}
          <motion.p
            variants={item}
            className="font-inter font-extralight text-[#FDFCFA]/55 text-[11px] md:text-xs tracking-[0.42em] uppercase mb-3 max-w-sm"
          >
            Wo Mondlicht auf mediterrane Küche trifft
          </motion.p>

          {/* Tertiary descriptor */}
          <motion.p
            variants={item}
            className="font-inter font-light text-[#FDFCFA]/35 text-[10px] tracking-[0.2em] mb-12 max-w-xs leading-relaxed"
          >
            Frische regionale Zutaten&nbsp;·&nbsp;Warme Atmosphäre&nbsp;·&nbsp;Jeder Abend ein Erlebnis
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#reservation"
              className="group inline-flex items-center justify-center gap-3 bg-[#C5A17F] text-[#0A0805] px-8 py-4 font-inter font-semibold text-[10px] tracking-[0.28em] uppercase
                hover:bg-[#D4B38C] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(197,161,127,0.25)]"
            >
              Tisch reservieren
            </Link>
            <Link
              href="/#menu"
              className="inline-flex items-center justify-center gap-3 border border-[#FDFCFA]/18 text-[#FDFCFA]/70 px-8 py-4 font-inter font-light text-[10px] tracking-[0.28em] uppercase
                hover:border-[#C5A17F]/50 hover:text-[#C5A17F] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
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
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 inset-x-0 flex justify-center z-20"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2.5">
          <motion.div
            animate={{ scaleY: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-[#C5A17F]/50 to-transparent origin-top"
          />
          <span className="text-[#C5A17F]/40 text-[8px] tracking-[0.35em] uppercase font-inter">Scroll</span>
        </div>
      </motion.div>
    </section>
  )
}

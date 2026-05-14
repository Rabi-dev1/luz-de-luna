'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* Full moon SVG — glowing orb that floats above the restaurant image */
function FullMoon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute pointer-events-none"
      style={{ top: '8%', right: '6%' }}
      aria-hidden="true"
    >
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
        {/* Outermost glow rings */}
        <circle cx="110" cy="110" r="108" stroke="#C9A96E" strokeWidth="0.4" opacity="0.06" />
        <circle cx="110" cy="110" r="96"  stroke="#C9A96E" strokeWidth="0.4" opacity="0.09" />
        <circle cx="110" cy="110" r="83"  stroke="#C9A96E" strokeWidth="0.5" opacity="0.13" />
        <circle cx="110" cy="110" r="70"  stroke="#C9A96E" strokeWidth="0.6" opacity="0.18" />

        {/* Soft glow fill */}
        <circle cx="110" cy="110" r="66"
          fill="none"
          style={{
            filter: 'blur(0px)',
          }}
        />
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#C9A96E" stopOpacity="0.18" />
          <stop offset="55%"  stopColor="#C9A96E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
        <circle cx="110" cy="110" r="70" fill="url(#moonGlow)" />

        {/* Moon disc */}
        <circle cx="110" cy="110" r="56" fill="rgba(201,169,110,0.10)" />
        <circle cx="110" cy="110" r="56" stroke="#C9A96E" strokeWidth="0.8" opacity="0.32" />

        {/* Crater details — subtle */}
        <circle cx="98"  cy="100" r="7"  stroke="#C9A96E" strokeWidth="0.4" opacity="0.12" />
        <circle cx="126" cy="118" r="5"  stroke="#C9A96E" strokeWidth="0.4" opacity="0.10" />
        <circle cx="105" cy="128" r="4"  stroke="#C9A96E" strokeWidth="0.3" opacity="0.09" />
        <circle cx="118" cy="96"  r="3"  stroke="#C9A96E" strokeWidth="0.3" opacity="0.08" />

        {/* Inner highlight — simulates reflected light */}
        <circle cx="100" cy="100" r="56" fill="rgba(250,248,244,0.03)" />
      </svg>
    </motion.div>
  )
}

export default function MoodSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY    = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const moonY  = useTransform(scrollYProgress, [0, 1], ['-4%', '6%'])

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[460px] overflow-hidden">
      {/* Background photo */}
      <motion.div
        className="absolute inset-0 scale-[1.18] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ladenlokal.jpg')",
          y: bgY,
          willChange: 'transform',
        }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/88 via-stone-950/28 to-stone-950/52" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(12,10,8,0.65) 100%)' }}
      />

      {/* Floating full moon */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: moonY }}
      >
        <FullMoon />
      </motion.div>

      {/* Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center mb-5"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#C9A96E]/75">
              <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1" />
              <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.10" />
            </svg>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A96E]/50" />
            <span className="text-[#C9A96E] text-[9px] tracking-[0.42em] uppercase font-inter font-light">
              Mondlicht · Hannover
            </span>
            <div className="w-10 h-px bg-[#C9A96E]/50" />
          </div>

          <p className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FDFCFA] leading-[1.1] tracking-[0.02em] max-w-2xl">
            Speisen unter<br />
            <em className="text-[#C9A96E]">dem Mondlicht</em>
          </p>
          <p className="text-[#FDFCFA]/35 font-inter font-light text-[12px] tracking-[0.18em] mt-5 uppercase">
            Jeder Abend ein Erlebnis — Falkenstraße 22A
          </p>
        </motion.div>
      </div>
    </section>
  )
}

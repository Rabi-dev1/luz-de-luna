'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/* ── Moon phase SVG paths (32×32 viewBox, moon r=14 at center 16,16) ── */
const phases = [
  { name: 'Neumond',              path: null,    full: false },
  { name: 'Zunehmende Sichel',    path: 'M 16,2 A 14,14 0 0,1 16,30 A 5,14 0 0,0 16,2 Z',  full: false },
  { name: 'Erstes Viertel',       path: 'M 16,2 A 14,14 0 0,1 16,30 L 16,2 Z',               full: false },
  { name: 'Zunehmender Mond',     path: 'M 16,2 A 14,14 0 0,1 16,30 A 5,14 0 0,1 16,2 Z',  full: false },
  { name: 'Vollmond',             path: null,    full: true  },
  { name: 'Abnehmender Mond',     path: 'M 16,2 A 14,14 0 0,0 16,30 A 5,14 0 0,0 16,2 Z',  full: false },
  { name: 'Letztes Viertel',      path: 'M 16,2 A 14,14 0 0,0 16,30 L 16,2 Z',               full: false },
  { name: 'Abnehmende Sichel',    path: 'M 16,2 A 14,14 0 0,0 16,30 A 5,14 0 0,1 16,2 Z',  full: false },
]

function getMoonPhaseIndex(): number {
  /* Reference new moon: 2024-01-11 11:57 UTC */
  const refNewMoon = new Date('2024-01-11T11:57:00Z').getTime()
  const daysSince  = (Date.now() - refNewMoon) / 86_400_000
  const phase      = ((daysSince % 29.53059) / 29.53059) * 8
  return Math.round(phase) % 8
}

function MoonSVG({ index, today }: { index: number; today: boolean }) {
  const p = phases[index]
  const gold   = '#C9A96E'
  const goldDim = 'rgba(201,169,110,0.45)'
  const dark   = '#0C0A08'

  return (
    <div className="relative flex flex-col items-center gap-3">
      {/* Today indicator */}
      {today && (
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="absolute -top-5 text-[#C9A96E] font-inter text-[8px] tracking-[0.3em] uppercase"
        >
          Heute
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.05 }}
        className="relative"
      >
        {/* Outer glow on today */}
        {today && (
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(201,169,110,0.2) 0%, transparent 70%)',
              transform: 'scale(2.2)',
            }}
          />
        )}

        <svg
          width="44" height="44"
          viewBox="0 0 32 32"
          fill="none"
          className={today ? 'drop-shadow-[0_0_8px_rgba(201,169,110,0.5)]' : ''}
        >
          {/* Dark base */}
          <circle cx="16" cy="16" r="14" fill={dark} />

          {/* Lit part */}
          {p.full ? (
            <circle cx="16" cy="16" r="14" fill={goldDim} />
          ) : p.path ? (
            <path d={p.path} fill={goldDim} />
          ) : null}

          {/* Outer ring */}
          <circle
            cx="16" cy="16" r="14"
            stroke={gold}
            strokeWidth={today ? '0.9' : '0.6'}
            opacity={today ? 0.7 : 0.35}
          />
        </svg>
      </motion.div>

      <span className="text-[#D4C9B8]/35 font-inter text-[7px] md:text-[8px] tracking-[0.12em] md:tracking-[0.18em] uppercase text-center leading-tight max-w-[52px]">
        {p.name}
      </span>
    </div>
  )
}

export default function MoonPhasesSection() {
  const [todayPhase, setTodayPhase] = useState<number>(4)

  useEffect(() => {
    setTodayPhase(getMoonPhaseIndex())
  }, [])

  return (
    <section className="relative py-20 bg-stone-950 overflow-hidden">
      {/* Top & bottom hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      {/* Large ambient moon glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#C9A96E]/35" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#C9A96E]/70">
              <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1" />
              <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.10" />
            </svg>
            <div className="w-10 h-px bg-[#C9A96E]/35" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-[#FDFCFA] tracking-[0.02em] mb-3">
            Die <em className="text-[#C9A96E]">Mondphasen</em>
          </h2>
          <p className="text-[#D4C9B8]/35 font-inter font-light text-[11px] tracking-[0.25em] uppercase">
            Der Mond bestimmt unseren Rhythmus — jede Nacht ein Erlebnis
          </p>
        </motion.div>

        {/* 8 phases — 4×2 grid on mobile, single row on md+ */}
        <div className="grid grid-cols-4 gap-y-8 gap-x-4 md:flex md:items-start md:justify-center md:gap-8 lg:gap-10 mt-8">
          {phases.map((_, i) => (
            <MoonSVG key={i} index={i} today={i === todayPhase} />
          ))}
        </div>

        {/* Cycle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#D4C9B8]/22 font-inter font-light text-[10px] tracking-[0.18em] uppercase mt-12"
        >
          Lunarer Zyklus: 29 Tage, 12 Stunden und 44 Minuten
        </motion.p>
      </div>
    </section>
  )
}

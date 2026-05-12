'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function MoodSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative h-[65vh] min-h-[420px] overflow-hidden">
      <motion.div
        className="absolute inset-0 scale-[1.18] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ladenlokal.jpg.jpeg')",
          y: bgY,
          willChange: 'transform',
        }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C09]/82 via-[#0E0C09]/28 to-[#0E0C09]/48" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 22%, rgba(14,12,9,0.62) 100%)' }}
      />

      {/* Text overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
        >
          {/* Crescent moon icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center mb-5"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#C9A96E]/70">
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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

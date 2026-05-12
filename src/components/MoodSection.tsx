'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function MoodSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative h-[65vh] min-h-[420px] overflow-hidden">
      {/* ladenlokal.jpg — subtle parallax */}
      <motion.div
        className="absolute inset-0 scale-[1.18] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ladenlokal.jpg.jpeg')",
          y: bgY,
        }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C09]/80 via-[#0E0C09]/30 to-[#0E0C09]/50" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 25%, rgba(14,12,9,0.6) 100%)' }}
      />

      {/* Text overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A96E]/50" />
            <span className="text-[#C9A96E] text-[9px] tracking-[0.42em] uppercase font-inter font-light">
              Hannover · Linden
            </span>
            <div className="w-10 h-px bg-[#C9A96E]/50" />
          </div>
          <p className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FDFCFA] leading-[1.1] tracking-[0.02em] max-w-2xl">
            Ein Ort, der<br />
            <em className="text-[#C9A96E]">Momente schafft</em>
          </p>
          <p className="text-[#FDFCFA]/35 font-inter font-light text-[12px] tracking-[0.18em] mt-6 uppercase">
            Falkenstraße 22A · 30449 Hannover
          </p>
        </motion.div>
      </div>
    </section>
  )
}

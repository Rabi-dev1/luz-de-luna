'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const hours = [
  { day: 'Montag – Freitag', time: '08:00 – 22:00' },
  { day: 'Samstag',          time: '09:00 – 23:00' },
  { day: 'Sonntag',          time: '09:00 – 23:00' },
  { day: 'Feiertage',        time: '10:00 – 21:00' },
]

export default function FindUsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="findus" className="relative z-20 py-32 md:py-44 bg-[#14120E]">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A17F]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-px bg-[#C5A17F]/50" />
            <span className="text-[#C5A17F] text-[9px] tracking-[0.38em] uppercase font-inter font-light">Besuchen Sie uns</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-[#FDFCFA] leading-[1.0] tracking-[0.01em] mb-20 md:mb-24"
          >
            So finden Sie<br />
            <em className="text-[#C5A17F]">uns</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

          {/* MAP — hover reveals warm color from grayscale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="group relative h-80 lg:h-full min-h-[480px] overflow-hidden border border-white/5 cursor-pointer"
          >
            {/*
              GOOGLE MAPS IFRAME — Replace placeholder div below with:
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%" height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(100%) brightness(0.28) contrast(1.15) sepia(0.2)',
                  transition: 'filter 0.7s ease',
                }}
                className="absolute inset-0 w-full h-full group-hover:[filter:grayscale(0%)_brightness(0.75)_contrast(1.05)]"
                allowFullScreen loading="lazy"
              />
            */}

            {/* Placeholder map — grayscale by default, warm on hover */}
            <div
              className="absolute inset-0 bg-[#1C1A16]
                transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              {/* Grid lines — muted default, gold on hover */}
              <div
                className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.12]
                  transition-opacity duration-700"
                style={{
                  backgroundImage: 'linear-gradient(#C5A17F 1px, transparent 1px), linear-gradient(90deg, #C5A17F 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06]
                  transition-opacity duration-700"
                style={{
                  backgroundImage: 'linear-gradient(45deg, #C5A17F 1px, transparent 1px)',
                  backgroundSize: '80px 80px',
                }}
              />
              {/* Warm tint overlay that fades in on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-700"
                style={{ background: 'radial-gradient(ellipse at center, rgba(197,161,127,0.06) 0%, transparent 70%)' }}
              />
            </div>

            {/* Center pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center relative z-10">
                <div className="relative mx-auto mb-4 w-12 h-12">
                  <div className="absolute inset-0 bg-[#C5A17F]/20 rounded-full animate-ping" />
                  <div className="relative w-12 h-12 bg-[#C5A17F] flex items-center justify-center shadow-[0_8px_32px_rgba(197,161,127,0.35)]">
                    <MapPin size={18} strokeWidth={1} className="text-[#0A0805]" />
                  </div>
                </div>
                <p className="font-cormorant text-xl font-semibold text-[#FDFCFA] tracking-[0.04em]">Luz de Luna</p>
                <p className="text-[#FAF8F4]/35 font-inter text-[11px] mt-1 tracking-[0.12em]">Falkenstraße 22A · 30449 Hannover</p>
                <a
                  href="https://maps.google.com/?q=Falkenstraße+22A+30449+Hannover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 border border-[#C5A17F]/35 text-[#C5A17F] px-5 py-2.5
                    font-inter text-[9px] tracking-[0.28em] uppercase
                    hover:bg-[#C5A17F] hover:text-[#0A0805] transition-all duration-300"
                >
                  In Google Maps öffnen
                </a>
              </div>
            </div>

            {/* Hover hint */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[#C5A17F]/50 font-inter text-[8px] tracking-[0.2em] uppercase">Interaktiv</span>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.14 }}
            className="bg-[#1C1914] border border-white/[0.04] flex flex-col gap-0"
          >
            {/* Opening Hours */}
            <div className="px-8 py-10 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5 mb-7">
                <Clock size={12} strokeWidth={1} className="text-[#C5A17F]" />
                <h3 className="font-cormorant text-[1.35rem] font-semibold text-[#FDFCFA] tracking-[0.03em]">Öffnungszeiten</h3>
              </div>
              <div className="space-y-0">
                {hours.map((h, i) => (
                  <motion.div
                    key={h.day}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="flex justify-between items-center py-3.5 border-b border-white/[0.05] last:border-0"
                  >
                    <span className="text-[#FAF8F4]/40 font-inter text-[13px] font-light tracking-[0.03em]">{h.day}</span>
                    <span className="text-[#C5A17F] font-inter text-[13px] font-light tracking-[0.06em]">{h.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="px-8 py-10 flex-1">
              <h3 className="font-cormorant text-[1.35rem] font-semibold text-[#FDFCFA] mb-7 tracking-[0.03em]">Kontakt</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={12} strokeWidth={1} className="text-[#C5A17F] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[#FAF8F4]/60 font-inter text-[13px] font-light tracking-[0.03em]">Falkenstraße 22A</p>
                    <p className="text-[#FAF8F4]/35 font-inter text-[13px] font-light">30449 Hannover-Linden</p>
                  </div>
                </div>
                <a href="tel:+4951112345" className="flex items-center gap-4 group/link">
                  <Phone size={12} strokeWidth={1} className="text-[#C5A17F] shrink-0" />
                  <span className="text-[#FAF8F4]/55 font-inter text-[13px] font-light tracking-[0.03em] group-hover/link:text-[#C5A17F] transition-colors duration-200">
                    +49 511 12345
                  </span>
                </a>
                <a href="mailto:info@luz-de-luna.de" className="flex items-center gap-4 group/link">
                  <Mail size={12} strokeWidth={1} className="text-[#C5A17F] shrink-0" />
                  <span className="text-[#FAF8F4]/55 font-inter text-[13px] font-light tracking-[0.03em] group-hover/link:text-[#C5A17F] transition-colors duration-200">
                    info@luz-de-luna.de
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

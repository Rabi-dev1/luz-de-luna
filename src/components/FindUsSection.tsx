'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const hours = [
  { day: 'Montag – Freitag', time: '08:00 – 22:00' },
  { day: 'Samstag',          time: '09:00 – 23:00' },
  { day: 'Sonntag',          time: '09:00 – 23:00' },
  { day: 'Feiertage',        time: '10:00 – 21:00' },
]

export default function FindUsSection() {
  return (
    <section id="findus" className="relative z-20 py-32 md:py-40 bg-[#14120E]">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px bg-[#C5A059]" />
          <span className="text-[#C5A059] text-[10px] tracking-[0.35em] uppercase font-inter font-light">Besuchen Sie uns</span>
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-[#FDFCFA] mb-16 tracking-[0.02em]">
          Find <em className="text-[#C5A059]">Us</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* MAP — dark mode grayscale iframe slot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-80 lg:h-full min-h-[420px] overflow-hidden border border-white/5"
          >
            {/*
              GOOGLE MAPS IFRAME — Replace the placeholder div below with:
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                width="100%" height="100%" style={{ border: 0,
                  filter: 'grayscale(100%) brightness(0.35) contrast(1.1)',
                  WebkitFilter: 'grayscale(100%) brightness(0.35) contrast(1.1)'
                }}
                allowFullScreen loading="lazy"
              />
              Get embed URL: maps.google.com → Share → Embed a map → copy src URL
            */}

            {/* PLACEHOLDER — styled dark map grid */}
            <div className="absolute inset-0 bg-[#1C1A16]">
              {/* Grid pattern simulating a dark map */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Diagonal street lines */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(45deg, #C5A059 1px, transparent 1px)',
                  backgroundSize: '80px 80px',
                }}
              />
            </div>

            {/* Center pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center relative z-10">
                {/* Pulsing ring */}
                <div className="relative mx-auto mb-4 w-12 h-12">
                  <div className="absolute inset-0 bg-[#C5A059]/20 rounded-full animate-ping" />
                  <div className="relative w-12 h-12 bg-[#C5A059] flex items-center justify-center shadow-lg">
                    <MapPin size={18} className="text-[#1A1815]" />
                  </div>
                </div>
                <p className="font-cormorant text-xl font-semibold text-[#FDFCFA] tracking-[0.05em]">Luz de Luna</p>
                <p className="text-[#FAF8F4]/35 font-inter text-xs mt-1 tracking-[0.1em]">Falkenstraße 22A · 30449 Hannover</p>
                <a
                  href="https://maps.google.com/?q=Falkenstraße+22A+30449+Hannover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 border border-[#C5A059]/40 text-[#C5A059] px-5 py-2.5 font-inter text-[10px] tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-[#1A1815] transition-all duration-200"
                >
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="flex flex-col gap-10 lg:pl-6"
          >
            {/* Opening Hours */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Clock size={13} className="text-[#C5A059]" />
                <h3 className="font-cormorant text-xl font-semibold text-[#FDFCFA] tracking-[0.05em]">Öffnungszeiten</h3>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {hours.map(h => (
                  <div key={h.day} className="flex justify-between items-center py-3.5">
                    <span className="text-[#FAF8F4]/45 font-inter text-sm font-light tracking-[0.03em]">{h.day}</span>
                    <span className="text-[#C5A059] font-inter text-sm font-medium tracking-[0.05em]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-cormorant text-xl font-semibold text-[#FDFCFA] mb-6 tracking-[0.05em]">Kontakt</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={13} className="text-[#C5A059] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[#FAF8F4]/70 font-inter text-sm font-light tracking-[0.03em]">Falkenstraße 22A</p>
                    <p className="text-[#FAF8F4]/40 font-inter text-sm font-light">30449 Hannover</p>
                  </div>
                </div>
                <a href="tel:+4951112345" className="flex items-center gap-4 group">
                  <Phone size={13} className="text-[#C5A059] shrink-0" />
                  <span className="text-[#FAF8F4]/60 font-inter text-sm font-light tracking-[0.03em] group-hover:text-[#C5A059] transition-colors duration-200">
                    +49 511 12345
                  </span>
                </a>
                <a href="mailto:info@luz-de-luna.de" className="flex items-center gap-4 group">
                  <Mail size={13} className="text-[#C5A059] shrink-0" />
                  <span className="text-[#FAF8F4]/60 font-inter text-sm font-light tracking-[0.03em] group-hover:text-[#C5A059] transition-colors duration-200">
                    info@luz-de-luna.de
                  </span>
                </a>
              </div>
            </div>

            {/* Google Maps note */}
            <p className="text-[#FAF8F4]/20 font-inter text-xs font-light tracking-[0.08em] uppercase border-t border-white/[0.05] pt-6">
              Google Maps Iframe — Einbettung nach Wunsch konfigurierbar
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

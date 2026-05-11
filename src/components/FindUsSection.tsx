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
    <section id="findus" className="py-24 md:py-32 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-inter">Besuchen Sie uns</span>
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-[#1A1815] mb-14">
          Find <em>Us</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-80 lg:h-full min-h-[400px] bg-[#EDE8DF] overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
              {/* Styled grid pattern to simulate a map */}
              <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)', backgroundSize: '32px 32px' }}
              />
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 bg-[#C9A96E] flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <MapPin size={18} className="text-[#1A1815]" />
                </div>
                <p className="font-cormorant text-xl font-semibold text-[#1A1815]">Luz de Luna</p>
                <p className="text-[#6B6560] font-inter text-xs mt-1">Falkenstraße 22A · 30449 Hannover</p>
                <a
                  href="https://maps.google.com/?q=Falkenstraße+22A+30449+Hannover"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#2C2A26] text-[#C9A96E] px-5 py-2.5 font-inter text-xs tracking-[0.15em] uppercase hover:bg-[#C9A96E] hover:text-[#1A1815] transition-colors duration-200"
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
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Opening Hours */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Clock size={14} className="text-[#C9A96E]" />
                <h3 className="font-cormorant text-xl font-semibold text-[#1A1815]">Öffnungszeiten</h3>
              </div>
              <div className="divide-y divide-[#D4C9B8]">
                {hours.map(h => (
                  <div key={h.day} className="flex justify-between items-center py-3">
                    <span className="text-[#6B6560] font-inter text-sm">{h.day}</span>
                    <span className="text-[#C9A96E] font-inter text-sm font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-cormorant text-xl font-semibold text-[#1A1815] mb-5">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-[#C9A96E] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[#1A1815] font-inter text-sm font-medium">Falkenstraße 22A</p>
                    <p className="text-[#6B6560] font-inter text-sm">30449 Hannover</p>
                  </div>
                </div>
                <a href="tel:+4951112345" className="flex items-center gap-3 group">
                  <Phone size={14} className="text-[#C9A96E] shrink-0" />
                  <span className="text-[#1A1815] font-inter text-sm group-hover:text-[#C9A96E] transition-colors">+49 511 12345</span>
                </a>
                <a href="mailto:info@luz-de-luna.de" className="flex items-center gap-3 group">
                  <Mail size={14} className="text-[#C9A96E] shrink-0" />
                  <span className="text-[#1A1815] font-inter text-sm group-hover:text-[#C9A96E] transition-colors">info@luz-de-luna.de</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

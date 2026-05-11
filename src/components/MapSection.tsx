'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const hours = [
  { days: 'Mo – Fr', time: '08:00 – 22:00' },
  { days: 'Samstag', time: '09:00 – 23:00' },
  { days: 'Sonntag', time: '09:00 – 23:00' },
  { days: 'Feiertage', time: '10:00 – 21:00' },
]

export default function MapSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="contact" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4">
        {!hideHeader && (
          <div className="text-center mb-16">
            <p className="text-[#B8962E] text-sm font-medium tracking-widest uppercase mb-3">Besuchen Sie uns</p>
            <h2 className="font-playfair text-5xl font-black text-[#1C160D] mb-4">Anfahrt & Kontakt</h2>
            <div className="w-16 h-0.5 bg-[#B8962E] mx-auto" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1C160D] rounded-3xl overflow-hidden h-80 lg:h-full min-h-72 relative flex items-center justify-center group cursor-pointer"
          >
            {/* Decorative map grid */}
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'linear-gradient(#B8962E 1px, transparent 1px), linear-gradient(90deg, #B8962E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 bg-[#B8962E] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <MapPin size={24} className="text-[#1C160D]" />
              </div>
              <p className="font-playfair text-xl font-bold text-[#FDFAF6]">Luz de Luna</p>
              <p className="text-[#D4AF5A] text-sm mt-1">Georgstraße 10, 30159 Hannover</p>
              <a href="https://maps.google.com/?q=Georgstraße+10+Hannover" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#B8962E] text-[#FDFAF6] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#D4AF5A] transition-colors">
                In Google Maps öffnen
              </a>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Opening Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-[#B8962E]" />
                <h3 className="font-playfair text-xl font-bold text-[#1C160D]">Öffnungszeiten</h3>
              </div>
              <div className="space-y-2">
                {hours.map(h => (
                  <div key={h.days} className="flex justify-between items-center py-2 border-b border-[#C9B99A]/30">
                    <span className="text-[#2E2010] font-inter text-sm font-medium">{h.days}</span>
                    <span className="text-[#B8962E] font-inter text-sm font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-[#1C160D] mb-4">Kontakt</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#B8962E]/10 rounded-full flex items-center justify-center">
                    <MapPin size={16} className="text-[#B8962E]" />
                  </div>
                  <div>
                    <p className="text-[#2E2010] font-inter text-sm">Georgstraße 10</p>
                    <p className="text-[#2E2010] font-inter text-sm">30159 Hannover</p>
                  </div>
                </div>
                <a href="tel:+4951112345" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#B8962E]/10 rounded-full flex items-center justify-center group-hover:bg-[#B8962E]/20 transition-colors">
                    <Phone size={16} className="text-[#B8962E]" />
                  </div>
                  <span className="text-[#2E2010] font-inter text-sm group-hover:text-[#B8962E] transition-colors">+49 511 12345</span>
                </a>
                <a href="mailto:info@luz-de-luna.de" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#B8962E]/10 rounded-full flex items-center justify-center group-hover:bg-[#B8962E]/20 transition-colors">
                    <Mail size={16} className="text-[#B8962E]" />
                  </div>
                  <span className="text-[#2E2010] font-inter text-sm group-hover:text-[#B8962E] transition-colors">info@luz-de-luna.de</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

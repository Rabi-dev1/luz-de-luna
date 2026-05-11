'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function ReservationTeaser() {
  return (
    <section id="reservierung" className="py-28 bg-[#1C160D] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #B8962E 0%, transparent 60%), radial-gradient(circle at 70% 50%, #B8962E 0%, transparent 60%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8962E]/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#B8962E] text-xs font-medium tracking-[0.2em] uppercase mb-4">Wir freuen uns auf Sie</p>
          <h2 className="font-playfair text-4xl md:text-6xl font-black text-[#FDFAF6] mb-5 leading-tight">
            Reservieren Sie<br />Ihren Tisch
          </h2>
          <div className="w-10 h-px bg-[#B8962E] mx-auto mb-6" />
          <p className="text-[#FAF7F2]/50 font-inter mb-10 leading-relaxed">
            Online buchen oder uns direkt anrufen —<br />wir sind täglich für Sie da.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservierung"
              className="bg-[#B8962E] text-[#FDFAF6] px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-[#D4AF5A] transition-all duration-200 hover:scale-105 active:scale-95">
              Online reservieren
            </Link>
            <a href="tel:+4951112345"
              className="flex items-center justify-center gap-2 border border-[#FAF7F2]/20 text-[#FAF7F2]/80 px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:border-[#D4AF5A] hover:text-[#D4AF5A] transition-all duration-200">
              <Phone size={15} />
              +49 511 12345
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

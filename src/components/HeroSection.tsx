'use client'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#2d1810]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-[#1a1a2e]/60" />

      {/* Decorative gold circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#c9a84c]/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#c17a5a]/5 blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <MapPin size={16} className="text-[#c9a84c]" />
          <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Hannover Mitte</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-playfair text-7xl md:text-9xl font-black text-[#f5f0e8] leading-none mb-4"
        >
          Luz de Luna
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-0.5 bg-[#c9a84c] mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-[#f5f0e8]/70 font-inter mb-10 leading-relaxed"
        >
          Dein Genussmoment in Hannover
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/reservierung"
            className="bg-[#c9a84c] text-[#1a1a2e] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b8860b] transition-all duration-200 hover:scale-105 active:scale-95">
            Tisch reservieren
          </Link>
          <Link href="/speisekarte"
            className="border-2 border-[#c9a84c] text-[#c9a84c] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c9a84c]/10 transition-all duration-200">
            Speisekarte ansehen
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-[#c9a84c]/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

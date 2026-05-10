'use client'
import { motion } from 'framer-motion'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-[#1a1a2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a] to-[#1a1a2e]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-playfair text-5xl md:text-7xl font-black text-[#f5f0e8] mb-4"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-0.5 bg-[#c9a84c] mx-auto mb-4"
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#f5f0e8]/60 font-inter text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

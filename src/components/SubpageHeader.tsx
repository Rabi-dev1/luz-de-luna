'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface SubpageHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  imageUrl?: string
  breadcrumb?: { label: string; href: string }
}

export default function SubpageHeader({
  eyebrow, title, subtitle,
  imageUrl = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80',
  breadcrumb
}: SubpageHeaderProps) {
  return (
    <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
      {/* IMAGE PLACEHOLDER — replace imageUrl prop with real photo */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C160D] via-[#1C160D]/50 to-[#1C160D]/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-1.5 text-[#FAF7F2]/40 text-xs font-inter mb-3"
          >
            <Link href="/" className="hover:text-[#D4AF5A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#D4AF5A]">{breadcrumb.label}</span>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#B8962E] text-xs font-medium tracking-[0.2em] uppercase mb-2"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-playfair text-4xl md:text-6xl font-black text-[#FDFAF6] leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-[#FAF7F2]/55 font-inter text-base mt-2"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-10 h-px bg-[#B8962E] mt-4 origin-left"
        />
      </div>
    </section>
  )
}

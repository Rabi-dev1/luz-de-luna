'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertCircle } from 'lucide-react'
import type { MenuItem } from '@/lib/menuData'

interface ModalProps {
  item: MenuItem | null
  onClose: () => void
}

const badgeStyles: Record<string, string> = {
  gold:    'text-[#C9A96E] border-[#C9A96E]/30 bg-[#C9A96E]/10',
  green:   'text-emerald-400 border-emerald-800/40 bg-emerald-900/20',
  red:     'text-red-400 border-red-800/40 bg-red-900/20',
  default: 'text-[#D4C9B8]/60 border-[#D4C9B8]/15 bg-[#2C2A26]',
}

export default function MenuItemModal({ item, onClose }: ModalProps) {
  useEffect(() => {
    if (!item) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#0E0C09]/88 backdrop-blur-[4px]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center
              p-0 sm:p-6 pointer-events-none"
          >
            <div className="pointer-events-auto w-full sm:max-w-[440px] bg-[#1A1815]
              shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden max-h-[95vh] flex flex-col
              rounded-t-xl sm:rounded-none">

              {/* ── Text header (replaces image) ── */}
              <div className="relative px-7 pt-8 pb-7 border-b border-white/[0.07]">
                {/* Subtle sitz.jpg texture behind header */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
                  style={{ backgroundImage: "url('/images/sitz.jpg')" }}
                />
                <div className="absolute inset-0 bg-[#1A1815]/80" />

                {/* Close */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center
                    text-[#FAF8F4]/30 hover:text-[#FAF8F4]/70 transition-colors duration-200"
                  aria-label="Schließen"
                >
                  <X size={14} strokeWidth={1} />
                </button>

                <div className="relative">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-5 h-px bg-[#C9A96E]/50" />
                    <span className="text-[#C9A96E]/60 font-inter text-[9px] tracking-[0.3em] uppercase">Gericht</span>
                  </div>

                  {/* Name */}
                  <h2 className="font-cormorant text-[2.1rem] font-semibold text-[#FDFCFA] leading-tight tracking-[0.01em] mb-3">
                    {item.name}
                  </h2>

                  {/* Price + badge */}
                  <div className="flex items-center gap-3">
                    <span className="font-cormorant text-2xl font-semibold text-[#C9A96E] leading-none">
                      {item.price}
                    </span>
                    {item.badge && (
                      <span className={`font-inter text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border ${badgeStyles[item.badgeType ?? 'default']}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Content ── */}
              <div className="overflow-y-auto flex-1 px-7 py-7">
                {/* Description */}
                <p className="text-[#D4C9B8]/65 font-inter font-light text-[13px] leading-[1.9] mb-7">
                  {item.description}
                </p>

                <div className="w-full h-px bg-white/[0.06] mb-6" />

                {/* Ingredients */}
                <div className="mb-6">
                  <h3 className="text-[#C9A96E]/70 text-[9px] tracking-[0.3em] uppercase font-inter font-light mb-2.5">
                    Zutaten
                  </h3>
                  <p className="text-[#D4C9B8]/50 font-inter font-light text-[13px] leading-[1.85]">
                    {item.ingredients}
                  </p>
                </div>

                {/* Allergens */}
                <div className="border-l border-[#C9A96E]/25 pl-4 py-1.5 mb-8">
                  <div className="flex items-center gap-2 mb-1.5">
                    <AlertCircle size={10} strokeWidth={1} className="text-[#C9A96E]/50" />
                    <span className="text-[#C9A96E]/50 text-[9px] tracking-[0.25em] uppercase font-inter font-light">
                      Allergene & Hinweise
                    </span>
                  </div>
                  <p className="text-[#D4C9B8]/40 font-inter font-light text-[12px] leading-[1.8]">
                    {item.allergens}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="/#reservation"
                  onClick={onClose}
                  className="block w-full bg-[#C9A96E] text-[#0E0C09] py-4 text-center
                    font-inter font-semibold text-[10px] tracking-[0.28em] uppercase
                    hover:bg-[#DDB97E] transition-all duration-300
                    hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(201,169,110,0.22)]"
                >
                  Tisch reservieren
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

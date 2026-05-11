'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertCircle } from 'lucide-react'
import type { MenuItem } from '@/lib/menuData'

interface ModalProps {
  item: MenuItem | null
  onClose: () => void
}

const badgeConfig: Record<string, { bg: string; text: string; border: string }> = {
  gold:    { bg: 'bg-[#C5A17F]/15', text: 'text-[#C5A17F]',    border: 'border-[#C5A17F]/25' },
  green:   { bg: 'bg-emerald-950/50', text: 'text-emerald-400', border: 'border-emerald-800/35' },
  red:     { bg: 'bg-red-950/50',    text: 'text-red-400',      border: 'border-red-800/35' },
  default: { bg: 'bg-[#2C2A26]',    text: 'text-[#D4C9B8]/60', border: 'border-[#D4C9B8]/15' },
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0A0805]/90 backdrop-blur-[6px]"
            onClick={onClose}
          />

          {/* ── Modal ── */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center
              p-0 sm:p-6 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full sm:max-w-[460px] bg-[#1C1914] shadow-[0_32px_80px_rgba(0,0,0,0.7)]
                overflow-hidden max-h-[96vh] flex flex-col
                rounded-t-2xl sm:rounded-none"
            >
              {/* ── Image area ── */}
              <div className="relative h-60 sm:h-72 shrink-0 overflow-hidden">
                {/* IMAGE SLOT */}
                <div
                  className="absolute inset-0 bg-cover bg-center food-img"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1914]/95 via-[#1C1914]/20 to-transparent" />
                {/* Radial vignette */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(12,10,7,0.5) 100%)' }}
                />

                {/* Price — large, gold */}
                <div className="absolute bottom-5 left-6">
                  <span className="font-cormorant text-4xl font-semibold text-[#C5A17F] leading-none tracking-tight">
                    {item.price}
                  </span>
                </div>

                {/* Badge */}
                {item.badge && (() => {
                  const b = badgeConfig[item.badgeType ?? 'default']
                  return (
                    <div className="absolute top-5 left-6">
                      <span className={`font-inter text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border ${b.bg} ${b.text} ${b.border}`}>
                        {item.badge}
                      </span>
                    </div>
                  )
                })()}

                {/* Close */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                    bg-[#1C1914]/75 text-[#FAF8F4]/50 hover:text-[#FAF8F4]
                    hover:bg-[#2C2A26] transition-all duration-200 border border-white/8"
                  aria-label="Schließen"
                >
                  <X size={14} strokeWidth={1} />
                </button>
              </div>

              {/* ── Content ── */}
              <div className="overflow-y-auto flex-1 px-6 py-7">
                <h2 className="font-cormorant text-3xl font-semibold text-[#FDFCFA] mb-2 tracking-[0.01em]">
                  {item.name}
                </h2>
                <p className="text-[#D4C9B8]/55 font-inter font-light text-sm leading-[1.8] mb-7">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-[#FDFCFA]/6 mb-6" />

                {/* Ingredients */}
                <div className="mb-6">
                  <h3 className="text-[#C5A17F] text-[9px] tracking-[0.32em] uppercase font-inter font-light mb-2.5">
                    Zutaten
                  </h3>
                  <p className="text-[#D4C9B8]/50 font-inter font-light text-[13px] leading-[1.8]">
                    {item.ingredients}
                  </p>
                </div>

                {/* Allergens */}
                <div className="border-l-[1.5px] border-[#C5A17F]/30 pl-4 py-2 mb-8">
                  <div className="flex items-center gap-2 mb-1.5">
                    <AlertCircle size={10} strokeWidth={1} className="text-[#C5A17F]/60" />
                    <span className="text-[#C5A17F]/60 text-[9px] tracking-[0.28em] uppercase font-inter font-light">
                      Allergene & Hinweise
                    </span>
                  </div>
                  <p className="text-[#D4C9B8]/40 font-inter font-light text-xs leading-[1.75]">
                    {item.allergens}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="/#reservation"
                  onClick={onClose}
                  className="block w-full bg-[#C5A17F] text-[#0A0805] py-4 text-center font-inter font-semibold
                    text-[10px] tracking-[0.28em] uppercase
                    hover:bg-[#D4B38C] transition-all duration-300
                    hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(197,161,127,0.22)]"
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

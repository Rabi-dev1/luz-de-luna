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
  gold:    'bg-[#C9A96E]/20 text-[#C9A96E] border border-[#C9A96E]/30',
  green:   'bg-emerald-900/30 text-emerald-400 border border-emerald-800/40',
  red:     'bg-red-900/30 text-red-400 border border-red-800/40',
  default: 'bg-[#2C2A26] text-[#D4C9B8] border border-[#D4C9B8]/20',
}

export default function MenuItemModal({ item, onClose }: ModalProps) {
  useEffect(() => {
    if (!item) return
    document.body.style.overflow = 'hidden'
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#1A1815]/85 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal card */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center p-0 sm:p-6 pointer-events-none"
          >
            <div className="pointer-events-auto w-full sm:max-w-lg bg-[#2C2A26] shadow-2xl overflow-hidden max-h-[95vh] flex flex-col rounded-t-2xl sm:rounded-none">
              {/* Image area */}
              <div className="relative h-56 sm:h-64 shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2A26] via-transparent to-transparent" />

                {/* Price badge */}
                <div className="absolute top-5 left-5">
                  <span className="font-cormorant text-3xl font-semibold text-[#C9A96E]">{item.price}</span>
                </div>

                {/* Category badge */}
                {item.badge && (
                  <div className="absolute top-5 right-12">
                    <span className={`text-[10px] tracking-[0.15em] uppercase font-inter px-2.5 py-1 ${badgeStyles[item.badgeType ?? 'default']}`}>
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#2C2A26]/80 text-[#FAF8F4]/70 hover:text-[#FAF8F4] transition-colors"
                  aria-label="Schließen"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto flex-1 p-6">
                <h2 className="font-cormorant text-3xl font-semibold text-[#FDFCFA] mb-2">{item.name}</h2>
                <p className="text-[#D4C9B8]/70 font-inter text-sm leading-relaxed mb-5">{item.description}</p>

                {/* Ingredients */}
                <div className="mb-5">
                  <h3 className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-inter font-medium mb-2">Zutaten</h3>
                  <p className="text-[#D4C9B8]/60 font-inter text-sm leading-relaxed">{item.ingredients}</p>
                </div>

                {/* Allergens */}
                <div className="border-l-2 border-[#C9A96E]/40 pl-4 py-2 mb-6">
                  <div className="flex items-center gap-1.5 mb-1">
                    <AlertCircle size={11} className="text-[#C9A96E]/70" />
                    <span className="text-[#C9A96E]/70 text-[10px] tracking-[0.2em] uppercase font-inter font-medium">Allergene & Hinweise</span>
                  </div>
                  <p className="text-[#D4C9B8]/50 font-inter text-xs leading-relaxed">{item.allergens}</p>
                </div>

                {/* CTA */}
                <a
                  href="/#reservation"
                  onClick={onClose}
                  className="block w-full bg-[#C9A96E] text-[#1A1815] py-4 text-center font-inter font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#E0C48A] transition-colors duration-200"
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

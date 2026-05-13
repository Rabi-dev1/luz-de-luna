'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bike } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Animated hamburger → X with custom SVG ── */
function MenuToggle({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {/* Top bar → rotates to first diagonal */}
      <motion.g
        animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        style={{ originX: '11px', originY: '7px' }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      >
        <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </motion.g>
      {/* Middle bar → fades + scales out */}
      <motion.g
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        style={{ originX: '11px', originY: '11px' }}
        transition={{ duration: 0.2 }}
      >
        <line x1="6" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </motion.g>
      {/* Bottom bar → rotates to second diagonal */}
      <motion.g
        animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        style={{ originX: '11px', originY: '15px' }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      >
        <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </motion.g>
    </svg>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const bg = scrolled || !isHome
    ? 'bg-[#0A0805]/95 backdrop-blur-md border-b border-[#FDFCFA]/[0.05]'
    : 'bg-transparent'

  const links = [
    { label: 'Speisekarte', href: isHome ? '/#menu'        : '/menu/fruehstueck'  },
    { label: 'Über uns',    href: isHome ? '/#about'       : '/#about' },
    { label: 'Kontakt',     href: isHome ? '/#findus'      : '/#findus' },
    { label: 'Reservieren', href: isHome ? '/#reservation' : '/#reservation', cta: true },
  ]

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Wordmark */}
          <Link href="/" className="font-cormorant text-2xl font-semibold tracking-[0.08em] text-[#C5A17F] uppercase">
            Luz de Luna
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map(l => l.cta ? (
              <Link key={l.href} href={l.href}
                className="border border-[#C5A17F]/60 text-[#C5A17F] px-5 py-2 font-inter text-[9px] tracking-[0.28em] uppercase font-light
                  hover:bg-[#C5A17F] hover:text-[#0A0805] transition-all duration-300">
                {l.label}
              </Link>
            ) : (
              <Link key={l.href} href={l.href}
                className="text-[#FAF8F4]/55 hover:text-[#C5A17F] font-inter text-[9px] tracking-[0.22em] uppercase font-light transition-colors duration-200">
                {l.label}
              </Link>
            ))}

            {/* Lieferando */}
            <a
              href="https://www.lieferando.de/speisekarte/luz-de-luna-cafe-bar-restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#FF8000] text-white px-4 py-2
                font-inter text-[9px] tracking-[0.2em] uppercase font-medium
                hover:bg-[#E07000] transition-colors duration-200"
            >
              <Bike size={12} strokeWidth={1.5} />
              Lieferando
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#FAF8F4]/70 hover:text-[#C5A17F] transition-colors duration-200 p-1"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          >
            <MenuToggle open={open} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#0A0805]/98 backdrop-blur-md border-t border-[#C5A17F]/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={`font-inter text-[10px] tracking-[0.3em] uppercase font-light
                    ${l.cta ? 'text-[#C5A17F]' : 'text-[#FAF8F4]/55 hover:text-[#C5A17F]'}
                    transition-colors duration-200`}>
                  {l.label}
                </Link>
              ))}
              <a
                href="https://www.lieferando.de/speisekarte/luz-de-luna-cafe-bar-restaurant"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 bg-[#FF8000] text-white px-5 py-3
                  font-inter text-[9px] tracking-[0.2em] uppercase font-medium w-fit
                  hover:bg-[#E07000] transition-colors duration-200"
              >
                <Bike size={13} strokeWidth={1.5} />
                Lieferando Bestellen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

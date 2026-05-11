'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Bike } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    ? 'bg-[#2C2A26]/96 backdrop-blur-md'
    : 'bg-transparent'

  const links = [
    { label: 'Speisekarte', href: isHome ? '/#menu' : '/menu/fruehstueck' },
    { label: 'Über uns',   href: isHome ? '/#about' : '/#about' },
    { label: 'Kontakt',    href: isHome ? '/#findus' : '/#findus' },
    { label: 'Reservieren', href: isHome ? '/#reservation' : '/#reservation', cta: true },
  ]

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-cormorant text-2xl font-semibold tracking-widest text-[#E0C48A] uppercase">
            Luz de Luna
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map(l => l.cta ? (
              <Link key={l.href} href={l.href}
                className="border border-[#C5A059] text-[#C5A059] px-5 py-2 text-xs tracking-[0.15em] uppercase font-inter font-medium hover:bg-[#C5A059] hover:text-[#1A1815] transition-all duration-200">
                {l.label}
              </Link>
            ) : (
              <Link key={l.href} href={l.href}
                className="text-[#FAF8F4]/70 hover:text-[#C5A059] text-xs tracking-[0.15em] uppercase font-inter font-medium transition-colors duration-200">
                {l.label}
              </Link>
            ))}
            {/* Lieferando */}
            <a
              href="https://www.lieferando.de/speisekarte/luz-de-luna-cafe-bar-restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#FF8000] text-white px-4 py-2 text-xs tracking-[0.12em] uppercase font-inter font-semibold hover:bg-[#E07000] transition-colors duration-200"
            >
              <Bike size={13} />
              Lieferando
            </a>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-[#FAF8F4] p-1">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#2C2A26] border-t border-[#C9A96E]/20"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={`text-sm tracking-[0.15em] uppercase font-inter font-medium ${l.cta ? 'text-[#C5A059]' : 'text-[#FAF8F4]/70'}`}>
                  {l.label}
                </Link>
              ))}
              <a
                href="https://www.lieferando.de/speisekarte/luz-de-luna-cafe-bar-restaurant"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 bg-[#FF8000] text-white px-4 py-3 text-sm tracking-[0.12em] uppercase font-inter font-semibold w-fit"
              >
                <Bike size={14} />
                Lieferando Bestellen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

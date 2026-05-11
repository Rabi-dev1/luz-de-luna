'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Über uns',    homeHref: '/#ueber-uns',   pageHref: '/#ueber-uns' },
  { label: 'Speisekarte', homeHref: '/#karte',        pageHref: '/#karte' },
  { label: 'Reservierung',homeHref: '/#reservierung', pageHref: '/reservierung' },
  { label: 'Galerie',     homeHref: '/galerie',       pageHref: '/galerie' },
  { label: 'Kontakt',     homeHref: '/kontakt',       pageHref: '/kontakt' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = isHome
    ? scrolled ? 'bg-[#1C160D]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    : 'bg-[#1C160D]'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-playfair text-xl md:text-2xl font-bold text-[#D4AF5A] tracking-wide">
            Luz de Luna
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => {
              const href = isHome ? link.homeHref : link.pageHref
              const isActive = pathname === link.pageHref
              return (
                <Link key={link.label} href={href}
                  className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                    isActive ? 'text-[#D4AF5A]' : 'text-[#FAF7F2]/75 hover:text-[#D4AF5A]'
                  }`}>
                  {link.label}
                </Link>
              )
            })}
            <Link href={isHome ? '/#reservierung' : '/reservierung'}
              className="bg-[#B8962E] text-[#FAF7F2] px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF5A] transition-colors duration-200">
              Reservieren
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#FAF7F2] p-2">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1C160D] border-t border-[#B8962E]/20"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link key={link.label} href={isHome ? link.homeHref : link.pageHref}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#FAF7F2]/80 text-base font-medium py-3 border-b border-[#B8962E]/10 hover:text-[#D4AF5A] transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link href={isHome ? '/#reservierung' : '/reservierung'}
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-[#B8962E] text-[#FAF7F2] py-3 px-6 rounded-full text-center font-semibold">
                Tisch reservieren
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

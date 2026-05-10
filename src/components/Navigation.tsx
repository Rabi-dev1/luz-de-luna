'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Speisekarte', href: '/speisekarte' },
  { label: 'Reservierung', href: '/reservierung' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Über uns', href: '/ueber-uns' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !isHome ? 'bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-playfair text-2xl font-bold text-[#c9a84c] tracking-wide">
            Luz de Luna
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  pathname === link.href ? 'text-[#c9a84c]' : 'text-[#f5f0e8]/80 hover:text-[#c9a84c]'
                }`}>
                {link.label}
              </Link>
            ))}
            <Link href="/reservierung"
              className="bg-[#c9a84c] text-[#1a1a2e] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#b8860b] transition-colors duration-200">
              Reservieren
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#f5f0e8] p-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a2e]/98 backdrop-blur-md border-t border-[#c9a84c]/20"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium py-2 border-b border-[#c9a84c]/10 ${
                    pathname === link.href ? 'text-[#c9a84c]' : 'text-[#f5f0e8]'
                  }`}>
                  {link.label}
                </Link>
              ))}
              <Link href="/reservierung" onClick={() => setMenuOpen(false)}
                className="bg-[#c9a84c] text-[#1a1a2e] px-6 py-3 rounded-full text-center font-semibold mt-2">
                Tisch reservieren
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

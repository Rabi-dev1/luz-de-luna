'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Speisekarte', href: '#menu' },
  { label: 'Reservierung', href: '#reservation' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Über uns', href: '#about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-playfair text-2xl font-bold text-[#c9a84c] tracking-wide">
            Luz de Luna
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200 text-sm font-medium tracking-wide uppercase">
                {link.label}
              </a>
            ))}
            <a href="#reservation"
              className="bg-[#c9a84c] text-[#1a1a2e] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#b8860b] transition-colors duration-200">
              Reservieren
            </a>
          </div>

          {/* Mobile Burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#f5f0e8] p-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-[#f5f0e8] text-lg font-medium py-2 border-b border-[#c9a84c]/10">
                  {link.label}
                </a>
              ))}
              <a href="#reservation" onClick={() => setMenuOpen(false)}
                className="bg-[#c9a84c] text-[#1a1a2e] px-6 py-3 rounded-full text-center font-semibold mt-2">
                Tisch reservieren
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

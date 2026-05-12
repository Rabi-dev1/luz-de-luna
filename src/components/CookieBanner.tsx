'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('luzdeluna_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('luzdeluna_cookie_consent', 'accepted')
    setVisible(false)
  }
  const decline = () => {
    localStorage.setItem('luzdeluna_cookie_consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 inset-x-0 z-[100] bg-[#0E0C09]/98 backdrop-blur-md border-t border-[#FDFCFA]/[0.07]"
          role="dialog"
          aria-label="Cookie-Hinweis"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#C9A96E] mt-0.5 shrink-0">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[#D4C9B8]/60 font-inter font-light text-[12px] leading-[1.75]">
                Diese Website verwendet ausschließlich technisch notwendige Cookies.{' '}
                <Link href="/datenschutz" className="text-[#C9A96E]/80 hover:text-[#C9A96E] underline underline-offset-2 transition-colors duration-200">
                  Datenschutz
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="text-[#FDFCFA]/35 font-inter text-[9px] tracking-[0.22em] uppercase hover:text-[#FDFCFA]/60 transition-colors duration-200"
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="bg-[#C9A96E] text-[#0A0805] px-5 py-2.5 font-inter font-semibold text-[9px] tracking-[0.22em] uppercase
                  hover:bg-[#D4B88A] transition-colors duration-200"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

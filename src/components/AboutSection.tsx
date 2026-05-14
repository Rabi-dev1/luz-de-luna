'use client'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07 + 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  }),
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inViewRef  = useRef(null)
  const inView     = useInView(inViewRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  const stats = [
    ['80%',    'Regionale\nZutaten'],
    ['4.9 ★',  'Google\nBewertung'],
    ['Täglich', 'Frisch\ngekocht'],
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 pt-28 md:pt-36 pb-36 md:pb-52 bg-[#0C0A08] -mt-12"
    >
      {/* Subtle separator glow from above */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#C9A96E]/4 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── Image column ── */}
          <motion.div
            ref={inViewRef}
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative lg:mb-[-100px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-cover bg-center food-img"
                style={{
                  backgroundImage: "url('/images/uberuns.jpg')",
                  y: imageY,
                  scale: 1.08,
                  backgroundPosition: 'center 30%',
                }}
              />
              <div
                className="absolute inset-0"
                style={{ boxShadow: 'inset 0 0 80px rgba(10,8,5,0.25)' }}
              />
            </div>

            {/* "Seit 2018" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -right-4 md:right-0 bg-[#1C1914] border border-[#FDFCFA]/6 px-7 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-10"
            >
              <p className="font-cormorant text-[#C9A96E] text-5xl md:text-6xl font-semibold leading-none tracking-tight">2025</p>
              <p className="text-[#FAF8F4]/30 font-inter text-[9px] tracking-[0.28em] uppercase font-light mt-2">In Hannover</p>
            </motion.div>

            {/* Vertical gold accent line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="absolute -left-5 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A96E]/35 to-transparent origin-top hidden lg:block"
            />
          </motion.div>

          {/* ── Text column ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pt-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A96E]/55" />
              <span className="text-[#C9A96E] text-[9px] tracking-[0.38em] uppercase font-inter font-light">
                Unsere Geschichte
              </span>
            </div>

            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-[#FDFCFA] leading-[1.0] mb-6 tracking-[0.01em]">
              Mehr als ein<br />
              <em className="text-[#D4C9B8]">Restaurant</em>
            </h2>

            <div className="w-10 h-px bg-[#C9A96E] mb-10" />

            <p className="text-[#D4C9B8]/60 font-inter font-light text-[15px] leading-[2.05] mb-14 tracking-[0.01em]">
              Leidenschaft, Zusammenhalt und ein herzliches Willkommen:
              Das ist unsere Geschichte. Als Familienbetrieb legen wir Wert auf
              echten, freundlichen Umgang und eine entspannte Stimmung.
              Tritt ein und fühl dich wie bei Freunden.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-10 pt-10 border-t border-[#FDFCFA]/8">
              {stats.map(([val, label], i) => (
                <motion.div
                  key={val}
                  custom={i}
                  variants={statItem}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                >
                  <p className="font-cormorant text-[2.2rem] md:text-[2.6rem] font-semibold text-[#C9A96E] tracking-tight leading-none">
                    {val}
                  </p>
                  <p className="text-[#D4C9B8]/45 font-inter font-light text-[11px] leading-[1.6] mt-2.5 whitespace-pre-line tracking-[0.08em] uppercase">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

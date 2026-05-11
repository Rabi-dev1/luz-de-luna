'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    // Negative top margin so the image from above "bleeds" into this section
    // z-10 ensures this section sits above the menu section below
    <section id="about" className="relative z-10 pt-32 md:pt-40 pb-40 md:pb-52 bg-[#FAF8F4] -mt-16">
      {/* Subtle top shadow for depth illusion */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#14120E]/12 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Image — overflows DOWNWARD into the next section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative lg:mb-[-80px]"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center food-img"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80')" }}
              />
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(20,18,14,0.2)]" />

              {/* Floating "Seit 2018" badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="absolute bottom-8 -right-5 bg-[#2C2A26] px-6 py-5 shadow-2xl z-10"
              >
                <p className="font-cormorant text-[#C5A059] text-5xl font-semibold leading-none tracking-tight">2018</p>
                <p className="text-[#FAF8F4]/40 font-inter text-[10px] tracking-[0.25em] uppercase font-light mt-1.5">In Hannover</p>
              </motion.div>
            </div>

            {/* Gold line decoration */}
            <div className="absolute -left-4 top-1/3 w-px h-24 bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent hidden lg:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 pt-0 lg:pt-10"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C5A059]" />
              <span className="text-[#C5A059] text-[10px] tracking-[0.35em] uppercase font-inter font-light">Unsere Geschichte</span>
            </div>

            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1A1815] leading-[1.0] mb-6 tracking-[0.01em]">
              Mehr als ein<br /><em className="text-[#2C2A26]">Restaurant</em>
            </h2>

            <div className="w-10 h-px bg-[#C5A059] mb-10" />

            <p className="text-[#6B6560] font-inter font-light text-base leading-[2.0] mb-6 tracking-[0.01em]">
              <strong className="font-medium text-[#1A1815] tracking-[0.02em]">Luz de Luna</strong> — Mondlicht.
              So wie der Mond sein ruhiges, warmes Licht auf Hannover wirft, so wollen wir eine Oase
              der Gemütlichkeit mitten in der Stadt sein. Gegründet 2018 in Hannover-Linden.
            </p>
            <p className="text-[#6B6560] font-inter font-light text-base leading-[2.0] mb-12 tracking-[0.01em]">
              Unsere Küche lebt von der Vielfalt Niedersachsens — frisches Gemüse vom Wochenmarkt,
              Fleisch von regionalen Höfen, Fisch aus nachhaltigem Fang. Saisonal, ehrlich,
              mit Liebe zubereitet.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-[#D4C9B8]/60">
              {[
                ['80%',    'Regionale\nZutaten'],
                ['4.8 ★',  'Google\nBewertung'],
                ['Täglich','Frisch\nGekocht'],
              ].map(([val, label]) => (
                <div key={val}>
                  <p className="font-cormorant text-3xl md:text-4xl font-semibold text-[#C5A059] tracking-[0.02em]">{val}</p>
                  <p className="text-[#6B6560] font-inter font-light text-xs leading-[1.7] mt-2 whitespace-pre-line tracking-[0.05em] uppercase">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

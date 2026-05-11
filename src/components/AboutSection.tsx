'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 md:py-32 bg-[#EDE8DF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80')" }}
              />
              {/* Floating "Seit 2018" card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-6 right-6 bg-[#2C2A26] p-5 shadow-xl"
              >
                <p className="font-cormorant text-[#C9A96E] text-4xl font-semibold leading-none">2018</p>
                <p className="text-[#D4C9B8]/50 font-inter text-[10px] tracking-[0.2em] uppercase mt-1">In Hannover</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-inter">Unsere Geschichte</span>
            </div>

            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A1815] leading-tight mb-6">
              Mehr als ein<br /><em>Restaurant</em>
            </h2>

            <div className="w-10 h-px bg-[#C9A96E] mb-8" />

            <p className="text-[#6B6560] font-inter font-light text-base leading-[1.9] mb-5">
              <strong className="font-semibold text-[#1A1815]">Luz de Luna</strong> — Mondlicht. So wie der Mond sein ruhiges, warmes Licht auf Hannover wirft, so wollen wir eine Oase der Gemütlichkeit mitten in der Stadt sein. Gegründet 2018 in Hannover-Linden.
            </p>
            <p className="text-[#6B6560] font-inter font-light text-base leading-[1.9] mb-10">
              Unsere Küche lebt von der Vielfalt Niedersachsens — frisches Gemüse vom Wochenmarkt, Fleisch von regionalen Höfen, Fisch aus nachhaltigem Fang. Saisonal, ehrlich, mit Liebe zubereitet.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#D4C9B8]">
              {[['80%', 'Regionale\nZutaten'], ['4.8 ★', 'Google\nBewertung'], ['Täglich', 'Frisch\nGekocht']].map(([val, label]) => (
                <div key={val}>
                  <p className="font-cormorant text-2xl md:text-3xl font-semibold text-[#C9A96E]">{val}</p>
                  <p className="text-[#6B6560] font-inter text-xs leading-[1.5] mt-1 whitespace-pre-line">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

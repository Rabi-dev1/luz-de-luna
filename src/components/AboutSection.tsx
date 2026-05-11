'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ueber-uns" className="py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* IMAGE PLACEHOLDER — replace with <Image> */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#EDE4D8] relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80')" }}
              />
              <div className="absolute inset-0 bg-[#1C160D]/10" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#B8962E] text-[#FDFAF6] rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-playfair text-2xl font-black leading-none">Seit</p>
              <p className="font-playfair text-4xl font-black leading-none">2018</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-[#B8962E] text-xs font-medium tracking-[0.2em] uppercase mb-4">Unsere Geschichte</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-[#1C160D] leading-tight mb-6">
              Mehr als ein<br />Restaurant
            </h2>
            <div className="w-10 h-px bg-[#B8962E] mb-8" />
            <p className="text-[#2E2010]/70 font-inter leading-[1.8] mb-5 text-base">
              <em className="font-playfair text-[#1C160D] not-italic">Luz de Luna</em> — Mondlicht. So wie der Mond sein ruhiges,
              warmes Licht auf Hannover wirft, so wollen wir eine Oase der Gemütlichkeit
              mitten in der Stadt sein. Gegründet 2018 mit dem Wunsch, echte
              Gastfreundschaft und regionalen Genuss zu vereinen.
            </p>
            <p className="text-[#2E2010]/70 font-inter leading-[1.8] mb-8 text-base">
              Unsere Küche lebt von der Vielfalt Niedersachsens — frisches Gemüse vom
              Wochenmarkt, Fleisch von regionalen Höfen, Fisch aus nachhaltigem Fang.
              Saisonal, ehrlich, mit Liebe zubereitet.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#C9B99A]/40">
              {[['80%','Regional'],['4.8★','Google'],['6 J.','Hannover']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-playfair text-2xl font-black text-[#B8962E]">{val}</p>
                  <p className="text-[#1C160D]/50 text-xs font-inter tracking-wide mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

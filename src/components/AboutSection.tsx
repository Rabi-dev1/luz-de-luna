'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, Heart, Clock, Star } from 'lucide-react'

const features = [
  { icon: Leaf, label: 'Regionale Zutaten', desc: '80% aus der Region' },
  { icon: Heart, label: 'Mit Leidenschaft', desc: 'Handgemacht täglich' },
  { icon: Clock, label: 'Seit 2018', desc: 'In Hannover verwurzelt' },
  { icon: Star, label: 'Top bewertet', desc: '4.8 ⭐ auf Google' },
]

export default function AboutSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-3">Unsere Geschichte</p>
            <h2 className="font-playfair text-5xl font-black text-[#f5f0e8] mb-6 leading-tight">
              Mehr als ein<br />Restaurant
            </h2>
            <div className="w-12 h-0.5 bg-[#c9a84c] mb-8" />
            <p className="text-[#f5f0e8]/70 font-inter leading-relaxed mb-4">
              Luz de Luna – Mondlicht. So wie der Mond sein ruhiges, warmes Licht auf Hannover wirft,
              so wollen wir eine Oase der Gemütlichkeit mitten in der Stadt sein. Gegründet 2018
              mit dem Wunsch, echte Gastfreundschaft und regionalen Genuss zu vereinen.
            </p>
            <p className="text-[#f5f0e8]/70 font-inter leading-relaxed mb-4">
              Unsere Küche lebt von der Vielfalt Niedersachsens: frisches Gemüse vom Wochenmarkt,
              Fleisch von regionalen Höfen und Fisch aus nachhaltigem Fang. Saisonal, ehrlich,
              mit Liebe zubereitet.
            </p>
            <p className="text-[#f5f0e8]/70 font-inter leading-relaxed">
              Ob entspanntes Frühstück am Sonntagmorgen, geschäftiges Lunch oder romantisches
              Dinner – bei Luz de Luna wird jeder Moment zu einem Genussmoment.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-[#f5f0e8]/5 border border-[#c9a84c]/20 rounded-2xl p-6 hover:border-[#c9a84c]/50 transition-colors duration-200"
              >
                <f.icon size={28} className="text-[#c9a84c] mb-3" />
                <h3 className="font-playfair font-bold text-[#f5f0e8] mb-1">{f.label}</h3>
                <p className="text-[#f5f0e8]/50 text-sm font-inter">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

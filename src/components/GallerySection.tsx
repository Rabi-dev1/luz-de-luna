'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Restaurant Atmosphäre Hannover', ratio: '4/3' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', alt: 'Bar & Cocktails',                ratio: '3/4' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Hausgemachte Speisen',       ratio: '1/1' },
  { src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80', alt: 'Abendkarte Gericht',         ratio: '4/3' },
  { src: 'https://images.unsplash.com/photo-1484659619207-9165d119dafe?w=800&q=80', alt: 'Tischdekoration Abend',      ratio: '3/4' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80', alt: 'Frische Zutaten',            ratio: '1/1' },
  { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80', alt: 'Feine Küche Detail',           ratio: '4/3' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', alt: 'Kulinarische Highlights',    ratio: '3/4' },
  { src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80', alt: 'Frühstück & Brunch',           ratio: '1/1' },
]

export default function GallerySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#0A0805]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-px bg-[#C9A96E]/50" />
            <span className="text-[#C9A96E] text-[9px] tracking-[0.38em] uppercase font-inter font-light">Einblicke</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-[#FDFCFA] leading-[1.0] tracking-[0.01em] mb-14 md:mb-18"
          >
            Momente, die<br />
            <em className="text-[#C9A96E]">bleiben</em>
          </motion.h2>
        </div>

        {/* Masonry grid — only animate first 6, rest appear instantly */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 [column-fill:balance]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: i < 6 ? i * 0.04 : 0,
                ease: [0.16, 1, 0.3, 1] as [number,number,number,number],
              }}
              className="break-inside-avoid mb-2"
            >
              <div className="group relative overflow-hidden">
                <div
                  className="w-full bg-cover bg-center food-img
                    transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${img.src}')`, aspectRatio: img.ratio }}
                  role="img"
                  aria-label={img.alt}
                />
                <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/[0.06] transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0805]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#FAF8F4]/15 font-inter font-light text-[10px] tracking-[0.15em] uppercase mt-12">
          Luz de Luna · Falkenstraße 22A · 30449 Hannover
        </p>
      </div>
    </section>
  )
}

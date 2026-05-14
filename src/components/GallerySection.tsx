'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  { src: '/images/gallery1.jpg', alt: 'Hausgemachtes Sandwich – Luz de Luna',          ratio: '3/4' },
  { src: '/images/gallery2.jpg', alt: 'Tischdeko mit Mondprojektion',                  ratio: '4/3' },
  { src: '/images/gallery3.jpg', alt: 'Luz de Luna – Café & Bar, Hannover-Linden',     ratio: '3/4' },
  { src: '/images/gallery4.jpg', alt: 'Mondmural im Restaurant-Innenraum',             ratio: '4/3' },
  { src: '/images/gallery5.jpg', alt: 'Bar-Detail: Brooklyn Gin',                      ratio: '3/4' },
  { src: '/images/gallery6.jpg', alt: 'Bruschetta unterm Mondlicht',                   ratio: '4/3' },
  { src: '/images/gallery7.jpg', alt: 'Restaurantraum mit großem Mondgemälde',         ratio: '3/4' },
  { src: '/images/gallery8.jpg', alt: 'Hausgemachte Biscoff-Cheesecake',               ratio: '4/3' },
  { src: '/images/gallery9.jpg', alt: 'Neonschild Luz de Luna mit Pflanzenwand',       ratio: '3/4' },
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

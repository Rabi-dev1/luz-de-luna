'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* pos: CSS background-position to keep subject centred in its crop */
const images = [
  { src: '/images/gallery1.jpg',  alt: 'Luz de Luna – Bogeneingang mit Neonschild',   ratio: '3/4',  mRatio: '1/1',  pos: '50% 30%' },
  { src: '/images/gallery2.jpg',  alt: 'Barista gießt Latte Art',                     ratio: '3/4',  mRatio: '1/1',  pos: '50% 35%' },
  { src: '/images/gallery3.jpg',  alt: 'Salmon Poke Bowl – Draufsicht',               ratio: '3/4',  mRatio: '1/1',  pos: 'center'  },
  { src: '/images/gallery4.jpg',  alt: 'Kreisförmiges Luz de Luna Neonschild',        ratio: '1/1',  mRatio: '1/1',  pos: 'center'  },
  { src: '/images/gallery5.jpg',  alt: 'Gözleme unterm Mondmural',                    ratio: '3/4',  mRatio: '1/1',  pos: '50% 25%' },
  { src: '/images/gallery6.jpg',  alt: 'Neonschild Luz de Luna mit Pflanzenwand',     ratio: '3/4',  mRatio: '1/1',  pos: '50% 30%' },
  { src: '/images/gallery7.jpg',  alt: 'Avocado-Mozzarella Toast – Luz de Luna',      ratio: '3/4',  mRatio: '1/1',  pos: '50% 50%' },
  { src: '/images/gallery8.jpg',  alt: 'Frühstück: Bagel mit frischen Beilagen',      ratio: '3/4',  mRatio: '1/1',  pos: '50% 35%' },
  { src: '/images/gallery9.jpg',  alt: 'Salmon Bowl mit Edamame',                     ratio: '3/4',  mRatio: '1/1',  pos: 'center'  },
]

function GalleryItem({ img, i, inView }: { img: typeof images[0]; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: i < 6 ? i * 0.04 : 0,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="group relative overflow-hidden"
    >
      {/* Mobile crop (square) */}
      <div
        className="md:hidden w-full bg-cover food-img transition-transform duration-500 group-hover:scale-[1.04]"
        style={{ backgroundImage: `url('${img.src}')`, aspectRatio: img.mRatio, backgroundPosition: img.pos }}
        role="img"
        aria-label={img.alt}
      />
      {/* Desktop crop (original ratio) */}
      <div
        className="hidden md:block w-full bg-cover food-img transition-transform duration-500 group-hover:scale-[1.04]"
        style={{ backgroundImage: `url('${img.src}')`, aspectRatio: img.ratio, backgroundPosition: img.pos }}
        role="img"
        aria-label={img.alt}
      />
      <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/[0.06] transition-all duration-500 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0805]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

export default function GallerySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="gallery" className="py-16 md:py-36 bg-[#0A0805]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div ref={ref} className="mb-8 md:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4 md:mb-5"
          >
            <div className="w-8 h-px bg-[#C9A96E]/50" />
            <span className="text-[#C9A96E] text-[9px] tracking-[0.38em] uppercase font-inter font-light">Einblicke</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#FDFCFA] leading-[1.0] tracking-[0.01em]"
          >
            Momente, die<br />
            <em className="text-[#C9A96E]">bleiben</em>
          </motion.h2>
        </div>

        {/* ── Mobile: 2-column square grid ── */}
        <div className="grid grid-cols-2 gap-1.5 md:hidden">
          {images.map((img, i) => (
            <GalleryItem key={i} img={img} i={i} inView={inView} />
          ))}
        </div>

        {/* ── Desktop: masonry columns ── */}
        <div className="hidden md:block columns-2 lg:columns-3 gap-2 [column-fill:balance]">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid mb-2">
              <GalleryItem img={img} i={i} inView={inView} />
            </div>
          ))}
        </div>

        <p className="text-center text-[#FAF8F4]/15 font-inter font-light text-[10px] tracking-[0.15em] uppercase mt-8 md:mt-12">
          Luz de Luna · Falkenstraße 22A · 30449 Hannover
        </p>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

const galleryItems = [
  { gradient: 'from-[#2d1810] to-[#c17a5a]', label: 'Brunch Vibes', span: 'col-span-2 row-span-2' },
  { gradient: 'from-[#1a2d10] to-[#2d5016]', label: 'Frische Zutaten', span: '' },
  { gradient: 'from-[#2d2810] to-[#c9a84c]', label: 'Signature Cocktails', span: '' },
  { gradient: 'from-[#101a2d] to-[#1a3a5c]', label: 'Abendstimmung', span: '' },
  { gradient: 'from-[#2d1020] to-[#8b1a4a]', label: 'Dessert Dreams', span: '' },
  { gradient: 'from-[#1a2d28] to-[#2d5048]', label: 'Unsere Küche', span: 'col-span-2' },
]

export default function GallerySection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="gallery" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-4">
        {!hideHeader && (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Camera size={20} className="text-[#c9a84c]" />
              <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Galerie</p>
            </div>
            <h2 className="font-playfair text-5xl font-black text-[#1a1a2e] mb-4">Eindrücke</h2>
            <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto" />
          </div>
        )}

        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${item.span} bg-gradient-to-br ${item.gradient} rounded-2xl overflow-hidden relative group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[#c9a84c]/20 transition-all duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#1a1a2e]/80 text-[#c9a84c] text-xs font-medium px-3 py-1 rounded-full">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://www.instagram.com/luzdluna_hannover" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a2e] font-inter font-medium hover:text-[#c9a84c] transition-colors duration-200">
            <Camera size={20} />
            Folgt uns auf Instagram @luzdluna_hannover
          </a>
        </div>
      </div>
    </section>
  )
}

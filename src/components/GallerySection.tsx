'use client'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

const galleryItems = [
  { gradient: 'from-[#3d2010] to-[#c17a5a]', label: 'Brunch Vibes', span: 'col-span-2 row-span-2' },
  { gradient: 'from-[#2a3d10] to-[#4a7a20]', label: 'Frische Zutaten', span: '' },
  { gradient: 'from-[#3d3510] to-[#B8962E]', label: 'Signature Cocktails', span: '' },
  { gradient: 'from-[#102040] to-[#1a3a5c]', label: 'Abendstimmung', span: '' },
  { gradient: 'from-[#3d1025] to-[#8b1a4a]', label: 'Dessert Dreams', span: '' },
  { gradient: 'from-[#1a3530] to-[#2d5048]', label: 'Unsere Küche', span: 'col-span-2' },
]

export default function GallerySection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="gallery" className="py-24 bg-[#EDE4D8]">
      <div className="max-w-6xl mx-auto px-4">
        {!hideHeader && (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Camera size={20} className="text-[#B8962E]" />
              <p className="text-[#B8962E] text-sm font-medium tracking-widest uppercase">Galerie</p>
            </div>
            <h2 className="font-playfair text-5xl font-black text-[#1C160D] mb-4">Eindrücke</h2>
            <div className="w-16 h-0.5 bg-[#B8962E] mx-auto" />
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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[#B8962E]/20 transition-all duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#1C160D]/80 text-[#D4AF5A] text-xs font-medium px-3 py-1 rounded-full">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://www.instagram.com/luzdluna_hannover" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1C160D] font-inter font-medium hover:text-[#B8962E] transition-colors duration-200">
            <Camera size={20} />
            Folgt uns auf Instagram @luzdluna_hannover
          </a>
        </div>
      </div>
    </section>
  )
}

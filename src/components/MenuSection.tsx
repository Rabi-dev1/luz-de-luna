'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuData } from '@/lib/menuData'

export default function MenuSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeTab, setActiveTab] = useState('breakfast')
  const activeCategory = menuData.find(c => c.id === activeTab)!

  return (
    <section id="menu" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        {!hideHeader && (
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-3">Unsere Karte</p>
            <h2 className="font-playfair text-5xl md:text-6xl font-black text-[#1a1a2e] mb-4">Speisekarte</h2>
            <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto" />
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuData.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-6 py-3 rounded-full font-inter font-medium text-sm transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-[#1a1a2e] text-[#c9a84c]'
                  : 'bg-[#1a1a2e]/10 text-[#1a1a2e] hover:bg-[#1a1a2e]/20'
              }`}
            >
              <span className="mr-2">{cat.emoji}</span>
              {cat.label}
              {activeTab === cat.id && (
                <motion.div layoutId="activeTab" className="absolute inset-0 rounded-full bg-[#1a1a2e] -z-10" />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {activeCategory.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200 border border-[#1a1a2e]/5"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-playfair text-lg font-bold text-[#1a1a2e] mb-1">{item.name}</h3>
                    <p className="text-[#2c2c2c]/60 text-sm font-inter leading-relaxed">{item.description}</p>
                    {item.tag && (
                      <span className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-medium ${
                        item.tag.includes('Vegan') ? 'bg-[#2d5016]/10 text-[#2d5016]' :
                        item.tag.includes('Vegetarisch') ? 'bg-emerald-100 text-emerald-700' :
                        item.tag.includes('Signature') ? 'bg-[#c9a84c]/20 text-[#b8860b]' :
                        'bg-[#c17a5a]/10 text-[#c17a5a]'
                      }`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span className="font-playfair text-lg font-bold text-[#c9a84c] whitespace-nowrap">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-[#2c2c2c]/40 text-xs mt-8 font-inter">
          Alle Preise inkl. MwSt. · Allergene auf Anfrage · Änderungen vorbehalten
        </p>
      </div>
    </section>
  )
}

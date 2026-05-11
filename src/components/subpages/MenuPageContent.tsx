'use client'
import { motion } from 'framer-motion'
import { menuData } from '@/lib/menuData'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface MenuPageContentProps {
  categoryId: string
}

export default function MenuPageContent({ categoryId }: MenuPageContentProps) {
  const category = menuData.find(c => c.id === categoryId)
  if (!category) return null

  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#karte" className="inline-flex items-center gap-2 text-[#B8962E] text-sm font-medium mb-10 hover:gap-3 transition-all">
          <ArrowLeft size={14} />
          Zurück zur Übersicht
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl p-6 border border-[#C9B99A]/30 hover:border-[#B8962E]/40 hover:shadow-md transition-all duration-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-playfair text-lg font-bold text-[#1C160D] mb-1">{item.name}</h3>
                  <p className="text-[#2E2010]/55 text-sm font-inter leading-relaxed">{item.description}</p>
                  {item.tag && (
                    <span className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-medium ${
                      item.tag.toLowerCase().includes('vegan') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      item.tag.toLowerCase().includes('vegetarisch') ? 'bg-green-50 text-green-700 border border-green-200' :
                      item.tag.toLowerCase().includes('signature') ? 'bg-[#B8962E]/10 text-[#8B6914] border border-[#B8962E]/20' :
                      'bg-[#EDE4D8] text-[#2E2010] border border-[#C9B99A]/30'
                    }`}>{item.tag}</span>
                  )}
                </div>
                <span className="font-playfair text-lg font-bold text-[#B8962E] whitespace-nowrap">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#2E2010]/30 text-xs mt-10 font-inter">
          Alle Preise inkl. MwSt. · Allergene auf Anfrage · Saisonale Änderungen vorbehalten
        </p>
      </div>
    </section>
  )
}

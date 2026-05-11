'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Users, Cake, Briefcase, Music } from 'lucide-react'

const eventTypes = [
  { icon: Cake, title: 'Geburtstage', desc: 'Feiern Sie Ihren Geburtstag in stilvollem Ambiente. Wir kümmern uns um Dekoration, Menü und Torte — Sie genießen.', capacity: 'Bis 40 Personen' },
  { icon: Briefcase, title: 'Firmenevents', desc: 'Geschäftliche Meetings, Jubiläen und Teamevents. Diskrete Atmosphäre, professioneller Service.', capacity: 'Bis 30 Personen' },
  { icon: Users, title: 'Private Feiern', desc: 'Hochzeiten, Taufen, Familientreffen — wir reservieren exklusiv für Ihre Gesellschaft.', capacity: 'Bis 60 Personen' },
  { icon: Music, title: 'Kulturevents', desc: 'Live-Musik, Lesungen, Pop-up Dinners. Fragen Sie nach unserem aktuellen Eventprogramm.', capacity: 'Öffentlich' },
]

export default function EventsContent() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#karte" className="inline-flex items-center gap-2 text-[#B8962E] text-sm font-medium mb-10 hover:gap-3 transition-all">
          <ArrowLeft size={14} />
          Zurück zur Übersicht
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {eventTypes.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-[#C9B99A]/30 hover:border-[#B8962E]/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 bg-[#B8962E]/10 rounded-xl flex items-center justify-center mb-4">
                <ev.icon size={20} className="text-[#B8962E]" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1C160D] mb-2">{ev.title}</h3>
              <p className="text-[#2E2010]/55 font-inter text-sm leading-relaxed mb-3">{ev.desc}</p>
              <span className="inline-block bg-[#EDE4D8] text-[#2E2010]/60 text-xs font-medium px-3 py-1 rounded-full">{ev.capacity}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#1C160D] rounded-2xl p-8 md:p-10 text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-black text-[#FDFAF6] mb-3">Event anfragen</h3>
          <p className="text-[#FAF7F2]/50 font-inter mb-6 max-w-md mx-auto">
            Schreiben Sie uns oder rufen Sie direkt an — wir erstellen Ihnen gerne ein individuelles Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:events@luz-de-luna.de"
              className="bg-[#B8962E] text-[#FDFAF6] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#D4AF5A] transition-colors">
              events@luz-de-luna.de
            </a>
            <a href="tel:+4951112345"
              className="border border-[#FAF7F2]/20 text-[#FAF7F2]/70 px-6 py-3 rounded-full font-semibold text-sm hover:border-[#D4AF5A] hover:text-[#D4AF5A] transition-colors">
              +49 511 12345
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

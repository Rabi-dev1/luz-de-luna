'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function ReservationSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', persons: '2', date: '', time: '19:00', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const slots = Array.from({ length: 28 }, (_, i) => {
    const m = 8 * 60 + i * 30
    return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservation request:', form)
    setSubmitted(true)
  }

  const field = "w-full bg-transparent border-b border-[#D4C9B8]/30 py-3 text-[#FDFCFA] font-inter text-sm placeholder:text-[#D4C9B8]/30 focus:outline-none focus:border-[#C9A96E] transition-colors duration-200"

  return (
    <section id="reservation" className="py-24 md:py-32 bg-[#2C2A26]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-inter">Online Buchung</span>
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-[#FDFCFA] mb-3">
          Tisch <em>reservieren</em>
        </h2>
        <p className="text-[#D4C9B8]/40 font-inter text-sm mb-12">
          Auch telefonisch: <a href="tel:+4951112345" className="text-[#C9A96E] hover:underline">+49 511 12345</a>
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <CheckCircle size={48} className="text-[#C9A96E] mx-auto mb-4" />
            <h3 className="font-cormorant text-2xl font-semibold text-[#FDFCFA] mb-2">Vielen Dank!</h3>
            <p className="text-[#D4C9B8]/50 font-inter text-sm">Wir bestätigen Ihre Reservierung per E-Mail.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 text-[#C9A96E] font-inter text-xs tracking-[0.15em] uppercase underline underline-offset-4">
              Neue Anfrage
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[#D4C9B8]/40 font-inter text-[10px] tracking-[0.2em] uppercase block mb-1">Name *</label>
                <input required type="text" placeholder="Ihr Name" value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})} className={field} />
              </div>
              <div>
                <label className="text-[#D4C9B8]/40 font-inter text-[10px] tracking-[0.2em] uppercase block mb-1">E-Mail *</label>
                <input required type="email" placeholder="ihre@email.de" value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})} className={field} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[#D4C9B8]/40 font-inter text-[10px] tracking-[0.2em] uppercase block mb-1">Telefon</label>
                <input type="tel" placeholder="+49 511 ..." value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})} className={field} />
              </div>
              <div>
                <label className="text-[#D4C9B8]/40 font-inter text-[10px] tracking-[0.2em] uppercase block mb-1">Personen *</label>
                <select required value={form.persons} onChange={e => setForm({...form, persons: e.target.value})}
                  className={`${field} bg-[#2C2A26] cursor-pointer`}>
                  {Array.from({length:10},(_,i)=>i+1).map(n=>(
                    <option key={n} value={n} className="bg-[#2C2A26]">{n} {n===1?'Person':'Personen'}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[#D4C9B8]/40 font-inter text-[10px] tracking-[0.2em] uppercase block mb-1">Datum *</label>
                <input required type="date" value={form.date} min={new Date().toISOString().split('T')[0]}
                  onChange={e => setForm({...form, date: e.target.value})}
                  className={`${field} [color-scheme:dark]`} />
              </div>
              <div>
                <label className="text-[#D4C9B8]/40 font-inter text-[10px] tracking-[0.2em] uppercase block mb-1">Uhrzeit *</label>
                <select required value={form.time} onChange={e => setForm({...form, time: e.target.value})}
                  className={`${field} bg-[#2C2A26] cursor-pointer`}>
                  {slots.map(t=><option key={t} value={t} className="bg-[#2C2A26]">{t} Uhr</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-[#D4C9B8]/40 font-inter text-[10px] tracking-[0.2em] uppercase block mb-1">Anmerkungen</label>
              <textarea rows={3} placeholder="Allergien, besondere Wünsche, Anlass..."
                value={form.notes} onChange={e => setForm({...form, notes: e.target.value})}
                className={`${field} resize-none`} />
            </div>
            <button type="submit"
              className="w-full bg-[#C9A96E] text-[#1A1815] py-4 font-inter font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#E0C48A] transition-colors duration-200 mt-4">
              Reservierung anfragen
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

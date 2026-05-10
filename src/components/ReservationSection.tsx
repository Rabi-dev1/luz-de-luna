'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Users, Clock } from 'lucide-react'

export default function ReservationSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', persons: '2', date: '', time: '19:00', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const timeSlots = Array.from({ length: 28 }, (_, i) => {
    const totalMins = 8 * 60 + i * 30
    const h = String(Math.floor(totalMins / 60)).padStart(2, '0')
    const m = String(totalMins % 60).padStart(2, '0')
    return `${h}:${m}`
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservation:', form)
    setSubmitted(true)
  }

  const inputClass = "w-full bg-[#f5f0e8]/5 border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-[#f5f0e8] font-inter text-sm focus:outline-none focus:border-[#c9a84c] transition-colors placeholder:text-[#f5f0e8]/30"

  return (
    <section id="reservation" className="py-24 bg-[#0d0d1a]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-3">Online Buchung</p>
          <h2 className="font-playfair text-5xl font-black text-[#f5f0e8] mb-4">Tisch reservieren</h2>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto mb-4" />
          <p className="text-[#f5f0e8]/50 font-inter text-sm">
            Wir freuen uns auf Sie! Reservierungen auch telefonisch:{' '}
            <a href="tel:+4951112345" className="text-[#c9a84c]">+49 511 12345</a>
          </p>
        </div>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16">
            <CheckCircle size={64} className="text-[#c9a84c] mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold text-[#f5f0e8] mb-2">Reservierung eingegangen!</h3>
            <p className="text-[#f5f0e8]/60 font-inter">Wir bestätigen Ihre Reservierung in Kürze per E-Mail.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 text-[#c9a84c] underline text-sm">Neue Reservierung</button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#f5f0e8]/60 text-xs font-medium mb-1.5 uppercase tracking-wide">Name *</label>
                <input required type="text" placeholder="Ihr Name" value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})} className={inputClass} />
              </div>
              <div>
                <label className="block text-[#f5f0e8]/60 text-xs font-medium mb-1.5 uppercase tracking-wide">E-Mail *</label>
                <input required type="email" placeholder="ihre@email.de" value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})} className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#f5f0e8]/60 text-xs font-medium mb-1.5 uppercase tracking-wide">Telefon</label>
                <input type="tel" placeholder="+49 511 ..." value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})} className={inputClass} />
              </div>
              <div>
                <label className="block text-[#f5f0e8]/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  <span className="flex items-center gap-1"><Users size={12} /> Personen *</span>
                </label>
                <select required value={form.persons} onChange={e => setForm({...form, persons: e.target.value})} className={inputClass}>
                  {Array.from({length: 10}, (_, i) => i + 1).map(n => (
                    <option key={n} value={n} className="bg-[#1a1a2e]">{n} {n === 1 ? 'Person' : 'Personen'}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#f5f0e8]/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  <span className="flex items-center gap-1"><Calendar size={12} /> Datum *</span>
                </label>
                <input required type="date" value={form.date} min={new Date().toISOString().split('T')[0]}
                  onChange={e => setForm({...form, date: e.target.value})} className={`${inputClass} [color-scheme:dark]`} />
              </div>
              <div>
                <label className="block text-[#f5f0e8]/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  <span className="flex items-center gap-1"><Clock size={12} /> Uhrzeit *</span>
                </label>
                <select required value={form.time} onChange={e => setForm({...form, time: e.target.value})} className={inputClass}>
                  {timeSlots.map(t => <option key={t} value={t} className="bg-[#1a1a2e]">{t} Uhr</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[#f5f0e8]/60 text-xs font-medium mb-1.5 uppercase tracking-wide">Anmerkungen</label>
              <textarea rows={3} placeholder="Allergien, besondere Wünsche, Anlässe..." value={form.notes}
                onChange={e => setForm({...form, notes: e.target.value})} className={`${inputClass} resize-none`} />
            </div>
            <button type="submit"
              className="w-full bg-[#c9a84c] text-[#1a1a2e] py-4 rounded-xl font-semibold text-lg hover:bg-[#b8860b] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] mt-2">
              Reservierung anfragen
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

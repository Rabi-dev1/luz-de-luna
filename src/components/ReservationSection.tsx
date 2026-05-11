'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, CalendarDays, Users, Clock, Phone } from 'lucide-react'

const timeSlots = ['12:00','12:30','13:00','13:30','14:00','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00']

const labelClass = "block text-[#C5A17F]/60 font-inter text-[9px] tracking-[0.3em] uppercase mb-2.5"
const inputBase  = "w-full bg-transparent border border-[#FDFCFA]/8 px-4 py-3.5 text-[#FDFCFA] font-inter text-[13px] font-light placeholder:text-[#FAF8F4]/20 focus:outline-none focus:border-[#C5A17F]/50 hover:border-[#FDFCFA]/15 transition-colors duration-300 [color-scheme:dark]"
const selectBase = `${inputBase} cursor-pointer bg-[#14120E] appearance-none`

export default function ReservationSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    persons: '2', date: '', time: '19:00', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="relative py-32 md:py-44 bg-[#0A0805] overflow-hidden">
      {/* Ambient gold glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(197,161,127,0.055) 0%, transparent 65%)' }}
      />
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A17F]/20 to-transparent" />

      <div className="max-w-2xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C5A17F]/50" />
            <span className="text-[#C5A17F] text-[9px] tracking-[0.38em] uppercase font-inter font-light">Online Buchung</span>
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold text-[#FDFCFA] leading-[1.0] tracking-[0.01em] mb-4">
            Tisch<br />
            <em className="text-[#C5A17F]">reservieren</em>
          </h2>
          <p className="text-[#FAF8F4]/30 font-inter font-light text-[13px] tracking-[0.04em] mb-14 flex items-center gap-2.5">
            <Phone size={11} className="text-[#C5A17F]/60" />
            Oder telefonisch:{' '}
            <a href="tel:+4951112345" className="text-[#C5A17F]/70 hover:text-[#C5A17F] transition-colors duration-200">
              +49 511 12345
            </a>
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            /* ── Success state ── */
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="py-20 text-center border border-[#C5A17F]/15 bg-[#1C1914]"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <CheckCircle2 size={44} className="text-[#C5A17F] mx-auto" strokeWidth={1.25} />
              </motion.div>
              <p className="text-[#C5A17F] text-[9px] tracking-[0.38em] uppercase font-inter font-light mb-4">Anfrage eingegangen</p>
              <h3 className="font-cormorant text-3xl font-semibold text-[#FDFCFA] mb-3 tracking-[0.01em]">Vielen Dank!</h3>
              <p className="text-[#FAF8F4]/35 font-inter font-light text-[13px] leading-[1.9] max-w-[280px] mx-auto mb-10">
                Wir bestätigen Ihre Reservierung<br />innerhalb weniger Stunden per E-Mail.
              </p>
              <div className="w-8 h-px bg-[#C5A17F]/30 mx-auto mb-8" />
              <button
                onClick={() => setSubmitted(false)}
                className="text-[#C5A17F]/50 font-inter text-[9px] tracking-[0.28em] uppercase hover:text-[#C5A17F] transition-colors duration-200"
              >
                Neue Anfrage stellen
              </button>
            </motion.div>
          ) : (
            /* ── Form ── */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-0 border border-[#FDFCFA]/6 bg-[#14120E]"
            >
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#FDFCFA]/6">
                <div className="p-6 sm:border-r border-[#FDFCFA]/6">
                  <label className={labelClass}>Name *</label>
                  <input required type="text" placeholder="Ihr vollständiger Name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className={inputBase} />
                </div>
                <div className="p-6">
                  <label className={labelClass}>E-Mail *</label>
                  <input required type="email" placeholder="ihre@email.de"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className={inputBase} />
                </div>
              </div>

              {/* Row 2: Phone + Persons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#FDFCFA]/6">
                <div className="p-6 sm:border-r border-[#FDFCFA]/6">
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <Phone size={8} />Telefon
                    </span>
                  </label>
                  <input type="tel" placeholder="+49 511 …"
                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    className={inputBase} />
                </div>
                <div className="p-6">
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <Users size={8} />Personen *
                    </span>
                  </label>
                  <div className="relative">
                    <select required value={form.persons}
                      onChange={e => setForm({ ...form, persons: e.target.value })}
                      className={selectBase}>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                        <option key={n} value={n} className="bg-[#14120E]">
                          {n} {n === 1 ? 'Person' : 'Personen'}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-3 h-px bg-[#C5A17F]/50 rotate-[45deg] translate-x-[2px]" />
                      <div className="w-3 h-px bg-[#C5A17F]/50 -rotate-[45deg] -translate-x-[2px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#FDFCFA]/6">
                <div className="p-6 sm:border-r border-[#FDFCFA]/6">
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={8} />Datum *
                    </span>
                  </label>
                  <input required type="date"
                    value={form.date} min={new Date().toISOString().split('T')[0]}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    className={inputBase} />
                </div>
                <div className="p-6">
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <Clock size={8} />Uhrzeit *
                    </span>
                  </label>
                  <div className="relative">
                    <select required value={form.time}
                      onChange={e => setForm({ ...form, time: e.target.value })}
                      className={selectBase}>
                      {timeSlots.map(t => (
                        <option key={t} value={t} className="bg-[#14120E]">{t} Uhr</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-3 h-px bg-[#C5A17F]/50 rotate-[45deg] translate-x-[2px]" />
                      <div className="w-3 h-px bg-[#C5A17F]/50 -rotate-[45deg] -translate-x-[2px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Notes */}
              <div className="p-6 border-b border-[#FDFCFA]/6">
                <label className={labelClass}>Besondere Wünsche</label>
                <textarea rows={3} placeholder="Allergien, Anlass, Sitzwunsch…"
                  value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}
                  className={`${inputBase} resize-none`} />
              </div>

              {/* Submit */}
              <div className="p-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C5A17F] text-[#0A0805] py-4 font-inter font-semibold
                    text-[10px] tracking-[0.32em] uppercase relative overflow-hidden
                    hover:bg-[#D4B38C] transition-all duration-300
                    hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(197,161,127,0.22)]
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2.5">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        className="inline-block w-3 h-3 border border-[#0A0805]/40 border-t-[#0A0805] rounded-full"
                      />
                      Wird gesendet…
                    </span>
                  ) : 'Reservierung anfragen'}
                </button>
                <p className="text-center text-[#FAF8F4]/18 font-inter text-[10px] tracking-[0.12em] uppercase mt-5">
                  Wir melden uns innerhalb von 24 Stunden
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

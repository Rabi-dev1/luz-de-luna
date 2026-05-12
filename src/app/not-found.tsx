import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seite nicht gefunden – Luz de Luna Hannover',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0805] flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        {/* Decorative line */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#C5A17F]/40 to-transparent mx-auto mb-10" />

        <p className="font-cormorant text-[7rem] font-semibold text-[#C5A17F]/15 leading-none tracking-tighter select-none mb-2">
          404
        </p>

        <div className="flex items-center gap-3 justify-center mb-4">
          <div className="w-6 h-px bg-[#C5A17F]/40" />
          <span className="text-[#C5A17F] text-[9px] tracking-[0.35em] uppercase font-inter font-light">Nicht gefunden</span>
          <div className="w-6 h-px bg-[#C5A17F]/40" />
        </div>

        <h1 className="font-cormorant text-3xl font-semibold text-[#FDFCFA] mb-4 tracking-[0.01em]">
          Diese Seite existiert leider nicht
        </h1>
        <p className="text-[#FAF8F4]/30 font-inter font-light text-[13px] leading-[1.9] mb-12">
          Sie wurde möglicherweise verschoben oder gelöscht.<br />
          Kehren Sie zur Startseite zurück.
        </p>

        <Link
          href="/"
          className="inline-block border border-[#C5A17F]/40 text-[#C5A17F] px-8 py-3.5
            font-inter text-[9px] tracking-[0.3em] uppercase font-light
            hover:bg-[#C5A17F] hover:text-[#0A0805] transition-all duration-300"
        >
          Zur Startseite
        </Link>

        <div className="w-px h-16 bg-gradient-to-b from-[#C5A17F]/20 to-transparent mx-auto mt-10" />
      </div>
    </main>
  )
}

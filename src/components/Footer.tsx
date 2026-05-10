import { Share2, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1a] border-t border-[#c9a84c]/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-black text-[#c9a84c] mb-3">Luz de Luna</h3>
            <p className="text-[#f5f0e8]/50 font-inter text-sm leading-relaxed">Restaurant & Café in Hannover. Regionale Küche, warme Atmosphäre, unvergessliche Momente.</p>
          </div>
          {/* Address */}
          <div>
            <h4 className="font-playfair font-bold text-[#f5f0e8] mb-3">Adresse</h4>
            <p className="text-[#f5f0e8]/50 font-inter text-sm">Georgstraße 10<br />30159 Hannover<br />Deutschland</p>
            <a href="tel:+4951112345" className="text-[#c9a84c] font-inter text-sm mt-2 block hover:underline">+49 511 12345</a>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-playfair font-bold text-[#f5f0e8] mb-3">Folgt uns</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/luzdluna_hannover" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-[#c9a84c]/30 rounded-full flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors">
                <Share2 size={18} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-[#c9a84c]/30 rounded-full flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#c9a84c]/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#f5f0e8]/30 font-inter text-xs">© 2024 Luz de Luna. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <a href="#" className="text-[#f5f0e8]/30 hover:text-[#c9a84c] font-inter text-xs transition-colors">Impressum</a>
            <a href="#" className="text-[#f5f0e8]/30 hover:text-[#c9a84c] font-inter text-xs transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

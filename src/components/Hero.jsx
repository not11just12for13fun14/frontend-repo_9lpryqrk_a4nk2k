import { Flag, Globe } from 'lucide-react'

function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-pink-100" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-28">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 text-indigo-700 px-3 py-1 text-sm font-medium">
            <Globe className="h-4 w-4" />
            <span>Sejarah Modern</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Perang Dunia I
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">1914 — 1918</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
            Ringkasan komprehensif tentang sebab, jalannya peristiwa, dan dampak global dari konflik besar pertama di abad ke-20.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#ikhtisar" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-5 py-3 font-semibold shadow hover:bg-indigo-700 transition">
              <Flag className="h-5 w-5" />
              Mulai Membaca
            </a>
            <a href="#linimasa" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white text-gray-800 px-5 py-3 font-semibold hover:bg-gray-50 transition">
              Lihat Linimasa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

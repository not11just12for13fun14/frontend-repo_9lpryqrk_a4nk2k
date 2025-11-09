import Hero from './components/Hero'
import Overview from './components/Overview'
import Timeline from './components/Timeline'
import Aftermath from './components/Aftermath'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#beranda" className="font-extrabold tracking-tight text-lg">
            WWI Insight
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#ikhtisar" className="hover:text-indigo-600">Ikhtisar</a>
            <a href="#linimasa" className="hover:text-indigo-600">Linimasa</a>
            <a href="#dampak" className="hover:text-indigo-600">Dampak</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Overview />
        <Timeline />
        <Aftermath />
      </main>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Ringkasan edukatif mengenai Perang Dunia I.</p>
          <p>
            Sumber rujukan: ensiklopedia sejarah umum dan arsip publik.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

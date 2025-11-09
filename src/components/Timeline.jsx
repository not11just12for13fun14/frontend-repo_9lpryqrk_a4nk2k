const events = [
  { year: 1914, title: 'Pembunuhan Franz Ferdinand', desc: 'Insiden di Sarajevo memicu krisis internasional dan mobilisasi aliansi.' },
  { year: 1915, title: 'Perang Parit Menguat', desc: 'Front Barat membeku; Gallipoli menjadi kegagalan Sekutu yang besar.' },
  { year: 1916, title: 'Verdun & Somme', desc: 'Pertempuran raksasa dengan korban sangat besar, melambangkan perang kelelahan.' },
  { year: 1917, title: 'AS Masuk, Rusia Keluar', desc: 'Amerika Serikat bergabung dengan Sekutu; Revolusi Rusia memicu Brest-Litovsk.' },
  { year: 1918, title: 'Ofensif Musim Semi & Gencatan Senjata', desc: 'Dorongan terakhir Jerman kandas; gencatan senjata ditandatangani 11/11/1918.' },
]

function Timeline() {
  return (
    <section id="linimasa" className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Linimasa Utama</h2>
        <ol className="relative border-s-2 border-indigo-200">
          {events.map((e, i) => (
            <li key={i} className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">{e.year}</span>
              <div className="bg-white border rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900">{e.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{e.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Timeline

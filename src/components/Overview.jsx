function Overview() {
  return (
    <section id="ikhtisar" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ikhtisar Singkat</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Perang Dunia I adalah konflik global yang berlangsung antara tahun 1914 hingga 1918, melibatkan kekuatan besar Eropa dan koloni-koloninya. Dua blok utama—Blok Sekutu (antara lain Britania Raya, Prancis, Rusia, kemudian Amerika Serikat) dan Blok Sentral (Jerman, Austria-Hongaria, Kesultanan Utsmaniyah)—berhadapan dalam perang parit yang melelahkan dan penuh teknologi militer baru.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border p-5 bg-white shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">Pemicu</h3>
          <p className="text-gray-700 text-sm">Pembunuhan Franz Ferdinand di Sarajevo memantik krisis diplomatik. Aliansi yang saling terikat mempercepat mobilisasi dan deklarasi perang.</p>
        </div>
        <div className="rounded-xl border p-5 bg-white shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">Karakter Perang</h3>
          <p className="text-gray-700 text-sm">Perang parit, penggunaan gas beracun, senapan mesin, artileri berat, tank, kapal selam, dan pesawat memperbesar skala korban jiwa.</p>
        </div>
        <div className="rounded-xl border p-5 bg-white shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">Akhir Konflik</h3>
          <p className="text-gray-700 text-sm">Gencatan senjata 11 November 1918 mengakhiri pertempuran di Front Barat, diikuti Perjanjian Versailles (1919) yang merumuskan ketentuan pascaperang.</p>
        </div>
      </div>
    </section>
  )
}

export default Overview

import { CheckCircle2, XCircle } from 'lucide-react';

// Data untuk tabel perbandingan
const featureData = [
  {
    category: 'Sesi & Kualitas',
    features: [
      { name: 'Sesi Photostrip', free: '5 / bulan', premium: 'Tanpa Batas' },
      { name: 'Resolusi Hasil', free: 'Standar', premium: 'Kualitas Tinggi (HD)' },
      { name: 'Tanpa Watermark SnapLah', free: false, premium: true },
    ]
  },
  {
    category: 'Fitur Kustomisasi',
    features: [
      { name: 'Akses Template Dasar', free: true, premium: true },
      { name: 'Akses Template Premium', free: false, premium: true },
      { name: 'Fitur Edit Lanjutan (Teks & Stiker)', free: false, premium: true },
      { name: 'Atur Ulang Urutan Foto', free: true, premium: true },
      { name: 'Percantik dengan Filter', free: 'Filter Terbatas', premium: 'Semua Filter' },
    ]
  },
  {
    category: 'Lainnya',
    features: [
      { name: 'Bebas Iklan', free: false, premium: true },
      { name: 'Dukungan Prioritas', free: false, premium: true },
    ]
  }
];

const ComparisonTable = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Bandingkan Paket</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Pilih sesuai dengan kebutuhan kreasimu.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            {/* Header Tabel */}
            <div className="grid grid-cols-3 bg-gray-50 p-4 font-bold text-gray-700">
              <div className="col-span-1">Fitur</div>
              <div className="text-center">Gratis</div>
              <div className="text-center">Premium</div>
            </div>

            {/* Render Fitur dari Data */}
            {featureData.map((categoryItem) => (
              <div key={categoryItem.category}>
                {/* Header Kategori */}
                <div className="bg-gray-100/60 p-3">
                  <h3 className="font-semibold text-gray-800">{categoryItem.category}</h3>
                </div>
                {/* Item Fitur */}
                {categoryItem.features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 items-center p-4 border-t border-gray-200">
                    <div className="col-span-1 text-gray-600">{feature.name}</div>
                    
                    {/* Kolom Paket Gratis */}
                    <div className="text-center font-medium">
                      {typeof feature.free === 'boolean' ? (
                        feature.free ? <CheckCircle2 className="mx-auto text-green-500" /> : <XCircle className="mx-auto text-gray-400" />
                      ) : (
                        <span className="text-gray-700">{feature.free}</span>
                      )}
                    </div>

                    {/* Kolom Paket Premium */}
                    <div className="text-center font-bold">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? <CheckCircle2 className="mx-auto text-c-pink" /> : <XCircle className="mx-auto text-gray-400" />
                      ) : (
                        <span className="gradient-text">{feature.premium}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
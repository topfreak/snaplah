import { LayoutTemplate, Camera, Wand2 } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="cara-kerja" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Hanya <span className="gradient-text">3 Langkah</span> Mudah</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Dari ide hingga jadi, prosesnya cepat dan menyenangkan.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100">
                        <div className="bg-pink-100 text-pink-500 p-4 rounded-full inline-block">
                           <LayoutTemplate />
                        </div>
                        <h3 className="mt-6 text-xl font-bold">1. Pilih Frame Favorit</h3>
                        <p className="mt-2 text-gray-600">Pilih dari puluhan template photostrip yang unik, mulai dari 4 hingga 8 foto per sesi.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100">
                         <div className="bg-orange-100 text-orange-500 p-4 rounded-full inline-block">
                           <Camera />
                        </div>
                        <h3 className="mt-6 text-xl font-bold">2. Ambil Foto Beruntun</h3>
                        <p className="mt-2 text-gray-600">Ikuti timer, siapkan pose terbaikmu! Sistem akan mengambil foto secara otomatis.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100">
                         <div className="bg-amber-100 text-amber-500 p-4 rounded-full inline-block">
                           <Wand2 />
                        </div>
                        <h3 className="mt-6 text-xl font-bold">3. Edit & Bagikan Hasil</h3>
                        <p className="mt-2 text-gray-600">Atur ulang urutan foto, beri filter, lalu unduh atau bagikan photostrip keren-mu ke media sosial.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
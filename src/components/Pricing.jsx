import { Check, CheckCircle2 } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="harga" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Paket Untuk <span className="gradient-text">Semua</span></h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Mulai gratis selamanya atau nikmati semua fitur dengan Premium.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="border border-gray-200 rounded-2xl p-8 flex flex-col bg-white"><h3 className="text-2xl font-bold text-gray-900">Gratis</h3><p className="mt-2 text-gray-600">Cocok untuk mencoba dan penggunaan sesekali.</p><p className="mt-6 text-4xl font-extrabold text-gray-900">Rp 0</p><ul className="mt-8 space-y-4 text-gray-600 flex-grow"><li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />5 Sesi Photostrip / bulan</li><li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Akses Template Dasar</li><li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Resolusi Standar</li><li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Dengan Watermark SnapLah</li></ul><a href="#" className="mt-8 w-full text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">Daftar Gratis</a></div>
                    <div className="border-2 border-pink-500 rounded-2xl p-8 flex flex-col relative bg-white shadow-2xl shadow-pink-500/20"><span className="bg-pink-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full absolute -top-4 right-8">Paling Laris</span><h3 className="text-2xl font-bold gradient-text">Premium</h3><p className="mt-2 text-gray-600">Pengalaman tanpa batas dan tanpa branding.</p><p className="mt-6 text-4xl font-extrabold text-gray-900">Rp 10rb<span className="text-lg font-medium text-gray-500">/bulan</span></p><ul className="mt-8 space-y-4 text-gray-600 flex-grow"><li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-pink-500 mr-3" />Sesi Photostrip Tanpa Batas</li><li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-pink-500 mr-3" />Akses Semua Template & Fitur Edit</li><li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-pink-500 mr-3" />Resolusi Tinggi (HD)</li><li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-pink-500 mr-3" />Tanpa Watermark</li><li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-pink-500 mr-3" />Dukungan Prioritas</li></ul><a href="#" className="mt-8 w-full text-center gradient-bg text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-shadow">Upgrade ke Premium</a></div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

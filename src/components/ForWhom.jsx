import { Instagram, HeartHandshake, Sparkles } from 'lucide-react';

const ForWhom = () => {
    return (
        <section id="untuk-siapa" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900"><span className="gradient-text">Dibuat</span> Untuk Kamu</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Siapapun kamu, selalu ada cara seru untuk berekspresi dengan SnapLah.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100"><div className="bg-pink-100 text-pink-500 p-4 rounded-full inline-block"><Instagram /></div><h3 className="mt-6 text-xl font-bold">Content Creator</h3><p className="mt-2 text-gray-600">Tingkatkan konten media sosialmu dengan photostrip yang estetik dan unik.</p></div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100"><div className="bg-orange-100 text-orange-500 p-4 rounded-full inline-block"><HeartHandshake /></div><h3 className="mt-6 text-xl font-bold">Pasangan & Sahabat</h3><p className="mt-2 text-gray-600">Abadikan momen kebersamaan yang tak terlupakan dengan cara yang seru dan berbeda.</p></div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100"><div className="bg-amber-100 text-amber-500 p-4 rounded-full inline-block"><Sparkles /></div><h3 className="mt-6 text-xl font-bold">Kamu yang Kreatif</h3><p className="mt-2 text-gray-600">Ekspresikan dirimu tanpa batas. Jadikan setiap hari sebagai kesempatan untuk berkreasi.</p></div>
                </div>
            </div>
        </section>
    );
};

export default ForWhom;
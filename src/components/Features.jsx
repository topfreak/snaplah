const Features = () => {
    return (
        <section id="fitur-editing" className="py-24 bg-white">
             <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Bukan Sekadar Foto, <span className="gradient-text">Ini Karyamu</span>.</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Atur, percantik, dan sesuaikan photostrip-mu hingga sempurna sebelum dibagikan.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
                        <img src="https://placehold.co/400x300/ec4899/FFFFFF?text=Atur+Ulang+Pose" alt="Fitur Atur Ulang Posisi Foto" className="rounded-xl shadow-lg mb-6" />
                        <h3 className="text-xl font-bold">Atur Ulang Pose</h3>
                        <p className="mt-2 text-gray-600">Urutan fotomu kurang pas? Tenang, geser dan atur ulang dengan mudah sampai kamu puas.</p>
                    </div>
                     <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
                        <img src="https://placehold.co/400x300/f97316/FFFFFF?text=Percantik+dengan+Filter" alt="Fitur Filter Estetik" className="rounded-xl shadow-lg mb-6" />
                        <h3 className="text-xl font-bold">Percantik dengan Filter</h3>
                        <p className="mt-2 text-gray-600">Berikan sentuhan unik. Pilih dari berbagai filter estetik untuk mengubah suasana hatimu.</p>
                    </div>
                     <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl relative">
                         <span className="absolute -top-2 -right-2 bg-amber-400 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">PREMIUM</span>
                        <img src="https://placehold.co/400x300/f59e0b/FFFFFF?text=Tambah+Teks+%26+Stiker" alt="Fitur Tambah Teks dan Stiker" className="rounded-xl shadow-lg mb-6" />
                        <h3 className="text-xl font-bold">Tambah Teks & Stiker</h3>
                        <p className="mt-2 text-gray-600">Jadikan lebih personal dengan menambahkan teks kenangan atau stiker seru.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
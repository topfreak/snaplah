const Testimonials = () => {
    return (
        <section id="testimoni" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Apa Kata <span className="gradient-text">Pengguna</span> Kami?</h2>
                 </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50"><p className="text-gray-600">"Sumpah keren banget! Bisa bikin photostrip sendiri di rumah. Pilihannya banyak, hasilnya aesthetic. Jadi sering update story!"</p><div className="mt-6 flex items-center"><img src="https://placehold.co/48x48/FBCFE8/000000?text=A" alt="Avatar" className="w-12 h-12 rounded-full" /><div className="ml-4"><p className="font-bold text-gray-900">Amanda S.</p><p className="text-sm text-gray-500">Mahasiswi</p></div></div></div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50"><p className="text-gray-600">"Iseng nyoba yang gratis, eh ketagihan. Langsung upgrade premium biar watermark-nya hilang. Worth it banget!"</p><div className="mt-6 flex items-center"><img src="https://placehold.co/48x48/A5F3FC/000000?text=B" alt="Avatar" className="w-12 h-12 rounded-full" /><div className="ml-4"><p className="font-bold text-gray-900">Bagas Prakoso</p><p className="text-sm text-gray-500">Content Creator</p></div></div></div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50"><p className="text-gray-600">"Fitur timernya ngebantu banget buat siap-siap pose. Hasilnya juga bisa langsung di-share ke grup, seru!"</p><div className="mt-6 flex items-center"><img src="https://placehold.co/48x48/FED7AA/000000?text=R" alt="Avatar" className="w-12 h-12 rounded-full" /><div className="ml-4"><p className="font-bold text-gray-900">Rina Melati</p><p className="text-sm text-gray-500">Karyawan Swasta</p></div></div></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
const Hero = () => {
    return (
        <section className="relative pt-20 md:pt-40 pb-20 md:pb-32 bg-white overflow-hidden">
            <div className="blob w-96 h-96 bg-pink-400/50 top-0 -left-48"></div>
            <div className="blob w-[32rem] h-[32rem] bg-orange-400/50 bottom-0 -right-56"></div>
            
            <div className="container mx-auto px-6 text-center relative">
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                    Ciptakan <span className="gradient-text">Photostrip Unikmu</span>, Langsung dari Browser.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Pilih frame favoritmu, berpose dengan timer, dan bagikan hasilnya dalam hitungan menit. Persis seperti di studio foto!
                </p>
                <div className="mt-12">
                    <a href="#cara-kerja" className="gradient-bg text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform inline-block shadow-2xl shadow-pink-500/30">
                        Mulai Kreasimu!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
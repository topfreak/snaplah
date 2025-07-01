const InspirationGallery = () => {
    return (
        <section id="inspirasi" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Galeri Inspirasi: <span className="gradient-text">Wujudkan Imajinasimu</span></h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Lihat bagaimana pengguna kami mengubah momen sederhana menjadi kenangan tak terlupakan.</p>
                </div>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    <div className="gallery-item break-inside-avoid"><img className="w-full h-auto" src="https://placehold.co/500x700/f87171/ffffff?text=Solo+Trip" alt="Inspirasi photostrip solo trip" /><div className="overlay"><h3 className="overlay-title">My Solo Trip to Bali</h3></div></div>
                    <div className="gallery-item break-inside-avoid"><img className="w-full h-auto" src="https://placehold.co/500x600/60a5fa/ffffff?text=Coffee+Dates" alt="Inspirasi photostrip coffee dates" /><div className="overlay"><h3 className="overlay-title">Coffee Dates & Laughter</h3></div></div>
                    <div className="gallery-item break-inside-avoid"><img className="w-full h-auto" src="https://placehold.co/500x800/4ade80/ffffff?text=Graduation" alt="Inspirasi photostrip wisuda" /><div className="overlay"><h3 className="overlay-title">Graduation Day!</h3></div></div>
                    <div className="gallery-item break-inside-avoid"><img className="w-full h-auto" src="https://placehold.co/500x500/facc15/ffffff?text=My+Cat" alt="Inspirasi photostrip hewan peliharaan" /><div className="overlay"><h3 className="overlay-title">A Day in My Cat's Life</h3></div></div>
                    <div className="gallery-item break-inside-avoid"><img className="w-full h-auto" src="https://placehold.co/500x750/a78bfa/ffffff?text=OOTD" alt="Inspirasi photostrip OOTD" /><div className="overlay"><h3 className="overlay-title">Outfit of The Day</h3></div></div>
                    <div className="gallery-item break-inside-avoid"><img className="w-full h-auto" src="https://placehold.co/500x650/fb923c/ffffff?text=Best+Friends" alt="Inspirasi photostrip sahabat" /><div className="overlay"><h3 className="overlay-title">Best Friends Forever</h3></div></div>
                    <div className="gallery-item break-inside-avoid"><img className="w-full h-auto" src="https://placehold.co/500x550/34d399/ffffff?text=Work+From+Home" alt="Inspirasi photostrip WFH" /><div className="overlay"><h3 className="overlay-title">Work From Home Diary</h3></div></div>
                    <div className="gallery-item break-inside-avoid"><img className="w-full h-auto" src="https://placehold.co/500x720/ec4899/ffffff?text=Birthday+Bash" alt="Inspirasi photostrip ulang tahun" /><div className="overlay"><h3 className="overlay-title">My Birthday Bash</h3></div></div>
                </div>
            </div>
        </section>
    );
};

export default InspirationGallery;
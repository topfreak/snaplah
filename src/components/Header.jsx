import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fungsi untuk menutup menu mobile saat link diklik
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200/50">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">

                <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3">
                    <img src="/snaplah.svg" alt="SnapLah Logo" className="w-8 h-8" />
                    <span className="text-2xl font-black gradient-text">SnapLah</span>
                </Link>

                {/* --- MENU DESKTOP --- */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Menggunakan <Link> dengan atribut 'to' */}
                    <Link to="/" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">Home</Link>
                    <Link to="/tentang" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">Tentang</Link>
                    <Link to="/berlangganan" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">Berlangganan</Link>
                    <Link to="/kontak" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">Kontak</Link>
                </div>

                {/* Tombol Login/Register (diasumsikan belum fungsional) */}
                <div className="hidden md:flex items-center space-x-3">
                    <a href="#" className="text-sm text-gray-700 font-semibold hover:text-gray-900 transition-colors">
                        Login
                    </a>
                    <a href="#" className="text-sm gradient-bg text-white px-5 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-shadow">
                        Register
                    </a>
                </div>

                {/* Tombol Menu Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* --- MENU MOBILE --- */}
            {isMenuOpen && (
                 <div className="md:hidden bg-white/95 py-4 border-t border-gray-200">
                    <Link to="/" className="block text-center py-2 px-4 text-sm text-gray-600 hover:bg-gray-100" onClick={handleLinkClick}>Home</Link>
                    <Link to="/tentang" className="block text-center py-2 px-4 text-sm text-gray-600 hover:bg-gray-100" onClick={handleLinkClick}>Tentang</Link>
                    <Link to="/berlangganan" className="block text-center py-2 px-4 text-sm text-gray-600 hover:bg-gray-100" onClick={handleLinkClick}>Berlangganan</Link>
                    <Link to="/kontak" className="block text-center py-2 px-4 text-sm text-gray-600 hover:bg-gray-100" onClick={handleLinkClick}>Kontak</Link>
                    
                    <div className="mt-4 px-6 flex flex-col space-y-3">
                        <a href="#" className="text-center w-full text-gray-600 border border-gray-300 px-4 py-2 rounded-lg font-medium">Login</a>
                        <a href="#" className="text-center w-full gradient-bg text-white px-4 py-2 rounded-lg font-semibold">Register</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
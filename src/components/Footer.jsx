import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-6 py-12">
                <div className="md:flex md:justify-between items-center text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <p className="text-2xl font-bold text-white">SnapLah!</p>
                        <p className="mt-2">Studio photostrip virtual di sakumu.</p>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="hover:text-white transition-colors"><Instagram /></a>
                        <a href="#" className="hover:text-white transition-colors"><Facebook /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter /></a>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="text-center text-sm">&copy; 2025 SnapLah Fun. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
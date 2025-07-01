import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const KontakPage = () => {
  return (
    <div className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-black text-gray-900">
          Hubungi Saya
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
          Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa. Jangan ragu untuk menghubungi saya melalui email atau media sosial di bawah ini.
        </p>

        <div className="mt-12">
          <a 
            href="mailto:emailanda@contoh.com"
            className="gradient-bg text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform inline-block shadow-2xl shadow-pink-500/30"
          >
            <Mail className="inline-block mr-3 -mt-1" />
            Kirim Email
          </a>
        </div>

        <div className="mt-16">
          <p className="text-gray-500 mb-6">Temukan saya di:</p>
          <div className="flex justify-center space-x-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-c-pink transition-colors transform hover:-translate-y-1">
              <Github size={32} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-c-pink transition-colors transform hover:-translate-y-1">
              <Linkedin size={32} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-c-pink transition-colors transform hover:-translate-y-1">
              <Instagram size={32} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KontakPage;
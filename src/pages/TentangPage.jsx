import IconCode from '../icons/IconCode';
import IconBolt from '../icons/IconBolt';
import IconWind from '../icons/IconWind';
import IconVercel from '../icons/IconVercel';

const TentangPage = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <img
            src="./topik.png"
            alt="Foto Profil"
            className="w-40 h-40 rounded-full mx-auto mb-6 shadow-xl"
          />
          <h1 className="text-5xl font-black text-gray-900">Taufiq Hidayatullah</h1>
          <p className="text-xl text-gray-600 mt-2">22.11.5113</p> 
          <p className="max-w-2xl mx-auto mt-4 text-gray-700">
            Website ini dibuat dan dikembangkan untuk memenuhi tugas akhir pada mata kuliah Digital Business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Teknologi yang Digunakan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <IconCode size={40} className="mb-4 text-cyan-500" />
              <h3 className="text-xl font-bold">React</h3>
              <p className="text-gray-600 mt-2">Library JavaScript untuk membangun antarmuka pengguna.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <IconBolt size={40} className="mb-4 text-purple-500" />
              <h3 className="text-xl font-bold">Vite</h3>
              <p className="text-gray-600 mt-2">Build tool modern yang memberikan pengalaman pengembangan super cepat.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <IconWind size={40} className="mb-4 text-sky-500" />
              <h3 className="text-xl font-bold">Tailwind CSS</h3>
              <p className="text-gray-600 mt-2">Framework CSS utility-first untuk desain antarmuka yang cepat.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <IconVercel size={40} className="mb-4 text-gray-800" />
              <h3 className="text-xl font-bold">Vercel</h3>
              <p className="text-gray-600 mt-2">Platform untuk hosting dan deployment aplikasi frontend.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangPage;
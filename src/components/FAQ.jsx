import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "Berapa foto yang diambil per sesi?",
        answer: "Jumlah foto tergantung pada template frame yang Anda pilih. Kami menyediakan template mulai dari 4 foto hingga 8 foto per photostrip."
    },
    {
        question: "Apakah hasilnya bisa dicetak?",
        answer: "Saat ini, SnapLah dioptimalkan untuk berbagi secara online. Anda akan mendapatkan file gambar (JPG/PNG) resolusi tinggi yang bisa Anda cetak sendiri di tempat percetakan favorit Anda."
    },
    {
        question: "Bisakah saya mengulang foto jika hasilnya jelek?",
        answer: "Ya! Setelah sesi foto selesai, Anda akan masuk ke halaman editor. Di sana, Anda bisa melihat semua hasil jepretan dan memilih untuk mengambil ulang foto tertentu sebelum finalisasi."
    }
];

const FaqItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <button 
                className="w-full flex justify-between items-center text-left font-semibold text-lg"
                onClick={onClick}
            >
                <span>{item.question}</span>
                <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-600">{item.answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleFaqClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Masih <span className="gradient-text">Penasaran?</span></h2>
                </div>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem 
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleFaqClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
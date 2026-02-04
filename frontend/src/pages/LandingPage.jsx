import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const { user } = useAuth();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    api
      .get("/modules")
      .then((res) => {
        setModules(res.data.modules.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const faqs = [
    {
      question: "Apa itu Science For Life?",
      answer:
        "Science For Life adalah platform pembelajaran interaktif yang membawa ilmu pengetahuan ke kehidupan sehari-hari. Kami menyediakan materi pembelajaran yang menarik dan mudah dipahami.",
    },
    {
      question: "Bagaimana cara mendaftar?",
      answer:
        "Klik tombol 'Mulai Belajar Sekarang' di halaman utama, lalu isi formulir pendaftaran dengan data diri Anda. Setelah mendaftar, Anda dapat langsung mengakses semua modul pembelajaran.",
    },
    {
      question: "Apakah ada biaya untuk menggunakan platform ini?",
      answer:
        "Kami menawarkan berbagai paket pembelajaran, mulai dari gratis hingga premium. Paket gratis sudah mencakup akses ke beberapa modul dasar.",
    },
    {
      question: "Bagaimana cara menghubungi customer support?",
      answer:
        "Anda dapat menghubungi kami melalui email di support@scienceforlife.com atau melalui form kontak yang tersedia di website kami.",
    },
    {
      question: "Apakah sertifikat tersedia setelah menyelesaikan modul?",
      answer:
        "Ya, Anda akan mendapatkan sertifikat digital setelah menyelesaikan setiap modul pembelajaran dengan nilai yang memenuhi standar.",
    },
    {
      question: "Berapa lama akses modul pembelajaran?",
      answer:
        "Akses ke modul pembelajaran bersifat unlimited selama Anda masih terdaftar sebagai pengguna aktif di platform kami.",
    },
  ];

  const programs = [
    {
      icon: "🌟",
      title: "Dunia Hijau Kehidupan",
      description:
        "Mempelajari lingkungan, ekosistem, dan peran manusia dalam menjaga keberlanjutan bumi.",
    },
    {
      icon: "🧬",
      title: "Rahasia Tubuh Kehidupan",
      description:
        "Memahami kerja tubuh manusia, fisiologi sistem tubuh yang bekerja dengan sempurna setiap saat.",
    },
    {
      icon: "🤖",
      title: "Belajar Dibantu AI",
      description:
        "AI Tutor membantu menjawab setiap pertanyaan yang belum dipahami secara personal.",
    },
    {
      icon: "🧪",
      title: "Mini dalam Ilmu",
      description:
        "Menyingkap keajaiban bahasa ilmiah: struktur yang harus dipatuhi dengan kritis.",
    },
  ];

  const partners = [
    "Airbnb",
    "HubSpot",
    "Google",
    "Microsoft",
    "Walmart",
    "FedEx",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative text-white py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(16, 97, 70, 0.95) 0%, rgba(9, 57, 42, 0.95) 100%), url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Belajar Sains untuk Kehidupan
              <br />
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                yang Lebih Bermakna
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-green-50 max-w-3xl mx-auto">
              Platform pembelajaran interaktif yang menyingkapkan sains ke dalam
              kehidupan sehari-hari. Belajar dengan cara yang menakjubkan dan
              lebih bermakna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Mulai Belajar Sekarang
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Mulai Belajar Sekarang
                  </Link>
                  <Link
                    to="/program-unggulan"
                    className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300"
                  >
                    Lihat Modul Pembelajaran
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-3xl animate-bounce">
          ↓
        </div>
      </section>

      {/* About Section */}
      <section id="tentang-kami" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                — Tentang
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Science For Life
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Science For Life hadir sebagai jembatan inovatif bagi siswa yang
                ingin memperdalam sains kehidupan, kontekstual, berbasis
                penelitian, dan meningkatkan literasi sains yang sebenarnya
                membuka makna menjaga kehidupan, lingkungan, dan nilai
                kemanusiaan.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Kami menyediakan platform pembelajaran yang interaktif, menarik,
                dan mudah dipahami untuk semua kalangan.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Students Learning"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wider mb-8">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-all duration-300 grayscale hover:grayscale-0"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program-unggulan" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
              — Terbaik
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              PROGRAM UNGGULAN
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Kami bring our members high quality ecommerce investment
              opportunities that are normally hidden away in country clubs or
              investment firms. Investors through Equity Street Capital get
              access to a diverse range of retail, mixed-family and office
              building investment opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-green-100 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg">
              Current Opportunities
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Learn More About Investing
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              FAQs
            </h2>
            <p className="text-gray-600 text-lg">
              Pertanyaan yang sering ditanyakan
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-green-50 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-green-50 transition-colors duration-300"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-2xl font-bold text-green-600 transform transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="relative overflow-hidden text-white text-center py-20 px-8 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            }}
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Siap untuk belajar?
              </h2>
              <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan siswa yang telah memulai perjalanan
                pembelajaran mereka bersama kami.
              </p>
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-white text-green-600 px-10 py-4 rounded-full font-semibold text-lg inline-block hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  Mulai Belajar Sekarang
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="bg-white text-green-600 px-10 py-4 rounded-full font-semibold text-lg inline-block hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  Mulai Belajar Sekarang
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

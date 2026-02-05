import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Leaf,
  Brain,
  Cpu,
  FlaskConical,
  Sprout,
  Star,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const LandingPage = () => {
  const { user } = useAuth();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState(null);

  useEffect(() => {
    api
      .get("/modules")
      .then((res) => {
        setModules(res.data.modules?.slice(0, 4) || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus(null);
    try {
      await api.post("/contact/feedback", contactForm);
      setContactStatus("success");
      setContactForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setContactStatus("error");
    }
  };

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
      icon: Sprout,
      title: "Dunia Hijau Kehidupan",
      description:
        "Mempelajari lingkungan, ekosistem, dan peran manusia dalam menjaga keberlanjutan bumi.",
    },
    {
      icon: Brain,
      title: "Rahasia Tubuh Kehidupan",
      description:
        "Memahami kerja tubuh manusia, fisiologi sistem tubuh yang bekerja dengan sempurna setiap saat.",
    },
    {
      icon: Cpu,
      title: "Belajar Dibantu AI",
      description:
        "AI Tutor membantu menjawab setiap pertanyaan yang belum dipahami secara personal.",
    },
    {
      icon: FlaskConical,
      title: "Mini dalam Ilmu",
      description:
        "Menyingkap keajaiban bahasa ilmiah: struktur yang harus dipatuhi dengan kritis.",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Ahmad Rahman",
      role: "Founder & Lead Educator",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Siti Nurhaliza, M.Sc",
      role: "Curriculum Developer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Budi Santoso",
      role: "Technology Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Dewi Kusuma",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Full Screen */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden pt-16"
        style={{
          background:
            "linear-gradient(135deg, rgba(16, 97, 70, 0.92) 0%, rgba(9, 57, 42, 0.95) 100%), url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Belajar Sains untuk Kehidupan
              <br />
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                yang Lebih Bermakna
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-green-50/95 max-w-3xl mx-auto leading-relaxed">
              Platform pembelajaran interaktif yang menyingkapkan sains ke dalam
              kehidupan sehari-hari. Belajar dengan cara yang menakjubkan dan
              lebih bermakna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Mulai Belajar Sekarang
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Mulai Belajar Sekarang
                  </Link>
                  <Link
                    to="/#program-unggulan"
                    className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300"
                  >
                    Lihat Modul Pembelajaran
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Scroll indicator with bounce effect */}
        <a
          href="/#tentang-kami"
          className="absolute bottom-8 left-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors animate-bounce-smooth border border-white/30"
          aria-label="Scroll ke bawah"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* About Section */}
      <section id="tentang-kami" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
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
              <div className="flex items-center gap-2 mt-8">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  Platform terpercaya
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Students Learning"
                  className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-bold">500+</span> Siswa Aktif
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Luxurious Green Background */}
      <section
        id="program-unggulan"
        className="py-24 scroll-mt-20"
        style={{
          background:
            "linear-gradient(160deg, #0d4d3a 0%, #0a3d2e 30%, #062d22 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-300 font-semibold text-sm uppercase tracking-widest">
              — Terbukti
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              PROGRAM UNGGULAN
            </h2>
            <p className="text-green-100/90 text-lg max-w-2xl mx-auto">
              Platform pembelajaran sains yang dirancang untuk membuka wawasan
              dan menginspirasi generasi muda. Akses modul berkualitas dengan
              pendekatan kontekstual dan berbasis penelitian.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-green-400 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-green-500/30 flex items-center justify-center mb-6 group-hover:bg-green-500/50 transition-colors">
                    <IconComponent className="w-7 h-7 text-green-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {program.title}
                  </h3>
                  <p className="text-green-100/80 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to={user ? "/dashboard" : "/register"}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Leaf className="w-5 h-5" />
              Lihat Semua Program
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 bg-gradient-to-b from-green-50 to-white scroll-mt-20"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
              FAQs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full" />
            <p className="text-gray-600 text-lg mt-4">
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
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-green-50/50 transition-colors duration-300"
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

      {/* CTA Section - Siap Belajar - Organic Green Shape */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Organic blob shape */}
            <div
              className="relative overflow-hidden rounded-[3rem] py-24 px-8 md:py-28 md:px-16"
              style={{
                background:
                  "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
                boxShadow:
                  "0 25px 50px -12px rgba(5, 150, 105, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              {/* Decorative organic shapes */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

              <div className="relative z-10 text-center text-white">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Siap untuk belajar?
                </h2>
                <p className="text-xl md:text-2xl text-green-50 mb-10 max-w-2xl mx-auto">
                  Mulai Bergabung Sekarang!
                </p>
                {user ? (
                  <Link
                    to="/dashboard"
                    className="inline-block bg-white text-green-600 px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-2xl transition-all duration-300"
                  >
                    Mulai Belajar Sekarang
                  </Link>
                ) : (
                  <Link
                    to="/register"
                    className="inline-block bg-white text-green-600 px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-2xl transition-all duration-300"
                  >
                    Mulai Bergabung Sekarang
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section
        id="tim-kami"
        className="py-24 bg-gradient-to-b from-white to-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
              — Tim Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kenali para ahli di balik Science For Life yang berdedikasi
              membawa sains lebih dekat dengan kehidupan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="kontak"
        className="py-24 bg-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
                — Hubungi Kami
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 text-lg">
                Punya saran atau masukan? Kami senang mendengar dari Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:support@scienceforlife.com"
                      className="text-gray-600 hover:text-green-600"
                    >
                      support@scienceforlife.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                    <a
                      href="tel:+6281234567890"
                      className="text-gray-600 hover:text-green-600"
                    >
                      +62 812 3456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <form
                  onSubmit={handleContactSubmit}
                  className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="Nama lengkap Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="Subjek pesan (opsional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                      placeholder="Tulis saran atau masukan Anda..."
                    />
                  </div>
                  {contactStatus === "success" && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-xl">
                      Terima kasih! Pesan Anda telah berhasil dikirim.
                    </div>
                  )}
                  {contactStatus === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl">
                      Gagal mengirim pesan. Silakan coba lagi.
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

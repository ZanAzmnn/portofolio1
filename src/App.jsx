import Hobby from "./component/Hobby"
import DataImage from "./data"
import {listTools, listProyek, listGame} from  "./data"
import React, { useState } from 'react'; // 1. Tambahkan Import useState

const truncateWords = (text, maxWords = 10) => {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

function App() {
  // 2. Tambahkan State untuk melacak proyek mana yang dibuka
  const [expandedId, setExpandedId] = useState(null);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {/* Hero Section - Tetap sama */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl hover:bg-cyan-600 transition duration-500 ease-in-out hover:translate-x-4">
            <h1 className="text-2xl font-bold">Selamat Datang 🚀</h1>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Fauzan Aziman</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya merupakan mahasiswa yang fokus dalam pengembangan sistem informasi dan teknologi digital. Melalui berbagai proyek dan penelitian, saya berusaha mengasah kemampuan analisis, desain, serta implementasi sistem yang efisien dan inovatif.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-cyan-700 p-4 rounded-2xl hover:bg-cyan-500 font-bold">Download CV <i className="ri-folder-download-line ri-lg"></i></a>
            <a href="#" className="bg-cyan-700 p-4 rounded-2xl hover:bg-cyan-500 font-bold">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="rounded-md w-[500px]  md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
      </div>

      {/* About - Tetap sama */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-base/loose mb-10">
            Halo! Saya Fauzan Aziman Putra, mahasiswa UIN Raden Fatah Palembang jurusan Sistem Informasi yang berfokus sebagai Full Stack Developer. Saya senang mengembangkan aplikasi web dari sisi front-end hingga back-end, serta menciptakan solusi digital yang efisien dan mudah digunakan.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-3xl text-white">
              <a href="#" className="relative group transition"><i className="ri-instagram-line transition duration-300  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr  group-hover:from-pink-500 group-hover:via-purple-500  group-hover:to-orange-400"></i></a>
              <a href="#" className="hover:text-[#25D366] transition-colors duration-300"><i className="ri-whatsapp-line"></i></a>
              <a href="#" className="hover:text-sky-500 transition-colors duration-300"><i className="ri-steam-fill"></i></a>
              <a href="#" className="hover:text-sky-500 transition-colors duration-300"><i className="ri-github-fill"></i></a>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1>Project selesai</h1>
                <h1 className="text-4xl mb-1 text-center">5 <span className="text-cyan-500">+</span></h1>
              </div>
              <div>
                <p>Semester</p>
                <h1 className="text-4xl mb-1 text-center">6</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
          
      {/* Tools - Tetap sama */}
      <div className="tools mt-32">
        <div className="md:text-center">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 via-cyan-400 to-cyan-400 animate-shine md:text-center sm:text-center" data-aos="fade-up" data-aos-duration="1000">Tools Yang Dipakai</h1>
          <p className="text-base text-white opacity-50 lg:text-center" data-aos="fade-up" data-aos-delay="300">Berikut ini beberapa tools yang saya pakai dalam membuat web site</p>
        </div>
        <div className="tools-book mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 rounded-md hover:bg-zinc-800 group animated-border" key={tool.id} data-aos="fade-up" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-full" loading="lazy" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proyek - BAGIAN YANG DIPERBAIKI */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 via-cyan-400 to-cyan-400 animate-shine md:text-center sm:text-center" data-aos="fade-up" data-aos-duration="1000">
          Proyek
        </h1>

        <p className="text-base text-white text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut Proyek yang sudah saya buat.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listProyek.map((proyek) => {
            const isExpanded = expandedId === proyek.id;
            const isLongText = proyek.desk.split(" ").length > 10;

            return (
              <div
                key={proyek.id}
                className="group p-4 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900
                   transform-gpu transition-transform 
                   duration-500 ease-out
                   hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                data-aos-duration={proyek.dad}
              >
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" className="rounded-md" />

                <div className="mt-4">
                  <h1 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
                    {proyek.nama}
                  </h1>

                  {/* Deskripsi Menyambung Langsung (Inline) */}
                  <p className="text-base/loose mb-3 text-white opacity-70">
                    {isExpanded ? proyek.desk : truncateWords(proyek.desk, 10)}
                    {isLongText && (
                      <button
                        onClick={() => toggleDescription(proyek.id)}
                        className="ml-2 text-sm text-cyan-400 hover:underline font-medium focus:outline-none"
                      >
                        {isExpanded ? "Sembunyikan" : "Baca Selengkapnya"}
                      </button>
                    )}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="py-1 px-3 text-sm rounded-full bg-zinc-700 border border-zinc-500 
                                   group-hover:bg-cyan-500 group-hover:text-black transition"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="block rounded-lg p-3 font-semibold text-black 
                                 bg-gradient-to-r from-cyan-400 to-blue-500 
                                 hover:from-cyan-500 hover:to-blue-600 transition"
                    >
                      Kunjungi
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact - Tetap sama */}
      <div className="contact mt-32 p-6 md:p-10 min-h-screen">
        <h1 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-300 animate-shine text-center" data-aos="fade-up" data-aos-duration="1000">Drop a line</h1>
        <form className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl mx-auto max-w-2xl w-full shadow-2xl" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="space-y-8">
            <div className="relative group">
              <label htmlFor="nama" className="block mb-2 text-sm font-medium text-zinc-400 group-focus-within:text-cyan-400 transition-colors">Nama Lengkap</label>
              <input id="nama" type="text" name="nama" placeholder="Siapa nama Anda?" className="w-full bg-zinc-800/50 border border-zinc-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-zinc-600 text-white" required />
            </div>
            <div className="relative group">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-400 group-focus-within:text-cyan-400 transition-colors">Alamat Email</label>
              <input id="email" type="email" name="email" placeholder="email@perusahaan.com" className="w-full bg-zinc-800/50 border border-zinc-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-zinc-600 text-white" required />
            </div>
            <div className="relative group">
              <label htmlFor="pesan" className="block mb-2 text-sm font-medium text-zinc-400 group-focus-within:text-cyan-400 transition-colors">Pesan Anda</label>
              <textarea id="pesan" name="pesan" rows={5} placeholder="Ceritakan proyek atau ide Anda..." className="w-full bg-zinc-800/50 border border-zinc-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-zinc-600 text-white resize-none" required />
            </div>
            <div className="pt-4">
              <button type="submit" className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-xl font-bold w-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-[0.98]">
                <span className="relative z-10">Kirim Pesan</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
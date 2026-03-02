// hobby.jsx
import React from 'react';

// Data untuk kartu Hobi, Motto, dll.
const cardData = [
  { id: 1, title: "Hobi", content: "Bola", icon: "🎮", color: "bg-indigo-500" },
  { id: 2, title: "Impian", content: "Hengker", icon: "🌟", color: "bg-orange-500" },
  { id: 3, title: "Motto", content: "Islam agamaku", icon: "💭", color: "bg-purple-500" },
  { id: 4, title: "Makanan / Minuman Favorit", content: "Hehe", icon: "🥗", color: "bg-green-500" },
  { id: 5, title: "Pesan untuk Kelas", content: "indonesia maju", icon: "💌", color: "bg-red-500" },
  { id: 6, title: "Tujuan Kelas", content: "indonesia maju", icon: "🎯", color: "bg-blue-500" },
];

// Komponen untuk satu kartu
const CardComponent = ({ title, content, icon, color }) => (
    <div className="p-5 bg-white rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300">
      <div className="flex items-center mb-3">
        <div className={`p-2 rounded-lg ${color} mr-3`}>
          <span className="text-2xl leading-none">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 font-medium ml-1.5">{content}</p>
    </div>
);

// Komponen utama Hobby
export default function Hobby() {
  return (
    <div className="pt-10">
      {/* Container utama untuk kartu-kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {cardData.map((data) => (
          <CardComponent
            key={data.id}
            title={data.title}
            content={data.content}
            icon={data.icon}
            color={data.color}
          />
        ))}
      </div>
    </div>
  );
}

// import {listGame} from  "../data"
// export default function Hobby() {
//   return (
//        <div className="tentang py-10">
//                 <div className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg">
//        <div className="p-5 ">
//          <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 via-cyan-400 to-cyan-400 animate-shine md:text-center sm:text-center">Game</h2>
//     <div className="relative overflow-hidden max-w-2xl mx-auto">
//         {/* Tombol kiri */}
//         <button
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-800 p-3 rounded-full shadow-md hover:bg-zinc-700 transition z-10"
//           onClick={() =>
//             document.getElementById("gameScroll").scrollBy({ left: -500, behavior: "smooth" })}>
//           <i className="ri-arrow-left-s-line text-2xl"></i>
//         </button>
//         {/* Daftar Game */}
//         <div id="gameScroll" className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory mt-5">{listGame.map((game) => (
//           <div key={game.id} className="flex-shrink-0 w-full snap-center">
//             <img src={game.gambar} alt={`Game ${game.id}`} className="w-full h-[400px] object-cover rounded-2xl"/>
//             </div>))}
//             </div>
//         {/* Tombol kanan */}
//         <button
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-800 p-3 rounded-full shadow-md hover:bg-zinc-700 transition z-10"
//           onClick={() =>
//             document.getElementById("gameScroll").scrollBy({ left: 500, behavior: "smooth" })
//           }>
//           <i className="ri-arrow-right-s-line text-2xl"></i>
//         </button>
//       </div>
//       </div>
      
          
         
//     </div>
//     </div>
//      );
// }
 {/* Music */}
          {/* <div className="mt-10 p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-800 border border-zinc-700 shadow-xl text-white max-w-md">
       
        <div className="flex items-center gap-5">
          <img
            src="/assets/tools/cover.jpg"
            alt="All I Ask"
            className="w-20 h-20 rounded-xl object-cover shadow-lg ring-1 ring-zinc-600"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">All I Ask</h3>
            <p className="text-sm text-zinc-400">Adele</p>
          </div>
        </div>
       
        <audio
          controls
          className="w-full mt-5 rounded-lg accent-emerald-500 focus:outline-none">
          <source src="/assets/musik/All I Ask.mp3" type="audio/mpeg" />
          Browser kamu tidak mendukung audio.
        </audio>
    </div> */}

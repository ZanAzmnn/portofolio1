// export default function Footer() {
//   return (
//     <footer className=" mt-32 pt-24 pb-13 rounded-md relative overflow-hidden" data-aos="fade-up">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="flex flex-wrap mx-auto px-6 lg:px-12 max-w-6xl ">
//           {/* Kolom 1 */}
//           <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
//             <h2 className="font-bold text-4xl text-white mb-5">Mahasiswa</h2>
//             <h1 className="font-bold text-2xl mb-2">Sistem Informasi</h1>
//             <p>Fauzan Aziman</p>
//           </div>

//           {/* Kolom 2 */}
//           <div className="w-full px-4 mb-12 md:w-1/3">
//             <h1 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h1>
//             <ul className="text-slate-300">
//               <li><a href="#" className="inline-block text-base hover:text-teal-400 mb-3">Sistem Informasi</a></li>
//               <li><a href="#" className="inline-block text-base hover:text-teal-400 mb-3">Pengembangan Sistem Informasi</a></li>
//               <li><a href="#" className="inline-block text-base hover:text-teal-400 mb-3">Programming</a></li>
//             </ul>
//           </div>

//           {/* Kolom 3 */}
//           <div className="w-full px-4 mb-12 md:w-1/3">
//             <h1 className="font-semibold text-xl text-white mb-5">Tautan</h1>
//             <ul className="text-slate-300">
//               <li><a href="#home" className="inline-block text-base hover:text-teal-400 mb-3">Beranda</a></li>
//               <li><a href="#about" className="inline-block text-base hover:text-teal-400 mb-3">Tentang Saya</a></li>
//               <li><a href="#portofolio" className="inline-block text-base hover:text-teal-400 mb-3">Portofolio</a></li>
//               <li><a href="#contact" className="inline-block text-base hover:text-teal-400 mb-3">Contact</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Dibuat Menggunakan */}
//         <div className="w-full px-4">
//           <div className="flex font-bold text-base text-white pb-5 justify-center">
//             <h1>Dibuat Menggunakan :</h1>
//           </div>

//           <div className="flex flex-wrap items-center justify-center gap-3" data-aos="fade-up">
//             {/* Tailwind */}
//             <a
//               href="https://tailwindcss.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white
//                      hover:scale-110 hover:bg-sky-500 hover:text-white
//                      transition duration-300 ease-in-out"
//             >
//               <svg role="img" width="24" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <title>Tailwind CSS</title>
//                 <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8
//                 c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,
//                 6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,
//                 14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,
//                 4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,
//                 2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624
//                 C10.337,13.382,8.976,12,6.001,12z" />
//               </svg>
//             </a>

//             {/* React */}
           
//             <a  href="https://JavaScript.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white
//                      hover:scale-110 hover:bg-sky-500 hover:text-white
//                      transition duration-300 ease-in-out">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.448 16.2394C13.8809 17.0412 13.2933 17.7714 12.7015 18.4146C14.3738 20.0375 15.9291 20.7975 16.792 20.2993C17.6549 19.8011 17.7744 18.0742 17.2051 15.8145C16.3521 16.0054 15.426 16.1492 14.448 16.2394ZM13.138 16.3265C12.7641 16.342 12.3845 16.3499 12.0003 16.3499C11.6161 16.3499 11.2365 16.342 10.8627 16.3265C11.2394 16.8188 11.6208 17.2749 12.0003 17.6905C12.3798 17.2749 12.7612 16.8188 13.138 16.3265ZM18.1787 8.43278C20.8434 9.19718 22.5837 10.4672 22.5837 11.9999C22.5837 13.5325 20.8434 14.8026 18.1787 15.567C18.8491 18.2569 18.6193 20.399 17.292 21.1653C15.9647 21.9316 13.9947 21.0595 12.0003 19.134C10.006 21.0595 8.03596 21.9316 6.70866 21.1653C5.38136 20.399 5.15158 18.2569 5.82195 15.567C3.15724 14.8026 1.41699 13.5325 1.41699 11.9999C1.41699 10.4672 3.15724 9.19718 5.82195 8.43278C5.15158 5.74288 5.38136 3.60075 6.70866 2.83443C8.03596 2.06811 10.006 2.94019 12.0003 4.86569C13.9947 2.94019 15.9647 2.06811 17.292 2.83443C18.6193 3.60075 18.8491 5.74288 18.1787 8.43278ZM17.2051 8.18527C17.7744 5.92558 17.6549 4.19865 16.792 3.70046C15.9291 3.20226 14.3738 3.96221 12.7015 5.58509C13.2933 6.2283 13.8809 6.95849 14.448 7.76031C15.426 7.85054 16.3521 7.99432 17.2051 8.18527ZM6.79554 15.8145C6.22624 18.0742 6.34577 19.8011 7.20866 20.2993C8.07155 20.7975 9.62688 20.0375 11.2992 18.4146C10.7073 17.7714 10.1197 17.0412 9.55262 16.2394C8.57467 16.1492 7.6485 16.0054 6.79554 15.8145ZM10.8627 7.67324C11.2365 7.65776 11.6161 7.64987 12.0003 7.64987C12.3845 7.64987 12.7641 7.65776 13.138 7.67324C12.7612 7.18096 12.3798 6.7248 12.0003 6.30922C11.6208 6.7248 11.2394 7.18096 10.8627 7.67324ZM9.55262 7.76031C10.1197 6.95849 10.7073 6.2283 11.2992 5.58509C9.62688 3.96221 8.07155 3.20226 7.20866 3.70046C6.34577 4.19865 6.22624 5.92558 6.79554 8.18527C7.6485 7.99432 8.57467 7.85054 9.55262 7.76031ZM13.8939 15.2797C14.2395 14.7728 14.5772 14.2366 14.9015 13.6749C15.2258 13.1131 15.5213 12.5526 15.7875 11.9999C15.5213 11.4471 15.2258 10.8866 14.9015 10.3249C14.5772 9.76311 14.2395 9.22694 13.8939 8.72005C13.2821 8.6742 12.649 8.64987 12.0003 8.64987C11.3517 8.64987 10.7185 8.6742 10.1067 8.72005C9.76112 9.22694 9.42347 9.76311 9.09914 10.3249C8.77481 10.8866 8.4793 11.4471 8.21312 11.9999C8.4793 12.5526 8.77481 13.1131 9.09914 13.6749C9.42347 14.2366 9.76112 14.7728 10.1067 15.2797C10.7185 15.3255 11.3517 15.3499 12.0003 15.3499C12.649 15.3499 13.2821 15.3255 13.8939 15.2797ZM15.1785 15.1484C15.7932 15.0683 16.3789 14.9661 16.9286 14.8452C16.7584 14.3087 16.5541 13.7504 16.3161 13.178C16.1426 13.5095 15.9596 13.8421 15.7675 14.1749C15.5754 14.5076 15.3788 14.8324 15.1785 15.1484ZM8.82218 8.85133C8.20747 8.93147 7.62174 9.03367 7.07208 9.15454C7.24223 9.691 7.44659 10.2494 7.68454 10.8218C7.85806 10.4903 8.04101 10.1576 8.23311 9.82487C8.42522 9.49212 8.62185 9.16736 8.82218 8.85133ZM7.07208 14.8452C7.62174 14.9661 8.20747 15.0683 8.82218 15.1484C8.62185 14.8324 8.42522 14.5076 8.23311 14.1749C8.04101 13.8421 7.85806 13.5095 7.68454 13.178C7.44659 13.7504 7.24223 14.3087 7.07208 14.8452ZM6.09439 14.6C6.35551 13.7659 6.69407 12.8919 7.10491 11.9999C6.69407 11.1078 6.35551 10.2339 6.09439 9.39969C3.85279 10.0365 2.41699 11.0035 2.41699 11.9999C2.41699 12.9962 3.85279 13.9632 6.09439 14.6ZM16.9286 9.15454C16.3789 9.03367 15.7932 8.93147 15.1785 8.85133C15.3788 9.16736 15.5754 9.49212 15.7675 9.82487C15.9596 10.1576 16.1426 10.4903 16.3161 10.8218C16.5541 10.2494 16.7584 9.691 16.9286 9.15454ZM17.9063 9.39969C17.6451 10.2339 17.3066 11.1078 16.8957 11.9999C17.3066 12.8919 17.6451 13.7659 17.9063 14.6C20.1479 13.9632 21.5837 12.9962 21.5837 11.9999C21.5837 11.0035 20.1479 10.0365 17.9063 9.39969ZM12.0003 13.879C10.9625 13.879 10.1212 13.0377 10.1212 11.9999C10.1212 10.962 10.9625 10.1207 12.0003 10.1207C13.0382 10.1207 13.8795 10.962 13.8795 11.9999C13.8795 13.0377 13.0382 13.879 12.0003 13.879Z"></path></svg>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <q className="flex font-bold text-base text-white pb-5 justify-center">Website di update 60 hari sekali</q>
//         <p class="text-white text-sm flex items-center justify-center flex-wrap gap-1">
//   <span>
//     &copy;
//     2025
//     Fauzan Aziman 
//   </span>
//   <span class="hidden sm:inline">
//     &bull;
//   </span>
//   <span class="sm:inline block">
//     Program Studi Sistem Informasi
//   </span>
// </p>
//       </div>
//     </footer>
//   );
// }
export default function Footer() {
  return (
    <footer className="relative mt-32 pt-20 pb-10 overflow-hidden" data-aos="fade-up">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="w-full px-4 lg:px-10">
        <div className="flex flex-wrap justify-between mb-16">
          <div className="w-full px-4 mb-12 md:w-1/3 space-y-4">
            <h2 className="font-extrabold text-5xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Mahasiswa
            </h2>
            <div>
              <h3 className="font-semibold text-xl text-teal-400">Sistem Informasi</h3>
              <p className="text-slate-300 mt-2 text-lg">Fauzan Aziman</p>
            </div>
          </div>

         
          <div className="w-full px-4 mb-12 md:w-1/4">
            <h1 className="font-bold text-sm uppercase tracking-[0.2em] text-teal-400 mb-7">Kategori Tulisan</h1>
            <ul className="space-y-4">
              {['Sistem Informasi', 'Pengembangan Sistem', 'Programming'].map((item) => (
                <li key={item}>
                  <a href="#" className="group text-slate-400 hover:text-teal-400 transition-all duration-300 flex items-center">
                    <span className="w-0 group-hover:w-2 h-px bg-teal-400 mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/4">
            <h1 className="font-bold text-sm uppercase tracking-[0.2em] text-teal-400 mb-7">Tautan Cepat</h1>
            <ul className="space-y-4">
              {[
                { name: 'Beranda', href: '#home' },
                { name: 'Tentang Saya', href: '#about' },
                { name: 'Portofolio', href: '#portofolio' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-300 block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10">
          <div className="flex flex-col items-center">
            <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-6">Dibuat Menggunakan</p>
            <div className="flex gap-4 items-center">
              {/* Tailwind Logo */}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white
                       hover:scale-110 hover:bg-sky-500 transition duration-300 ease-in-out"
              >
                <svg role="img" width="24" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Tailwind CSS</title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8
                  c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,
                  6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,
                  14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,
                  4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,
                  2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624
                  C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
              </a>

              {/* React Logo */}
              <a  href="https://JavaScript.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-slate-300 text-white
                     hover:scale-110 hover:bg-sky-500 hover:text-white
                     transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.448 16.2394C13.8809 17.0412 13.2933 17.7714 12.7015 18.4146C14.3738 20.0375 15.9291 20.7975 16.792 20.2993C17.6549 19.8011 17.7744 18.0742 17.2051 15.8145C16.3521 16.0054 15.426 16.1492 14.448 16.2394ZM13.138 16.3265C12.7641 16.342 12.3845 16.3499 12.0003 16.3499C11.6161 16.3499 11.2365 16.342 10.8627 16.3265C11.2394 16.8188 11.6208 17.2749 12.0003 17.6905C12.3798 17.2749 12.7612 16.8188 13.138 16.3265ZM18.1787 8.43278C20.8434 9.19718 22.5837 10.4672 22.5837 11.9999C22.5837 13.5325 20.8434 14.8026 18.1787 15.567C18.8491 18.2569 18.6193 20.399 17.292 21.1653C15.9647 21.9316 13.9947 21.0595 12.0003 19.134C10.006 21.0595 8.03596 21.9316 6.70866 21.1653C5.38136 20.399 5.15158 18.2569 5.82195 15.567C3.15724 14.8026 1.41699 13.5325 1.41699 11.9999C1.41699 10.4672 3.15724 9.19718 5.82195 8.43278C5.15158 5.74288 5.38136 3.60075 6.70866 2.83443C8.03596 2.06811 10.006 2.94019 12.0003 4.86569C13.9947 2.94019 15.9647 2.06811 17.292 2.83443C18.6193 3.60075 18.8491 5.74288 18.1787 8.43278ZM17.2051 8.18527C17.7744 5.92558 17.6549 4.19865 16.792 3.70046C15.9291 3.20226 14.3738 3.96221 12.7015 5.58509C13.2933 6.2283 13.8809 6.95849 14.448 7.76031C15.426 7.85054 16.3521 7.99432 17.2051 8.18527ZM6.79554 15.8145C6.22624 18.0742 6.34577 19.8011 7.20866 20.2993C8.07155 20.7975 9.62688 20.0375 11.2992 18.4146C10.7073 17.7714 10.1197 17.0412 9.55262 16.2394C8.57467 16.1492 7.6485 16.0054 6.79554 15.8145ZM10.8627 7.67324C11.2365 7.65776 11.6161 7.64987 12.0003 7.64987C12.3845 7.64987 12.7641 7.65776 13.138 7.67324C12.7612 7.18096 12.3798 6.7248 12.0003 6.30922C11.6208 6.7248 11.2394 7.18096 10.8627 7.67324ZM9.55262 7.76031C10.1197 6.95849 10.7073 6.2283 11.2992 5.58509C9.62688 3.96221 8.07155 3.20226 7.20866 3.70046C6.34577 4.19865 6.22624 5.92558 6.79554 8.18527C7.6485 7.99432 8.57467 7.85054 9.55262 7.76031ZM13.8939 15.2797C14.2395 14.7728 14.5772 14.2366 14.9015 13.6749C15.2258 13.1131 15.5213 12.5526 15.7875 11.9999C15.5213 11.4471 15.2258 10.8866 14.9015 10.3249C14.5772 9.76311 14.2395 9.22694 13.8939 8.72005C13.2821 8.6742 12.649 8.64987 12.0003 8.64987C11.3517 8.64987 10.7185 8.6742 10.1067 8.72005C9.76112 9.22694 9.42347 9.76311 9.09914 10.3249C8.77481 10.8866 8.4793 11.4471 8.21312 11.9999C8.4793 12.5526 8.77481 13.1131 9.09914 13.6749C9.42347 14.2366 9.76112 14.7728 10.1067 15.2797C10.7185 15.3255 11.3517 15.3499 12.0003 15.3499C12.649 15.3499 13.2821 15.3255 13.8939 15.2797ZM15.1785 15.1484C15.7932 15.0683 16.3789 14.9661 16.9286 14.8452C16.7584 14.3087 16.5541 13.7504 16.3161 13.178C16.1426 13.5095 15.9596 13.8421 15.7675 14.1749C15.5754 14.5076 15.3788 14.8324 15.1785 15.1484ZM8.82218 8.85133C8.20747 8.93147 7.62174 9.03367 7.07208 9.15454C7.24223 9.691 7.44659 10.2494 7.68454 10.8218C7.85806 10.4903 8.04101 10.1576 8.23311 9.82487C8.42522 9.49212 8.62185 9.16736 8.82218 8.85133ZM7.07208 14.8452C7.62174 14.9661 8.20747 15.0683 8.82218 15.1484C8.62185 14.8324 8.42522 14.5076 8.23311 14.1749C8.04101 13.8421 7.85806 13.5095 7.68454 13.178C7.44659 13.7504 7.24223 14.3087 7.07208 14.8452ZM6.09439 14.6C6.35551 13.7659 6.69407 12.8919 7.10491 11.9999C6.69407 11.1078 6.35551 10.2339 6.09439 9.39969C3.85279 10.0365 2.41699 11.0035 2.41699 11.9999C2.41699 12.9962 3.85279 13.9632 6.09439 14.6ZM16.9286 9.15454C16.3789 9.03367 15.7932 8.93147 15.1785 8.85133C15.3788 9.16736 15.5754 9.49212 15.7675 9.82487C15.9596 10.1576 16.1426 10.4903 16.3161 10.8218C16.5541 10.2494 16.7584 9.691 16.9286 9.15454ZM17.9063 9.39969C17.6451 10.2339 17.3066 11.1078 16.8957 11.9999C17.3066 12.8919 17.6451 13.7659 17.9063 14.6C20.1479 13.9632 21.5837 12.9962 21.5837 11.9999C21.5837 11.0035 20.1479 10.0365 17.9063 9.39969ZM12.0003 13.879C10.9625 13.879 10.1212 13.0377 10.1212 11.9999C10.1212 10.962 10.9625 10.1207 12.0003 10.1207C13.0382 10.1207 13.8795 10.962 13.8795 11.9999C13.8795 13.0377 13.0382 13.879 12.0003 13.879Z"></path></svg>
            </a>
            </div>
          </div>
        </div>

       
        <div className="mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm mb-4 italic">
            &ldquo;Website diperbarui secara berkala setiap 60 hari&rdquo;
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-slate-400 text-xs font-medium">
            <span>&copy; 2025 Fauzan Aziman</span>
            <span className="hidden md:inline text-slate-700">•</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-300">
              Program Studi Sistem Informasi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
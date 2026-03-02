import { useState, useEffect } from "react"

const Navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() =>{
    const handleScroll = () => {
      if(window.scrollY > 150){
        setActive(true);
      }else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);
  
  return (
    <div className="navbar py-7 flex items-center justify-between">
        <div className="logo flex items-center">
            {/* Menggunakan scale agar logo membesar secara visual tanpa mendorong teks */}
            <div className="flex items-center justify-center w-10 h-10"> 
                <img 
                  src="/assets/favicon.ico" 
                  alt="Logo" 
                  className="w-30 h-30 max-w-none object-contain scale-[2] transform translate-y-1" 
                />
            </div>
            {/* Memberi margin kiri ekstra agar teks tidak tertutup logo yang membesar */}
            <h1 className="text-3xl font-bold rounded-md bg-cyan-700 text-white p-1 md:bg-transparent md:text-white ml-6">
              Portofolio
            </h1>
        </div>
      <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl md:bg-transparent rounded-bl-2xl transition-all md:transition-none z-40
          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
            <li><a href="#" className="sm:text-lg text-base font-medium rounded-md p-2 hover:bg-cyan-300 transition-colors duration-500">Home</a></li>
            <li><a href="#" className="sm:text-lg text-base font-medium rounded-md p-2 hover:bg-cyan-300 transition-colors duration-500">About</a></li>
            <li><a href="#" className="sm:text-lg text-base font-medium rounded-md p-2 hover:bg-cyan-300 transition-colors duration-500">Project</a></li>
            <li><a href="#" className="sm:text-lg text-base font-medium rounded-md p-2 hover:bg-cyan-300 transition-colors duration-500">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar
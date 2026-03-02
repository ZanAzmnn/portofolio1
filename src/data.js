import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

// data.js


export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Game1 from "/assets/game/game1.webp";
import Game2 from "/assets/game/game2.webp";
import Game3 from "/assets/game/game3.webp";
import Game4 from "/assets/game/game4.webp";

export const listGame = [
  {
    id: 1,
    gambar: Game1,
  },
  {
    id: 2,
    gambar: Game2,
  },
  {
    id: 3,
    gambar: Game3,
  },
  {
    id: 4,
    gambar: Game4,
  },
    
];

import Proyek0 from "/assets/proyek/proyek0.png";
import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyeks7 from "/assets/proyek/proyeks7.png";



export const listProyek = [
  {
    id: 0,
    gambar: Proyek0,
    nama: "Website Coding",
    desk: "Website Coding merupakan proyek website yang berisi informasi dan konten seputar dunia pemrograman, seperti pengenalan konsep dasar, contoh materi, serta tampilan edukatif yang ditujukan untuk pemula.",
    tools: ["HTML", "CSS", "Javascript", ],
    dad: "200",
  },
  {
    id: 1,
    gambar: Proyek1,
    nama: "About Coffee",
    desk: "Website cafe coffee yang menampilkan daftar menu, informasi cafe, serta konten edukasi seputar kopi untuk memberikan pengalaman informatif dan menarik bagi pengunjung.",
    tools: ["HTML", "CSS", "Javascript",],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyeks7,
    nama: "Capstone",
    desk: "Comming Soon",
    tools: ["Laravel", ],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek2,
    nama: "SI",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["React", "TailwindCSS"],
    dad: "400",
  },
  
  {
    id: 4,
    gambar:Proyek3,
    nama: "GGMU",
    desk: "GGMU merupakan proyek website yang menyajikan informasi seputar klub Manchester United, mulai dari profil klub, sejarah singkat, hingga konten visual yang menggambarkan identitas dan semangat klub.",
    tools: ["React", "TailwindCSS"],
    dad: "400",
  },
  
];



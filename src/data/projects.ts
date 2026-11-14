export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  image: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "keuangan-keluarga",
    title: "Keuangan Keluarga",
    description: "Family Finance Tracker",
    longDescription:
      "Aplikasi pencatatan keuangan keluarga berbasis web yang membantu mengelola pemasukan dan pengeluaran secara terstruktur. Dibangun dengan antarmuka yang intuitif dan mudah digunakan.",
    techStack: ["React", "JavaScript", "Vercel"],
    liveUrl: "https://keuangan-keluarga-opal.vercel.app/",
    repoUrl: "https://github.com/DimasWaldy/keuangan-keluarga",
    image: "/images/projects/keuangan-keluarga.svg",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "smartos-rw",
    title: "SmartOS RW",
    description: "Digital Neighborhood Management",
    longDescription:
      "Sistem informasi manajemen kas RT/RW digital yang mempermudah pencatatan iuran warga, laporan keuangan, dan administrasi lingkungan. Dibangun dengan Laravel untuk backend yang robust.",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    liveUrl: "https://smartos-rw.unique-monsters.my.id/",
    repoUrl: "https://github.com/DimasWaldy/kas-rt-laravel",
    image: "/images/projects/smartos-rw.svg",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

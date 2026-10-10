export const personalInfo = {
  name: "Bagus Setiyo Pambudi",
  role: "Full-Stack Engineer & IT Infrastructure",
  location: "Indonesia, ID",
  phone: "+6285722325331",
  email: "bagoessp40@gmail.com",
  linkedin: "https://linkedin.com/in/bagussetiyo",
  linkedinDisplay: "linkedin.com/in/bagussetiyo",
  avatar: "/images/profile.jpg",
  resume: "/Bagus Setiyo_CV.pdf",
  gdrivePortfolio: "https://drive.google.com/file/d/1AAjnssWIcbsbZGZfAu-hw9YHDwYttvWx/view", // Taruh link Google Drive portofolio Anda di sini
  summary:
    "Saya adalah seorang IT Enthusiast dengan minat pada infrastruktur sistem dan software engineering. Memiliki pengalaman dalam konfigurasi jaringan, administrasi server Linux/Windows, troubleshooting hardware/software, serta pemahaman dasar virtualisasi dan cloud computing. Selain itu, saya juga berpengalaman dalam pengembangan aplikasi web & mobile, integrasi API, dan manajemen database. Kombinasi kemampuan infrastruktur dan software engineering ini memungkinkan saya untuk berkontribusi pada stabilitas operasional data center sekaligus mendukung pengembangan solusi IT yang efisien dan terintegrasi.",
  coreFocus: [
    {
      title: "Infrastruktur & Server",
      desc: "Linux & Windows Server, VMware / Virtualisasi, konfigurasi jaringan, troubleshooting & data center stability.",
    },
    {
      title: "Full-Stack Engineering",
      desc: "Pengembangan sistem web & mobile, integrasi API, arsitektur database, dan otomasi backend.",
    },
    {
      title: "AI Biometrics & Riset",
      desc: "Implementasi sistem pengenalan wajah DeepFace & RetinaFace yang teruji dan terpublikasi secara ilmiah.",
    },
  ],
};

export const experiences = [
  {
    company: "Perum PERHUTANI",
    role: "Kontrak Full-Stack Engineer",
    period: "Juli 2026 - September 2026",
    type: "Kontrak",
    color: "lime",
    responsibilities: [
      "Merancang antarmuka pengguna frontend dan infrastruktur backend untuk alat Situational Judgment Test (SJT) yang baru diluncurkan.",
      "Melakukan perombakan secara menyeluruh terhadap antarmuka pengguna (UI) dashboard admin dan portal peserta guna mengoptimalkan alur pengguna serta memodernisasi pengalaman pengguna.",
      "Mengintegrasikan modul SJT baru dengan basis data penilaian inti yang sudah ada, memastikan aliran data yang lancar dan mekanisme penilaian otomatis yang akurat.",
      "Melakukan pengujian dan debugging yang ketat terhadap modul yang baru diterapkan serta antarmuka yang telah diperbarui untuk memastikan stabilitas sistem sebelum diluncurkan secara luas.",
    ],
  },
  {
    company: "Perum PERHUTANI",
    role: "Intern Full-Stack Engineer",
    period: "November 2025 - Mei 2026",
    type: "Internship",
    color: "lilac",
    responsibilities: [
      "Mengembangkan platform penilaian daring yang responsif untuk Assessment Center Perhutani, dengan fokus pada peningkatan aksesibilitas dan pengalaman pengguna.",
      "Merancang dan mengimplementasikan antarmuka pengguna yang sepenuhnya dapat diakses melalui desktop, tablet, dan perangkat seluler.",
      "Merestrukturisasi basis data untuk meningkatkan efisiensi sistem dan menghilangkan data peserta tes yang ganda.",
      "Mengembangkan fitur dasbor yang dipersonalisasi bagi peserta tes yang menampilkan jadwal tes, riwayat, kemajuan, dan hasil tes secara real time.",
    ],
  },
  {
    company: "PT TRASPAC Makmur Sejahtera",
    role: "Intern Full-Stack Engineer",
    period: "Agustus 2024 - Januari 2025",
    type: "Internship",
    color: "coral",
    responsibilities: [
      "Membangun sistem backend untuk aplikasi absensi berbasis pengenalan wajah menggunakan DeepFace, termasuk pemrosesan data biometrik, manajemen database, dan pengembangan API untuk integrasi.",
      "Merancang dan mengembangkan antarmuka pengguna yang responsif dan intuitif untuk sistem absensi, memungkinkan pengguna melakukan pendaftaran wajah dan verifikasi kehadiran dengan mudah.",
      "Menghubungkan komponen frontend dan backend dalam satu ekosistem terintegrasi, termasuk mengonfigurasi server, menerapkan otentikasi pengguna, dan mengoptimalkan performa keseluruhan sistem.",
    ],
  },
  {
    company: "PT. Mitra Informatika",
    role: "Intern UI/UX Design",
    period: "Januari 2024 - Juni 2024",
    type: "Internship",
    color: "mint",
    responsibilities: [
      "Berkolaborasi dengan tim pengembang dan Product Manager untuk mendesain antarmuka aplikasi mobile.",
      "Mengembangkan wireframe, mockup, dan prototipe interaktif menggunakan Figma.",
      "Membantu dalam pembuatan style guide dan dokumentasi desain untuk memastikan konsistensi di seluruh aplikasi.",
    ],
  },
];

export const projects = [
  {
    title: "Face Recognition Attendance App",
    category: "Mobile App",
    desc: "Aplikasi absensi mobile cerdas berbasis pengenalan wajah nirsentuh menggunakan DeepFace dan RetinaFace untuk verifikasi biometrik real-time dan pencegahan time fraud.",
    tags: ["DeepFace", "RetinaFace", "Mobile App", "Biometrics", "API Integration"],
  },
  {
    title: "Sistem Informasi Pelayanan Kesehatan",
    category: "Web App",
    desc: "Sistem web komprehensif untuk tata kelola registrasi pasien, penjadwalan antrean medis, dan rekam data kesehatan terintegrasi berbasis role admin dan dokter.",
    tags: ["Web App", "Database Management", "REST API", "Full-Stack"],
  },
  {
    title: "Mood Tracker",
    category: "UI / UX Designer",
    desc: "Perancangan pengalaman dan antarmuka aplikasi pelacak emosi harian, berfokus pada alur input intuitif, visualisasi statistik mood, dan micro-interactions.",
    tags: ["UI/UX Design", "Figma", "User Journey", "Wireframing", "Design System"],
  },
  {
    title: "Shoes Shop App",
    category: "Mobile App",
    desc: "Aplikasi mobile e-commerce retail sepatu dengan katalog interaktif, filter kategori produk, keranjang belanja terpadu, dan antarmuka checkout yang ringkas.",
    tags: ["Mobile App", "Frontend", "E-Commerce", "Responsive UI"],
  },
];

export const publication = {
  title: "SISTEM ABSENSI BERBASIS PENGENALAN WAJAH MENGGUNAKAN DEEPFACE",
  publisher: "Indonesian Society of Applied Science (ISAS)",
  date: "27 November 2025",
  journal: "Jurnal Sentrinov",
  link: "https://proceeding.isas.or.id/index.php/sentrinov/article/view/1702",
  abstract:
    "Manual attendance systems frequently encounter issues such as time fraud, human error, and inefficiencies, particularly in organizations adopting hybrid or remote work models. To overcome these challenges, a facial recognition based attendance system was designed and implemented, offering a secure, automated, and contactless alternative to conventional methods. The system leverages state of the art facial recognition technologies, including DeepFace for face verification, RetinaFace for face detection, and FaceNet512 for feature extraction and comparison.",
};

export const education = {
  institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
  major: "Teknik Informatika",
  period: "2021 - 2025",
  achievements: [
    "Graphic Designer di HIMIT (2022 - 2024): Mengelola visual publikasi, membuat 40+ desain media sosial, 20+ poster event di Figma & Adobe Illustrator, serta merumuskan brand guidelines himpunan.",
    "Juara 1 Best UI Design di Pensfest 2023.",
    "Penulis Paper Ilmiah: Makalah face recognition DeepFace terbit di Jurnal Sentrinov (ISAS) 2025.",
  ],
};

export const skills = {
  technical: [
    "Network Configuration",
    "Server Administration (Linux, Windows Server)",
    "Virtualization (VMware)",
    "Monitoring & Troubleshooting",
    "Hardware & Infrastructure Maintenance",
    "Hardware Installation",
    "Database Management",
    "Mobile App Development",
    "Web Development",
    "User Experience & Interface Design (UX/UI)",
  ],
  languages: [
    { name: "Indonesia", level: "Fluent" },
    { name: "English", level: "Intermediate" },
  ],
};

export const certifications = [
  { name: "Google IT Support", issuer: "Coursera" },
  { name: "Asisten Pengembang Web", issuer: "BNSP" },
  { name: "Networking Basics", issuer: "Cisco" },
  { name: "Code Generation and Optimization Using IBM Granite", issuer: "IBM" },
  { name: "JavaScript (Basic)", issuer: "HackerRank" },
  { name: "Computer Hardware Basics", issuer: "Cisco" },
  { name: "Belajar Dasar AI", issuer: "Dicoding" },
  { name: "Belajar Dasar Data Science", issuer: "Dicoding" },
  { name: "Python (Basic)", issuer: "HackerRank" },
  { name: "Belajar Dasar Structured Query Language (SQL)", issuer: "Dicoding" },
];

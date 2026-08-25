import { PricingPlan, Testimonial, FAQItem, FeatureHighlight, StudentItem } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'trial',
    name: 'Trial 7 Hari',
    price: 'Gratis',
    period: 'selama 7 hari',
    description: 'Coba gratis tanpa komitmen untuk merasakan kemudahan mencatat KBM dan presensi.',
    features: [
      'Akses penuh semua fitur jurnal & absensi',
      'Setup kelas, siswa & jadwal tanpa batas',
      'Sistem poin keaktifan siswa (0-7 poin)',
      'Akses Papan Poin online untuk proyektor',
      'Rekap bulanan otomatis siap cetak / PDF',
      'Export data ke format CSV / Excel',
    ],
    ctaText: 'Mulai Uji Coba Gratis',
    ctaLink: '#demo-interaktif',
    isPopular: false,
    highlightNote: 'Tanpa perlu kartu kredit',
  },
  {
    id: 'bulanan',
    name: 'Paket Bulanan',
    price: 'Rp10.000',
    period: '/ bulan',
    description: 'Sangat terjangkau dan fleksibel, cocok untuk guru yang ingin mencoba per bulan.',
    features: [
      'Semua fitur pada masa trial',
      'Pembaruan berkala tanpa biaya tambahan',
      'Akses multi-perangkat (HP, Tablet, Laptop)',
      'Backup cloud aman & tempat sampah pemulihan',
      'Akses grup komunitas Telegram guru JMO',
      'Bantuan teknis langsung dari pengembang',
    ],
    ctaText: 'Pilih Paket Bulanan',
    ctaLink: 'https://dimasbn.myr.id/membership/jurnal-mengajar-online-paket-bulanan',
    isPopular: false,
    highlightNote: 'Bisa diperpanjang kapan saja',
  },
  {
    id: 'tahunan',
    name: 'Paket Tahunan',
    badge: '★ Paling Hemat & Favorit Guru',
    price: 'Rp90.000',
    originalPrice: 'Rp120.000',
    period: '/ tahun (12 bulan)',
    description: 'Hanya setara Rp7.500/bulan! Tenang mengajar selama 1 tahun ajaran penuh.',
    features: [
      'Hemat 25% dibanding bayar bulanan',
      'Masa aktif 365 hari penuh tanpa repot',
      'Fitur Papan Poin Proyektor tanpa batas kelas',
      'Template rekap format standar dinas/sekolah',
      'Prioritas bantuan teknis & konsultasi setup',
      'Akses awal ke fitur-fitur versi terbaru',
    ],
    ctaText: 'Langganan 1 Tahun Sekarang',
    ctaLink: 'https://dimasbn.myr.id/membership/jurnal-mengajar-online-paket-tahunan',
    isPopular: true,
    highlightNote: 'Pilihan 87% guru di Indonesia',
  },
  {
    id: 'lifetime',
    name: 'Paket Lifetime',
    badge: 'Sekali Bayar Selamanya',
    price: 'Rp195.000',
    period: 'sekali bayar seumur hidup',
    description: 'Investasi terbaik sekali untuk karier mengajar Anda selamanya tanpa langganan.',
    features: [
      'Akses seumur hidup (Lifetime Access)',
      'Tidak ada biaya perpanjangan tahunan lagi',
      'Semua pembaruan fitur di masa depan GRATIS',
      'Dukungan VIP & fast response dari pembuat',
      'Bebas ekspor data dan cetak laporan kapan saja',
      'Akses grup eksklusif guru pengguna Lifetime',
    ],
    ctaText: 'Beli Paket Lifetime',
    ctaLink: 'https://dimasbn.myr.id/membership/jurnal-mengajar-online-lifetime-sekali-bayar',
    isPopular: false,
    highlightNote: 'Investasi sekali tanpa beban',
  },
];

export const INITIAL_STUDENTS_DEMO: StudentItem[] = [
  { id: '1', no: 1, name: 'Aditya Pratama', status: 'Hadir', points: 4, note: '' },
  { id: '2', no: 2, name: 'Anisa Rahmawati', status: 'Hadir', points: 5, note: '' },
  { id: '3', no: 3, name: 'Budi Santoso', status: 'Hadir', points: 3, note: '' },
  { id: '4', no: 4, name: 'Citra Dewi Lestari', status: 'Izin', points: 3, note: 'Lomba OSN Matematika' },
  { id: '5', no: 5, name: 'Dimas Bagus', status: 'Hadir', points: 6, note: '' },
  { id: '6', no: 6, name: 'Eka Nurjanah', status: 'Sakit', points: 3, note: 'Surat dokter terlampir' },
  { id: '7', no: 7, name: 'Fajar Hidayat', status: 'Hadir', points: 3, note: '' },
  { id: '8', no: 8, name: 'Gita Maharani', status: 'Dispensasi', points: 3, note: 'Petugas Upacara' },
];

export const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
  {
    id: 'speed-entry',
    title: 'Isi Jurnal Cepat Kurang dari 1 Menit',
    tagline: 'Tanpa Mengetik Berulang Kali',
    description: 'Pilih kelas, tanggal, dan jam ke- secara otomatis dari jadwal harian. Ada tombol "Salin dari jurnal terakhir" untuk kelas paralel atau materi lanjutan.',
    points: [
      'Saran jadwal otomatis sesuai hari KBM berjalan',
      'Jam ke- fleksibel (misal jam 1-3 atau 7-8)',
      'Mata pelajaran otomatis terisi sesuai database kelas',
      'Tombol 📋 Salin Materi & ⤢ Perbesar kotak catatan'
    ],
    icon: 'BookOpen',
    badge: 'KBM Harian'
  },
  {
    id: 'attendance-points',
    title: 'Presensi Siswa + Sistem Poin Keaktifan',
    tagline: '5 Status Kehadiran & Gamifikasi Kelas',
    description: 'Tandai Hadir, Izin, Sakit, Dispensasi, atau Alpa dengan 1 ketukan. Lengkap dengan sistem penilaian poin (0 hingga 7) untuk mengapresiasi siswa aktif.',
    points: [
      'Pilihan warna jelas: Hijau, Emas, Bata, Slate, Merah',
      'Kotak keterangan otomatis muncul jika siswa izin/sakit',
      'Stepper poin interaktif untuk apresiasi keaktifan siswa di kelas',
      'Default poin 3, dapat dinaikkan atau diturunkan seketika'
    ],
    icon: 'CheckSquare',
    badge: 'Presensi & Poin'
  },
  {
    id: 'projector-scoreboard',
    title: 'Papan Poin Live untuk Proyektor Kelas',
    tagline: 'Bikin Suasana Kelas Kompetitif & Menyenangkan',
    description: 'Setiap kelas memiliki link publik Papan Poin khusus. Buka di layar proyektor atau smart TV depan kelas — nilai dan ranking otomatis terupdate seketika.',
    points: [
      'Siswa bisa melihat poin mereka secara transparan',
      'Tanpa perlu siswa menginstall aplikasi atau login',
      'Peringkat otomatis terurut dari yang teraktif',
      'Meningkatkan partisipasi belajar dan disiplin kelas'
    ],
    icon: 'Trophy',
    badge: 'Fitur Unggulan'
  },
  {
    id: 'smart-setup',
    title: 'Setup Kilat: Paste 40 Siswa Sekaligus',
    tagline: 'Hemat Waktu di Awal Semester',
    description: 'Tidak perlu mengetik nama siswa satu persatu. Cukup copy daftar nama dari Excel, Word, atau Dapodik, lalu paste di kotak input massal.',
    points: [
      'Otomatis mendeteksi nomor presensi & nama',
      'Setup kelas & mata pelajaran dalam hitungan detik',
      'Jadwal mingguan otomatis terintegrasi ke form pengisian',
      'Bebas tambah, edit, atau sesuaikan kapan saja'
    ],
    icon: 'Users',
    badge: 'Setup Mudah'
  },
  {
    id: 'recap-print',
    title: 'Rekap Bulanan Otomatis Siap Cetak & PDF',
    tagline: 'Laporan Administrasi Jadi 1 Detik',
    description: 'Lupakan kalkulator untuk menghitung persentase kehadiran bulanan. JMO menghitung jumlah H/I/S/D/A, % kehadiran, dan rata-rata poin secara otomatis.',
    points: [
      'Tabel rekap rapi berstandar administrasi sekolah',
      'Tombol Cetak langsung yang diformat rapi untuk kertas A4 / F4',
      'Simpan langsung sebagai file PDF',
      'Export semua data ke format CSV / Excel sebagai backup'
    ],
    icon: 'Printer',
    badge: 'Laporan Otomatis'
  },
  {
    id: 'trash-recovery',
    title: 'Riwayat Lengkap + Sistem Sampah Pemulihan',
    tagline: 'Data Selalu Aman, Bebas Panik',
    description: 'Semua jurnal tersimpan rapi di riwayat dan dapat difilter per kelas atau rentang tanggal. Jurnal yang terhapus masuk ke folder Sampah dan dapat dipulihkan.',
    points: [
      'Filter riwayat cepat berdasarkan nama kelas & tanggal',
      'Fungsi edit langsung jika ada salah input data absensi',
      'Fitur Trash / Sampah mencegah kehilangan data tak sengaja',
      'Notifikasi pengingat jika ada jam mengajar yang terlewat'
    ],
    icon: 'History',
    badge: 'Keamanan Data'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Siti Rahmawati, S.Pd.',
    role: 'Guru Matematika',
    school: 'SMAN 1 Garut',
    location: 'Jawa Barat',
    avatarText: 'SR',
    rating: 5,
    highlight: 'Rekap bulanan yang biasanya butuh 2 jam, sekarang selesai 5 detik!',
    content: 'Dulu setiap akhir bulan pusing menghitung absensi 6 kelas paralel di buku tulis tebal. Sekarang dengan JMO, tinggal pilih bulan langsung keluar tabel persentase kehadiran dan rata-rata poin. Luar biasa membantu administrasi guru!'
  },
  {
    id: 't2',
    name: 'Bambang Sudiro, M.Pd.',
    role: 'Guru Bahasa Indonesia',
    school: 'SMP Negeri 3 Surabaya',
    location: 'Jawa Timur',
    avatarText: 'BS',
    rating: 5,
    highlight: 'Fitur Papan Poin di proyektor membuat anak-anak super antusias menjawab!',
    content: 'Papan Poin kelas itu magnet luar biasa. Setiap kali anak bertanya atau presentasi, saya tambahkan poinnya dan proyektor langsung update. Suasana kelas jadi hidup dan mereka berebut aktif. Tampilan kertasnya juga sangat elegan.'
  },
  {
    id: 't3',
    name: 'Ahmad Fauzi, S.Kom.',
    role: 'Guru Produktif RPL',
    school: 'SMKN 2 Bandung',
    location: 'Jawa Barat',
    avatarText: 'AF',
    rating: 5,
    highlight: 'Bisa dibuka dari HP di kelas, lanjut cek di laptop saat di ruang guru.',
    content: 'Sangat responsif dan ringan di HP Android saya. Waktu pergantian jam tinggal klik salin materi terakhir, presensi 30 detik selesai. Tidak khawatir buku jurnal ketinggalan di meja rumah lagi.'
  },
  {
    id: 't4',
    name: 'Dewi Anggraeni, S.Pd.',
    role: 'Guru IPA & Wali Kelas',
    school: 'SMP Swasta Teladan',
    location: 'Yogyakarta',
    avatarText: 'DA',
    rating: 5,
    highlight: 'Setup siswanya praktis banget, tinggal copy-paste daftar nama dari Excel.',
    content: 'Awalnya saya kira bakal ribet input 150 siswa. Ternyata ada fitur paste massal, sekali klik langsung rapi ada nomor presensinya. Sangat direkomendasikan untuk semua rekan guru di Indonesia.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'penggunaan',
    question: 'Apakah aplikasi JMO bisa digunakan di HP dan Laptop sekaligus?',
    answer: 'Ya! JMO adalah aplikasi web modern berbasis cloud yang sangat ringan. Anda bisa membukanya melalui browser di HP Android, iPhone, iPad/Tablet, maupun Laptop/PC dengan akun yang sama tanpa perlu instalasi rumit.'
  },
  {
    id: 'faq-2',
    category: 'fitur',
    question: 'Bagaimana cara menampilkan Papan Poin di proyektor kelas?',
    answer: 'Di menu Setup Kelas, terdapat tombol "🚀 Papan Poin". Anda cukup menyalin link unik tersebut dan membukanya di browser laptop yang terhubung ke proyektor. Halaman tersebut khusus menampilkan leaderboard peringkat poin siswa tanpa tombol edit, sehingga aman dilihat seluruh siswa.'
  },
  {
    id: 'faq-3',
    category: 'fitur',
    question: 'Apakah saya harus mengetik nama siswa satu persatu?',
    answer: 'Tidak perlu! JMO memiliki fitur "📋 Tambah Banyak Sekaligus". Anda cukup copy daftar nama dari file Excel atau Word sekolah Anda, lalu paste ke kotak yang disediakan. Nomor presensi akan terdeteksi atau diurutkan otomatis.'
  },
  {
    id: 'faq-4',
    category: 'penggunaan',
    question: 'Bagaimana jika saya salah input atau tidak sengaja menghapus jurnal?',
    answer: 'JMO dilengkapi fitur Edit Jurnal lengkap serta fitur Sampah (Trash Recovery). Jurnal yang terhapus tidak langsung hilang permanen, melainkan masuk ke menu Sampah dan dapat Anda pulihkan kapan saja dengan satu tombol.'
  },
  {
    id: 'faq-5',
    category: 'teknis',
    question: 'Apakah data jurnal saya bisa diekspor ke Excel untuk arsip?',
    answer: 'Bisa! Di tab Riwayat terdapat tombol "📥 Export Semua Data (Excel / CSV)". File cadangan akan langsung terunduh berisi seluruh riwayat tanggal, kelas, materi, presensi, keterangan, dan perolehan poin siswa.'
  },
  {
    id: 'faq-6',
    category: 'pembelian',
    question: 'Bagaimana metode pembayaran dan proses aktivasi akun?',
    answer: 'Pembayaran dapat dilakukan dengan mudah melalui QRIS (GoPay, OVO, Dana, ShopeePay, BCA/Bank transfer). Setelah pembayaran terkonfirmasi di platform dimasbn.myr.id, akun Anda akan otomatis aktif sesuai paket yang dipilih.'
  },
  {
    id: 'faq-7',
    category: 'pembelian',
    question: 'Apa perbedaan Paket Tahunan dan Lifetime?',
    answer: 'Paket Tahunan berlaku selama 1 tahun ajaran (365 hari) seharga Rp90.000 (hanya Rp7.500/bulan). Sedangkan Paket Lifetime seharga Rp195.000 adalah pembayaran satu kali untuk akses selamanya tanpa biaya perpanjangan sama sekali.'
  }
];

export const COMPARISON_DATA = [
  {
    category: 'Pencatatan Materi',
    paper: 'Tulis tangan berulang-ulang untuk kelas paralel, pegal dan makan waktu',
    jmo: 'Cukup 1-klik "Salin dari jurnal terakhir", tinggal sesuaikan sedikit',
    isWinner: true
  },
  {
    category: 'Presensi & Rekap Bulanan',
    paper: 'Hitung manual satu persatu per siswa, rentan salah hitung & butuh berjam-jam',
    jmo: 'Rekap otomatis terhitung 1 detik, lengkap persentase kehadiran',
    isWinner: true
  },
  {
    category: 'Motivasi & Keaktifan Siswa',
    paper: 'Hanya dicatat di kertas guru, siswa tidak tahu poin atau evaluasi diri',
    jmo: 'Live Papan Poin di proyektor kelas, memicu semangat kompetisi positif',
    isWinner: true
  },
  {
    category: 'Portabilitas & Aksesibilitas',
    paper: 'Buku tebal rawan tertinggal, robek, basah, atau terselip di rumah',
    jmo: 'Aman di cloud, bisa diakses dari HP di saku kapan saja di mana saja',
    isWinner: true
  },
  {
    category: 'Laporan & Akreditasi',
    paper: 'Cari berkas fisik berlembar-lembar, sering ada halaman hilang',
    jmo: 'Bisa langsung Cetak PDF rapi atau Ekspor seluruh data ke Excel / CSV',
    isWinner: true
  },
  {
    category: 'Keamanan Data & Kesalahan',
    paper: 'Salah tulis dicoret tipe-x, jika buku hilang data musnah',
    jmo: 'Bisa diedit sewaktu-waktu, ada fitur Sampah untuk pemulihan data',
    isWinner: true
  }
];

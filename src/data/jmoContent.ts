import { PricingPlan, Testimonial, FAQItem, FeatureHighlight, StudentItem } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'trial',
    name: 'Trial 7 Hari',
    price: 'Gratis',
    period: 'selama 7 hari',
    description: 'Coba gratis tanpa komitmen, untuk merasakan kemudahan mencatat Materi KBM dan Presensi.',
    features: [
      'Akses penuh semua fitur Jurnal Mengajar Online',
      'Kelola Kelas, Siswa, dan Jadwal, Tanpa Batas',
      'Sistem Poin Keaktifan Siswa (0-7 poin)',
      'Akses Papan Poin online — Proyektor, dan HP',
      'Rekap Bulanan Otomatis, Siap Cetak',
      'Export Data ke format Excel / PDF',
    ],
    ctaText: 'Mulai Uji Coba Gratis',
    ctaLink: 'https://member.jurnalmengajar.web.id/',
    isPopular: false,
    highlightNote: 'Daftar dulu, Langsung pakai',
  },
  {
    id: 'bulanan',
    name: 'Paket Bulanan',
    price: 'Rp20.000',
    originalPrice: 'Rp40.000',
    period: '/ bulan',
    description: 'Sangat terjangkau dan fleksibel, cocok untuk guru yang ingin mencoba per bulan.',
    features: [
      'Semua Fitur pada masa Trial',
      'Akses Multi-perangkat (HP, Tablet, Laptop, dan PC)',
      'Backup Cloud aman, dan Fitur Pemulihan',
      'Akses Grup Komunitas Telegram JMO',
      'Bantuan teknis dari pengembang di Grup Telegram',
    ],
    ctaText: 'Pilih Paket Bulanan',
    ctaLink: 'https://dimasbn.myr.id/membership/jurnal-mengajar-online-paket-bulanan',
    isPopular: false,
    highlightNote: 'Bisa diperpanjang kapan saja',
  },
  {
    id: 'semester',
    name: 'Paket Semester',
    price: 'Rp100.000',
    originalPrice: 'Rp200.000',
    period: '/ semester (6 bulan)',
    description: 'Hanya setara Rp16.700/bulan. Pas untuk 1 semester penuh tanpa mikir perpanjangan tiap bulan.',
    features: [
      'Semua Fitur Paket Bulanan',
      'Pembaruan Berkala tanpa biaya tambahan',
      'Masa aktif 6 bulan penuh, sekali bayar untuk 1 semester',
      'Fitur Papan Poin Live tanpa batas kelas',
      'Template rekap format standar sekolah',
      'Prioritas bantuan teknis di Grup Telegram',
    ],
    ctaText: 'Pilih Paket Semester',
    ctaLink: 'https://dimasbn.myr.id/membership/jurnal-mengajar-online-paket-semester',
    isPopular: false,
    highlightNote: 'Hemat 17% dari harga Bulanan',
  },
  {
    id: 'tahunan',
    name: 'Paket Tahunan',
    badge: 'Paling Praktis & Favorit Guru',
    price: 'Rp200.000',
    originalPrice: 'Rp400.000',
    period: '/ tahun (12 bulan)',
    description: 'Hemat 17% dibanding Paket Bulanan juga — bedanya, cukup 1x bayar untuk 1 Tahun Ajaran penuh.',
    features: [
      'Semua Fitur Paket Semester',
      'Pembaruan Berkala tanpa biaya tambahan',
      'Masa aktif 365 hari penuh, tanpa repot perpanjangan',
      'Template rekap format standar sekolah',
      'Prioritas bantuan teknis di Grup Telegram',
      'Bisa ikut Program Partner JMO (komisi referral)',
    ],
    ctaText: 'Langganan 1 Tahun Sekarang',
    ctaLink: 'https://dimasbn.myr.id/membership/jurnal-mengajar-online-paket-tahunan',
    isPopular: true,
    highlightNote: '1 tahun ngajar, tanpa ribet perpanjangan',
  },
];

export const INITIAL_STUDENTS_DEMO: StudentItem[] = [
  { id: '1', no: 1, name: 'Adnan Protama', status: 'Hadir', points: 4, note: '' },
  { id: '2', no: 2, name: 'Heydar Hemdall', status: 'Hadir', points: 5, note: '' },
  { id: '3', no: 3, name: 'Budi Sanjura', status: 'Hadir', points: 3, note: '' },
  { id: '4', no: 4, name: 'Citra Lestari', status: 'Izin', points: 3, note: 'Lomba OSN Matematika' },
  { id: '5', no: 5, name: 'Dante Akbar', status: 'Hadir', points: 6, note: '' },
  { id: '6', no: 6, name: 'Eka Nurjanah', status: 'Sakit', points: 3, note: 'Surat dokter terlampir' },
  { id: '7', no: 7, name: 'Fajar Hidayat', status: 'Hadir', points: 3, note: '' },
  { id: '8', no: 8, name: 'Gita Maharani', status: 'Dispensasi', points: 3, note: 'Petugas Upacara' },
];

export const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
  {
    id: 'speed-entry',
    title: 'Isi Jurnal Cepat, Kurang dari 2 Menit',
    tagline: 'Tanpa Bawa Buku Jurnal Tradisional',
    description: 'Pilih kelas, dan jam ke-, (yang sudah di-setup sebelumnya) secara otomatis. Ada tombol "Salin dari jurnal terakhir" untuk kelas paralel atau materi lanjutan.',
    points: [
      'Saran jadwal otomatis sesuai hari KBM berjalan',
      'Jam ke- fleksibel (misal jam 1-3 atau 7-8)',
      'Mata pelajaran otomatis terisi sesuai database kelas',
      'Tombol 📋 Salin Materi & ⤢ Perbesar kotak catatan'
    ],
    icon: 'BookOpen',
    badge: 'Isi KBM Harian'
  },
  {
    id: 'attendance-points',
    title: 'Presensi Siswa + Sistem Poin Keaktifan',
    tagline: '5 Status Kehadiran & Gamifikasi Kelas',
    description: 'Tandai Hadir, Izin, Sakit, Dispensasi, atau Alpa dengan 1 klik. Lengkap dengan sistem penilaian poin (0 hingga 7) untuk mengapresiasi siswa aktif.',
    points: [
      'Pilihan warna jelas: Hijau, Emas, Bata, Slate, Merah',
      'Kotak keterangan otomatis muncul jika siswa izin/sakit/dispensasi/alpa',
      'Stepper poin interaktif untuk apresiasi keaktifan siswa di kelas',
      'Default poin 3, dapat dinaikkan atau diturunkan seketika'
    ],
    icon: 'CheckSquare',
    badge: 'Presensi & Poin'
  },
  {
    id: 'projector-scoreboard',
    title: 'Papan Poin Live untuk Indikator Kelas',
    tagline: 'Bikin Suasana Kelas Kompetitif & Menyenangkan',
    description: 'Setiap kelas memiliki link publik Papan Poin khusus — bisa dibuka di layar Proyektor atau Smart TV depan kelas untuk ditonton bersama, atau langsung dari HP masing-masing siswa maupun guru. Nilai dan ranking otomatis terupdate seketika.',
    points: [
      'Bisa dibuka bersamaan di proyektor, smart TV, maupun HP siswa & guru',
      'Tanpa perlu siswa menginstall aplikasi atau login',
      'Peringkat otomatis terurut dari yang teraktif atau tertinggi',
      'Memantau dan Meningkatkan partisipasi belajar dan disiplin kelas'
    ],
    icon: 'Trophy',
    badge: 'Fitur Pembeda'
  },
  {
    id: 'smart-setup',
    title: 'Setup Kilat: Paste 36 Siswa Sekaligus',
    tagline: 'Hemat Waktu di Awal Semester',
    description: 'Tidak perlu mengetik nama siswa satu persatu. Cukup copy daftar nama dari Excel, Word, atau Dapodik, lalu paste di kotak input massal.',
    points: [
      'Otomatis mendeteksi nomor presensi & nama',
      'Setup kelas & mata pelajaran dalam hitungan detik',
      'Jadwal harian otomatis terintegrasi ke form pengisian',
      'Bebas tambah, edit, atau sesuaikan kapan saja'
    ],
    icon: 'Users',
    badge: 'Setup Mudah'
  },
  {
    id: 'recap-print',
    title: 'Rekap Bulanan Otomatis Siap Cetak',
    tagline: 'Laporan Administrasi Siap dalam 10 Detik',
    description: 'Lupakan kalkulator untuk menghitung persentase kehadiran bulanan. JMO menghitung jumlah H/I/S/D/A, % kehadiran, dan rata-rata poin secara otomatis.',
    points: [
      'Tabel rekap rapi berstandar administrasi sekolah',
      'Tombol Cetak langsung yang diformat rapi untuk kertas A4 / F4',
      'Simpan langsung sebagai file PDF',
      'Export semua data ke format Excel sebagai backup'
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
    role: 'Guru Matematika',
    location: 'Jawa Barat',
   name: 'Guru Matematika',
   school: '',
   avatarText: 'GM',
    rating: 5,
    highlight: 'Rekap bulanan yang biasanya butuh 2 jam, sekarang selesai 5 detik!',
   content: 'Guru dengan 6 kelas paralel yang tadinya menghitung absensi manual di buku tulis kini cukup pilih bulan di JMO — tabel persentase kehadiran dan rata-rata poin langsung terhitung otomatis.'
  },
  {
    id: 't2',
    role: 'Guru Bahasa Indonesia',
    location: 'Jawa Timur',
   name: 'Guru Bahasa Indonesia',
   school: '',
   avatarText: 'GB',
    rating: 5,
    highlight: 'Fitur Papan Poin di proyektor membuat anak-anak super antusias menjawab!',
   content: 'Papan Poin yang tampil di proyektor kelas jadi pemicu suasana kompetitif yang sehat — setiap kali siswa aktif bertanya atau presentasi, poinnya langsung diperbarui dan terlihat semua orang.'
  },
  {
    id: 't3',
    role: 'Guru Produktif RPL',
    location: 'Jawa Barat',
   name: 'Guru Produktif RPL',
   school: '',
   avatarText: 'GP',
    rating: 5,
    highlight: 'Bisa dibuka dari HP di kelas, lanjut cek di laptop saat di ruang guru.',
   content: 'Ringan dibuka dari HP Android di kelas. Saat pergantian jam, tinggal klik salin materi terakhir dan presensi selesai dalam hitungan detik — tidak perlu khawatir buku jurnal tertinggal di rumah.'
  },
  {
    id: 't4',
    role: 'Guru IPA & Wali Kelas',
    location: 'Yogyakarta',
   name: 'Guru IPA & Wali Kelas',
   school: '',
   avatarText: 'GI',
    rating: 5,
    highlight: 'Setup siswanya praktis banget, tinggal copy-paste daftar nama dari Excel.',
   content: 'Input data ratusan siswa yang tadinya dikira akan ribet, ternyata bisa lewat fitur paste massal — sekali tempel dari Excel, nomor presensi langsung rapi terurut otomatis.'
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
    answer: 'Di menu Setup Kelas, terdapat tombol "🚀 Papan Poin". Anda cukup menyalin link unik tersebut dan membukanya di laptop yang terhubung ke proyektor/smart TV, atau langsung dari browser HP siswa maupun guru. Halaman tersebut khusus menampilkan leaderboard peringkat poin siswa tanpa tombol edit, sehingga aman dilihat seluruh siswa.'
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
    answer: 'Bisa! Di tab Riwayat terdapat tombol "📥 Export Semua Data (Excel)". File cadangan akan langsung terunduh berisi seluruh riwayat tanggal, kelas, materi, presensi, keterangan, dan perolehan poin siswa.'
  },
  {
    id: 'faq-6',
    category: 'pembelian',
    question: 'Bagaimana metode pembayaran dan proses aktivasi akun?',
    answer: 'Pembayaran dapat dilakukan dengan mudah melalui QRIS (GoPay, OVO, Dana, ShopeePay, BCA/Bank transfer) di platform dimasbn.myr.id. Pastikan Anda sudah mendaftar akun di member.jurnalmengajar.web.id dan menggunakan EMAIL YANG SAMA saat membayar — akun Anda akan otomatis aktif dalam beberapa detik setelah pembayaran berhasil, tanpa perlu menunggu konfirmasi manual. Jika lebih dari 10 menit akun belum aktif, silakan hubungi kami di Grup Telegram resmi JMO.'
  },
  {
    id: 'faq-7',
    category: 'pembelian',
    question: 'Apa perbedaan Paket Semester dan Tahunan?',
    answer: 'Paket Semester berlaku 6 bulan seharga Rp100.000, cocok mengikuti kalender semester sekolah. Paket Tahunan berlaku 1 tahun ajaran penuh (365 hari) seharga Rp200.000 — sekali bayar untuk 2 semester sekaligus, plus bisa ikut Program Partner JMO untuk dapat komisi referral.'
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
    jmo: 'Aman di cloud, bisa diakses dari HP di saku, kapan saja, di mana saja',
    isWinner: true
  },
  {
    category: 'Laporan & Akreditasi',
    paper: 'Cari berkas fisik berlembar-lembar, sering ada halaman hilang',
    jmo: 'Bisa langsung Cetak PDF rapi atau Ekspor seluruh data ke Excel',
    isWinner: true
  },
  {
    category: 'Keamanan Data & Kesalahan',
    paper: 'Salah tulis dicoret tipe-x, jika buku hilang data musnah',
    jmo: 'Bisa diedit sewaktu-waktu, ada fitur Sampah untuk pemulihan data',
    isWinner: true
  }
];

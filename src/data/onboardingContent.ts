// Konten Halaman Onboarding ("Simpel" & "Detail"), sumber: dokumen
// JMO - Model Simpel.md & JMO - Model Terperinci.md.
// Distrukturkan sebagai data supaya konsisten dgn pola jmoContent.ts
// (bukan markdown mentah), tanpa perlu dependency markdown-parser baru.

export interface SimpleFeatureItem {
  title: string;
  desc: string;
}

export interface DetailSection {
  number: string;
  title: string;
  points: string[];
}

export const ONBOARDING_SIMPLE = {
  intro: {
    whatTitle: 'JMO itu apa?',
    whatBody:
      'Aplikasi web untuk guru yang capek nulis jurnal mengajar manual di kertas atau Excel yang berantakan. Semua — absensi, poin sikap, nilai, sampai rekap bulanan — diisi dan disimpan dari HP atau laptop, otomatis tersusun rapi tiap saat dibutuhkan.',
    whoTitle: 'Untuk siapa?',
    whoBody:
      'Guru mata pelajaran apa pun, dari SD sampai SMA, yang tiap hari harus mengisi jurnal kelas dan sering kehabisan waktu untuk itu.',
  },
  features: [
    {
      title: 'Isi jurnal harian',
      desc: 'Tanggal, kelas, jam ke, mapel, materi, absensi tiap siswa (Hadir/Izin/Sakit/Dispensasi/Alpa), sampai poin sikap. Tinggal isi, sisanya otomatis kesimpan.',
    },
    {
      title: 'Tidak takut internet putus',
      desc: 'Kalau sinyal hilang di tengah mengisi, draft otomatis tersimpan di HP. Begitu online lagi, tinggal lanjut.',
    },
    {
      title: 'Riwayat & rekap otomatis',
      desc: 'Semua jurnal yang sudah diisi bisa dicari, difilter per kelas atau semester, dicetak, atau langsung diekspor ke Excel.',
    },
    {
      title: 'Nilai siswa jadi satu tempat',
      desc: 'Input nilai per kelas sekaligus, atur sendiri batas KKM, sampai bikin rumus nilai rapor sendiri (mis. rata-rata UH + UTS + UAS dengan bobot tertentu).',
    },
    {
      title: 'Statistik otomatis',
      desc: 'Mau tahu siswa mana yang paling sering absen, atau kelas mana yang paling rajin bertemu? Tinggal lihat, tanpa hitung manual.',
    },
    {
      title: 'Bisa diisi pakai suara',
      desc: 'Capek mengetik, tinggal bicara.',
    },
    {
      title: 'Terpasang seperti aplikasi HP',
      desc: 'Bisa di-install dari browser, tanpa perlu download dari toko aplikasi.',
    },
    {
      title: 'Papan Poin bisa di-scan siswa',
      desc: 'Tiap kelas dapat QR code sendiri; siswa atau wali tinggal scan pakai HP untuk lihat poin kelasnya, tanpa perlu login.',
    },
    {
      title: 'Backup lengkap sekali klik',
      desc: 'Semua data (kelas, siswa, jadwal, jurnal, nilai, catatan) bisa diunduh jadi satu file Excel kapan saja, buat jaga-jaga milik sendiri.',
    },
  ] as SimpleFeatureItem[],
  why: {
    title: 'Kenapa pakai JMO',
    paragraphs: [
      'Dibanding jurnal kertas atau Excel manual: tidak perlu hitung rekap sendiri, tidak takut kertas hilang atau file rusak, dan bisa diakses dari mana saja.',
      'Dibanding aplikasi jurnal lain yang berat/lambat: JMO dibuat sederhana dari awal — fokus ke yang benar-benar dipakai guru sehari-hari, bukan fitur numpuk yang jarang disentuh.',
    ],
  },
  pricing: [
    { name: 'Trial', price: 'Gratis, 30 hari' },
    { name: 'Bulanan', price: 'Rp20.000' },
    { name: 'Semester', price: 'Rp100.000' },
    { name: 'Tahunan', price: 'Rp200.000', highlight: 'Paling banyak dipilih' },
  ],
  referralNote:
    'Pengguna Paket Tahunan bisa ikut program referral — dapat komisi tiap kali ada rekan guru yang berlangganan lewat link mereka.',
};

export const ONBOARDING_DETAILED = {
  intro:
    'Penjelasan ini apa saja yang ada di dalam JMO, modul per modul, apa adanya — termasuk batasannya. Untuk yang ingin tahu lebih dari sekadar gambaran umum.',
  sections: [
    {
      number: '01',
      title: 'Isi Jurnal',
      points: [
        'Tanggal, hari (otomatis terisi dari tanggal), jam ke-, kelas, mapel, materi.',
        'Absensi per siswa dengan 5 status: Hadir, Izin, Sakit, Dispensasi, Alpa.',
        'Poin sikap per siswa (bisa disesuaikan manual per pertemuan, default 3).',
        'Keterangan bebas per siswa (opsional).',
        '**Draft offline** — kalau koneksi terputus saat mengisi, isian tersimpan di perangkat dan tidak hilang.',
        '**Voice input** — isi materi/keterangan lewat suara, lewat modul terpisah.',
        '**Kontrol ukuran font** — tersedia untuk pengguna yang butuh tampilan lebih besar.',
        'Entri yang sudah tersimpan bisa diedit maupun dihapus (soft-delete, lihat bagian Sampah).',
      ],
    },
    {
      number: '02',
      title: 'Riwayat Jurnal',
      points: [
        'Daftar semua jurnal yang pernah diisi, difilter per kelas dan per semester.',
        '**Mode Arsip** — jurnal dari semester lama dipindah ke tabel arsip terpisah supaya data aktif tetap ringan, tapi riwayat lama tetap bisa dibuka.',
        'Cetak langsung dari browser, atau ekspor ke Excel — per kelas atau semua data sekaligus.',
      ],
    },
    {
      number: '03',
      title: 'Sampah (Soft Delete)',
      points: [
        'Jurnal yang dihapus tidak langsung hilang — masuk ke Sampah dulu.',
        'Bisa dipulihkan (↩️) atau dihapus permanen satu per satu, maupun dikosongkan sekaligus.',
      ],
    },
    {
      number: '04',
      title: 'Nilai Siswa',
      points: [
        'Input nilai per kelas sekaligus (satu jenis penilaian untuk satu kelas dalam satu kali submit), bukan satu-satu per siswa.',
        '**KKM bisa diatur sendiri** per guru: batas "Jeblok", batas "Sudah KKM", dan batas "Istimewa". Kalau belum pernah diatur, otomatis pakai default 60/70/85.',
        '**Formula nilai rapor kustom** — guru bisa menulis rumus sendiri memakai nama kolom penilaian dalam kurung kurawal, misalnya (UH1+UH2)/2*0.4 + UTS*0.3 + UAS*0.3, dihitung otomatis lewat expression evaluator.',
        'Riwayat nilai per batch bisa diedit atau dihapus.',
      ],
    },
    {
      number: '05',
      title: 'Daftar Nilai',
      points: [
        'Tabel rekap semua nilai siswa dalam satu kelas, satu baris per siswa, satu kolom per jenis penilaian — untuk melihat gambaran lengkap tanpa buka satu-satu.',
      ],
    },
    {
      number: '06',
      title: 'Poin & Tier Penghargaan',
      points: [
        'Hitung rata-rata poin sikap siswa dalam satu kelas untuk rentang tanggal tertentu.',
        'Otomatis dikelompokkan ke tier: 🥇 Istimewa (≥6,0), 🥈 Baik (5,0–5,9), 🥉 Cukup Menonjol (4,0–4,9).',
        'Bisa dicetak sebagai lembar penghargaan/rekap.',
      ],
    },
    {
      number: '07',
      title: 'Papan Poin (QR Code)',
      points: [
        'Tiap kelas punya link publik sendiri berisi papan poin kelas tersebut.',
        'Guru bisa generate QR code untuk link itu langsung dari daftar kelas, lalu tinggal ditunjukkan/ditempel — siswa atau wali murid scan pakai kamera HP tanpa perlu login atau install apa pun.',
        'Link juga bisa disalin manual (tombol "Salin Link") untuk dibagikan lewat grup WA kelas, misalnya.',
      ],
    },
    {
      number: '08',
      title: 'Statistik',
      points: [
        'Ringkasan: total pertemuan dan rata-rata kehadiran, bisa difilter per bulan atau semua waktu.',
        'Grafik batang pertemuan per kelas.',
        'Daftar siswa paling sering tidak hadir (rincian per jenis: Izin/Sakit/Dispensasi/Alpa).',
        'Daftar siswa dengan poin tertinggi & terendah.',
        'Ekspor ke Excel multi-sheet (ringkasan, per kelas, absensi, poin).',
      ],
    },
    {
      number: '09',
      title: 'Progres Nilai per Siswa',
      points: [
        'Grafik tren nilai satu siswa dari waktu ke waktu, lengkap dengan rata-rata, nilai tertinggi, dan terendah — berguna untuk melihat perkembangan individual, bukan cuma angka akhir.',
      ],
    },
    {
      number: '10',
      title: 'Rekap Bulanan',
      points: [
        'Ringkasan jurnal dan absensi dikemas per bulan, terpisah dari Statistik yang sifatnya lebih analitis.',
      ],
    },
    {
      number: '11',
      title: 'Setup (Kelas, Siswa, Jadwal)',
      points: [
        'Pengaturan dasar sebelum jurnal bisa diisi: daftar kelas, daftar siswa per kelas (dengan nomor presensi), dan jadwal mengajar.',
        'Termasuk alur pindah ke semester/tahun ajaran baru.',
      ],
    },
    {
      number: '12',
      title: 'Masukan & Testimoni',
      points: [
        '**Masukan** — guru bisa kirim masukan/keluhan ke admin per kategori, lihat riwayat, dan menerima balasan langsung dari Dimas BN di dalam aplikasi.',
        '**Testimoni** — guru memberi rating bintang + teks, ditampilkan menunggu persetujuan admin sebelum tayang di landing page. Ada cooldown 30 hari antar-pengiriman supaya tidak spam.',
      ],
    },
    {
      number: '13',
      title: 'Trial, Paket, dan Akses',
      points: [
        'Paket: Trial (gratis, 30 hari), Bulanan (Rp20.000), Semester (Rp100.000), Tahunan (Rp200.000, paling banyak dipilih). Paket Lifetime untuk sementara ditiadakan sampai batas waktu yang belum ditentukan.',
        'Saat trial/paket habis, akses dikunci lewat overlay penuh layar yang mengarahkan ke halaman pembelian — bukan cuma peringatan, aplikasi benar-benar tidak bisa dipakai sampai diperpanjang.',
        '**Program Partner (afiliasi)** — khusus pengguna Paket Tahunan: dapat link referral sendiri, dan komisi tiap ada guru lain yang berlangganan Paket Tahunan lewat link tersebut.',
      ],
    },
    {
      number: '14',
      title: 'Progressive Web App (PWA)',
      points: [
        'Bisa di-install ke HP/laptop seperti aplikasi native, lewat service worker.',
        '**Auto-update banner** — begitu ada versi baru, pengguna diberi tahu di dalam aplikasi tanpa perlu install ulang manual.',
        'Autosave berjalan di latar belakang saat mengisi jurnal, jadi kecil kemungkinan kerja yang belum disimpan hilang begitu saja.',
      ],
    },
    {
      number: '15',
      title: 'Backup Data Mandiri',
      points: [
        'Tombol "Download Semua Data Saya (Backup Lengkap)" mengekspor seluruh data milik guru ke satu file Excel dengan 6 sheet terpisah: Kelas, Siswa, Jadwal, Jurnal & Absensi, Nilai, dan Catatan Persiapan.',
        'Gunanya supaya guru tidak sepenuhnya bergantung ke server — data penting bisa disimpan sendiri kapan saja, tanpa perlu minta ke admin.',
      ],
    },
  ] as DetailSection[],
  limitations: {
    title: 'Batasan yang jujur perlu diketahui',
    points: [
      'Input nilai massal dan edit jurnal saat ini dirancang ulang supaya proses simpan-baru selalu didahulukan sebelum data lama dihapus — jadi risiko kehilangan data saat koneksi terputus di tengah proses jauh lebih kecil dari sebelumnya, meski bukan transaksi database penuh.',
      'Beberapa fitur (mis. Rekap Bulanan vs Statistik) punya cakupan yang saling melengkapi — bukan duplikat, tapi juga belum digabung jadi satu tampilan tunggal.',
      'Aplikasi ini dikembangkan dan dirawat oleh satu orang (Dimas BN) di sela mengajar — update dan balasan masukan menyesuaikan waktu tersebut, bukan tim support 24 jam.',
    ],
  },
};

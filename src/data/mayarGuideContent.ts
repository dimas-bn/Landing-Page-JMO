export interface MayarGuideSlide {
  image: string;
  caption: string;
}

// Ganti path `image` ini setelah screenshot asli di-upload ke /public/mayar-guide/
export const MAYAR_PAYMENT_GUIDE: MayarGuideSlide[] = [
  {
    image: '/public/01-daftar-akun.png',
    caption: 'Daftar akun dulu di member.jurnalmengajar.web.id — gratis pakai, selama 30 hari.',
  },
  {
    image: '/mayar-guide/02-pilih-paket.png',
    caption: 'Pilih paket yang tersedia di halaman Harga, lalu klik tombol yang sesuai pilihan.',
  },
  {
    image: '/mayar-guide/03-bayar-mayar.png',
    caption: 'Saat membayar di Mayar, pastikan pakai email SAMA seperti saat daftar akun.',
  },
  {
    image: '/mayar-guide/04-aktivasi.png',
    caption: 'Selesai — akun teraktivasi otomatis dalam hitungan detik, tanpa konfirmasi manual.',
  },
];

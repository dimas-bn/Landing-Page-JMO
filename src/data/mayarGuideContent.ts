export interface MayarGuideSlide {
  image: string;
  caption: string;
}

// Ganti path `image` ini setelah screenshot asli di-upload ke /public/mayar-guide/
export const MAYAR_PAYMENT_GUIDE: MayarGuideSlide[] = [
  {
    image: '/01-daftar-akun.png',
    caption: 'Daftar akun dulu di member.jurnalmengajar.web.id — gratis pakai, selama 30 hari.',
  },
  {
    image: '/02-jalur-web.png',
    caption: 'Pilih paket yang tersedia di Web JMO atau Web dimasbn, lalu klik tombol yang sesuai pilihan.',
  },
  {
    image: '/03-bayar-mayar.png',
    caption: 'Saat membayar di Mayar, pastikan pakai email SAMA seperti saat daftar akun.',
  },
  {
    image: '/04-aktivasi.png',
    caption: 'Selesai — akun teraktivasi otomatis dalam hitungan detik, tanpa konfirmasi manual.',
  },
];

export interface MayarGuideSlide {
  image: string;
  caption: string;
}

// Ganti path `image` ini setelah screenshot asli di-upload ke /public/mayar-guide/
export const MAYAR_PAYMENT_GUIDE: MayarGuideSlide[] = [
  {
    image: '/00-pilih-jalur.png',
    caption: 'Pilih dari salah satu "Pintu Masuk" di atas, untuk mendaftar terlebih dahulu.',
  },
  {
    image: '/01-daftar-akun.png',
    caption: 'Daftar akun dulu di member.jurnalmengajar.web.id — gratis pakai, selama 30 hari.',
  },
  {
    image: '/02-jalur-web.png',
    caption: 'Pilih paket yang tersedia di Web JMO atau Web dimasbn, lalu klik tombol yang sesuai pilihan.',
  },
  {
    image: '/03-piih-paket.png',
    caption: 'Saat tombol diklik, Anda akan langsung membuka Web dimasbn.myr.id untuk melakukan pembayaran.',
  },
  {
    image: '/04-bayar-mayar.png',
    caption: 'Saat membayar di Mayar, pastikan pakai email SAMA seperti saat daftar akun.',
  },
  {
    image: '/05-aktivasi.png',
    caption: 'Selesai — akun teraktivasi otomatis dalam hitungan detik, tanpa konfirmasi manual.',
  },
];

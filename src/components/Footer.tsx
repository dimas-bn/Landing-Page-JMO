import React from 'react';
import { ExternalLink, Send, Heart, ArrowUp } from 'lucide-react';
import { JmoLogo } from './JmoLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141D17] border-t border-[#2C4E3B] text-[#CFE0D3] pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#2C4E3B]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <JmoLogo size={38} withGlow />
              <span className="font-serif-heading font-semibold italic text-xl text-[#F6F2E4]">
                Jurnal Mengajar Online
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A2B3A7] leading-relaxed max-w-md">
              Aplikasi pencatatan jurnal mengajar harian guru, presensi siswa, sistem poin keaktifan, dan rekap otomatis dengan estetika buku catatan klasik bergaris dan kenyamanan cloud modern.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/+2uZH5Az4p600Nzll"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] bg-[#2C4E3B] hover:bg-[#3E6B52] text-xs font-semibold text-white transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#4ea075]" />
                <span>Grup Telegram Guru JMO</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif-heading font-semibold text-sm text-[#F6F2E4] italic mb-3">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-[#A2B3A7]">
              <li>
                <a href="#fitur" className="hover:text-white transition-colors">
                  Fitur Unggulan
                </a>
              </li>
              <li>
                <a href="#demo-interaktif" className="hover:text-white transition-colors">
                  Demo Interaktif di Browser
                </a>
              </li>
              <li>
                <a href="#perbandingan" className="hover:text-white transition-colors">
                  Buku Kertas vs JMO
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-white transition-colors">
                  Pilihan Paket & Uji Coba
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
              <li>
                <a
                  href="https://member.jurnalmengajar.web.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Masuk ke Akun Saya
                </a>
              </li>
            </ul>
          </div>

          {/* Reference Links */}
          <div>
            <h4 className="font-serif-heading font-semibold text-sm text-[#F6F2E4] italic mb-3">
              Link Referensi & Panduan
            </h4>
            <ul className="space-y-2 text-xs text-[#A2B3A7]">
              <li>
                <a
                  href="https://www.dimasbn.my.id/p/aplikasi-jurnal-mengajar-online-versi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Panduan Versi JMO</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.dimasbn.my.id/p/paket-harga-jmo.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Informasi Paket Harga Resmi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://dimasbn.myr.id/membership/jurnal-mengajar-online-paket-bulanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Langganan Paket Bulanan</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://dimasbn.myr.id/membership/jurnal-mengajar-online-paket-tahunan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Langganan Paket Tahunan</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://dimasbn.myr.id/membership/jurnal-mengajar-online-lifetime-sekali-bayar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Aktivasi Paket Lifetime</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A8C7F] gap-3">
          <div>
            © {new Date().getFullYear()} Jurnal Mengajar Online (JMO) · Dikembangkan oleh{' '}
            <a
              href="https://www.dimasbn.my.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8BEAF] hover:text-white underline underline-offset-2 transition-colors"
            >
              Dimas B.N.
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#CFE0D3] hover:text-white bg-[#2C4E3B] px-3 py-1 rounded-[4px] border border-[#3E6B52] cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

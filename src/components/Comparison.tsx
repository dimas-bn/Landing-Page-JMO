import React from 'react';
import { Check, X, Sparkles, BookOpen, Smartphone } from 'lucide-react';
import { COMPARISON_DATA } from '../data/jmoContent';

export const Comparison: React.FC = () => {
  return (
    <section id="perbandingan" className="py-16 md:py-24 bg-[#18231C] border-y border-[#2C4E3B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C4E3B] text-[#C08A2E] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#3E6B52]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Perbandingan Nyata</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-semibold italic text-[#F6F2E4] mb-3">
            Buku Jurnal Kertas Biasa vs. JMO
          </h2>
          <p className="text-[#C9D6CC] text-sm sm:text-base">
            Lihat perbedaannya. Dari mencatat dan merekap secara manual hingga mengelola jurnal pembelajaran dengan lebih cepat, rapi, dan praktis bersama JMO.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <div className="notebook-page notebook-margin-line p-5 sm:p-8 pl-12 sm:pl-16 rounded-[8px] border border-[#D8CDB0] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-4 border-b border-[#D8CDB0] items-center">
            <div className="md:col-span-4 font-serif-heading italic font-bold text-sm sm:text-base text-[#2C4E3B]">
              Aspek Administrasi
            </div>
            <div className="md:col-span-4 flex items-center gap-1.5 font-semibold text-xs sm:text-sm text-[#A63D3D]">
              <X className="w-4 h-4 text-[#A63D3D]" />
              <span>Buku Kertas Tradisional</span>
            </div>
            <div className="md:col-span-4 flex items-center gap-1.5 font-bold text-xs sm:text-sm text-[#2C4E3B]">
              <Check className="w-4 h-4 text-[#3E6B52]" />
              <span>Jurnal Mengajar Online (JMO)</span>
            </div>
          </div>

          <div className="divide-y divide-[#D8CDB0]">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 py-4 items-start hover:bg-white/40 transition-colors"
              >
                <div className="md:col-span-4 font-semibold text-xs sm:text-sm text-[#1E2B22]">
                  {row.category}
                </div>

                <div className="md:col-span-4 text-xs sm:text-sm text-[#6E6252] bg-[#F5E2DF]/60 p-2.5 rounded border border-[#E3C6C1]/50">
                  <span className="text-[#A63D3D] font-bold block mb-0.5 md:hidden">Buku Kertas:</span>
                  {row.paper}
                </div>

                <div className="md:col-span-4 text-xs sm:text-sm text-[#1E2B22] font-medium bg-[#E4EEE7]/80 p-2.5 rounded border border-[#3E6B52]/40 shadow-xs">
                  <span className="text-[#2C4E3B] font-bold block mb-0.5 md:hidden">JMO:</span>
                  {row.jmo}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout inside notebook */}
          <div className="mt-6 pt-4 border-t border-[#D8CDB0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6E6252]">
            <span className="italic font-medium">
              💡 Guru yang beralih ke JMO menghemat rata-rata 3 hingga 5 jam per bulan untuk rekap bulanan.
            </span>
            <a
              href="#harga"
              className="px-4 py-2 rounded-[5px] bg-[#2C4E3B] text-white hover:bg-[#3E6B52] font-semibold transition-colors shrink-0"
            >
              Mulai Uji Coba Sekarang →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

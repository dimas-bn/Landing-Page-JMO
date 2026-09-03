import React from 'react';
import {
  BookOpen,
  CheckSquare,
  Trophy,
  Users,
  Printer,
  History,
  Sparkles,
  Check
} from 'lucide-react';
import { FEATURE_HIGHLIGHTS } from '../data/jmoContent';

const ICON_MAP: Record<string, any> = {
  BookOpen,
  CheckSquare,
  Trophy,
  Users,
  Printer,
  History,
};

export const Features: React.FC = () => {
  return (
    <section id="fitur" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C4E3B] text-[#C08A2E] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#3E6B52]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Dibuat dari Masalah yang Benar-benar Dialami Guru</span>
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-semibold italic text-[#F6F2E4] mb-3">
          Administrasi KBM, Jauh Lebih Praktis dengan JMO
        </h2>
        <p className="text-[#C9D6CC] text-sm sm:text-base">
          JMO dikembangkan dari pengalaman nyata di ruang kelas untuk membantu guru mengurangi pencatatan dan perekapan yang berulang.
        </p>
      </div>

      {/* Feature Grid - Styled like Notebook Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {FEATURE_HIGHLIGHTS.map((f) => {
          const Icon = ICON_MAP[f.icon] || BookOpen;

          return (
            <div
              key={f.id}
              className="notebook-page notebook-margin-line p-6 pl-12 sm:pl-16 rounded-[8px] flex flex-col justify-between hover:shadow-xl transition-all border border-[#D8CDB0] group"
            >
              <div>
                {/* Header of the Card */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-[6px] bg-[#2C4E3B] text-[#F6F2E4] flex items-center justify-center shadow-sm group-hover:bg-[#3E6B52] transition-colors">
                    <Icon className="w-5 h-5 text-[#C08A2E]" />
                  </div>
                  <span className="text-[11px] font-bold text-[#6E6252] uppercase bg-[#EFEADA] px-2 py-0.5 rounded border border-[#B7C6CB]">
                    {f.badge}
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#8A7220] uppercase tracking-wider mb-1">
                  {f.tagline}
                </p>

                <h3 className="font-serif-heading font-semibold text-lg text-[#2C4E3B] italic mb-2.5 leading-snug">
                  {f.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#1E2B22] leading-relaxed mb-4">
                  {f.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="border-t border-[#D8CDB0] pt-3.5 mt-2 space-y-1.5">
                {f.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-[#6E6252]">
                    <Check className="w-3.5 h-3.5 text-[#3E6B52] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div> {/* Natural bridge to free version review */} <p className="text-center text-[#C9D6CC] text-sm mt-10"> Penasaran seperti apa JMO versi gratis sebelum upgrade?{' '} <a href="https://www.dimasbn.my.id/p/aplikasi-jurnal-mengajar-online-versi.html" target="_blank" rel="noopener noreferrer" className="text-[#C08A2E] font-semibold underline decoration-[#C08A2E]/40 underline-offset-4 hover:text-[#d49933] transition-colors" > Baca ulasan lengkapnya di sini → </a> </p> </section> ); };

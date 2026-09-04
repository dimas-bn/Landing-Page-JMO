import React from 'react';
import { Star, Send, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/jmoContent';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#18231C] border-y border-[#2C4E3B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C4E3B] text-[#C08A2E] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#3E6B52]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pengalaman Nyata Rekan Guru</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-semibold italic text-[#F6F2E4] mb-3">
            Dipercaya Guru dari Berbagai Penjuru Indonesia
          </h2>
          <p className="text-[#C9D6CC] text-sm sm:text-base">
            Cerita bagaimana JMO membantu guru SD, MI, SMP, MTs, SMA, MA, SMK, dan MAK, menyederhanakan administrasi harian mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="notebook-page notebook-margin-line p-6 pl-12 sm:pl-16 rounded-[8px] border border-[#D8CDB0] shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Rating & Highlight */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C08A2E] text-[#C08A2E]" />
                  ))}
                </div>

                <h4 className="font-serif-heading italic font-bold text-sm sm:text-base text-[#2C4E3B] mb-3">
                  "{t.highlight}"
                </h4>

                <p className="text-xs sm:text-sm text-[#1E2B22] leading-relaxed mb-4">
                  {t.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-[#D8CDB0] pt-3.5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-[#1E2B22]">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-[#6E6252]">
                    {t.role} · {t.school}, {t.location}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#2C4E3B] text-[#F6F2E4] font-bold text-xs flex items-center justify-center border border-[#3E6B52]">
                  {t.avatarText}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Telegram Community Banner */}
        <div className="bg-[#2C4E3B] rounded-[10px] p-6 sm:p-8 border border-[#3E6B52] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1E2B22] border border-[#3E6B52] flex items-center justify-center shrink-0">
              <Send className="w-7 h-7 text-[#4ea075]" />
            </div>
            <div>
              <h3 className="font-serif-heading font-bold italic text-lg sm:text-xl text-[#F6F2E4] mb-1">
                Gabung Komunitas Guru Pengguna JMO
              </h3>
              <p className="text-xs sm:text-sm text-[#CFE0D3] max-w-xl">
                Dapatkan update fitur versi terbaru dan diskusi langsung dengan sesama guru di grup Telegram kami.
              </p>
            </div>
          </div>

          <a
            href="https://t.me/+2uZH5Az4p600Nzll"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-[6px] bg-[#C08A2E] hover:bg-[#d69c36] text-[#1E2B22] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 transition-colors shadow-md cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Gabung Grup Telegram JMO</span>
          </a>
        </div>
      </div>
    </section>
  );
};

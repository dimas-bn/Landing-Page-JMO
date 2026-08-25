import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle, Star, Zap, Clock, Infinity } from 'lucide-react';
import { PRICING_PLANS } from '../data/jmoContent';

export const Pricing: React.FC = () => {
  return (
    <section id="harga" className="py-16 md:py-24 max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2C4E3B] text-[#C08A2E] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#3E6B52] shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Investasi Terbaik & Terjangkau untuk Guru</span>
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold italic text-[#F6F2E4] mb-4">
          Pilihan Paket Sederhana & Transparan
        </h2>
        <p className="text-[#C9D6CC] text-sm sm:text-base leading-relaxed">
          Mulai dengan <strong>7 hari uji coba gratis tanpa komitmen</strong>. Lanjutkan dengan pilihan paket fleksibel 
          yang dirancang khusus agar sangat terjangkau bagi para pendidik di seluruh Indonesia.
        </p>
      </div>

      {/* Pricing Cards Grid - Spacious & Balanced on Large Displays */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-6 2xl:gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.isPopular;
          const isLifetime = plan.id === 'lifetime';

          return (
            <div
              key={plan.id}
              className={`rounded-[10px] flex flex-col justify-between transition-all duration-300 relative ${
                isPopular
                  ? 'notebook-page ring-4 ring-[#C08A2E] shadow-2xl xl:scale-[1.03] border-2 border-[#C08A2E] z-10'
                  : isLifetime
                  ? 'notebook-page border-2 border-[#3E6B52] shadow-lg hover:shadow-2xl'
                  : 'notebook-page border border-[#D8CDB0] shadow-md hover:shadow-xl'
              } p-6 sm:p-7 xl:p-7 2xl:p-8 pl-12 sm:pl-14 xl:pl-14 2xl:pl-16`}
            >
              {/* Vertical red margin line */}
              <div className="absolute top-0 bottom-0 left-[24px] sm:left-[28px] w-[2px] bg-[#A6493C]/70 pointer-events-none" />

              <div className="flex-1 flex flex-col">
                {/* Badge Tag */}
                <div className="min-h-[28px] mb-2 flex items-center">
                  {plan.badge ? (
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-[4px] shadow-sm ${
                        isPopular
                          ? 'bg-[#C08A2E] text-[#1E2B22]'
                          : isLifetime
                          ? 'bg-[#2C4E3B] text-[#F6F2E4] border border-[#3E6B52]'
                          : 'bg-[#2C4E3B] text-[#F6F2E4]'
                      }`}
                    >
                      {isPopular && <Star className="w-3 h-3 fill-[#1E2B22]" />}
                      {isLifetime && <Infinity className="w-3 h-3 text-[#C08A2E]" />}
                      <span>{plan.badge}</span>
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-[#7C6F5E]">
                      {plan.id === 'trial' ? 'Uji Coba Langsung' : 'Langganan Fleksibel'}
                    </span>
                  )}
                </div>

                {/* Plan Name */}
                <h3 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#2C4E3B] italic mb-1.5">
                  {plan.name}
                </h3>

                {/* Plan Description */}
                <p className="text-xs sm:text-[13px] text-[#6E6252] leading-relaxed mb-5 min-h-[42px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-5 border-b border-[#D8CDB0]">
                  {plan.originalPrice ? (
                    <span className="text-xs line-through text-[#8A7D6C] block font-medium">
                      {plan.originalPrice}
                    </span>
                  ) : (
                    <span className="text-xs text-transparent block select-none">-</span>
                  )}
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#1E2B22] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs sm:text-[13px] text-[#6E6252] font-medium">
                      {plan.period}
                    </span>
                  </div>
                  {plan.highlightNote && (
                    <span className="text-[11.5px] font-bold text-[#8A6717] block mt-1.5">
                      ✓ {plan.highlightNote}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#6E6252]">
                    Fitur yang didapatkan:
                  </div>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1E2B22] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-[#E2EBE4] text-[#2C4E3B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#2C4E3B] stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={plan.ctaLink}
                  target={plan.ctaLink.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-[6px] text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                    isPopular
                      ? 'bg-[#C08A2E] hover:bg-[#d69c36] text-[#1E2B22] shadow-[#C08A2E]/20'
                      : isLifetime
                      ? 'bg-[#2C4E3B] hover:bg-[#3E6B52] text-white shadow-[#2C4E3B]/30'
                      : 'bg-white hover:bg-[#F2ECE0] text-[#1E2B22] border border-[#B7C6CB]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[10.5px] text-center text-[#7C6F5E] mt-2">
                  {plan.id === 'trial'
                    ? 'Tanpa kartu kredit · Langsung pakai'
                    : isLifetime
                    ? 'Sekali bayar · Tanpa tagihan berulang'
                    : 'Aktivasi otomatis & instan'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Assurance and Payment Badges Bar */}
      <div className="mt-14 p-6 sm:p-8 rounded-[10px] bg-[#142018] border border-[#2C4E3B] text-center max-w-5xl mx-auto shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-medium text-xs sm:text-sm text-[#CFE0D3] mb-5">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2C4E3B] flex items-center justify-center shrink-0 text-[#C08A2E]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#F6F2E4]">Pembayaran Otomatis & Aman</div>
              <div className="text-[11.5px] text-[#A8BEAF]">Support QRIS, Virtual Account, & Bank Transfer</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2C4E3B] flex items-center justify-center shrink-0 text-[#C08A2E]">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#F6F2E4]">Akun Langsung Aktif</div>
              <div className="text-[11.5px] text-[#A8BEAF]">Sistem otomatis memverifikasi dalam 30 detik</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2C4E3B] flex items-center justify-center shrink-0 text-[#C08A2E]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#F6F2E4]">Dukungan Penuh Pengembang</div>
              <div className="text-[11.5px] text-[#A8BEAF]">Konsultasi & panduan setup di grup Telegram</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#2C4E3B] text-xs text-[#A8BEAF] flex flex-wrap items-center justify-center gap-2">
          <span>Butuh pengadaan akun sekolah kolektif atau ada pertanyaan sebelum membeli?</span>
          <a
            href="https://t.me/+2uZH5Az4p600Nzll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C08A2E] hover:text-[#d69c36] font-bold underline inline-flex items-center gap-1"
          >
            <span>Hubungi Komunitas Guru JMO di Telegram</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div> {/* Natural bridge to full pricing detail page */} <p className="text-center text-[#C9D6CC] text-sm mt-10"> Ingin lihat rincian lengkap tiap paket beserta perbandingannya?{' '} <a href="https://www.dimasbn.my.id/p/paket-harga-jmo.html" target="_blank" rel="noopener noreferrer" className="text-[#C08A2E] font-semibold underline decoration-[#C08A2E]/40 underline-offset-4 hover:text-[#d49933] transition-colors" > Lihat halaman paket harga lengkap → </a> </p> </section> ); };

import React, { useState, Fragment } from 'react';
import { X, BookOpen, ListChecks, Sparkles, ShieldCheck, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';
import { ONBOARDING_SIMPLE, ONBOARDING_DETAILED } from '../data/onboardingContent';
import { MAYAR_PAYMENT_GUIDE } from '../data/mayarGuideContent';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OnboardingView = 'simpel' | 'detail' | 'bayar';

// Helper ringan untuk render **teks tebal** dari data tanpa perlu
// dependency markdown-parser baru — cukup untuk kebutuhan konten ini.
function renderBold(text: string) {
  const parts = text.split('**');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-[#1E2B22] font-semibold">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<OnboardingView>('simpel');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg overflow-y-auto overflow-x-hidden">
      <div className="min-h-full flex items-start sm:items-center justify-center p-2 sm:p-4 md:p-6">
        <div className="bg-[#142018] border-2 border-[#C08A2E] text-[#F6F2E4] rounded-[12px] w-full max-w-4xl shadow-2xl overflow-hidden animate-fadeIn my-4 sm:my-0">
          {/* Header */}
          <div className="bg-[#1E2E23] px-4 sm:px-6 py-3.5 border-b border-[#2C4E3B] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-[8px] bg-gradient-to-br from-[#C08A2E] to-[#8C5D12] text-[#142018] flex items-center justify-center font-bold shadow-md shrink-0">
                <BookOpen className="w-5 h-5 text-[#142018]" />
              </div>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#E6C26E]">
                  Kenalan Dulu
                </span>
                <h3 className="font-serif-heading italic font-bold text-lg sm:text-xl md:text-2xl text-[#F6F2E4] tracking-wide truncate">
                  Apa Itu JMO?
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#142018] text-[#CFE0D3] hover:text-white hover:bg-[#A63D3D] flex items-center justify-center transition-colors cursor-pointer border border-[#2C4E3B] shrink-0"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Segmented toggle: Simpel / Detail */}
          <div className="bg-[#1B2920] border-b border-[#2C4E3B]/80 px-4 sm:px-6 py-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setView('simpel')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-[6px] text-xs sm:text-sm font-semibold border transition-colors cursor-pointer ${
                view === 'simpel'
                  ? 'bg-[#C08A2E] text-[#142018] border-[#C08A2E]'
                  : 'bg-transparent text-[#CFE0D3] border-[#3E6B52] hover:bg-[#2C4E3B]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Simpel
            </button>
            <button
              type="button"
              onClick={() => setView('detail')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-[6px] text-xs sm:text-sm font-semibold border transition-colors cursor-pointer ${
                view === 'detail'
                  ? 'bg-[#C08A2E] text-[#142018] border-[#C08A2E]'
                  : 'bg-transparent text-[#CFE0D3] border-[#3E6B52] hover:bg-[#2C4E3B]'
              }`}
            >
              <ListChecks className="w-3.5 h-3.5" />
              Detail
            </button>
            <button
              type="button"
              onClick={() => setView('bayar')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-[6px] text-xs sm:text-sm font-semibold border transition-colors cursor-pointer ${
                view === 'bayar'
                  ? 'bg-[#C08A2E] text-[#142018] border-[#C08A2E]'
                  : 'bg-transparent text-[#CFE0D3] border-[#3E6B52] hover:bg-[#2C4E3B]'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              Minat?
            </button>
            <span className="hidden sm:inline text-[11px] text-[#A8BEAF] ml-auto">
              {view === 'simpel'
                ? 'Ringkas, 1 menit baca'
                : view === 'detail'
                ? 'Rincian tiap fitur & batasannya'
                : 'Panduan visual langkah demi langkah'}
            </span>
          </div>

          {/* Content area (notebook-page look, scrollable) */}
          <div className="p-4 sm:p-6 bg-[#0F1A13] max-h-[70vh] overflow-y-auto">
            <div className="notebook-page notebook-margin-line rounded-[8px] p-5 sm:p-8 pl-10 sm:pl-14 text-[#1E2B22]">
              {view === 'simpel' ? (
                <SimpleView />
              ) : view === 'detail' ? (
                <DetailView />
              ) : (
                <PaymentGuideView />
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-3.5 bg-[#1E2E23] border-t border-[#2C4E3B] flex flex-wrap items-center justify-between text-xs text-[#CFE0D3] gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C08A2E] shrink-0" />
              <span>Ada pertanyaan lain soal JMO? Langsung tanya saja ke Dimas BN.</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-[5px] bg-[#142018] text-[#F6F2E4] hover:bg-[#2C4E3B] font-semibold cursor-pointer border border-[#2C4E3B] transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SimpleView: React.FC = () => {
  const { intro, features, why, pricing, referralNote } = ONBOARDING_SIMPLE;

  return (
    <div className="space-y-8">
      <div>
        <h4 className="font-serif-heading italic font-bold text-xl sm:text-2xl text-[#2C4E3B] mb-2">
          {intro.whatTitle}
        </h4>
        <p className="text-sm sm:text-base leading-relaxed">{intro.whatBody}</p>
      </div>

      <div>
        <h4 className="font-serif-heading italic font-bold text-xl sm:text-2xl text-[#2C4E3B] mb-2">
          {intro.whoTitle}
        </h4>
        <p className="text-sm sm:text-base leading-relaxed">{intro.whoBody}</p>
      </div>

      <div>
        <h4 className="font-serif-heading font-bold text-lg sm:text-xl text-[#1E2B22] mb-3 pb-2 border-b border-[#D8CDB0]">
          Yang bisa dilakukan JMO
        </h4>
        <ul className="space-y-2.5">
          {features.map((f) => (
            <li key={f.title} className="text-sm sm:text-base leading-relaxed">
              <strong className="text-[#2C4E3B]">{f.title}</strong> — {f.desc}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-serif-heading font-bold text-lg sm:text-xl text-[#1E2B22] mb-2 pb-2 border-b border-[#D8CDB0]">
          {why.title}
        </h4>
        {why.paragraphs.map((p, i) => (
          <p key={i} className="text-sm sm:text-base leading-relaxed mb-2">
            {p}
          </p>
        ))}
      </div>

      <div>
        <h4 className="font-serif-heading font-bold text-lg sm:text-xl text-[#1E2B22] mb-3 pb-2 border-b border-[#D8CDB0]">
          Paket
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`rounded-[8px] p-3 text-center border ${
                p.highlight ? 'border-[#C08A2E] bg-[#C08A2E]/10' : 'border-[#D8CDB0] bg-white/40'
              }`}
            >
              <div className="text-xs sm:text-sm font-semibold text-[#2C4E3B]">{p.name}</div>
              <div className="text-sm sm:text-base font-bold">{p.price}</div>
              {p.highlight && (
                <div className="text-[10px] text-[#C08A2E] font-semibold mt-0.5">{p.highlight}</div>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-[#6E6252] mt-3 leading-relaxed">{referralNote}</p>
      </div>
    </div>
  );
};

const DetailView: React.FC = () => {
  const { intro, sections, limitations } = ONBOARDING_DETAILED;

  return (
    <div className="space-y-7">
      <p className="text-sm sm:text-base leading-relaxed text-[#6E6252] italic">{intro}</p>

      {sections.map((s) => (
        <div key={s.number}>
          <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#1E2B22] mb-2 pb-2 border-b border-[#D8CDB0] flex items-baseline gap-2">
            <span className="text-[#C08A2E] text-sm">{s.number}.</span>
            {s.title}
          </h4>
          <ul className="space-y-1.5 list-disc list-outside pl-4 sm:pl-5">
            {s.points.map((pt, i) => (
              <li key={i} className="text-sm leading-relaxed">
                {renderBold(pt)}
              </li>
            ))}
          </ul>
        </div>
      ))}

      const PaymentGuideView: React.FC = () => {
  const [index, setIndex] = useState(0);
  const slides = MAYAR_PAYMENT_GUIDE;
  const slide = slides[index];

  const goPrev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-xs mx-auto rounded-[8px] overflow-hidden border border-[#D8CDB0] bg-white">
        <img
          src={slide.image}
          alt={slide.caption}
          className="w-full aspect-[9/16] object-contain"
        />
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Sebelumnya"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1E2B22]/80 text-[#F6F2E4] hover:bg-[#1E2B22] flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Berikutnya"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1E2B22]/80 text-[#F6F2E4] hover:bg-[#1E2B22] flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      <p className="text-center text-sm sm:text-base leading-relaxed mt-4 max-w-md text-[#1E2B22]">
        {slide.caption}
      </p>

      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === index ? 'w-6 bg-[#C08A2E]' : 'w-2 bg-[#D8CDB0]'
              }`}
            />
          ))}
        </div>
      )}

      <span className="text-xs text-[#6E6252] mt-2">
        {index + 1} / {slides.length}
      </span>
    </div>
  );
};

      <div className="rounded-[8px] border border-[#D8CDB0] bg-[#EFEADA] p-4 sm:p-5">
        <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#5B6B8C] mb-2">
          {limitations.title}
        </h4>
        <ul className="space-y-1.5 list-disc list-outside pl-4 sm:pl-5">
          {limitations.points.map((pt, i) => (
            <li key={i} className="text-sm leading-relaxed text-[#6E6252]">
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

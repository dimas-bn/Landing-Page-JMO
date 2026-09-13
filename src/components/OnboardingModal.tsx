import React, { useState, Fragment } from 'react';
import { X, BookOpen, ListChecks, Sparkles, ShieldCheck } from 'lucide-react';
import { ONBOARDING_SIMPLE, ONBOARDING_DETAILED } from '../data/onboardingContent';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OnboardingView = 'simpel' | 'detail';

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
                  Apa Itu Jurnal Mengajar Online?
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
            <span className="hidden sm:inline text-[11px] text-[#A8BEAF] ml-auto">
              {view === 'simpel' ? 'Ringkas, 1 menit baca' : 'Rincian tiap fitur & batasannya'}
            </span>
          </div>

          {/* Content area (notebook-page look, scrollable) */}
          <div className="p-4 sm:p-6 bg-[#0F1A13] max-h-[70vh] overflow-y-auto">
            <div className="notebook-page notebook-margin-line rounded-[8px] p-5 sm:p-8 pl-10 sm:pl-14 text-[#1E2B22]">
              {view === 'simpel' ? (
                <SimpleView />
              ) : (
                <DetailView />
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

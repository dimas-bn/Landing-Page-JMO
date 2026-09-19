import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { MAYAR_PAYMENT_GUIDE } from '../data/mayarGuideContent';

interface MayarPaymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MayarPaymentGuideModal: React.FC<MayarPaymentGuideModalProps> = ({ isOpen, onClose }) => {
  const [index, setIndex] = useState(0);
  const slides = MAYAR_PAYMENT_GUIDE;

  // Reset ke slide pertama tiap kali modal dibuka ulang
  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen]);

  if (!isOpen) return null;

  const goPrev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  const slide = slides[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg overflow-y-auto overflow-x-hidden">
      <div className="min-h-full flex items-start sm:items-center justify-center p-2 sm:p-4 md:p-6">
        <div className="bg-[#142018] border-2 border-[#C08A2E] text-[#F6F2E4] rounded-[12px] w-full max-w-sm sm:max-w-md shadow-2xl overflow-hidden animate-fadeIn my-4 sm:my-0">
          {/* Header */}
          <div className="bg-[#1E2E23] px-4 sm:px-6 py-3.5 border-b border-[#2C4E3B] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-[8px] bg-gradient-to-br from-[#C08A2E] to-[#8C5D12] text-[#142018] flex items-center justify-center font-bold shadow-md shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#142018]" />
              </div>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#E6C26E]">
                  Panduan Berlangganan
                </span>
                <h3 className="font-serif-heading italic font-bold text-lg sm:text-xl text-[#F6F2E4] tracking-wide truncate">
                  Cara Bayar via Mayar
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

          {/* Slide area */}
          <div className="p-4 sm:p-6 bg-[#0F1A13]">
            <div className="relative notebook-page rounded-[8px] overflow-hidden border border-[#D8CDB0]">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full aspect-[9/16] object-contain bg-white"
              />

              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Sebelumnya"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#142018]/80 text-[#F6F2E4] hover:bg-[#142018] flex items-center justify-center cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Berikutnya"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#142018]/80 text-[#F6F2E4] hover:bg-[#142018] flex items-center justify-center cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <p className="text-center text-sm sm:text-base text-[#CFE0D3] mt-4 px-2 leading-relaxed">
              {slide.caption}
            </p>

            {/* Dot indicators */}
            {slides.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === index ? 'w-6 bg-[#C08A2E]' : 'w-2 bg-[#3E6B52]'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3.5 bg-[#1E2E23] border-t border-[#2C4E3B] flex items-center justify-between text-xs text-[#CFE0D3] gap-3">
            <span>
              {index + 1} / {slides.length}
            </span>
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

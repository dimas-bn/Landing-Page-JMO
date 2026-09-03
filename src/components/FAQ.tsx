import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/jmoContent';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C4E3B] text-[#C08A2E] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#3E6B52]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Pertanyaan Sering Ditanyakan</span>
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-semibold italic text-[#F6F2E4] mb-3">
          Tanya Jawab Seputar JMO
        </h2>
        <p className="text-[#C9D6CC] text-sm sm:text-base">
          Temukan jawaban cepat dari pertanyaan yang sering diajukan rekan guru mengenai penggunaan dan fitur JMO.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="notebook-page notebook-margin-line pl-12 sm:pl-16 pr-5 py-4 rounded-[6px] border border-[#D8CDB0] shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                className="w-full text-left flex items-center justify-between gap-3 cursor-pointer"
              >
                <span className="font-serif-heading italic font-semibold text-sm sm:text-base text-[#2C4E3B] leading-snug">
                  {faq.question}
                </span>
                <span className="w-6 h-6 rounded-full bg-white border border-[#B7C6CB] flex items-center justify-center shrink-0 text-[#2C4E3B]">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 pt-3 border-t border-[#D8CDB0] text-xs sm:text-sm text-[#1E2B22] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

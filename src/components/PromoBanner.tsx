import React, { useState } from 'react';
import { Gift, Copy, Check } from 'lucide-react';
import { PROMO_BANNER } from '../data/jmoContent';

export const PromoBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  if (!PROMO_BANNER.active) return null;

  const handleCopyCode = async () => {
    if (!PROMO_BANNER.code) return;
    try {
      await navigator.clipboard.writeText(PROMO_BANNER.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API gagal (izin ditolak/browser lama) - kode tetap terlihat di banner untuk disalin manual
    }
  };

  return (
    <div className="bg-[#C08A2E] text-[#1E2B22] py-2 px-4 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 flex-wrap">
      <Gift className="w-4 h-4 flex-shrink-0" />
      <span>{PROMO_BANNER.text}</span>
      {PROMO_BANNER.code && (
        
       <a href={PROMO_BANNER.ctaHref}
          onClick={handleCopyCode}
          className="inline-flex items-center gap-1.5 bg-[#1E2B22] text-[#F6F2E4] px-2.5 py-1 rounded-full font-bold hover:bg-[#2C4E3B] transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#8FCB9E]" />
              <span>Kode Tersalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Salin Kode: {PROMO_BANNER.code}</span>
            </>
          )}
        </a>
      )}
    </div>
  );
};

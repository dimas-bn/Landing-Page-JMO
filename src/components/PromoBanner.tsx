import React from 'react';
import { Gift } from 'lucide-react';
import { PROMO_BANNER } from '../data/jmoContent';

export const PromoBanner: React.FC = () => {
  if (!PROMO_BANNER.active) return null;

  return (
    <div className="bg-[#C08A2E] text-[#1E2B22] py-2 px-4 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 flex-wrap">
      <Gift className="w-4 h-4 flex-shrink-0" />
      <span>{PROMO_BANNER.text}</span>
      {PROMO_BANNER.ctaText && PROMO_BANNER.ctaHref && (
        
         <a href={PROMO_BANNER.ctaHref}
          className="underline font-bold hover:text-white transition-colors"
        >
          {PROMO_BANNER.ctaText} →
        </a>
      )}
    </div>
  );
};

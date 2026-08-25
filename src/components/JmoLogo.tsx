import React from 'react';

interface JmoLogoProps {
  size?: number | string;
  className?: string;
  withGlow?: boolean;
}

export const JmoLogo: React.FC<JmoLogoProps> = ({
  size = 40,
  className = '',
  withGlow = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {withGlow && (
        <div className="absolute inset-0 bg-[#C08A2E]/25 blur-md rounded-2xl transform scale-105 pointer-events-none" />
      )}
      <img
        src="/icon-512.png"
        alt="Jurnal Mengajar Online"
        width={typeof size === 'number' ? size : undefined}
        height={typeof size === 'number' ? size : undefined}
        className="w-full h-full object-contain drop-shadow-md"
      />
    </div>
  );
};

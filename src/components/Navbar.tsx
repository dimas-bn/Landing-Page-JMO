import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles, MessageCircle, MonitorPlay } from 'lucide-react';
import { JmoLogo } from './JmoLogo';

interface NavbarProps {
  onOpenProjectorDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjectorDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1E2B22]/95 backdrop-blur-md border-b border-[#2C4E3B] text-[#F6F2E4] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-16 sm:h-20 flex items-center justify-between gap-4 lg:gap-6">
        {/* Brand Logo & Title */}
        <a href="#" className="flex items-center gap-3 min-w-0 flex-1 md:flex-initial group">
          <JmoLogo size={42} withGlow className="transition-transform group-hover:scale-105 shrink-0" />
          <div className="flex flex-col justify-center min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-serif-heading font-bold italic text-lg sm:text-xl md:text-2xl tracking-wide text-[#F6F2E4] truncate">
                Jurnal Mengajar
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-[#C08A2E] text-[#1E2B22] px-1.5 py-0.5 rounded-[4px] shadow-sm shrink-0">
                Online
              </span>
            </div>
            <p className="text-[11px] text-[#A8BEAF] hidden xl:block tracking-normal font-sans">
              Buku Jurnal Guru Klasik · Web App Modern
            </p>
          </div>
        </a>

        {/* Desktop / Tablet Nav Links */}
        <nav className="hidden md:flex items-center gap-3.5 lg:gap-5 xl:gap-7 text-xs lg:text-[13.5px] font-medium text-[#CFE0D3] whitespace-nowrap shrink-0">
          <a href="#fitur" className="hover:text-white transition-colors py-1">
            Fitur Utama
          </a>
          <a
            href="#demo-interaktif"
            className="hover:text-white transition-colors flex items-center gap-1.5 py-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C08A2E]" />
            <span>Demo Interaktif</span>
          </a>
          <a href="#perbandingan" className="hover:text-white transition-colors py-1">
            Perbandingan
          </a>
          <a href="#harga" className="hover:text-white transition-colors py-1">
            Paket Harga
          </a>
          <a href="#faq" className="hover:text-white transition-colors py-1">
            FAQ
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3.5 lg:gap-4 shrink-0">
          <button
            type="button"
            onClick={onOpenProjectorDemo}
            className="px-2.5 lg:px-3.5 py-2 text-xs font-semibold rounded-[5px] bg-[#2C4E3B] hover:bg-[#3E6B52] text-[#F6F2E4] border border-[#3E6B52] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-sm"
          >
            <MonitorPlay className="w-3.5 h-3.5 text-[#C08A2E]" />
            <span className="hidden lg:inline">Papan Poin Proyektor</span>
            <span className="lg:hidden">Proyektor</span>
          </button>

          <a
            href="https://t.me/+2uZH5Az4p600Nzll"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-[5px] text-[#C9D6CC] hover:text-white hover:bg-[#2C4E3B] transition-colors shrink-0"
            title="Grup Komunitas Telegram Guru"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ea075]" />
          </a>

          <a
            href="#harga"
            className="px-3.5 lg:px-4 py-2 text-xs font-bold tracking-wide rounded-[5px] bg-[#C08A2E] hover:bg-[#d69c36] text-[#1E2B22] shadow-sm transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap font-sans shrink-0"
          >
            <span>Coba 7 Hari Gratis</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-[#CFE0D3] hover:text-white hover:bg-[#2C4E3B] transition-colors cursor-pointer shrink-0 ml-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A251E] border-b border-[#2C4E3B] px-5 py-5 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#CFE0D3]">
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#2C4E3B] hover:text-white transition-colors"
            >
              Fitur Utama
            </a>
            <a
              href="#demo-interaktif"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#2C4E3B] hover:text-white flex items-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#C08A2E]" />
              Demo Interaktif JMO
            </a>
            <a
              href="#perbandingan"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#2C4E3B] hover:text-white transition-colors"
            >
              Buku Kertas vs JMO
            </a>
            <a
              href="#harga"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#2C4E3B] hover:text-white transition-colors"
            >
              Paket Harga & Uji Coba
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-[#2C4E3B] hover:text-white transition-colors"
            >
              Tanya Jawab (FAQ)
            </a>
          </nav>

          <div className="pt-3 border-t border-[#2C4E3B] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectorDemo();
              }}
              className="w-full py-2.5 px-3 text-center text-xs font-semibold rounded-[5px] bg-[#2C4E3B] text-white border border-[#3E6B52] flex items-center justify-center gap-2 cursor-pointer"
            >
              <MonitorPlay className="w-4 h-4 text-[#C08A2E]" />
              <span>Buka Demo Papan Poin Proyektor</span>
            </button>
            <a
              href="#harga"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-3 text-center text-xs font-bold rounded-[5px] bg-[#C08A2E] text-[#1E2B22] flex items-center justify-center gap-1.5"
            >
              <span>Mulai Uji Coba 7 Hari Gratis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Laptop,
  Clock,
  ShieldCheck,
  Trophy,
  Copy,
  Check,
  Volume2
} from 'lucide-react';
import { JmoLogo } from './JmoLogo';

interface HeroProps {
  onOpenProjectorDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectorDemo }) => {
  // Mini interactive state inside Hero card preview
  const [selectedStatus, setSelectedStatus] = useState<string>('Hadir');
  const [points, setPoints] = useState<number>(4);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Subtle vintage ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#3E6B52]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Eyebrow Chip with Icon */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C4E3B]/90 border border-[#3E6B52] text-[#CFE0D3] text-xs font-medium tracking-wide shadow-md">
            <JmoLogo size={20} />
            <span className="font-serif-heading italic text-[#F6F2E4] font-medium">Buku Jurnal Guru Klasik</span>
            <span className="text-[#3E6B52]">✕</span>
            <span>Web App Modern</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold italic text-[#F6F2E4] leading-[1.18] tracking-tight mb-5">
            Tinggalkan Tumpukan Buku Kertas.
            <br />
            <span className="text-[#C08A2E] not-italic font-normal">
              Catat KBM, Absensi, & Poin Siswa
            </span>{' '}
            Lebih Cepat & Rapi.
          </h1>

          <p className="text-[#C9D6CC] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Solusi digital praktis untuk guru Indonesia. Dilengkapi pengingat jadwal KBM harian,
            rekap presensi otomatis 1-klik siap cetak / PDF, dan papan poin live proyektor kelas.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-10">
          <a
            href="#harga"
            className="w-full sm:w-auto px-6 py-3.5 text-center text-sm font-semibold rounded-[6px] bg-[#C08A2E] hover:bg-[#d49933] text-[#1E2B22] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-sans cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Mulai Trial 7 Hari Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#demo-interaktif"
            className="w-full sm:w-auto px-6 py-3.5 text-center text-sm font-semibold rounded-[6px] bg-[#2C4E3B] hover:bg-[#3E6B52] text-[#F6F2E4] border border-[#3E6B52] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#C08A2E]" />
            <span>Coba Demo Interaktif</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#C9D6CC] mb-12">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#C08A2E]" />
            <span>Tanpa instalasi ribet</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-[#C08A2E]" />
            <span>Lancar di HP & Laptop</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#C08A2E]" />
            <span>Hemat 45+ menit per minggu</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C08A2E]" />
            <span>Rekap & data aman di cloud</span>
          </div>
        </div>

        {/* HERO INTERACTIVE NOTEBOOK PREVIEW CARD */}
        <div className="max-w-2xl mx-auto">
          {/* Outer Header Mockup bar */}
          <div className="bg-[#2C4E3B] text-[#F6F2E4] px-4 py-2.5 rounded-t-[8px] flex items-center justify-between border-b border-[#3E6B52]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A63D3D]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#C08A2E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#3E6B52]"></span>
              <span className="text-xs font-semibold text-[#CFE0D3] ml-1">
                Jurnal Mengajar Online · Tampilan Lembar Catatan
              </span>
            </div>
            <div className="text-[11px] bg-[#1E2B22] px-2 py-0.5 rounded text-[#C9D6CC] border border-[#3E6B52]">
              KBM Aktif: X IPA 1
            </div>
          </div>

          {/* Real Notebook Paper Card with Red Margin Line and Lined Background */}
          <div className="notebook-page notebook-margin-line p-5 sm:p-7 pl-12 sm:pl-16 rounded-b-[8px]">
            {/* Date & Title */}
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#D8CDB0] pb-3 mb-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6E6252]">
                  Hari & Tanggal KBM
                </p>
                <h3 className="font-serif-heading font-semibold text-lg sm:text-xl text-[#2C4E3B] italic">
                  Senin, 24 Agustus 2026 · Jam ke 1-3
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E4EEE7] text-[#2C4E3B] border border-[#B7C6CB]">
                Matematika Wajib
              </span>
            </div>

            {/* Quick reminder banner */}
            <div className="bg-[#FFF6D8] border border-[#E8D98A] rounded-[5px] p-2.5 text-xs text-[#5C4319] mb-4 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-medium">
                <span>⏰ Pengingat:</span> 1 kelas tersisa hari ini (XI MIPA 2 Jam 7-8).
              </span>
              <span className="text-[10px] font-bold text-[#8A7220] uppercase bg-[#F6F2E4] px-1.5 py-0.5 rounded border border-[#E8D98A]">
                Otomatis
              </span>
            </div>

            {/* Simulated Material Topic with Action Buttons */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-[#1E2B22] uppercase tracking-wide">
                  Materi & Hal yang Perlu Dicatat
                </label>
                <button
                  onClick={handleCopy}
                  className="text-[11px] font-semibold text-[#2C4E3B] hover:text-[#3E6B52] bg-white border border-[#B7C6CB] px-2 py-0.5 rounded-[4px] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-[#3E6B52]" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Tersalin' : 'Salin Materi'}
                </button>
              </div>
              <div className="bg-white/90 border border-[#B7C6CB] rounded-[5px] p-3 text-xs sm:text-sm text-[#1E2B22] leading-relaxed shadow-inner">
                Persamaan Kuadrat & Metode Faktorisasi. Siswa mengerjakan latihan halaman 42 no 1-10. Diskusi kelompok sangat aktif.
              </div>
            </div>

            {/* Interactive Student Sample Item */}
            <div className="border-t border-[#D8CDB0] pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#1E2B22] uppercase tracking-wide">
                  Simulasi Presensi & Poin Siswa (Coba Klik!)
                </span>
                <span className="text-[11px] text-[#6E6252] italic">
                  Presensi No. 1
                </span>
              </div>

              <div className="bg-white border border-[#D8CDB0] rounded-[6px] p-3 sm:p-3.5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-sm text-[#1E2B22]">
                    1. Aditya Pratama
                  </div>
                  <div className="text-xs text-[#6E6252]">
                    Kelas X IPA 1
                  </div>
                </div>

                {/* Status Chips Selector */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'Hadir', bg: 'bg-[#3E6B52]', border: 'border-[#3E6B52]' },
                    { label: 'Izin', bg: 'bg-[#C08A2E]', border: 'border-[#C08A2E]' },
                    { label: 'Sakit', bg: 'bg-[#B36A3C]', border: 'border-[#B36A3C]' },
                    { label: 'Dispensasi', bg: 'bg-[#5B6B8C]', border: 'border-[#5B6B8C]' },
                    { label: 'Alpa', bg: 'bg-[#A63D3D]', border: 'border-[#A63D3D]' },
                  ].map((s) => {
                    const isSelected = selectedStatus === s.label;
                    return (
                      <button
                        key={s.label}
                        type="button"
                        onClick={() => setSelectedStatus(s.label)}
                        className={`text-xs px-3 py-1 rounded-full font-semibold transition-all cursor-pointer border ${
                          isSelected
                            ? `${s.bg} text-white ${s.border} shadow-xs scale-105`
                            : 'bg-white text-[#1E2B22] border-[#B7C6CB] hover:bg-[#F6F2E4]'
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>

                {/* Point Stepper Gamification */}
                <div className="flex items-center justify-between pt-1 border-t border-[#F6F2E4]">
                  <span className="text-xs font-semibold text-[#6E6252] uppercase tracking-wider">
                    Poin Keaktifan Siswa
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={points <= 0}
                      onClick={() => setPoints(Math.max(0, points - 1))}
                      className="w-6 h-6 rounded-full border border-[#B7C6CB] bg-[#F6F2E4] hover:bg-white text-sm font-bold flex items-center justify-center disabled:opacity-40 cursor-pointer text-[#2C4E3B]"
                      title="Kurangi poin"
                    >
                      −
                    </button>
                    <span
                      className={`font-serif-heading font-bold text-base min-w-[20px] text-center ${
                        points > 3 ? 'text-[#3E6B52]' : points < 3 ? 'text-[#A63D3D]' : 'text-[#1E2B22]'
                      }`}
                    >
                      {points}
                    </span>
                    <button
                      type="button"
                      disabled={points >= 7}
                      onClick={() => setPoints(Math.min(7, points + 1))}
                      className="w-6 h-6 rounded-full border border-[#B7C6CB] bg-[#F6F2E4] hover:bg-white text-sm font-bold flex items-center justify-center disabled:opacity-40 cursor-pointer text-[#2C4E3B]"
                      title="Tambah poin keaktifan"
                    >
                      +
                    </button>
                    {points > 3 && (
                      <span className="text-[10px] bg-[#E4EEE7] text-[#2C4E3B] font-bold px-2 py-0.5 rounded-full border border-[#3E6B52]/30">
                        ⭐ Aktif Menjawab (+{points - 3})
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Live Preview Footer */}
            <div className="mt-4 pt-3 border-t border-[#D8CDB0] flex items-center justify-between text-xs text-[#6E6252]">
              <span className="italic">
                ✓ Otomatis tersimpan ke Cloud Supabase & Rekap Bulanan
              </span>
              <button
                onClick={onOpenProjectorDemo}
                className="font-semibold text-[#2C4E3B] hover:text-[#3E6B52] underline flex items-center gap-1 cursor-pointer"
              >
                <Trophy className="w-3.5 h-3.5 text-[#C08A2E]" />
                Lihat di Papan Proyektor →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

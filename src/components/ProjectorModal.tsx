import React, { useState } from 'react';
import { X, Trophy, Sparkles, Maximize2, Minimize2, Radio, Award, Star, CheckCircle2 } from 'lucide-react';
import { INITIAL_STUDENTS_DEMO } from '../data/jmoContent';
import { StudentItem } from '../types';

interface ProjectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  students?: StudentItem[];
  classNameTitle?: string;
  subjectTitle?: string;
}

export const ProjectorModal: React.FC<ProjectorModalProps> = ({
  isOpen,
  onClose,
  students = INITIAL_STUDENTS_DEMO,
  classNameTitle = 'Kelas X IPA 1',
  subjectTitle = 'Matematika Wajib',
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen) return null;

  const sorted = [...students].sort((a, b) => b.points - a.points);
  const top1 = sorted[0];
  const top2 = sorted[1];
  const top3 = sorted[2];

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg overflow-y-auto overflow-x-hidden"> <div className="min-h-full flex items-start sm:items-center justify-center p-2 sm:p-4 md:p-6"> <div className={`bg-[#142018] border-2 border-[#C08A2E] text-[#F6F2E4] rounded-[12px] w-full shadow-2xl overflow-hidden transition-all animate-fadeIn my-4 sm:my-0 ${ isFullscreen ? 'fixed inset-2 sm:inset-4 max-w-none h-[calc(100vh-2rem)] flex flex-col' : 'max-w-5xl' }`} >
        {/* Projector Header Bar */}
        <div className="bg-[#1E2E23] px-4 sm:px-6 py-3.5 border-b border-[#2C4E3B] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-gradient-to-br from-[#C08A2E] to-[#8C5D12] text-[#142018] flex items-center justify-center font-bold shadow-md shrink-0">
              <Trophy className="w-5 h-5 text-[#142018]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#E6C26E] bg-[#142018] px-2 py-0.5 rounded border border-[#2C4E3B]">
                  <Radio className="w-3 h-3 text-[#4ea075] animate-pulse" />
                  Live Broadcast Layar Proyektor
                </span>
                <span className="text-[11px] text-[#A8BEAF] hidden md:inline">
                  Mode Tayang Siswa (Read-Only)
                </span>
              </div>
              <h3 className="font-serif-heading italic font-bold text-lg sm:text-xl md:text-2xl text-[#F6F2E4] tracking-wide">
                Papan Poin Keaktifan — {classNameTitle}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="px-2.5 sm:px-3 py-1.5 rounded-[6px] bg-[#2C4E3B] text-[#CFE0D3] hover:text-white hover:bg-[#3E6B52] border border-[#3E6B52] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isFullscreen ? 'Keluar Layar Penuh' : 'Mode Layar Penuh'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isFullscreen ? 'Kecilkan' : 'Layar Penuh'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#142018] text-[#CFE0D3] hover:text-white hover:bg-[#A63D3D] flex items-center justify-center transition-colors cursor-pointer border border-[#2C4E3B]"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Informative Status Banner (Read-only clarification) */}
        <div className="bg-[#1B2920] border-b border-[#2C4E3B]/80 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between text-xs text-[#CFE0D3] gap-2">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="w-4 h-4 text-[#C08A2E] shrink-0" />
            <span>
              <strong>Tampilan Khusus Layar Proyektor Kelas</strong>: Disorotkan ke dinding/TV untuk memotivasi siswa. Seluruh penambahan poin & presensi diatur oleh guru dari <em>Dashboard Guru</em>.
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[#C08A2E] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#4ea075] animate-ping inline-block" />
            <span>Tersinkronisasi Otomatis</span>
          </div>
        </div>

        {/* Main Display Area */}
        <div className={`p-4 sm:p-6 bg-[#0F1A13] ${isFullscreen ? 'flex-1 overflow-y-auto' : 'max-h-[70vh] overflow-y-auto'}`}>
          {/* Top 3 Podium Visuals */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 pt-2">
            {/* Rank 2 - Silver */}
            {top2 && (
              <div className="bg-[#18281E] border border-slate-400/50 rounded-[10px] p-3 sm:p-4 text-center flex flex-col items-center justify-end relative shadow-md order-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 text-slate-900 font-bold flex items-center justify-center text-sm sm:text-base mb-2 shadow">
                  🥈
                </div>
                <div className="font-semibold text-xs sm:text-base text-white truncate max-w-full">
                  {top2.name}
                </div>
                <div className="text-[10px] sm:text-xs text-[#A8BEAF] mb-1">Presensi No. {top2.no}</div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#142018] border border-slate-500/40 text-[#E0E7FF] font-serif-heading font-bold text-xs sm:text-sm">
                  <Star className="w-3 h-3 text-[#C08A2E] fill-[#C08A2E]" />
                  <span>{top2.points} Poin</span>
                </div>
                <div className="w-full bg-slate-500/20 h-1.5 rounded-full mt-2" />
              </div>
            )}

            {/* Rank 1 - Gold (Center & Taller) */}
            {top1 && (
              <div className="bg-gradient-to-b from-[#2A4030] to-[#1C2C22] border-2 border-[#C08A2E] rounded-[10px] p-3 sm:p-5 text-center flex flex-col items-center justify-end relative shadow-xl order-2 transform -translate-y-1">
                <div className="absolute -top-3 bg-[#C08A2E] text-[#142018] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                  ★ Peringkat 1
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C08A2E] text-[#142018] font-bold flex items-center justify-center text-base sm:text-lg mb-2 shadow-lg ring-2 ring-[#F6F2E4]/40">
                  🥇
                </div>
                <div className="font-bold text-sm sm:text-lg text-[#F6F2E4] truncate max-w-full">
                  {top1.name}
                </div>
                <div className="text-[10px] sm:text-xs text-[#C9D6CC] mb-1">Presensi No. {top1.no}</div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#142018] border border-[#C08A2E] text-[#C08A2E] font-serif-heading font-bold text-sm sm:text-base shadow">
                  <Star className="w-3.5 h-3.5 fill-[#C08A2E]" />
                  <span>{top1.points} Poin</span>
                </div>
                <div className="w-full bg-[#C08A2E]/30 h-2 rounded-full mt-2" />
              </div>
            )}

            {/* Rank 3 - Bronze */}
            {top3 && (
              <div className="bg-[#18281E] border border-[#B36A3C]/60 rounded-[10px] p-3 sm:p-4 text-center flex flex-col items-center justify-end relative shadow-md order-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#B36A3C] text-white font-bold flex items-center justify-center text-sm sm:text-base mb-2 shadow">
                  🥉
                </div>
                <div className="font-semibold text-xs sm:text-base text-white truncate max-w-full">
                  {top3.name}
                </div>
                <div className="text-[10px] sm:text-xs text-[#A8BEAF] mb-1">Presensi No. {top3.no}</div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#142018] border border-[#B36A3C]/50 text-[#FDBA74] font-serif-heading font-bold text-xs sm:text-sm">
                  <Star className="w-3 h-3 text-[#B36A3C] fill-[#B36A3C]" />
                  <span>{top3.points} Poin</span>
                </div>
                <div className="w-full bg-[#B36A3C]/20 h-1.5 rounded-full mt-2" />
              </div>
            )}
          </div>

          {/* Full Classroom Leaderboard List (Read-Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {sorted.map((student, idx) => {
              const rank = idx + 1;
              const isTop1 = rank === 1;
              const isTop2 = rank === 2;
              const isTop3 = rank === 3;

              return (
                <div
                  key={student.id}
                  className={`p-3 sm:p-3.5 rounded-[8px] border flex items-center justify-between transition-all ${
                    isTop1
                      ? 'bg-[#223528] border-[#C08A2E] text-white shadow-md'
                      : isTop2
                      ? 'bg-[#1D2E23] border-slate-500/60 text-white'
                      : isTop3
                      ? 'bg-[#1D2E23] border-[#B36A3C]/60 text-white'
                      : 'bg-[#142018] border-[#2C4E3B]/70 text-[#CFE0D3]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 ${
                        isTop1
                          ? 'bg-[#C08A2E] text-[#142018]'
                          : isTop2
                          ? 'bg-slate-300 text-slate-900'
                          : isTop3
                          ? 'bg-[#B36A3C] text-white'
                          : 'bg-[#2C4E3B] text-[#CFE0D3]'
                      }`}
                    >
                      {rank === 1 ? '1' : rank === 2 ? '2' : rank === 3 ? '3' : rank}
                    </span>

                    <div className="min-w-0">
                      <div className="font-semibold text-sm sm:text-base truncate text-white">
                        {student.name}
                      </div>
                      <div className="text-[11px] text-[#A8BEAF] flex items-center gap-1.5">
                        <span>No. {student.no}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-[#6EE7B7]">
                          <CheckCircle2 className="w-3 h-3" />
                          {student.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="text-right">
                      <div className="font-serif-heading font-bold text-base sm:text-lg text-[#C08A2E]">
                        {student.points} Poin
                      </div>
                      <div className="flex justify-end gap-0.5">
                        {Array.from({ length: Math.min(student.points, 7) }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="w-2.5 h-2.5 text-[#C08A2E] fill-[#C08A2E]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-3.5 bg-[#1E2E23] border-t border-[#2C4E3B] flex flex-wrap items-center justify-between text-xs text-[#CFE0D3] gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4ea075]" />
            <span>Mata Pelajaran: <strong>{subjectTitle}</strong> · 100% Aman dibagikan di proyektor kelas tanpa login siswa.</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-[5px] bg-[#142018] text-[#F6F2E4] hover:bg-[#2C4E3B] font-semibold cursor-pointer border border-[#2C4E3B] transition-colors"
          >
            Tutup Tampilan Proyektor
          </button>
        </div> 
    </div> 
  </div> 
</div> 
); 
};

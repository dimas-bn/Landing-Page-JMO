import React, { useState } from 'react';
import { Clock, Calculator, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const TimeSavingsCalculator: React.FC = () => {
  const [classCount, setClassCount] = useState<number>(5); // e.g. 5 classes
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(24); // e.g. 24 JP

  // Math:
  // Paper approach:
  // - Writing journal manually: ~3.5 minutes per JP session on paper vs ~1 minute digital
  //   => saves ~2.5 minutes per JP session, scaled by weeks/month (~4.3)
  // - Monthly recap calculation: ~25 mins per class per month manually vs instant 1-click digital
  // Total saved per month: (hoursPerWeek * 2.5 min/session * 4.3 weeks) + (classCount * 25 mins)
  const minutesSavedFromJournal = hoursPerWeek * 2.5 * 4.3;
  const minutesSavedFromRecap = classCount * 25;
  const minutesSavedPerMonth = minutesSavedFromJournal + minutesSavedFromRecap;
  const hoursSavedPerMonth = (minutesSavedPerMonth / 60).toFixed(1);
  const hoursSavedPerSemester = (Number(hoursSavedPerMonth) * 6).toFixed(0);

  return (
    <section className="py-16 md:py-20 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="notebook-page notebook-margin-line p-6 sm:p-9 pl-12 sm:pl-16 rounded-[8px] border border-[#D8CDB0] shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Calculator className="w-5 h-5 text-[#C08A2E]" />
          <span className="text-xs font-bold text-[#6E6252] uppercase tracking-wider">
            Kalkulator Efisiensi Administrasi Guru
          </span>
        </div>

        <h3 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#2C4E3B] italic mb-3">
          Berapa Waktu yang Bisa Anda Hemat dengan JMO?
        </h3>

        <p className="text-xs sm:text-sm text-[#1E2B22] mb-6">
          Geser nilai di bawah sesuai jumlah kelas yang Anda ampu dan jam mengajar mingguan Anda:
        </p>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-[6px] border border-[#D8CDB0]">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-[#1E2B22]">
                Jumlah Kelas yang Diampu:
              </label>
              <span className="font-serif-heading font-bold text-base text-[#2C4E3B] bg-[#EFEADA] px-2 py-0.5 rounded">
                {classCount} Kelas
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={classCount}
              onChange={e => setClassCount(Number(e.target.value))}
              className="w-full accent-[#2C4E3B] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#6E6252] mt-1">
              <span>1 Kelas</span>
              <span>8 Kelas</span>
              <span>15 Kelas</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[6px] border border-[#D8CDB0]">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-[#1E2B22]">
                Total Jam Pelajaran (JP) / Minggu:
              </label>
              <span className="font-serif-heading font-bold text-base text-[#2C4E3B] bg-[#EFEADA] px-2 py-0.5 rounded">
                {hoursPerWeek} JP
              </span>
            </div>
            <input
              type="range"
              min="6"
              max="40"
              value={hoursPerWeek}
              onChange={e => setHoursPerWeek(Number(e.target.value))}
              className="w-full accent-[#2C4E3B] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#6E6252] mt-1">
              <span>6 JP</span>
              <span>24 JP</span>
              <span>40 JP</span>
            </div>
          </div>
        </div>

        {/* Results Banner */}
        <div className="bg-[#2C4E3B] text-white rounded-[8px] p-5 sm:p-6 shadow-md border border-[#3E6B52] grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <div className="text-xs font-semibold text-[#CFE0D3] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C08A2E]" />
              <span>Estimasi Waktu Terhemat</span>
            </div>
            <div className="font-serif-heading text-2xl sm:text-3xl font-bold italic text-[#F6F2E4]">
              ~{hoursSavedPerMonth} Jam / Bulan
            </div>
            <p className="text-xs text-[#C9D6CC] mt-1">
              Atau setara <strong className="text-[#C08A2E] font-serif-heading text-sm">{hoursSavedPerSemester} Jam per Semester</strong> bebas stres hitung presensi!
            </p>
          </div>

          <div className="sm:border-l sm:border-[#3E6B52] sm:pl-6 space-y-2 text-xs text-[#CFE0D3]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C08A2E]" />
              <span>Rekap bulanan 1-klik tanpa kalkulator manual</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C08A2E]" />
              <span>Salin materi antar kelas paralel dalam 2 detik</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C08A2E]" />
              <span>Siap cetak atau ekspor ke Excel kapan saja</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

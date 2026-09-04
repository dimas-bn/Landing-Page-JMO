import React, { useState } from 'react';
import {
  BookOpen,
  Trophy,
  Table,
  ClipboardPaste,
  Check,
  Printer,
  FileSpreadsheet,
  Plus,
  Minus,
  Sparkles,
  RefreshCw,
  Award,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { INITIAL_STUDENTS_DEMO } from '../data/jmoContent';
import { StudentItem } from '../types';

interface InteractiveDemoProps {
  onOpenProjectorDemo: () => void;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ onOpenProjectorDemo }) => {
  const [activeTab, setActiveTab] = useState<'isi' | 'papan' | 'rekap' | 'setup'>('isi');

  // Form State
  const [selectedClass, setSelectedClass] = useState<string>('XI 7');
  const [subject, setSubject] = useState<string>('Matematika Wajib');
  const [periodFrom, setPeriodFrom] = useState<string>('1');
  const [periodTo, setPeriodTo] = useState<string>('3');
  const [material, setMaterial] = useState<string>(
    'Persamaan Kuadrat: Metode Pemfaktoran dan Rumus ABC. Latihan soal Bab 2.'
  );
  const [students, setStudents] = useState<StudentItem[]>(INITIAL_STUDENTS_DEMO);
  const [savedNotification, setSavedNotification] = useState<string | null>(null);
  const [isTextareaExpanded, setIsTextareaExpanded] = useState<boolean>(false);

  // Setup Massal State
  const [pasteText, setPasteText] = useState<string>(
    '1. Budi Prasetyo\n2. Citra Anindita\n3. Dedi Kurniawan\n4. Erna Kusuma\n5. Fahmi Reza'
  );

  // Attendance change handler
  const handleStatusChange = (id: string, status: StudentItem['status']) => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, status } : s))
    );
  };

  // Point step handler
  const handlePointChange = (id: string, delta: number) => {
    setStudents(prev =>
      prev.map(s => {
        if (s.id === id) {
          const newPoints = Math.max(0, Math.min(7, s.points + delta));
          return { ...s, points: newPoints };
        }
        return s;
      })
    );
  };

  // Save Simulation
  const handleSaveJournal = () => {
    setSavedNotification(
      `✓ Tersimpan — Jurnal KBM ${selectedClass} (Jam ke-${periodFrom}-${periodTo}) & presensi ${students.length} siswa berhasil dicatat ke Cloud!`
    );
    setTimeout(() => {
      setSavedNotification(null);
    }, 4500);
  };

  // Calculate live leaderboard for Papan Poin
  const sortedStudents = [...students].sort((a, b) => b.points - a.points);

  // Calculate monthly stats
  const totalMeetings = 12;
  const attendanceRekap = students.map((s, idx) => {
    const isPresent = s.status === 'Hadir' ? 12 : 11;
    const izinCount = s.status === 'Izin' ? 1 : 0;
    const sakitCount = s.status === 'Sakit' ? 1 : 0;
    const dispensasiCount = s.status === 'Dispensasi' ? 1 : 0;
    const alpaCount = s.status === 'Alpa' ? 1 : 0;
    const percent = Math.round((isPresent / totalMeetings) * 100);
    const avgScore = (s.points * 1.0).toFixed(1);

    return {
      no: s.no || idx + 1,
      name: s.name,
      h: isPresent,
      i: izinCount,
      s: sakitCount,
      d: dispensasiCount,
      a: alpaCount,
      percent,
      avgScore
    };
  });

  return (
    <section id="demo-interaktif" className="py-16 md:py-24 bg-[#18231C] border-y border-[#2C4E3B] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C4E3B] text-[#C08A2E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Playground</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-semibold italic text-[#F6F2E4] mb-3">
            Coba Langsung di Browser Anda
          </h2>
          <p className="text-[#C9D6CC] text-sm sm:text-base">
            Rasakan langsung betapa cepat dan alaminya mencatat jurnal guru, mengatur poin keaktifan,
            dan melihat rekap otomatis.
          </p>
        </div>

        {/* Notebook Simulator Container */}
        <div className="bg-[#1E2B22] rounded-[10px] border border-[#2C4E3B] shadow-2xl overflow-hidden">
          {/* Top Browser / App Tabs */}
          <div className="bg-[#2C4E3B] p-2 sm:p-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#3E6B52]">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
              {[
                { id: 'isi', label: '1. Isi Jurnal & Presensi', icon: BookOpen },
                { id: 'papan', label: '2. Papan Poin Proyektor', icon: Trophy },
                { id: 'rekap', label: '3. Rekap & Cetak', icon: Table },
                { id: 'setup', label: '4. Setup Paste Massal', icon: ClipboardPaste },
              ].map(t => {
                const Icon = t.icon;
                const active = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as any)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-[5px] text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[#F6F2E4] text-[#1E2B22] shadow-sm font-bold'
                        : 'text-[#CFE0D3] hover:bg-[#3E6B52]/60 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#3E6B52]' : 'text-[#C08A2E]'}`} />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-[#C9D6CC]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Mode Uji Coba Interaktif</span>
            </div>
          </div>

          {/* Tab Content Box - Real Notebook Paper Background with strict margin padding */}
          <div className="py-6 px-4 pl-12 sm:py-8 sm:px-7 sm:pl-16 md:pl-20 notebook-page notebook-margin-line min-h-[500px]">
            {/* TAB 1: ISI JURNAL */}
            {activeTab === 'isi' && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8CDB0] pb-3 mb-5">
                  <div>
                    <span className="text-[11px] font-bold text-[#6E6252] uppercase tracking-wider">
                      Jurnal Mengajar Online
                    </span>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold italic text-[#2C4E3B]">
                      Senin, 24 Agustus 2026
                    </h3>
                  </div>

                  {/* Suggestion Chips */}
                  <div className="flex items-center gap-1.5 bg-[#EFEADA] p-1 rounded-[5px] border border-[#B7C6CB]">
                    <span className="text-[10px] font-bold text-[#6E6252] uppercase px-1.5">
                      Jadwal Hari Ini:
                    </span>
                    <button
                      onClick={() => {
                        setSelectedClass('XI.7');
                        setSubject('Matematika Wajib');
                        setPeriodFrom('1');
                        setPeriodTo('3');
                      }}
                      className="px-2 py-0.5 text-xs rounded bg-[#2C4E3B] text-white font-semibold cursor-pointer"
                    >
                      XI.7 (Jam 5-6)
                    </button>
                    <button
                      onClick={() => {
                        setSelectedClass('XI.8');
                        setSubject('Matematika Peminatan');
                        setPeriodFrom('7');
                        setPeriodTo('8');
                      }}
                      className="px-2 py-0.5 text-xs rounded bg-white text-[#2C4E3B] border border-[#B7C6CB] font-semibold cursor-pointer hover:bg-[#F6F2E4]"
                    >
                      XI.8 (Jam 9-10)
                    </button>
                  </div>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E2B22] mb-1">
                      Kelas
                    </label>
                    <select
                      value={selectedClass}
                      onChange={e => setSelectedClass(e.target.value)}
                      className="w-full bg-white border border-[#B7C6CB] rounded-[4px] px-3 py-2 text-sm text-[#1E2B22] font-medium"
                    >
                      <option value="X.3">X.3</option>
                      <option value="XI.7">XI.7</option>
                      <option value="XII.5">XII.5</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E2B22] mb-1">
                      Jam Ke- (Dari - Sampai)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="1"
                        max="12"
                        value={periodFrom}
                        onChange={e => setPeriodFrom(e.target.value)}
                        className="w-1/2 bg-white border border-[#B7C6CB] rounded-[4px] px-2.5 py-2 text-sm text-center font-medium"
                      />
                      <span className="self-center text-sm font-bold text-[#6E6252]">—</span>
                      <input
                        type="number"
                        min="1"
                        max="12"
                        value={periodTo}
                        onChange={e => setPeriodTo(e.target.value)}
                        className="w-1/2 bg-white border border-[#B7C6CB] rounded-[4px] px-2.5 py-2 text-sm text-center font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E2B22] mb-1">
                      Mata Pelajaran
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      className="w-full bg-white border border-[#B7C6CB] rounded-[4px] px-3 py-2 text-sm text-[#1E2B22] font-medium"
                    />
                  </div>
                </div>

                {/* Topic textarea */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-[#1E2B22] uppercase tracking-wide">
                      Materi / Catatan KBM
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsTextareaExpanded(!isTextareaExpanded)}
                      className="text-xs text-[#2C4E3B] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      {isTextareaExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                      <span>{isTextareaExpanded ? 'Perkecil' : 'Perbesar'}</span>
                    </button>
                  </div>
                  <textarea
                    rows={isTextareaExpanded ? 6 : 2}
                    value={material}
                    onChange={e => setMaterial(e.target.value)}
                    className="w-full bg-white border border-[#B7C6CB] rounded-[4px] p-2.5 text-sm text-[#1E2B22] resize-y leading-relaxed font-sans"
                    placeholder="Tulis materi pembelajaran hari ini..."
                  />
                </div>

                {/* Student Attendance List */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-serif-heading font-bold italic text-sm text-[#2C4E3B]">
                      Daftar Presensi & Poin Keaktifan ({students.length} Siswa)
                    </h4>
                    <span className="text-[11px] text-[#6E6252]">
                      Default poin: 3 (0-7 poin)
                    </span>
                  </div>

                  <div className="space-y-2 max-h-[330px] overflow-y-auto pr-1">
                    {students.map(student => (
                      <div
                        key={student.id}
                        className="bg-white/95 border border-[#D8CDB0] rounded-[5px] p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:shadow-xs transition-shadow"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-6 text-xs font-bold text-[#6E6252] text-right">
                            {student.no}.
                          </span>
                          <div>
                            <span className="text-sm font-semibold text-[#1E2B22]">
                              {student.name}
                            </span>
                            {student.note && (
                              <span className="text-[11px] text-[#B36A3C] block italic">
                                Ket: {student.note}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Status buttons & Stepper */}
                        <div className="flex flex-wrap items-center gap-2 pl-8 sm:pl-0">
                          {/* Attendance Chips */}
                          <div className="flex items-center gap-1">
                            {[
                              { label: 'Hadir', bg: 'bg-[#3E6B52]' },
                              { label: 'Izin', bg: 'bg-[#C08A2E]' },
                              { label: 'Sakit', bg: 'bg-[#B36A3C]' },
                              { label: 'Dispensasi', bg: 'bg-[#5B6B8C]' },
                              { label: 'Alpa', bg: 'bg-[#A63D3D]' },
                            ].map(s => {
                              const active = student.status === s.label;
                              return (
                                <button
                                  key={s.label}
                                  type="button"
                                  onClick={() => handleStatusChange(student.id, s.label as any)}
                                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border transition-all cursor-pointer ${
                                    active
                                      ? `${s.bg} text-white border-transparent shadow-xs`
                                      : 'bg-white text-[#1E2B22] border-[#B7C6CB] hover:bg-[#F6F2E4]'
                                  }`}
                                >
                                  {s.label.slice(0, 1)}
                                  <span className="hidden lg:inline">{s.label.slice(1)}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Point Stepper */}
                          <div className="flex items-center gap-1 bg-[#F6F2E4] px-2 py-0.5 rounded border border-[#D8CDB0]">
                            <span className="text-[10px] font-bold text-[#6E6252] uppercase mr-1">
                              Poin
                            </span>
                            <button
                              type="button"
                              onClick={() => handlePointChange(student.id, -1)}
                              disabled={student.points <= 0}
                              className="w-5 h-5 rounded-full bg-white border border-[#B7C6CB] text-xs font-bold flex items-center justify-center text-[#2C4E3B] disabled:opacity-30 cursor-pointer"
                            >
                              -
                            </button>
                            <span
                              className={`font-serif-heading font-bold text-sm w-4 text-center ${
                                student.points > 3
                                  ? 'text-[#3E6B52]'
                                  : student.points < 3
                                  ? 'text-[#A63D3D]'
                                  : 'text-[#1E2B22]'
                              }`}
                            >
                              {student.points}
                            </span>
                            <button
                              type="button"
                              onClick={() => handlePointChange(student.id, 1)}
                              disabled={student.points >= 7}
                              className="w-5 h-5 rounded-full bg-white border border-[#B7C6CB] text-xs font-bold flex items-center justify-center text-[#2C4E3B] disabled:opacity-30 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Save button & Notification toast */}
                {savedNotification && (
                  <div className="bg-[#E4EEE7] border border-[#3E6B52] text-[#2C4E3B] text-xs font-semibold p-3 rounded-[5px] mb-3 flex items-center gap-2 animate-fadeIn">
                    <Check className="w-4 h-4 text-[#3E6B52]" />
                    <span>{savedNotification}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleSaveJournal}
                    className="w-full sm:w-auto px-6 py-3 rounded-[5px] bg-[#2C4E3B] hover:bg-[#3E6B52] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>💾 Simpan Jurnal Sekarang</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('papan')}
                    className="w-full sm:w-auto px-4 py-3 rounded-[5px] bg-white hover:bg-[#F6F2E4] text-[#2C4E3B] border border-[#B7C6CB] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Trophy className="w-4 h-4 text-[#C08A2E]" />
                    <span>Lihat Ranking Papan Poin →</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: PAPAN POIN LIVE PROYEKTOR (VISUAL PREVIEW) */}
            {activeTab === 'papan' && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8CDB0] pb-3 mb-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#6E6252] uppercase tracking-wider">
                      Pratinjau Layar Proyektor Kelas (Read-Only)
                    </span>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold italic text-[#2C4E3B] flex items-center gap-2">
                      <span>🚀 Papan Poin Kelas {selectedClass}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('isi')}
                      className="px-3 py-1.5 text-xs font-semibold rounded-[5px] bg-white hover:bg-[#F6F2E4] text-[#2C4E3B] border border-[#B7C6CB] transition-colors cursor-pointer"
                    >
                      ✏️ Edit Poin di Form Jurnal
                    </button>
                    <button
                      type="button"
                      onClick={onOpenProjectorDemo}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-[5px] bg-[#C08A2E] hover:bg-[#d69c36] text-[#1E2B22] shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Buka Tampilan Proyektor</span>
                    </button>
                  </div>
                </div>

                <div className="bg-[#142018] text-[#F6F2E4] rounded-[8px] p-4 sm:p-5 mb-5 shadow-lg border border-[#2C4E3B]">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#2C4E3B]">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#C08A2E]" />
                      <span className="font-serif-heading italic font-semibold text-sm sm:text-base">
                        Peringkat Keaktifan Siswa (Tersinkron Otomatis)
                      </span>
                    </div>
                    <span className="text-[11px] text-[#A8BEAF] bg-[#1E2E23] px-2.5 py-0.5 rounded border border-[#2C4E3B] font-medium">
                      📡 Siap Sorot ke Proyektor / TV
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {sortedStudents.map((student, rankIdx) => {
                      const isTop3 = rankIdx < 3;
                      const badgeColors = [
                        'bg-[#C08A2E] text-[#1E2B22]', // Gold #1
                        'bg-slate-300 text-slate-900', // Silver #2
                        'bg-[#B36A3C] text-white', // Bronze #3
                      ];

                      return (
                        <div
                          key={student.id}
                          className={`flex items-center justify-between p-2.5 rounded-[6px] border ${
                            isTop3
                              ? 'bg-[#223528] border-[#3E6B52] text-white'
                              : 'bg-[#18231C] border-[#2C4E3B]/80 text-[#CFE0D3]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                                isTop3 ? badgeColors[rankIdx] : 'bg-[#1E2B22] text-[#C9D6CC]'
                              }`}
                            >
                              {rankIdx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold truncate max-w-[140px] sm:max-w-[180px]">
                              {student.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-serif-heading text-sm font-bold text-[#C08A2E]">
                              {student.points} Poin
                            </span>
                            <span className="text-[11px] text-[#6EE7B7]">
                              ✓ {student.status}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-3.5 bg-[#EFEADA] border border-[#B7C6CB] rounded-[6px] text-xs text-[#6E6252] flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-[#C08A2E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1E2B22]">Pengaturan Poin:</strong> Penambahan atau pengurangan poin keaktifan siswa dilakukan oleh guru di tab <strong>1. Isi Jurnal & Presensi</strong>. Layar proyektor akan langsung memperbarui posisi ranking secara otomatis tanpa perlu diklik manual di proyektor.
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: REKAP BULANAN */}
            {activeTab === 'rekap' && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8CDB0] pb-3 mb-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#6E6252] uppercase tracking-wider">
                      Laporan Administrasi Otomatis
                    </span>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold italic text-[#2C4E3B]">
                      Rekap Kehadiran Bulanan — {selectedClass}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-3 py-1.5 text-xs font-semibold rounded-[5px] bg-[#2C4E3B] text-white hover:bg-[#3E6B52] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Cetak / PDF</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => alert('Simulasi Export Excel: Data presensi dan poin 8 siswa berhasil diunduh dalam format .xlsx')}
                      className="px-3 py-1.5 text-xs font-semibold rounded-[5px] bg-white border border-[#B7C6CB] text-[#2C4E3B] hover:bg-[#F6F2E4] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#3E6B52]" />
                      <span>Export Excel</span>
                    </button>
                  </div>
                </div>

                <div className="text-xs text-[#6E6252] mb-3">
                  Periode: <strong className="text-[#1E2B22]">Agustus 2026</strong> · Total Tatap Muka: <strong className="text-[#1E2B22]">12 Pertemuan</strong>
                </div>

                {/* Recap Table */}
                <div className="overflow-x-auto bg-white border border-[#D8CDB0] rounded-[6px] shadow-sm mb-4">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#EFEADA] border-b border-[#D8CDB0] text-[#2C4E3B] font-bold uppercase tracking-wider text-[11px]">
                        <th className="p-2.5 text-center">No</th>
                        <th className="p-2.5">Nama Siswa</th>
                        <th className="p-2.5 text-center bg-[#E4EEE7] text-[#2C4E3B]">Hadir</th>
                        <th className="p-2.5 text-center">Izin</th>
                        <th className="p-2.5 text-center">Sakit</th>
                        <th className="p-2.5 text-center">Disp</th>
                        <th className="p-2.5 text-center text-[#A63D3D]">Alpa</th>
                        <th className="p-2.5 text-center font-bold">% Hadir</th>
                        <th className="p-2.5 text-center">Rata Poin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D8CDB0]/70 text-[#1E2B22]">
                      {attendanceRekap.map(row => (
                        <tr key={row.no} className="hover:bg-[#F6F2E4]/60">
                          <td className="p-2.5 text-center font-semibold text-[#6E6252]">{row.no}</td>
                          <td className="p-2.5 font-medium">{row.name}</td>
                          <td className="p-2.5 text-center font-bold text-[#3E6B52] bg-[#E4EEE7]/40">{row.h}</td>
                          <td className="p-2.5 text-center text-[#C08A2E]">{row.i}</td>
                          <td className="p-2.5 text-center text-[#B36A3C]">{row.s}</td>
                          <td className="p-2.5 text-center text-[#5B6B8C]">{row.d}</td>
                          <td className="p-2.5 text-center font-bold text-[#A63D3D]">{row.a}</td>
                          <td className="p-2.5 text-center font-bold text-[#2C4E3B]">{row.percent}%</td>
                          <td className="p-2.5 text-center font-serif-heading font-bold">{row.avgScore}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#E4EEE7] border border-[#3E6B52] rounded-[6px] p-3 text-xs text-[#2C4E3B]">
                  <strong>✨ Tanpa Hitung Manual:</strong> Persentase kehadiran dan rata-rata poin di atas terhitung otomatis setiap kali Anda selesai menekan "Simpan Jurnal" di kelas.
                </div>
              </div>
            )}

            {/* TAB 4: SETUP PASTE MASSAL */}
            {activeTab === 'setup' && (
              <div>
                <div className="flex items-center justify-between border-b border-[#D8CDB0] pb-3 mb-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#6E6252] uppercase tracking-wider">
                      Setup Kilat Tanpa Ketik Satu-Satu
                    </span>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold italic text-[#2C4E3B]">
                      📋 Tambah Siswa Banyak Sekaligus
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#6E6252] mb-3">
                  Copy daftar nama dari file Dapodik, Microsoft Excel, atau Word sekolah Anda, lalu paste di kotak berikut:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E2B22] mb-1">
                      Kotak Tempel / Paste (1 Siswa per Baris)
                    </label>
                    <textarea
                      rows={6}
                      value={pasteText}
                      onChange={e => setPasteText(e.target.value)}
                      className="w-full bg-white border border-[#B7C6CB] rounded-[5px] p-2.5 text-xs font-mono text-[#1E2B22]"
                      placeholder="1. Nama Siswa 1&#10;2. Nama Siswa 2&#10;..."
                    />
                    <button
                      type="button"
                      onClick={() => alert(`Berhasil! ${pasteText.split('\n').filter(b => b.trim()).length} siswa siap dimasukkan ke kelas.`)}
                      className="mt-2 w-full py-2 bg-[#2C4E3B] text-white rounded-[5px] font-semibold text-xs hover:bg-[#3E6B52] cursor-pointer"
                    >
                      + Tambahkan Semua Siswa ke Kelas Ini
                    </button>
                  </div>

                  {/* Real-time detected preview */}
                  <div className="bg-white border border-[#D8CDB0] rounded-[6px] p-3 shadow-inner">
                    <span className="text-xs font-bold text-[#6E6252] uppercase tracking-wide block mb-2">
                      Hasil Deteksi Otomatis ({pasteText.split('\n').filter(b => b.trim()).length} Siswa):
                    </span>
                    <div className="space-y-1.5 max-h-[160px] overflow-y-auto text-xs text-[#1E2B22]">
                      {pasteText
                        .split('\n')
                        .filter(b => b.trim())
                        .map((line, idx) => (
                          <div
                            key={idx}
                            className="p-1.5 bg-[#F6F2E4] rounded flex items-center justify-between border border-[#D8CDB0]"
                          >
                            <span className="font-medium">{line}</span>
                            <span className="text-[10px] text-[#3E6B52] font-bold">Siap Disimpan ✓</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { TimeSavingsCalculator } from './components/TimeSavingsCalculator';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ProjectorModal } from './components/ProjectorModal';
import { Sparkles, Trophy, ArrowRight } from 'lucide-react';

export default function App() {
  const [isProjectorModalOpen, setIsProjectorModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1E2B22] text-[#1E2B22] font-sans selection:bg-[#C08A2E] selection:text-[#1E2B22] relative">
      {/* Top sticky alert announcement */}
      <div className="bg-[#2C4E3B] text-[#F6F2E4] py-2 px-4 text-center text-xs border-b border-[#3E6B52] flex items-center justify-center gap-2">
        <span className="bg-[#C08A2E] text-[#1E2B22] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
          Versi Terbaru
        </span>
        <span>
          JMO kini dilengkapi fitur <strong>🚀 Papan Poin Live</strong> & <strong>⚡ Performa yang sat-set</strong>!
        </span>
        <a
          href="#demo-interaktif"
          className="underline font-semibold text-[#C08A2E] hover:text-[#e2a842] hidden sm:inline"
        >
          Coba Sekarang →
        </a>
      </div>

      {/* Main Navbar */}
      <Navbar onOpenProjectorDemo={() => setIsProjectorModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenProjectorDemo={() => setIsProjectorModalOpen(true)} />

        {/* Interactive Simulator Playground */}
        <InteractiveDemo onOpenProjectorDemo={() => setIsProjectorModalOpen(true)} />

        {/* Features Deep Dive */}
        <Features />

        {/* Comparison: Paper vs JMO */}
        <Comparison />

        {/* Time Savings ROI Calculator */}
        <TimeSavingsCalculator />

        {/* Pricing Options */}
        <Pricing />

        {/* Testimonials and Community */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Projector Leaderboard Simulation Modal */}
      <ProjectorModal
        isOpen={isProjectorModalOpen}
        onClose={() => setIsProjectorModalOpen(false)}
      />

      {/* Floating CTA bar on mobile bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-[#1E2B22]/95 backdrop-blur-md border-t border-[#2C4E3B] md:hidden z-40 flex items-center justify-between gap-3 shadow-2xl">
        <button
          onClick={() => setIsProjectorModalOpen(true)}
          className="flex-1 py-2.5 px-3 bg-[#2C4E3B] text-white text-xs font-semibold rounded-[5px] border border-[#3E6B52] flex items-center justify-center gap-1"
        >
          <Trophy className="w-3.5 h-3.5 text-[#C08A2E]" />
          <span>Demo Proyektor</span>
        </button>

        <a
          href="#harga"
          className="flex-1 py-2.5 px-3 bg-[#C08A2E] text-[#1E2B22] text-xs font-bold rounded-[5px] text-center shadow-sm flex items-center justify-center gap-1"
        >
          <span>Trial 7 Hari Gratis</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

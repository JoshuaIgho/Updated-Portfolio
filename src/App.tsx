import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Guestbook from './components/Guestbook';
import { ArrowUp, Terminal, Cpu, FileClock } from 'lucide-react';

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbfbfb] text-black font-sans flex flex-col justify-between selection:bg-black selection:text-white pb-12">
      {/* 00 // STARK SYSTEM HEADER */}
      <Header />

      {/* PRIMARY FLOW CONTAINER */}
      <main className="flex-grow space-y-12 sm:space-y-16">
        
        {/* 01 // MANIFESTO & SYSTEM SANDBOX */}
        <Hero />

        {/* 02 // SELECTED WORKS & INTEGRATIONS */}
        <Projects />

        {/* 03 // PROFESSIONAL TIMELINE */}
        <Experience />

        {/* 04 // COMPREHENSIVE SKILLS MATRIX */}
        <Skills />

        {/* 05 // SYSTEM STATE GUESTBOOK */}
        <Guestbook />

      </main>

      {/* STARK BRUTALIST FOOTER SEPARATOR */}
      <footer className="mt-16 sm:mt-24 border-t-2 border-black bg-black text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 pb-10 border-b border-neutral-800">
          
          {/* Logo Brand Descriptor */}
          <div className="flex items-center gap-3">
            <div className="bg-white text-black p-2 border border-white shadow-[3px_3px_0px_#ffffff] flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-display font-black tracking-tight leading-none uppercase">
                KAELEN MERCER // SYSTEMS WORKSPACE
              </h4>
              <p className="text-[10px] font-mono text-neutral-400 mt-1 uppercase">
                CRISP DESIGN AESTHETICS // PIXEL RIGOR & LATENCY MASTER
              </p>
            </div>
          </div>

          {/* Core System Telemetries */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-[10px] text-neutral-400">
            <div>
              <span className="text-neutral-500 block uppercase font-bold">// STORAGE STATE:</span>
              <span className="text-neutral-200 uppercase font-medium">LOCAL_STORAGE</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase font-bold">// ENGINE:</span>
              <span className="text-neutral-200 uppercase font-medium">REACT + TAILWIND_V4</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-neutral-500 block uppercase font-bold">// SECURE LATENCY:</span>
              <span className="text-amber-300 font-bold bg-neutral-900 border border-neutral-800 px-1.5 py-0.5 leading-none">
                FIXED L1_SPEED
              </span>
            </div>
          </div>

        </div>

        {/* Secondary Bottom Footer row */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="text-center sm:text-left">
            <span>© 2026 KAEL MERCER. ALL CHANNELS SECURED. MADE IN COIL INDUSTRIAL RUNTIMES.</span>
          </div>
          
          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="px-3 py-2 bg-neutral-900 hover:bg-white hover:text-black border border-neutral-800 hover:border-black font-extrabold text-[10px] uppercase flex items-center gap-1.5 brutalist-btn-transition cursor-pointer"
          >
            BACK TO ZERO [00]
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}

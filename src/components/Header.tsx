import React from 'react';
import { PERSONAL_INFO } from '../data';
import { Terminal, Shield, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black select-none">
      {/* Top Status Alert Ticker */}
      <div className="bg-white text-black text-[11px] font-mono py-1.5 px-4 overflow-hidden border-b-2 border-black flex items-center justify-between">
        <div className="flex items-center gap-2 whitespace-nowrap animate-marquee">
          <span className="inline-block w-2 h-2 rounded-full bg-black animate-pulse"></span>
          <span>STATUS: {PERSONAL_INFO.status.toUpperCase()}</span>
          <span className="text-gray-400">|</span>
          <span>LOC: {PERSONAL_INFO.location.toUpperCase()}</span>
          <span className="text-gray-400">|</span>
          <span>SYSTEM TIME: {new Date().toUTCString().slice(0, 25).toUpperCase()} UTC</span>
          <span className="text-gray-400">|</span>
          <span>MINIMAL_INTERFACE v1.0.0</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[10px] text-gray-500 font-mono">
          <span>CONNECTION: READY</span>
          <span>CLEAN MODE</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Logo Brand Block */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0px_#000000] flex items-center justify-center">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-base font-display font-black tracking-tight leading-none">
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <p className="text-[9px] font-mono text-gray-500 leading-none mt-1 uppercase tracking-wider">
              {PERSONAL_INFO.title.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Navigation Actions */}
        <nav className="flex flex-wrap items-center gap-1 sm:gap-2 font-mono text-[11px] sm:text-xs">
          <button
            onClick={() => scrollTo('about')}
            className="px-2.5 py-1 border border-transparent hover:border-black hover:bg-black hover:text-white brutalist-btn-transition cursor-pointer font-bold uppercase tracking-wider text-[11px]"
          >
            [01] SYSTEM
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="px-2.5 py-1 border border-transparent hover:border-black hover:bg-black hover:text-white brutalist-btn-transition cursor-pointer font-bold uppercase tracking-wider text-[11px]"
          >
            [02] WORKS
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="px-2.5 py-1 border border-transparent hover:border-black hover:bg-black hover:text-white brutalist-btn-transition cursor-pointer font-bold uppercase tracking-wider text-[11px]"
          >
            [03] CHRONICLE
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="px-2.5 py-1 border border-transparent hover:border-black hover:bg-black hover:text-white brutalist-btn-transition cursor-pointer font-bold uppercase tracking-wider text-[11px]"
          >
            [04] MATRIX
          </button>
          <button
            onClick={() => scrollTo('guestbook')}
            className="px-2.5 py-1 border border-transparent hover:border-black hover:bg-black hover:text-white brutalist-btn-transition cursor-pointer font-bold uppercase tracking-wider text-[11px]"
          >
            [05] COMMITS
          </button>

          {/* Stark Action Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="ml-1 px-3.5 py-1.5 bg-white text-black border-2 border-black font-extrabold shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none brutalist-btn-transition flex items-center gap-1 leading-none text-center text-[11px]"
          >
            CONTACT
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </div>

      {/* Embedded scrolling css animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </header>
  );
}

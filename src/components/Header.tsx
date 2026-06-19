import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { Terminal, Shield, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[#0d0e11] select-none">
      {/* Top Status Alert Ticker */}
      <div className="bg-white text-black text-[11px] font-mono py-1.5 px-4 overflow-hidden border-b-2 border-[#0d0e11] flex items-center justify-between">
        <div className="flex items-center gap-2 whitespace-nowrap animate-marquee">
          <span className="inline-block w-2 h-2 rounded-full bg-[#0d0e11] animate-pulse"></span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 relative">
        {/* Logo Brand Block */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-[#0d0e11] px-3 py-1.5 border-2 border-[#0d0e11] shadow-[3px_3px_0px_#0d0e11] flex items-center justify-center font-mono font-black text-sm tracking-wider select-none">
            // JI
          </div>
          <div>
            <h1 className="text-base font-display font-black tracking-tight leading-none text-[#0d0e11]">
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <p className="text-[9px] font-mono text-gray-500 leading-none mt-1 uppercase tracking-wider">
              {PERSONAL_INFO.title.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Navigation Actions - Desktop version */}
        <nav className="nav-desktop items-center gap-2 font-mono text-[11px] sm:text-xs">
          <button
            onClick={() => scrollTo('about')}
            className="px-2.5 py-1.5 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [01] SYSTEM
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="px-2.5 py-1.5 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [02] WORKS
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="px-2.5 py-1.5 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [03] CHRONICLE
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="px-2.5 py-1.5 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [04] MATRIX
          </button>
          <button
            onClick={() => scrollTo('guestbook')}
            className="px-2.5 py-1.5 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [05] COMMITS
          </button>

          {/* Stark Action Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="ml-1 px-3.5 py-2.5 bg-[#0d0e11] text-white border-2 border-[#0d0e11] font-black uppercase shadow-[3px_3px_0px_#94a3b8] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#94a3b8] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 flex items-center gap-1 leading-none text-center text-[11px] cursor-pointer"
          >
            CONTACT
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Stark structural hamburger button for mobile view - Hidden on desktop */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-mobile-btn p-2 border-2 border-[#0d0e11] bg-white text-[#0d0e11] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer items-center justify-center select-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5 flex-shrink-0" /> : <Menu className="w-5 h-5 flex-shrink-0" />}
        </button>
      </div>

      {/* Mobile Absolute Dropdown Overlay - stacks cleanly with explicit breathing room */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 right-0 bg-white border-b-2 border-[#0d0e11] p-6 shadow-[0_8px_0px_rgba(13,14,17,0.15)] flex flex-col gap-3 font-mono text-[12px] nav-mobile-dropdown z-50">
          <button
            onClick={() => { scrollTo('about'); setIsOpen(false); }}
            className="w-full text-left px-4 py-3 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [01] SYSTEM
          </button>
          <button
            onClick={() => { scrollTo('projects'); setIsOpen(false); }}
            className="w-full text-left px-4 py-3 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [02] WORKS
          </button>
          <button
            onClick={() => { scrollTo('experience'); setIsOpen(false); }}
            className="w-full text-left px-4 py-3 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [03] CHRONICLE
          </button>
          <button
            onClick={() => { scrollTo('skills'); setIsOpen(false); }}
            className="w-full text-left px-4 py-3 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [04] MATRIX
          </button>
          <button
            onClick={() => { scrollTo('guestbook'); setIsOpen(false); }}
            className="w-full text-left px-4 py-3 border-2 border-[#0d0e11] bg-white text-[#0d0e11] font-black uppercase tracking-wider text-[11px] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 cursor-pointer"
          >
            [05] COMMITS
          </button>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-4 py-3 bg-[#0d0e11] text-white border-2 border-[#0d0e11] font-black uppercase tracking-wider shadow-[3px_3px_0px_#94a3b8] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#94a3b8] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 flex items-center justify-center gap-1.5 cursor-pointer text-[11px]"
          >
            CONTACT
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Embedded scrolling css animations and media queries for exact 992px breakpoint */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }

        @media (min-width: 992px) {
          .nav-desktop {
            display: flex !important;
          }
          .nav-mobile-btn {
            display: none !important;
          }
          .nav-mobile-dropdown {
            display: none !important;
          }
        }
        @media (max-width: 991.98px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { Settings, Download } from 'lucide-react';

export default function Hero() {
  // Real-time server diagnostics simulation
  const [systemLatency, setSystemLatency] = useState<string>('0.92');
  const [cpuTemp, setCpuTemp] = useState<string>('38.2');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Live metrics tickers
    const interval = setInterval(() => {
      const baseTime = 0.4 + Math.random() * 0.7;
      setSystemLatency(baseTime.toFixed(2));
      
      const temp = 37.5 + Math.random() * 2;
      setCpuTemp(temp.toFixed(1));
    }, 1200);

    // Keep active session time synced in UTC / Local format
    const updateTime = () => {
      const date = new Date();
      const utcString = date.toISOString().slice(11, 19) + ' UTC';
      const localString = date.toTimeString().slice(0, 8) + ' LOCAL';
      setCurrentTime(`${utcString} | ${localString}`);
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <section id="about" className="py-8 md:py-16 px-6 md:px-8 max-w-[1440px] mx-auto scroll-mt-24 w-full">
      
      {/* Massive Neo-Brutalist Headline Brand Block */}
      <div className="bg-white border-2 border-[#0d0e11] p-6 sm:p-10 mb-8 shadow-[6px_6px_0px_#0d0e11] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#0d0e11] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-100 select-none">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
          <div>
            {/* Minimal Cool-Neutral Pulse Tag */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white text-black border border-[#0d0e11] text-[10px] font-mono tracking-wider mb-4 uppercase font-bold">
              <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-ping"></span>
              CORE_WORKSTATION // READY_01
            </div>
            
            <h1 
              className="font-display font-black text-[#0d0e11] tracking-tight leading-[0.95] uppercase"
              style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 3.8rem)" }}
            >
              JOSHUA IGHO
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold text-zinc-500 uppercase tracking-widest mt-2">
              FULL-STACK DEVELOPER
            </p>
          </div>

          <div className="flex items-center">
            {/* Status Badge with Crisp Pure White background and stark black text */}
            <span className="inline-flex items-center gap-2 border-2 border-[#0d0e11] bg-[#ffffff] px-3.5 py-2 font-mono text-xs font-black text-[#000000] uppercase shadow-[4px_4px_0px_#0d0e11] select-none">
              <span className="blink-slate-indicator inline-block shrink-0"></span>
              STATUS: AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </div>
      </div>

      {/* Intro Hero Board Split-Screen Grid transitioning at 992px */}
      <div className="split-layout items-stretch">
        
        {/* LEFT SIDE: Terminal-Inspired Window */}
        <div className="split-layout-left bg-white border-2 border-[#0d0e11] shadow-[6px_6px_0px_#0d0e11] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#0d0e11] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-100 flex flex-col overflow-hidden h-full">
          {/* Terminal Titlebar/Header */}
          <div className="bg-[#0d0e11] text-[#e2e8f0] px-4 py-3 flex items-center justify-between border-b-2 border-[#0d0e11] font-mono text-xs select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black/30 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black/30 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black/30 inline-block"></span>
            </div>
            <div className="font-bold text-[10px] sm:text-xs tracking-wider text-[#94a3b8] font-mono">
              terminal@joshua:~$
            </div>
            <div className="text-[9px] text-zinc-500 font-mono font-medium">
              BASH_LOG v1.0.4
            </div>
          </div>
          
          {/* Terminal Custom Content Block - Deep Charcoal-Black #1a1d24, Silver-White #e2e8f0 text, Muted Steel Gray #94a3b8 commands */}
          <div className="p-5 bg-[#1a1d24] text-[#e2e8f0] font-mono text-[11px] sm:text-xs flex-1 leading-relaxed overflow-x-auto selection:bg-[#94a3b8]/30 selection:text-[#e2e8f0] space-y-4">
            
            <div>
              <div className="text-[#94a3b8] font-bold flex items-center gap-1.5 select-none text-[10px]">
                <span>terminal@joshua:~$</span>
                <span className="text-[#94a3b8]/70 font-medium">whoami</span>
              </div>
              <p className="text-[#e2e8f0] font-bold pl-3 mt-0.5">&gt; Joshua Igho</p>
            </div>

            <div>
              <div className="text-[#94a3b8] font-bold flex items-center gap-1.5 select-none text-[10px]">
                <span>terminal@joshua:~$</span>
                <span className="text-[#94a3b8]/70 font-medium">role</span>
              </div>
              <p className="text-[#e2e8f0] font-bold pl-3 mt-0.5">&gt; Full-Stack Developer</p>
            </div>

            <div>
              <div className="text-[#94a3b8] font-bold flex items-center gap-1.5 select-none text-[10px]">
                <span>terminal@joshua:~$</span>
                <span className="text-[#94a3b8]/70 font-medium">stack</span>
              </div>
              <div className="text-[#e2e8f0] font-bold pl-3 mt-0.5 space-y-0.5">
                <p>&gt; React</p>
                <p>&gt; Node.js</p>
                <p>&gt; Express.js</p>
                <p>&gt; PostgreSQL</p>
                <p>&gt; JavaScript</p>
                <p>&gt; TypeScript</p>
              </div>
            </div>

            <div>
              <div className="text-[#94a3b8] font-bold flex items-center gap-1.5 select-none text-[10px]">
                <span>terminal@joshua:~$</span>
                <span className="text-[#94a3b8]/70 font-medium">current_status</span>
              </div>
              <p className="text-[#e2e8f0] font-bold pl-3 mt-0.5">&gt; Building modern web applications</p>
            </div>

            <div>
              <div className="text-[#94a3b8] font-bold flex items-center gap-1.5 select-none text-[10px]">
                <span>terminal@joshua:~$</span>
                <span className="text-[#94a3b8]/70 font-medium">location</span>
              </div>
              <p className="text-[#e2e8f0] font-bold pl-3 mt-0.5">&gt; Nigeria</p>
            </div>

            <div>
              <div className="text-[#94a3b8] font-bold flex items-center gap-1.5 select-none text-[10px]">
                <span>terminal@joshua:~$</span>
                <span className="text-[#94a3b8]/70 font-medium">github</span>
              </div>
              <p className="text-[#e2e8f0] font-bold pl-3 mt-0.5">
                &gt; <a href="https://github.com/JoshuaIgho" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#e2e8f0] border-b border-dashed border-[#94a3b8]">github.com/JoshuaIgho</a>
              </p>
            </div>

            {/* Command prompt & cursor */}
            <div className="pt-2 flex items-center select-none text-[10px]">
              <span className="text-[#94a3b8] font-bold mr-1.5">terminal@joshua:~$</span>
              <span className="w-1.5 h-4 bg-[#94a3b8] inline-block animate-blink"></span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE: Developer Dashboard */}
        <div className="split-layout-right flex flex-col gap-6 justify-between">
          
          {/* Top Panel: Professional Diagnostic Stats */}
          <div className="grid grid-cols-3 gap-4">
            
            {/* Metric A */}
            <div className="bg-white border-2 border-[#0d0e11] p-4 shadow-[4px_4px_0px_#0d0e11] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0d0e11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 flex flex-col justify-between">
              <span className="font-mono text-[9px] text-[#94a3b8] uppercase tracking-wider block">// EXPERIENCE_LOG</span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-display font-black text-[#0d0e11]">4+</span>
                <span className="font-mono text-[9px] text-zinc-500 font-bold">YRS</span>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 uppercase mt-2.5 font-bold select-none">YEARS LEARNING</span>
            </div>

            {/* Metric B */}
            <div className="bg-white border-2 border-[#0d0e11] p-4 shadow-[4px_4px_0px_#0d0e11] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0d0e11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 flex flex-col justify-between">
              <span className="font-mono text-[9px] text-[#94a3b8] uppercase tracking-wider flex items-center justify-between gap-1 w-full">
                <span>// CORE_REPOS</span>
                <span className="blink-slate-indicator inline-block"></span>
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-display font-black text-[#0d0e11]">15+</span>
                <span className="font-mono text-[9px] text-zinc-500 font-bold">PROJS</span>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 uppercase mt-2.5 font-bold select-none">PROJECTS BUILT</span>
            </div>

            {/* Metric C */}
            <div className="bg-white border-2 border-[#0d0e11] p-4 shadow-[4px_4px_0px_#0d0e11] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0d0e11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 flex flex-col justify-between">
              <span className="font-mono text-[9px] text-[#94a3b8] uppercase tracking-wider block">// GIT_COMMITS</span>
              <div className="mt-2">
                <span className="text-xl sm:text-2xl font-display font-black text-zinc-800">1,450+</span>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 uppercase mt-2.5 font-bold select-none">CONTRIBUTIONS</span>
            </div>

          </div>

          {/* Current Focus Panel */}
          <div className="bg-white border-2 border-[#0d0e11] p-5 shadow-[4px_4px_0px_#0d0e11] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0d0e11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100">
            <div className="flex items-center justify-between border-b pb-2 mb-3 border-zinc-200 select-none">
              <span className="font-mono text-xs font-black uppercase text-[#0d0e11] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-zinc-650 rounded-full inline-block animate-ping"></span>
                CURRENT_FOCUS
              </span>
              <span className="font-mono text-[8.5px] border border-[#0d0e11] bg-[#0d0e11] text-[#e2e8f0] px-1.5 py-0.5 uppercase tracking-wide font-bold">
                SYSTEM_TASK_READY
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-zinc-700">
              Building scalable web applications and exploring modern software engineering practices.
            </p>
          </div>

          {/* Frontend / Backend Separation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Frontend Technical Specs */}
            <div className="bg-white border-2 border-[#0d0e11] p-4 shadow-[4px_4px_0px_#0d0e11] flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0d0e11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100">
              <div>
                <div className="font-mono text-xs font-bold uppercase text-[#0d0e11] border-b border-[#0d0e11] pb-1.5 flex items-center justify-between select-none">
                  <span>[ FRONTEND ]</span>
                  <span className="w-2 h-2 bg-zinc-800 rounded-full"></span>
                </div>
                <div className="mt-3.5 space-y-2 font-mono text-[11px] sm:text-xs text-zinc-800">
                  <div className="flex items-center justify-between">
                    <span>React</span>
                    <span className="text-[9px] border border-zinc-300 bg-zinc-100 text-zinc-805 px-1 py-0.5 uppercase font-bold">EXPERT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>JavaScript</span>
                    <span className="text-[9px] text-zinc-400 uppercase font-bold">CORE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>TypeScript</span>
                    <span className="text-[9px] text-zinc-400 uppercase font-bold">STRICT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tailwind CSS</span>
                    <span className="text-[9px] text-zinc-400 uppercase font-bold font-mono">UTILITY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Technical Specs */}
            <div className="bg-white border-2 border-[#0d0e11] p-4 shadow-[4px_4px_0px_#0d0e11] flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0d0e11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100">
              <div>
                <div className="font-mono text-xs font-bold uppercase text-[#0d0e11] border-b border-[#0d0e11] pb-1.5 flex items-center justify-between select-none">
                  <span>[ BACKEND ]</span>
                  <span className="w-2 h-2 bg-zinc-650 rounded-full border border-[#0d0e11] inline-block"></span>
                </div>
                <div className="mt-3.5 space-y-2 font-mono text-[11px] sm:text-xs text-zinc-800">
                  <div className="flex items-center justify-between">
                    <span>Node.js</span>
                    <span className="text-[9px] border border-[#0d0e11] bg-[#0d0e11] text-white px-1 py-0.5 uppercase font-bold">RUNTIME</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Express.js</span>
                    <span className="text-[9px] text-zinc-400 uppercase font-bold">MIDDLEWARE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>PostgreSQL</span>
                    <span className="text-[9px] text-zinc-400 uppercase font-bold">RELATIONAL</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Download CV Module */}
          <div className="bg-[#fafafa] border-2 border-[#0d0e11] p-4 shadow-[4px_4px_0px_#0d0e11] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0d0e11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 font-mono text-[10px] text-zinc-600 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-1.5 select-none">
              <span className="font-extrabold uppercase text-[#0d0e11] flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5 text-[#0d0e11]" />
                DOWNLOAD_CV
              </span>
              <span className="text-[9px] text-[#0d0e11] font-extrabold uppercase">FILE // READY_TO_VIEW</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-1">
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-black text-[#0d0e11] uppercase tracking-tight flex items-center gap-1 font-mono">
                  Joshua_Igho_CV.pdf
                </span>
                <span className="text-[9px] text-zinc-500 font-semibold uppercase tracking-wider mt-0.5">
                  Full-Stack Developer Resume [142KB]
                </span>
              </div>
              <a 
                href="/joshua_igho_resume_2026.pdf" 
                download="joshua_igho_resume_2026.pdf"
                className="px-4 py-2 bg-white text-[#0d0e11] border-2 border-[#0d0e11] shadow-[3px_3px_0px_#0d0e11] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#0d0e11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 font-mono text-[10px] font-black uppercase tracking-wider text-center shrink-0 flex items-center justify-center gap-1 cursor-pointer select-none"
              >
                DOWNLOAD CV ↓
              </a>
            </div>

            {/* Subtle File Asset Link Pointer */}
            <div className="border-t border-zinc-200 pt-2 mt-1">
              <span className="text-zinc-400 text-[9px] block mb-1 uppercase tracking-wider">// LOCAL_ASSET_POINTER</span>
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold uppercase">
                <span>📁 public/joshua_igho_resume_2026.pdf</span>
                <span className="text-zinc-650 font-extrabold">✓ READY</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes system-slate-pulse {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.4;
          }
        }
        .blink-slate-indicator {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #4a5568;
          animation: system-slate-pulse 2s infinite ease-in-out;
        }
      `}</style>

    </section>
  );
}

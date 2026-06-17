import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data';
import { MapPin, Cpu, ArrowUpRight, Github, Twitter, Mail, Activity, Sparkles } from 'lucide-react';

export default function Hero() {
  // Mini Interactive state: 8x8 Binary Sandbox Matrix
  const [grid, setGrid] = useState<boolean[][]>(
    Array(8).fill(null).map(() => Array(8).fill(false).map(() => Math.random() > 0.75))
  );
  const [paintCount, setPaintCount] = useState<number>(142);
  const [frameTime, setFrameTime] = useState<string>('0.92');
  const [matrixPattern, setMatrixPattern] = useState<string>('RANDOM');
  const paintHistory = useRef<number[]>([]);

  // Toggle single cell state
  const handleCellClick = (r: number, c: number) => {
    const updated = grid.map((row, ri) =>
      row.map((cell, ci) => (ri === r && ci === c ? !cell : cell))
    );
    setGrid(updated);
    setPaintCount((prev) => prev + 1);
  };

  // Run a continuous micro-loop to update simulated frame rendering engine times
  useEffect(() => {
    const interval = setInterval(() => {
      const baseTime = 0.4 + Math.random() * 0.7;
      setFrameTime(baseTime.toFixed(2));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Preset patterns triggers
  const setPreset = (type: 'clear' | 'glider' | 'checker' | 'random') => {
    let newGrid: boolean[][];
    if (type === 'clear') {
      newGrid = Array(8).fill(null).map(() => Array(8).fill(false));
    } else if (type === 'glider') {
      newGrid = Array(8).fill(null).map(() => Array(8).fill(false));
      newGrid[1][2] = true;
      newGrid[2][3] = true;
      newGrid[3][1] = true;
      newGrid[3][2] = true;
      newGrid[3][3] = true;
    } else if (type === 'checker') {
      newGrid = Array(8).fill(null).map((_, r) =>
        Array(8).fill(false).map((_, c) => (r + c) % 2 === 0)
      );
    } else {
      newGrid = Array(8).fill(null).map(() => Array(8).fill(false).map(() => Math.random() > 0.5));
    }
    setGrid(newGrid);
    setMatrixPattern(type.toUpperCase());
    setPaintCount((prev) => prev + 1);
  };

  return (
    <section id="about" className="py-8 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Intro Hero Board Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        
        {/* Main Branding Card Statement (Left - 7 columns) */}
        <div className="lg:col-span-7 bg-white border-2 border-black p-8 sm:p-12 shadow-[6px_6px_0px_#000000] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000000] brutalist-btn-transition">
          <div>
            {/* Tagline */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white text-black border border-black text-[10px] font-mono tracking-wider mb-8 uppercase font-bold">
              <span className="w-1.5 h-1.5 bg-black animate-ping"></span>
              CORE_INTERFACE // MANIFESTO
            </div>

            {/* Title Display */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-black tracking-tight leading-[1.05] uppercase font-bold">
              Building Raw, High-Performance Digital Interfaces.
            </h2>

            {/* Body text with generous line heights and whitespace for peak legibility */}
            <p className="mt-8 text-sm sm:text-base text-gray-700 font-sans font-normal leading-relaxed text-balance max-w-xl">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Location / Status Info Line */}
          <div className="mt-12 pt-8 border-t-2 border-black flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-black" />
              <span>LOC_PORT:</span>
              <span className="font-bold underline">{PERSONAL_INFO.location.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-black" />
              <span>STATUS_LINK:</span>
              <span className="bg-white px-2 py-0.5 border border-black font-extrabold text-black">READY</span>
            </div>
          </div>
        </div>

        {/* Sidebar Info & Controls (Right - 5 columns) */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
          
          {/* Quick Stats Sidebar Card */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000000] brutalist-btn-transition flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-bold border-b-2 border-black pb-2 flex items-center justify-between">
                <span>01 // COMMUNICATIONS</span>
                <span className="text-[9px] border border-black bg-black text-white px-1.5 py-0.5 uppercase font-bold">STABLE</span>
              </h3>
              
              <ul className="mt-6 space-y-3 font-mono text-[11px] sm:text-xs">
                <li className="flex items-center justify-between py-1 border-b border-gray-200">
                  <span className="text-gray-400">COMMS_LINK:</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold hover:underline break-all bg-[#f9f9f9] px-2 py-0.5 border border-black/10 hover:border-black">
                    {PERSONAL_INFO.email}
                  </a>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-gray-200">
                  <span className="text-gray-400">GITHUB_SRC:</span>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline bg-[#f9f9f9] px-2 py-0.5 border border-black/10 hover:border-black flex items-center gap-1">
                    KAEL-MERCER <ArrowUpRight className="w-3" />
                  </a>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-gray-200">
                  <span className="text-gray-400">CONNECT_NET:</span>
                  <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline bg-[#f9f9f9] px-2 py-0.5 border border-black/10 hover:border-black flex items-center gap-1">
                    @KAELMERCER <ArrowUpRight className="w-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <fieldset className="border-2 border-black p-4 bg-black text-white">
                <legend className="bg-black text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                  PROTOCOLS: ACTIVE
                </legend>
                <p className="text-[11px] text-gray-305 font-mono leading-relaxed mb-0">
                  Designing highly refined canvas graphics interfaces for high-throughput clients. Restructuring web pipelines to eliminate browser visual layout shifts entirely.
                </p>
              </fieldset>
            </div>
          </div>

          {/* Interactive Binary Sandbox Matrix widget */}
          <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000000] brutalist-btn-transition flex-1">
            <h3 className="text-xs font-mono font-bold border-b-2 border-black pb-2 flex items-center justify-between uppercase">
              <span className="flex items-center gap-1.5 text-black">
                <Cpu className="w-4 h-4 text-black" />
                02 // LIVE_SANDBOX_CORE
              </span>
              <span className="text-[9px] border border-black px-1.5 py-0.5 uppercase font-bold text-black font-mono">GRID READOUT: 8x8</span>
            </h3>

            {/* Cellular grid visual display */}
            <div className="mt-4 flex gap-4 items-center">
              <div className="bg-[#fbfcfa] p-2 border-2 border-black grid grid-cols-8 gap-1 select-none flex-shrink-0">
                {grid.map((row, r) =>
                  row.map((cell, c) => (
                    <button
                      key={`${r}-${c}`}
                      onClick={() => handleCellClick(r, c)}
                      className={`w-5 h-5 border border-black/40 brutalist-btn-transition cursor-crosshair ${
                        cell ? 'bg-black shadow-none' : 'bg-white hover:bg-neutral-100'
                      }`}
                      aria-label={`Toggle cell ${r + 1}, ${c + 1}`}
                    />
                  ))
                )}
              </div>

              {/* Data readouts panel */}
              <div className="flex-1 font-mono text-[10px] sm:text-xs text-black flex flex-col justify-between h-full gap-2">
                <div>
                  <div className="flex justify-between py-0.5 border-b border-black/10">
                    <span className="text-gray-400">STATE_STATUS:</span>
                    <span className="font-bold">LIVE</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-black/10">
                    <span className="text-gray-400">CELL_MUT:</span>
                    <span className="font-bold">{paintCount}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-black/10">
                    <span className="text-gray-400">ENGINE_EXEC:</span>
                    <span className="font-bold">WASM_DIFF</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-black/10">
                    <span className="text-gray-400">RENDER_LAT:</span>
                    <span className="font-bold text-[11px] font-mono border border-black bg-white px-1 leading-none">
                      {frameTime} ms
                    </span>
                  </div>
                </div>

                {/* Preset Controls */}
                <div className="flex flex-wrap gap-1 mt-1 font-mono">
                  <button
                    onClick={() => setPreset('checker')}
                    className="px-1.5 py-0.5 bg-white hover:bg-black hover:text-white border border-black font-bold uppercase text-[9px] brutalist-btn-transition cursor-pointer"
                  >
                    CHECKER
                  </button>
                  <button
                    onClick={() => setPreset('glider')}
                    className="px-1.5 py-0.5 bg-white hover:bg-black hover:text-white border border-black font-bold uppercase text-[9px] brutalist-btn-transition cursor-pointer"
                  >
                    GLIDER
                  </button>
                  <button
                    onClick={() => setPreset('random')}
                    className="px-1.5 py-0.5 bg-white hover:bg-black hover:text-white border border-black font-bold uppercase text-[9px] brutalist-btn-transition cursor-pointer"
                  >
                    MUTATE
                  </button>
                  <button
                    onClick={() => setPreset('clear')}
                    className="px-1.5 py-0.5 bg-white hover:bg-black hover:text-white border border-dashed border-black font-bold uppercase text-[9px] text-gray-500 hover:text-white brutalist-btn-transition cursor-pointer"
                  >
                    WIPE
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

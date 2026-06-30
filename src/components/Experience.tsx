import React, { useState } from 'react';
import { EXPERIENCES } from '../data';
import { MapPin, Briefcase, Calendar, ChevronDown, CheckSquare, Layers } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('exp1'); // expand first by default

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-12 md:py-20 px-6 md:px-8 max-w-[1440px] mx-auto scroll-mt-24">
      
      {/* SECTION INDUSTRIAL TITLE HEADER */}
      <div className="border-2 border-black bg-black text-white p-6 sm:p-8 mb-12 shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-gray-400">// PORTFOLIO CATEGORY [03]</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight mt-1 uppercase">
            PROFESSIONAL TIMELINE
          </h2>
        </div>
        <div className="font-mono text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 p-3 self-stretch sm:self-auto flex items-center justify-between gap-6">
          <span>PIPELINES: INTEGRATED</span>
          <span className="h-4 w-px bg-neutral-800"></span>
          <span>ROLES: {EXPERIENCES.length} RUNTIMES</span>
        </div>
      </div>

      {/* TIMELINE TREE BLOCK LAYOUT */}
      <div className="relative border-l-2 border-black ml-4 md:ml-8 pl-6 md:pl-10 py-2 space-y-10">
        
        {EXPERIENCES.map((exp, idx) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div key={exp.id} className="relative group">
              
              {/* Timeline dot custom connector */}
              <div className={`absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 border-2 border-black transition-all duration-300 flex items-center justify-center ${
                isExpanded ? 'bg-black text-white scale-110' : 'bg-white text-black'
              }`}>
                <span className="font-mono text-[9px] font-extrabold">{idx + 1}</span>
              </div>

              {/* Neo-brutalist Content Box Card */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className={`bg-white border-2 border-black p-6 md:p-8 hover:translate-x-[-2px] hover:translate-y-[-2px] brutalist-btn-transition cursor-pointer ${
                  isExpanded ? 'shadow-[8px_8px_0px_#000000] border-black bg-neutral-50/20' : 'shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000]'
                }`}
              >
                {/* Header Information Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b-2 border-black pb-4 mb-4 select-none">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 border border-black flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-black uppercase tracking-tight text-black leading-none">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-[10px] text-gray-500 font-bold leading-none mt-1.5 uppercase tracking-wider">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 md:gap-3 font-mono text-xs text-black">
                    <span className="border border-black bg-black text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 whitespace-nowrap uppercase">
                      {exp.timeline}
                    </span>
                    <span className="bg-white border border-black px-2 py-0.5 whitespace-nowrap flex items-center gap-1 text-[10px] sm:text-[11px] text-black font-extrabold uppercase">
                      <MapPin className="w-3.5 h-3.5 text-black" />
                      {exp.location.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Main Accomplishments Expansion block */}
                <div className={`overflow-hidden brutalist-btn-transition ${
                  isExpanded ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                  <div className="py-2 space-y-4">
                    <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                      // {exp.sectionLabel ? exp.sectionLabel.toUpperCase() : 'DIRECT REVENUE & PERF INFLUENCES'}:
                    </div>
                    
                    {/* Bullet points detailing performance milestones */}
                    <ul className="space-y-3 pl-0 text-xs sm:text-sm text-gray-700 font-sans list-none">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 leading-relaxed">
                          <CheckSquare className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span className="font-normal text-balance">{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Work Tag Vectors */}
                    <div className="pt-4 border-t border-black/10">
                      <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                        // CORE PIPELINE CORES ASSIGNED:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-white text-black border border-black/20 font-mono text-[9px] font-bold uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Click and expand helper line */}
                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-[10px] text-gray-400 uppercase select-none">
                  <span>SYSTEM TARGET: EXP_{exp.id.toUpperCase()}</span>
                  <span className="flex items-center text-black font-bold text-[10px]">
                    {isExpanded ? '[ COLLAPSE RECORD ]' : '[ REVEAL RECORD ]'}
                    <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform brutalist-btn-transition ${isExpanded ? 'rotate-180' : ''}`} />
                  </span>
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

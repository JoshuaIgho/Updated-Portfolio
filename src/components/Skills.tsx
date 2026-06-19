import React, { useState } from 'react';
import { SKILLS, PROJECTS } from '../data';
import { Cpu, CheckCircle, HelpCircle, Layers, Settings, Shield, HardDrive, Compass, Code } from 'lucide-react';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(SKILLS[0].name);

  // Group skills by category
  const categories = {
    frontend: { label: 'FRONTEND SYSTEM ENGINE', icon: <Layers className="w-4 h-4" />, items: SKILLS.filter(s => s.category === 'frontend') },
    backend: { label: 'BACKEND SERVICES & APIS', icon: <HardDrive className="w-4 h-4" />, items: SKILLS.filter(s => s.category === 'backend') },
    devops: { label: 'DEVOPS / SYSTEMS PIPELINES', icon: <Settings className="w-4 h-4" />, items: SKILLS.filter(s => s.category === 'devops') },
    design: { label: 'VISUAL DESIGN / HCI RULES', icon: <Compass className="w-4 h-4" />, items: SKILLS.filter(s => s.category === 'design') }
  };

  const activeSkillObj = SKILLS.find(s => s.name === selectedSkill);

  // Find which of our selected projects use this skill
  const matchingProjects = PROJECTS.filter(p => 
    selectedSkill ? p.tags.some(tag => tag.toLowerCase() === selectedSkill.toLowerCase() || selectedSkill.toLowerCase().includes(tag.toLowerCase())) : false
  );

  return (
    <section id="skills" className="py-12 md:py-20 px-6 md:px-8 max-w-[1440px] mx-auto scroll-mt-24">
      
      {/* Structural Brutalist Category Header */}
      <div className="border-2 border-black bg-black text-white p-6 sm:p-8 mb-8 shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-gray-400">// PORTFOLIO CATEGORY [04]</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight mt-1 uppercase">
            SKILLSET MATRIX & ECOSYSTEM
          </h2>
        </div>
        <div className="font-mono text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 p-3 self-stretch sm:self-auto flex items-center justify-between gap-6">
          <span>CORES: HOST ACTIVE</span>
          <span className="h-4 w-px bg-neutral-800"></span>
          <span>COMPETENCY: PRODUCTION BUILDS</span>
        </div>
      </div>

      {/* Grid: Interactive Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Skill Bento Grids (7 columns) */}
        <div className="lg:col-span-8 space-y-6">
          {Object.entries(categories).map(([key, cat]) => (
            <div key={key} className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[8px_8px_0px_#000000] brutalist-btn-transition">
              <h3 className="text-xs font-mono font-bold border-b-2 border-black pb-3 mb-4 flex items-center gap-2 text-black uppercase select-none">
                {cat.icon}
                <span>{cat.label}</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.items.map((skill) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill.name)}
                      className={`p-3 border-2 text-left brutalist-btn-transition cursor-pointer ${
                        isSelected 
                          ? 'bg-black text-white border-black shadow-[4px_4px_0px_#000000]' 
                          : 'bg-white hover:bg-neutral-50 text-black border-black shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] sm:text-xs font-extrabold truncate leading-tight">
                          {skill.name.toUpperCase()}
                        </span>
                        <span className={`font-mono text-[9px] px-1 py-0.5 border font-bold leading-none ${
                          isSelected ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* High-Contrast Progress Level Bar */}
                      <div className="mt-2.5 h-1.5 w-full bg-neutral-100 border border-black overflow-hidden">
                        <div 
                          className={`h-full brutalist-btn-transition ${isSelected ? 'bg-white' : 'bg-black'}`} 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Visual Diagnostic Terminal Console Output (4 columns) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 bg-white border-2 border-black shadow-[6px_6px_0px_#000000] p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-mono font-bold border-b-2 border-black pb-2 flex items-center gap-2 text-black uppercase">
              <Cpu className="w-4 h-4 text-black animate-spin" />
              <span>04 // MATRIX DIAGNOSTICS</span>
            </h3>

            {activeSkillObj ? (
              <div className="mt-6 font-mono text-xs text-black space-y-4 leading-relaxed">
                <div>
                  <span className="text-gray-400 block uppercase text-[10px]">// ACTIVE CHANNEL ENGINE:</span>
                  <span className="text-sm font-bold text-black border-b-2 border-black pb-1 inline-block uppercase mt-1">
                    {activeSkillObj.name}
                  </span>
                </div>

                <div>
                  <span className="text-gray-400 block uppercase text-[10px]">// INTEGRATION COEFFICIENT:</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-base font-black text-black font-mono">
                      {activeSkillObj.level} / 100
                    </span>
                    <span className="text-black bg-white border border-black px-1.5 py-0.5 font-bold text-[9px] leading-none uppercase">
                      SECURED_CORE
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-gray-400 block uppercase text-[10px]">// CAPABILITY ASSESSMENT:</span>
                  <p className="mt-1 text-gray-700 font-sans leading-relaxed text-balance">
                    {activeSkillObj.description}
                  </p>
                </div>

                {/* Match Projects Portal */}
                <div className="pt-4 border-t border-black/10">
                  <span className="text-gray-400 block uppercase text-[10px]">// ASSOCIATED BUILDS IN COIL:</span>
                  {matchingProjects.length > 0 ? (
                    <div className="mt-2 space-y-1.5">
                      {matchingProjects.map(proj => (
                        <button
                          key={proj.id}
                          onClick={() => {
                            const el = document.getElementById('projects');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-left p-2 bg-white hover:bg-black hover:text-white border border-black flex items-center justify-between gap-2 group brutalist-btn-transition cursor-pointer text-[11px]"
                        >
                          <span className="font-bold truncate group-hover:underline uppercase">{proj.title}</span>
                          <span className="text-[10px] text-gray-400 group-hover:text-[#e2e8f0] font-mono shrink-0 flex items-center gap-0.5 font-bold uppercase select-none">
                            VIEW PROJ
                            <Code className="w-3 h-3" />
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-2 p-2 bg-white border border-dashed border-neutral-300 text-[11px] text-gray-500 uppercase">
                      // No direct associated builds linked in immediate view frame.
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-6 py-12 text-center text-gray-500 font-mono text-xs">
                // SELECT AN ACTIVE CORE NODE TO TRIGGER INTERNAL MATRIX READOUTS.
              </div>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-black/10 text-[10px] font-mono text-gray-400 flex items-center justify-between select-none">
            <span>TERMINAL ID: MK-400</span>
            <span>DIAGNOSTICS SECURE</span>
          </div>
        </div>

      </div>

    </section>
  );
}

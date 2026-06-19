import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Search, Filter, ArrowUpRight, Github, Code, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL_RUNS');
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Categorize projects based on robust matching rules for primary categories
  const filterCategory = (project: typeof PROJECTS[0], category: string) => {
    if (category === 'ALL_RUNS') return true;
    const pId = project.id;
    if (category === 'FRONTEND') {
      return pId === 'ijituyi' || pId === 'charme' || pId === 'africa-caribbean';
    }
    if (category === 'BACKEND') {
      return pId === 'charme' || pId === 'chapterdock';
    }
    if (category === 'SYSTEMS') {
      return pId === 'chapterdock' || pId === 'charme';
    }
    return false;
  };

  // Filter projects based on inputs
  const filteredProjects = PROJECTS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory(p, selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="projects" className="w-full bg-white py-12 md:py-20 scroll-mt-24 border-y-2 border-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
      
      {/* Structural Title Border Line */}
      <div className="border-2 border-black bg-white text-black p-6 sm:p-8 mb-8 shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-zinc-500">// CATEGORY_02</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight mt-1 uppercase text-black">
            SELECTED WORKS
          </h2>
        </div>
        <div className="font-mono text-xs text-zinc-700 bg-zinc-50 border border-zinc-200 p-3 self-stretch sm:self-auto flex items-center justify-between gap-6">
          <span>STATUS: READY</span>
          <span className="h-4 w-px bg-zinc-200"></span>
          <span>COUNT: {PROJECTS.length} REAL_PROJS</span>
        </div>
      </div>

      {/* Dynamic Filters Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
        
        {/* Search Input Box */}
        <div className="lg:col-span-4 relative">
          <label htmlFor="project-search" className="sr-only">Search projects</label>
          <input
            id="project-search"
            type="text"
            placeholder="FILTER BY KEYWORD..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border-2 border-black p-3.5 pl-11 font-mono text-xs font-bold focus:outline-none focus:ring-2 focus:ring-slate-500 rounded-none placeholder:text-gray-400 uppercase text-slate-900"
          />
          <Search className="w-4 h-4 text-slate-900 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Dynamic Category List */}
        <div className="lg:col-span-8 flex flex-wrap items-center gap-2 bg-white border-2 border-black p-3 overflow-x-auto min-h-[58px]">
          <span className="font-mono text-[10px] font-bold text-gray-500 mr-2 uppercase flex items-center gap-1.5 select-none font-mono">
            <Filter className="w-3.5 h-3.5" />
            CATEGORIES:
          </span>
          {['ALL_RUNS', 'FRONTEND', 'BACKEND', 'SYSTEMS'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 font-mono text-[10.5px] font-extrabold border-2 cursor-pointer brutalist-btn-transition uppercase rounded-none ${
                selectedCategory === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black hover:bg-[#f3f4f6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Main Works Columns/Grid with equal-height stretch (2x2 Column matrix on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full bg-white border-2 border-dashed border-slate-400 p-12 text-center shadow-[6px_6px_0px_#475569]">
            <p className="font-mono text-sm text-slate-500">// CRITICAL ERROR: NO BUILDS MATCHING SEARCH FILTER CRITERIA</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('ALL_RUNS');
              }}
              className="mt-4 px-4 py-2 border-2 border-black bg-white text-black font-mono text-xs font-bold shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] brutalist-btn-transition cursor-pointer"
            >
              WIPE CHANNELS (RESET)
            </button>
          </div>
        ) : (
          filteredProjects.map((p) => {
            return (
              <article
                key={p.id}
                className="bg-white border-2 border-black p-6 md:p-8 lg:p-10 shadow-[6px_6px_0px_#000000] hover:shadow-[10px_10px_0px_#000000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6 select-none">
                    <span className="font-mono text-[10px] font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wide">
                      <Code className="w-4 h-4 text-slate-800" />
                      {p.category}
                    </span>
                    <span className="font-mono text-[9px] border border-black bg-black text-white px-2.5 py-1 font-bold uppercase tracking-tight">
                      {p.timeline}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 uppercase tracking-tight leading-none">
                    {p.title}
                  </h3>

                  {/* Description with comfortable vertical spacing */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-650 font-sans leading-relaxed">
                    {p.description}
                  </p>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-100 text-slate-900 border border-slate-300 font-mono text-[9px] font-extrabold uppercase rounded-sm select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic Expand/Collapse Toggle Button */}
                  <div className="mt-5 pt-4 border-t border-dashed border-zinc-200">
                    <button
                      onClick={() => toggleProject(p.id)}
                      className="w-full sm:w-auto font-mono text-[10px] sm:text-[10.5px] font-black flex items-center justify-between sm:justify-start gap-2 bg-zinc-50 hover:bg-zinc-100 border-2 border-black px-4 py-2 cursor-pointer transition-all duration-150 select-none shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                    >
                      {expandedProjects[p.id] ? (
                        <>
                          <ChevronUp className="w-4 h-4 text-zinc-800" />
                          <span>COLLAPSE SPECIFICATIONS [-]</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 text-zinc-800" />
                          <span>EXPAND SPECIFICATIONS [+]</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Animated specs and metric capabilities */}
                  <AnimatePresence initial={false}>
                    {expandedProjects[p.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1, transition: { height: { duration: 0.25 }, opacity: { duration: 0.15, delay: 0.05 } } }}
                        exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.2 }, opacity: { duration: 0.1 } } }}
                        className="overflow-hidden"
                      >
                        {/* Stats Matrix with extra room */}
                        {p.stats && (
                          <div className="grid grid-cols-3 gap-3 my-6 bg-slate-50 border-2 border-black p-4 font-mono">
                            {p.stats.map((s, idx) => (
                              <div key={idx} className="text-center border-r last:border-r-0 border-slate-200">
                                <div className="text-[8px] text-slate-400 font-extrabold uppercase tracking-widest">{s.label}</div>
                                <div className="text-xs font-black text-slate-900 truncate mt-1 px-1">{s.value}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Key achievements list with pristine density */}
                        <div className="space-y-3 mt-6">
                          <span className="font-mono text-[9px] font-black text-slate-400 block uppercase tracking-widest">// COMPILED STATS & CAPABILITIES:</span>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 font-sans list-none pl-0">
                            {p.keyFeatures.map((f, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5">
                                <span className="inline-block mt-0.5 text-slate-900 font-mono font-bold select-none">•</span>
                                <span className="leading-relaxed">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer and dynamic actions - sit perfectly flush against the absolute baseline of the card! */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col justify-between gap-4 font-mono text-xs w-full">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 w-full">
                    
                    {/* Inline Repo links or specific buttons */}
                    <div className="flex flex-col gap-1 items-start text-[10.5px] shrink-1">
                      {p.frontendGithubUrl && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400 font-extrabold uppercase tracking-tight select-none">FRONT_REPO:</span>
                          <a
                            href={p.frontendGithubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-900 font-black hover:underline underline-offset-2 flex items-center gap-1"
                          >
                            <Github className="w-3 h-3 inline decoration-black" />
                            GitHub
                          </a>
                        </div>
                      )}
                      {p.backendGithubUrl && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400 font-extrabold uppercase tracking-tight select-none">BACK_REPO:</span>
                          <a
                            href={p.backendGithubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-900 font-black hover:underline underline-offset-2 flex items-center gap-1"
                          >
                            <Github className="w-3 h-3 inline decoration-black" />
                            GitHub
                          </a>
                        </div>
                      )}
                      {p.githubUrl && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400 font-extrabold uppercase tracking-tight select-none">REPOSITORY:</span>
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-900 font-black hover:underline underline-offset-2 flex items-center gap-1"
                          >
                            <Github className="w-3.5 h-3.5 inline decoration-black" />
                            Source Code
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Action trigger button or pending text indicator */}
                    <div className="shrink-0 self-end sm:self-auto">
                      {p.pendingText ? (
                        <span className="px-3 py-2 bg-slate-100 text-slate-400 border border-slate-200 font-mono text-[10px] md:text-[10.5px] font-black uppercase tracking-wider inline-block select-none rounded-none">
                          {p.pendingText}
                        </span>
                      ) : (
                        p.demoUrl && (
                          <a
                            href={p.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-black text-white hover:bg-zinc-800 border-2 border-black font-extrabold flex items-center gap-1.5 brutalist-btn-transition cursor-pointer text-[10.5px] uppercase shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                          >
                            RUN INSTANT
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )
                      )}
                    </div>

                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

      </div>
    </section>
  );
}

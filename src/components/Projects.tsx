import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Search, Filter, ArrowUpRight, Github, ExternalLink, Calendar, Code, ChevronRight, LayoutGrid } from 'lucide-react';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>('hyperion'); // default expands the first

  // Accumulate all unique tags
  const allTags = Array.from(new Set(PROJECTS.flatMap((p) => p.tags)));

  // Filter projects based on inputs
  const filteredProjects = PROJECTS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || p.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Structural Title Border Line */}
      <div className="border-2 border-black bg-black text-white p-6 sm:p-8 mb-8 shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-gray-400">// PORTFOLIO CATEGORY [02]</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight mt-1 uppercase">
            SELECTED WORKS & RUNTIMES
          </h2>
        </div>
        <div className="font-mono text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 p-3 self-stretch sm:self-auto flex items-center justify-between gap-6">
          <span>PIPELINES: READY</span>
          <span className="h-4 w-px bg-neutral-800"></span>
          <span>COUNT: {PROJECTS.length} BUILDS</span>
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
            className="w-full bg-white border-2 border-black p-3 pl-10 font-mono text-xs font-bold focus:outline-none focus:ring-1 focus:ring-black rounded-none placeholder:text-gray-400 uppercase"
          />
          <Search className="w-4 h-4 text-black absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Dynamic Tag list */}
        <div className="lg:col-span-8 flex flex-wrap items-center gap-2 bg-white border-2 border-black p-3 overflow-x-auto">
          <span className="font-mono text-[10px] font-bold text-gray-500 mr-2 uppercase flex items-center gap-1.5 select-none">
            <Filter className="w-3.5 h-3.5" />
            TAGS:
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-2.5 py-1 font-mono text-[10.5px] font-bold border cursor-pointer brutalist-btn-transition uppercase ${
              !selectedTag
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-black/10 hover:border-black'
            }`}
          >
            ALL_RUNS
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-2.5 py-1 font-mono text-[10.5px] font-bold border cursor-pointer brutalist-btn-transition uppercase ${
                tag === selectedTag
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black/10 hover:border-black'
              }`}
            >
              {tag.toUpperCase()}
            </button>
          ))}
        </div>

      </div>

      {/* Main Works Columns/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full bg-white border-2 border-dashed border-black p-12 text-center shadow-[6px_6px_0px_#000000]">
            <p className="font-mono text-sm text-gray-550">// CRITICAL ERROR: NO BUILDS MATCHING SEARCH FILTER CRITERIA</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag(null);
              }}
              className="mt-4 px-4 py-2 border-2 border-black bg-white text-black font-mono text-xs font-bold shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] brutalist-btn-transition cursor-pointer"
            >
              WIPE CHANNELS (RESET)
            </button>
          </div>
        ) : (
          filteredProjects.map((p) => {
            const isExpanded = expandedId === p.id;
            return (
              <article
                key={p.id}
                onClick={() => toggleExpand(p.id)}
                className={`bg-white border-2 border-black p-6 md:p-8 hover:translate-x-[-2px] hover:translate-y-[-2px] brutalist-btn-transition items-stretch flex flex-col justify-between h-full cursor-pointer group ${
                  isExpanded ? 'shadow-[8px_8px_0px_#000000] border-black bg-neutral-50/20' : 'shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4 select-none">
                    <span className="font-mono text-[10px] font-bold text-gray-400 flex items-center gap-1 uppercase">
                      <Code className="w-3.5 h-3.5 text-black" />
                      {p.category}
                    </span>
                    <span className="font-mono text-[9px] border border-black bg-black text-white px-2 py-0.5 font-bold uppercase">
                      {p.timeline}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-black text-black group-hover:underline uppercase tracking-tight leading-none mt-2">
                    {p.title}
                  </h3>

                  {/* Brief description with highly comfortable line height */}
                  <p className="mt-4 text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                    {p.description}
                  </p>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 bg-white text-black border border-black/15 font-mono text-[9px] font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Drawers of key stats/features (Expandable component integration) */}
                <div className={`overflow-hidden brutalist-btn-transition ${
                  isExpanded ? 'max-h-[500px] pt-4 opacity-100 mt-6 border-t border-black/10' : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                  {/* Stat bento matrix */}
                  {p.stats && (
                    <div className="grid grid-cols-3 gap-2 py-2 mb-4 bg-white border border-black p-2 font-mono">
                      {p.stats.map((s, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-[9px] text-gray-450 uppercase tracking-tighter">{s.label}</div>
                          <div className="text-[11px] font-bold text-black truncate mt-0.5">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key achievements list */}
                  <div className="space-y-2 mt-2">
                    <span className="font-mono text-[10px] font-bold text-gray-400 block uppercase tracking-wide">// COMPILED STATS & CAPABILITIES:</span>
                    <ul className="space-y-1.5 text-xs text-gray-700 font-sans list-none pl-0">
                      {p.keyFeatures.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <span className="inline-block mt-0.5 text-black font-mono font-bold select-none">•</span>
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links Action portal */}
                  <div className="flex items-center gap-2 mt-6 justify-end pt-3 border-t border-black/10 font-mono text-xs">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1.5 bg-white hover:bg-black hover:text-white border border-black font-bold flex items-center gap-1.5 brutalist-btn-transition cursor-pointer text-[11px]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        SRC
                      </a>
                    )}
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          const el = document.getElementById('about');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-2.5 py-1.5 bg-black text-white border border-black font-bold flex items-center gap-1.5 brutalist-btn-transition cursor-pointer text-[11px]"
                      >
                        RUN INSTANT
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Click to expand prompt helper */}
                <div className="mt-6 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-[10px] text-gray-400 uppercase select-none">
                  <span>ROLE: {p.role.slice(0, 18)}...</span>
                  <span className="flex items-center text-black font-bold tracking-tight">
                    {isExpanded ? '[ COLLAPSE ]' : '[ INSPECT SYSTEM ]'}
                    <ChevronRight className={`w-3 h-3 ml-0.5 brutalist-btn-transition ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
                  </span>
                </div>
              </article>
            );
          })
        )}
      </div>

    </section>
  );
}

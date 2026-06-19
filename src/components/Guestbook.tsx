import React, { useState, useEffect } from 'react';
import { GUESTBOOK_SEED } from '../data';
import { GuestbookEntry } from '../types';
import { MessageSquare, Calendar, User, Shield, CheckCircle, Trash2, RotateCcw } from 'lucide-react';

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Hydrate guestbook from localStorage or seed fallback
  useEffect(() => {
    const stored = localStorage.getItem('joshua_guestbook');
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
      } catch (e) {
        setEntries(GUESTBOOK_SEED);
      }
    } else {
      setEntries(GUESTBOOK_SEED);
      localStorage.setItem('joshua_guestbook', JSON.stringify(GUESTBOOK_SEED));
    }
  }, []);

  // Save changes to localStorage helper
  const saveEntries = (updated: GuestbookEntry[]) => {
    setEntries(updated);
    localStorage.setItem('joshua_guestbook', JSON.stringify(updated));
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!name.trim() || !message.trim()) {
      setErrorMsg('ERROR: NAME AND MESSAGE MATRIX CANNOT BE EMPTY.');
      return;
    }

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      role: role.trim() ? role.trim() : 'Guest Reader',
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16)
    };

    const updated = [newEntry, ...entries];
    saveEntries(updated);

    // Reset Inputs
    setName('');
    setMessage('');
    setRole('');
    setSuccessMsg('MUTATION COMMITTED: MESSAGE SUCCESSFULLY APPENDED TO THE SYSTEM RECORD.');

    // Clear alert after some time
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  // Delete Individual Entry Handler
  const handleDelete = (id: string) => {
    const updated = entries.filter((ent) => ent.id !== id);
    saveEntries(updated);
  };

  // Reset System Records to Seed States
  const handleResetRecords = () => {
    if (window.confirm('RESET RECORD PIPELINE? THIS RESTORES SEED MESSAGES AND PURGES SUBMISSIONS.')) {
      saveEntries(GUESTBOOK_SEED);
    }
  };

  return (
    <section id="guestbook" className="py-12 md:py-20 px-6 md:px-8 max-w-[1440px] mx-auto scroll-mt-24">
      
      {/* Structural Title Header Block */}
      <div className="border-2 border-black bg-black text-white p-6 sm:p-8 mb-12 shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-gray-400">// PORTFOLIO CATEGORY [05]</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight mt-1 uppercase">
            STARK GUESTBOOK PIPELINE
          </h2>
        </div>
        <div className="font-mono text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 p-3 self-stretch sm:self-auto flex items-center justify-between gap-6">
          <span>PERSISTENCE: LOCAL_STORAGE</span>
          <span className="h-4 w-px bg-neutral-800"></span>
          <span>ENTRIES: {entries.length} RECORDS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Hand: Sign Form block (5 columns) */}
        <div className="lg:col-span-12 xl:col-span-5 bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[8px_8px_0px_#000000] brutalist-btn-transition">
          <h3 className="text-xs font-mono font-bold border-b-2 border-black pb-3 mb-6 flex items-center justify-between text-black uppercase select-none">
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              05 // PROTOCOL: SIGNATURE_REG
            </span>
            <span className="text-[9px] bg-zinc-100 text-[#0d0e11] font-extrabold px-1.5 py-0.5 border border-zinc-300 leading-none">
              PERSISTENT_STATE
            </span>
          </h3>

          {/* Form container */}
          <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
            <div>
              <label htmlFor="guest-name" className="block text-black font-extrabold uppercase mb-1.5 flex justify-between select-none">
                <span>VISITOR NAME *</span>
                <span className="text-[9px] text-gray-400">MAX_LEN: 40</span>
              </label>
              <input
                id="guest-name"
                type="text"
                placeholder="E.G. ALEX DRINKWATER"
                maxLength={40}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border-2 border-black px-3 py-2.5 focus:outline-none focus:bg-[#fafafa]-50 text-xs font-bold rounded-none uppercase placeholder:text-gray-300"
              />
            </div>

            <div>
              <label htmlFor="guest-role" className="block text-black font-extrabold uppercase mb-1.5 flex justify-between select-none">
                <span>TITLE / AFFILIATION</span>
                <span className="text-[9px] text-gray-405">OPTIONAL</span>
              </label>
              <input
                id="guest-role"
                type="text"
                placeholder="E.G. TECHNICAL PM @ CODESYNC"
                maxLength={50}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-white border-2 border-black px-3 py-2.5 focus:outline-none focus:bg-[#fafafa]-50 text-xs font-bold rounded-none uppercase placeholder:text-gray-300"
              />
            </div>

            <div>
              <label htmlFor="guest-message" className="block text-black font-extrabold uppercase mb-1.5 flex justify-between select-none">
                <span>TRANSMISSION ENTRY *</span>
                <span className="text-[9px] text-gray-400">MAX_LEN: 250</span>
              </label>
              <textarea
                id="guest-message"
                placeholder="LEAVE A COMPLIANT TRANSCRIPT RECORD..."
                maxLength={250}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white border-2 border-black px-3 py-2.5 focus:outline-none focus:bg-[#fafafa]-50 text-xs font-bold rounded-none uppercase placeholder:text-gray-300"
              />
            </div>

            {/* Response Alerts */}
            {errorMsg && (
              <div className="bg-zinc-50 text-zinc-800 border border-zinc-300 p-3 font-mono font-bold select-none text-[10px] leading-relaxed uppercase">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="bg-zinc-50 text-[#0d0e11] border border-zinc-300 p-3 font-mono font-bold select-none text-[10px] leading-relaxed flex items-center gap-1.5 uppercase">
                <CheckCircle className="w-4 h-4 text-[#0d0e11] shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Stark Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-black text-white font-black text-xs tracking-wider shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none brutalist-btn-transition border-2 border-black uppercase cursor-pointer"
            >
              COMMIT TRANSACTION
            </button>
          </form>

          {/* Reset System Button */}
          <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-[10px] select-none">
            <span className="text-gray-400">RESTORE FACTORY REGISTRY</span>
            <button
              onClick={handleResetRecords}
              className="flex items-center gap-1 hover:text-red-700 underline font-extrabold brutalist-btn-transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              RESET CHANNELS
            </button>
          </div>
        </div>

        {/* Right Hand: Submissions Board (7 columns) */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-4">
          
          <div className="flex items-center justify-between px-2 font-mono text-xs text-gray-500 select-none">
            <span>ACTIVE_REGISTRY_BOARDS // METRIC ORDER: CHRONOLOGICAL</span>
            <span className="text-[10px] border border-black px-2 py-0.5 text-black font-extrabold uppercase">LATEST FIRST</span>
          </div>

          {/* List scroll container with brutalist custom scroll themes */}
          <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1 brutalist-scrollbar">
            {entries.length === 0 ? (
              <div className="bg-white border-2 border-dashed border-black p-12 text-center shadow-[6px_6px_0px_#000000] font-mono text-xs text-gray-400">
                // SYSTEM CORE DATA IS BLANK. USE THE APPLIANCE TERMINAL PORTAL FILE SYSTEM INTERFACE TO LOG THE FIRST TRANSMISSION.
              </div>
            ) : (
              entries.map((ent) => (
                <div 
                  key={ent.id} 
                  className="bg-white border-2 border-black p-5 shadow-[6px_6px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[8px_8px_0px_#000000] brutalist-btn-transition flex flex-col justify-between"
                >
                  <div>
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-2.5 mb-3.5 select-none font-mono">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-black" />
                        <span className="font-extrabold text-black uppercase text-[11px] truncate max-w-[200px]">
                          {ent.name}
                        </span>
                        <span className="text-[9px] text-black bg-white px-1.5 py-0.5 border border-black leading-none truncate max-w-[150px] font-bold uppercase">
                          {ent.role?.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-400 text-[10px] shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{ent.timestamp}</span>

                        {/* Individual Trash Delete Button */}
                        <button
                          onClick={() => handleDelete(ent.id)}
                          className="hover:text-red-600 p-1 hover:bg-neutral-50 border border-transparent hover:border-black brutalist-btn-transition cursor-pointer"
                          title="Purge transmission logs"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* True comment message line height spacing */}
                    <blockquote className="text-gray-700 font-sans text-xs sm:text-sm pl-4 border-l-2 border-black italic leading-relaxed text-balance">
                      "{ent.message}"
                    </blockquote>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

      </div>

    </section>
  );
}

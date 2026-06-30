import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Mail, User, Briefcase, Terminal, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSending, setIsSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Read EmailJS configs from environment variables
  const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
  const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

  const isConfigured = !!(serviceId && templateId && publicKey);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('ERROR: NAME, EMAIL, AND TRANSMISSION BODY MATRIX ARE REQUIRED.');
      return;
    }

    // Basic email pattern validate
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('ERROR: SPECIFIED ADDRESS HAS AN INVALID EMAIL SIGNATURE.');
      return;
    }

    setIsSending(true);

    if (isConfigured) {
      // Real Live EmailJS Transmission
      const templateParams = {
        // Redundant parameter mapping for name variables
        name: name.trim(),
        from_name: name.trim(),
        sender_name: name.trim(),

        // Redundant parameter mapping for email variables
        email: email.trim(),
        from_email: email.trim(),
        sender_email: email.trim(),
        reply_to: email.trim(),

        // Redundant parameter mapping for affiliation/phone fields
        affiliation: affiliation.trim() || 'Not specified',
        phone: affiliation.trim() || 'Not specified',
        sender_phone: affiliation.trim() || 'Not specified',
        company: affiliation.trim() || 'Not specified',

        // Message body
        message: message.trim(),
        message_html: message.trim(),
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setSuccessMsg('TRANSMISSION SUCCESSFUL! Your message has been sent via EmailJS.');
          setName('');
          setEmail('');
          setAffiliation('');
          setMessage('');
        })
        .catch((err) => {
          setErrorMsg(`TRANSMISSION FAILURE: ${err?.text || err?.message || 'Unknown EmailJS error.'}`);
        })
        .finally(() => {
          setIsSending(false);
        });
    } else {
      // Elegant Sandbox Simulation with diagnostic help
      setTimeout(() => {
        setSuccessMsg('TRANSMISSION SIMULATED SUCCESSFULLY! (Connection offline due to missing EmailJS configurations).');
        setName('');
        setEmail('');
        setAffiliation('');
        setMessage('');
        setIsSending(false);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-6 md:px-8 max-w-[1440px] mx-auto scroll-mt-24">
      
      {/* Structural Title Header Block */}
      <div className="border-2 border-black bg-black text-white p-6 sm:p-8 mb-12 shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-gray-400">// PORTFOLIO CATEGORY [05]</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight mt-1 uppercase">
            CONTACT
          </h2>
        </div>
        <div className="font-mono text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 p-3 self-stretch sm:self-auto flex items-center justify-between gap-6">
          <span>METHOD: EMAIL_JS</span>
          <span className="h-4 w-px bg-neutral-800"></span>
          <span>STATUS: {isConfigured ? 'LIVE_STREAM' : 'SANDBOX_SIM'}</span>
        </div>
      </div>

      <div>
        
        {/* Direct Message Form */}
        <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[8px_8px_0px_#000000] brutalist-btn-transition">
          <h3 className="text-xs font-mono font-bold border-b-2 border-black pb-3 mb-6 flex items-center justify-between text-black uppercase select-none">
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              05 // PROTOCOL: DIRECT_TRANSMISSION
            </span>
            <span className={`text-[9px] font-extrabold px-1.5 py-0.5 border leading-none ${isConfigured ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-amber-50 text-amber-800 border-amber-300'}`}>
              {isConfigured ? 'CONNECTED' : 'SANDBOX_SIMULATOR'}
            </span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-black font-extrabold uppercase mb-1.5 flex justify-between select-none">
                  <span>SENDER NAME *</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="E.G. ALEX DRINKWATER"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border-2 border-black pl-10 pr-3 py-2.5 focus:outline-none focus:bg-zinc-50 text-xs font-bold rounded-none uppercase placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-black font-extrabold uppercase mb-1.5 flex justify-between select-none">
                  <span>EMAIL SIGNATURE *</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="E.G. ALEX@CODESYNC.COM"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-2 border-black pl-10 pr-3 py-2.5 focus:outline-none focus:bg-zinc-50 text-xs font-bold rounded-none placeholder:text-gray-300"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="contact-affiliation" className="block text-black font-extrabold uppercase mb-1.5 flex justify-between select-none">
                <span>TITLE / ORGANIZATIONAL AFFILIATION</span>
                <span className="text-[9px] text-gray-400">OPTIONAL</span>
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  id="contact-affiliation"
                  type="text"
                  placeholder="E.G. CHIEF ARCHITECT @ TECHCORP"
                  value={affiliation}
                  onChange={(e) => setAffiliation(e.target.value)}
                  className="w-full bg-white border-2 border-black pl-10 pr-3 py-2.5 focus:outline-none focus:bg-zinc-50 text-xs font-bold rounded-none uppercase placeholder:text-gray-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-black font-extrabold uppercase mb-1.5 flex justify-between select-none">
                <span>TRANSMISSION BODY *</span>
                <span className="text-[9px] text-gray-400">REQUIRED</span>
              </label>
              <textarea
                id="contact-message"
                required
                placeholder="INPUT REQUISITE MESSAGE TRANSCRIPT HERE..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white border-2 border-black px-3 py-2.5 focus:outline-none focus:bg-zinc-50 text-xs font-bold rounded-none uppercase placeholder:text-gray-300"
              />
            </div>

            {/* Error and Success Alert feedback */}
            {errorMsg && (
              <div className="bg-red-50 text-red-900 border-2 border-red-500 p-4 font-mono font-bold select-none text-[10px] leading-relaxed flex items-start gap-2 uppercase">
                <ShieldAlert className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-black text-red-700">TRANSMISSION REJECTED</span>
                  {errorMsg}
                </div>
              </div>
            )}

            {successMsg && (
              <div className="bg-emerald-50 text-emerald-900 border-2 border-emerald-500 p-4 font-mono font-bold select-none text-[10px] leading-relaxed flex items-start gap-2 uppercase">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-black text-emerald-700">TRANSMISSION COMMITTED</span>
                  {successMsg}
                </div>
              </div>
            )}

            {/* Stark Submit Action */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 bg-black text-white font-black text-xs tracking-wider shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none brutalist-btn-transition border-2 border-black uppercase cursor-pointer flex items-center justify-center gap-2 disabled:bg-zinc-800 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <span className="animate-pulse">STREAMING DATAFRAMES...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT COMPLIANT RECORDS</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}

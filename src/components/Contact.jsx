import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const { personalInfo } = resumeData;
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);
    // Simulate terminal upload handshake
    setTimeout(() => {
      setIsSending(false);
      setSubmitStatus('success');
      
      // Generate mailto link as fallback to allow actual send
      const subject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
      const body = encodeURIComponent(`Hi Bhavana,\n\n${formState.message}\n\nBest regards,\n${formState.name}\nEmail: ${formState.email}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      // Reset form
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="space-y-12 scroll-mt-20">
      {/* Header */}
      <div className="text-left border-l-4 border-cyan-500 pl-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          CONTACT SYSTEM
        </h2>
        <p className="text-sm font-mono text-cyan-400">
          SYSTEM_COMMUNICATION_PORT
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Contact Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* Email Card */}
            <div className="glass-card rounded-xl p-5 border border-white/5 text-left relative overflow-hidden flex justify-between items-center group">
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  PRIMARY EMAIL
                </p>
                <p className="text-sm sm:text-base font-mono font-bold text-white leading-none">
                  {personalInfo.email}
                </p>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2.5 rounded bg-gray-900 border border-gray-800 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-all cursor-pointer relative"
                title="Copy Email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedType === 'email' && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-[9px] font-mono text-emerald-400">
                    COPIED
                  </span>
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-xl p-5 border border-white/5 text-left relative overflow-hidden flex justify-between items-center group">
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  TELECOMM CONTACT
                </p>
                <p className="text-sm sm:text-base font-mono font-bold text-white leading-none">
                  {personalInfo.phone}
                </p>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2.5 rounded bg-gray-900 border border-gray-800 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-all cursor-pointer relative"
                title="Copy Phone"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedType === 'phone' && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-[9px] font-mono text-emerald-400">
                    COPIED
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Social connections block */}
          <div className="glass-panel rounded-xl p-6 border border-cyan-500/10 text-left space-y-4">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              // EXTERNAL_COMM_CHANNELS
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded bg-gray-900 border border-gray-800 hover:border-cyan-500/30 hover:text-cyan-400 transition-all font-mono text-xs text-gray-300"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-500" />
                LINKEDIN
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded bg-gray-900 border border-gray-800 hover:border-cyan-500/30 hover:text-cyan-400 transition-all font-mono text-xs text-gray-300"
              >
                <GithubIcon className="w-4 h-4 text-gray-400" />
                GITHUB
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Message Console */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="glass-panel rounded-xl p-6 border border-cyan-500/10 text-left font-mono relative overflow-hidden flex flex-col justify-between h-full"
          >
            {/* Header Mock */}
            <div className="flex justify-between items-center border-b border-gray-850 pb-3 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                MAIL_TRANSMITTER_SHELL
              </span>
              <span className="text-[10px] text-gray-500">PAYLOAD_FORMAT: UTF-8</span>
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-gray-400">SENDER_NAME:</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Recruiter / HR Partner"
                  required
                  className="w-full bg-gray-950 border border-gray-850 focus:border-cyan-500/50 rounded p-2 text-xs text-white focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-gray-400">SENDER_EMAIL_ADDR:</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="e.g. recruiter@company.com"
                  required
                  className="w-full bg-gray-950 border border-gray-850 focus:border-cyan-500/50 rounded p-2 text-xs text-white focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-gray-400">MESSAGE_PAYLOAD:</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Type your message details..."
                  required
                  rows={4}
                  className="w-full bg-gray-950 border border-gray-850 focus:border-cyan-500/50 rounded p-2 text-xs text-white focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submission Alerts & Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center mt-4">
              <div className="text-xs">
                {isSending && (
                  <span className="text-cyan-400 animate-pulse flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
                    HANDSHAKING SECURE_PORT...
                  </span>
                )}
                {submitStatus === 'success' && (
                  <span className="text-emerald-400 font-bold">
                    [+] MOCK_TRANSMISSION: SUCCESSFUL
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-950 text-cyan-400 font-mono text-xs font-bold transition-all cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:border-cyan-400 disabled:opacity-55 w-full sm:w-auto justify-center"
              >
                <Send className="w-3.5 h-3.5" />
                TRANSMIT_MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

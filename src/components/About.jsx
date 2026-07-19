import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Printer, Eye, EyeOff, Mail, Phone, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

// Custom inline SVG icons for brands
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function About() {
  const [showPreview, setShowPreview] = useState(false);
  const { personalInfo, education, skills, achievements, internship, certifications, ieeeActivities } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="about" className="space-y-8 scroll-mt-20">
      {/* Header */}
      <div className="text-left border-l-4 border-cyan-500 pl-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          ABOUT & RESUME CONSOLE
        </h2>
        <p className="text-sm font-mono text-cyan-400">
          SYSTEM_OBJECTIVE_INFO
        </p>
      </div>

      {/* Main Info Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Left Bio Card */}
        <div className="md:col-span-2 glass-panel rounded-xl p-6 flex flex-col justify-between text-left space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="space-y-4">
            <h3 className="text-xl font-mono font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              Career Profile
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I am an Electrical and Electronics Engineering student at Siddaganga Institute of Technology, Tumkur. My academic and project work centers on bridging the gap between hardware circuit designs and modern IoT systems.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              With a CGPA of 8.4 and hands-on experience in ESP32 microcontrollers, sensor nodes, and MATLAB simulations, I enjoy modeling smart grid systems, managing Li-ion thermal boundaries in EV battery modules, and debugging telemetry interfaces.
            </p>
          </div>

          <div className="border-t border-gray-800/80 pt-4 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="space-y-1 text-xs font-mono text-gray-400">
              <p>Email: <span className="text-cyan-400">{personalInfo.email}</span></p>
              <p>Phone: <span className="text-cyan-400">{personalInfo.phone}</span></p>
            </div>
            <div className="flex gap-3">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded bg-gray-900 border border-gray-800 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded bg-gray-900 border border-gray-800 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Right Action Panel */}
        <div className="glass-panel rounded-xl p-6 flex flex-col justify-center items-center text-center space-y-4 border border-cyan-500/10 no-print">
          <div className="w-16 h-16 rounded-full bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center mb-2">
            <FileDown className="w-7 h-7 text-cyan-400" />
          </div>
          
          <h4 className="text-sm font-mono text-white font-bold tracking-wider">
            RECRUITER WORKFLOW
          </h4>
          <p className="text-xs text-gray-400 max-w-[220px]">
            Preview, print, or download a direct PDF copy of the verified academic credentials.
          </p>

          <div className="flex flex-col gap-2 w-full pt-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-950 text-cyan-400 font-mono text-xs font-bold transition-all cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.1)]"
            >
              {showPreview ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  CLOSE PREVIEW
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  PREVIEW RESUME
                </>
              )}
            </button>

            <a
              href="./resume_placeholder.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded bg-gray-900 border border-gray-800 hover:border-cyan-500/30 text-gray-300 hover:text-white font-mono text-xs font-bold transition-all cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              DOWNLOAD PDF
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded bg-gray-950 border border-cyan-500/15 hover:border-cyan-500/40 text-gray-400 hover:text-cyan-400 font-mono text-xs font-bold transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              PRINT SYSTEM
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Resume Sheet Preview */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden no-print"
          >
            <div className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl border border-gray-200 text-left font-sans max-w-4xl mx-auto space-y-6">
              {/* Header */}
              <div className="border-b-2 border-gray-800 pb-4 flex justify-between items-start">
                <div className="space-y-1">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 m-0 leading-none">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Electrical & Electronics Engineer
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mt-2 font-mono">
                    <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {personalInfo.email}</span>
                    <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {personalInfo.phone}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {personalInfo.location}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-right text-xs font-mono text-gray-500">
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn Profile</a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub Profile</a>
                </div>
              </div>

              {/* Career Objective */}
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1">
                  Career Objective
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {personalInfo.objective}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1">
                  Education
                </h3>
                <div className="space-y-2">
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-start text-xs font-sans">
                      <div>
                        <h4 className="font-bold text-gray-800">{edu.institution}</h4>
                        <p className="text-gray-600">{edu.degree}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-gray-700">{edu.duration}</span>
                        <p className="font-bold text-cyan-700">{edu.grade}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-sans">
                  <div>
                    <p className="font-semibold text-gray-700">Programming:</p>
                    <p className="text-gray-600">{skills.programming.map(p => p.name).join(', ')}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Software:</p>
                    <p className="text-gray-600">{skills.software.map(s => s.name).join(', ')}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Embedded & IoT:</p>
                    <p className="text-gray-600">{skills.embeddedAndIoT.map(e => e.name).join(', ')}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Core Domains:</p>
                    <p className="text-gray-600">{skills.coreDomains.join(', ')}</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1">
                  Key Projects
                </h3>
                <div className="space-y-2.5">
                  {resumeData.projects.slice(0, 3).map((proj, idx) => (
                    <div key={idx} className="text-xs font-sans space-y-0.5">
                      <h4 className="font-bold text-gray-800">{proj.title}</h4>
                      <p className="text-gray-600 italic">Objectives: {proj.objectives[0]}</p>
                      <p className="text-gray-600 leading-relaxed">
                        • Designed system using: {proj.hardwareUsed.slice(0, 3).join(', ')}.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        • {proj.results}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1">
                  Key Achievements
                </h3>
                <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                  {achievements.map((ach, idx) => (
                    <li key={idx}>
                      <strong className="text-gray-800">{ach.title}</strong> — {ach.description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Internship */}
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1">
                  Internship
                </h3>
                <div className="text-xs font-sans">
                  <h4 className="font-bold text-gray-800">{internship.title} | {internship.organization}</h4>
                  <p className="text-gray-600">{internship.details} (Grade: {internship.grade})</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-300 pb-1">
                  Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                  {certifications.map((cert, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-gray-800">{cert.title}</h4>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Notice */}
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-[10px] text-gray-400 font-mono">
                <span>VERIFIED RESUME SHEET // K. BHAVANA JAYARAM</span>
                <span>SYSTEM DATE: 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

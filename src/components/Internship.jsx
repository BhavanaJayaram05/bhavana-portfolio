import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, Cpu, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Internship() {
  const { internship } = resumeData;

  return (
    <section id="internship" className="space-y-12 scroll-mt-20">
      {/* Header */}
      <div className="text-left border-l-4 border-cyan-500 pl-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          INDUSTRIAL TRAINING & INTERNSHIP
        </h2>
        <p className="text-sm font-mono text-cyan-400">
          SYSTEM_EXPERIENCE_LOG
        </p>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass-panel rounded-xl p-6 sm:p-8 border border-cyan-500/10 text-left relative overflow-hidden print-card">
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 border-b border-gray-900 pb-5">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {internship.title}
                </h3>
                <p className="text-sm font-mono text-cyan-400">
                  {internship.organization}
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/25 px-3 py-1 rounded-full print-badge">
                <Award className="w-3.5 h-3.5" />
                GRADE: {internship.grade}
              </span>
            </div>
          </div>

          {/* Details & Syllabus */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
              {internship.details}
            </p>

            <div className="pt-2">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                // COMPLETED_DEVELOPMENT_SYLLABUS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {[
                  "Microcontroller Programming (Arduino & ESP32)",
                  "Analog & Digital Sensor Interfacing",
                  "Serial Communication Protocols (I2C, UART)",
                  "IoT Cloud Integration & Dashboard Creation",
                  "Embedded C System Coding & Debugging",
                  "Robotics Control Loop Architectures"
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 p-2.5 rounded bg-gray-900/60 border border-white/5"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

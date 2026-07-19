import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Settings, ShieldCheck, Zap } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const { skills } = resumeData;

  const barVariants = (targetWidth) => ({
    hidden: { width: 0 },
    visible: { 
      width: `${targetWidth}%`,
      transition: { duration: 1.2, ease: 'easeOut' }
    }
  });

  return (
    <section id="skills" className="space-y-12 scroll-mt-20">
      {/* Header */}
      <div className="text-left border-l-4 border-cyan-500 pl-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          TECHNICAL SKILLS & HARDWARE STACK
        </h2>
        <p className="text-sm font-mono text-cyan-400">
          SYSTEM_HARDWARE_INTERFACE
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Microcontroller & Programming Progress Bars */}
        <div className="lg:col-span-7 space-y-6">
          {/* Programming & Software */}
          <div className="glass-panel rounded-xl p-6 border border-white/5 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <h3 className="text-lg font-mono font-bold text-white mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              Programming & Software
            </h3>
            
            <div className="space-y-4">
              {[...skills.programming, ...skills.software].map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-300 font-bold">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      variants={barVariants(skill.level)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Systems & IoT Protocols */}
          <div className="glass-panel rounded-xl p-6 border border-white/5 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <h3 className="text-lg font-mono font-bold text-white mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              Embedded Systems & IoT Interfaces
            </h3>
            
            <div className="space-y-4">
              {skills.embeddedAndIoT.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-300 font-bold">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      variants={barVariants(skill.level)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Core Domains & Professional Competence */}
        <div className="lg:col-span-5 space-y-6">
          {/* Core Domains */}
          <div className="glass-panel rounded-xl p-6 border border-white/5 text-left relative overflow-hidden">
            <h3 className="text-lg font-mono font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              Core Engineering Domains
            </h3>
            <p className="text-xs text-gray-400 mb-4 font-mono">
              Academic & development specializations:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.coreDomains.map((domain, index) => (
                <motion.div
                  key={index}
                  className="px-3.5 py-2 rounded-lg bg-gray-900/60 border border-cyan-500/15 hover:border-cyan-400/40 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1.5 cursor-default print-badge"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  {domain}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="glass-panel rounded-xl p-6 border border-white/5 text-left relative overflow-hidden">
            <h3 className="text-lg font-mono font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              Professional & Collaboration Skills
            </h3>
            <p className="text-xs text-gray-400 mb-4 font-mono">
              Workplace competence & leadership traits:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {skills.professional.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-3 rounded-lg bg-cyan-950/20 border border-white/5 hover:border-cyan-500/20 text-xs font-mono text-gray-300 hover:text-white transition-all text-left flex items-center gap-2"
                  whileHover={{ x: 3 }}
                >
                  <span className="text-cyan-500">&gt;</span>
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

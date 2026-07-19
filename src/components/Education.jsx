import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  const { education } = resumeData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="education" className="space-y-12 scroll-mt-20">
      {/* Header */}
      <div className="text-left border-l-4 border-cyan-500 pl-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          ACADEMIC TIMELINE
        </h2>
        <p className="text-sm font-mono text-cyan-400">
          SYSTEM_EDUCATION_REGISTRY
        </p>
      </div>

      {/* Vertical Timeline container */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Glowing Central line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500/20 transform sm:-translate-x-1/2 print-timeline"></div>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between"
                variants={itemVariants}
              >
                {/* Timeline node dot */}
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-cyan-900 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] transform -translate-x-1/2 z-10"></div>

                {/* Left/Right Container */}
                <div className={`w-full sm:w-[45%] pl-8 sm:pl-0 ${isEven ? 'sm:text-right sm:order-first' : 'sm:order-last'}`}>
                  <div className="glass-card rounded-xl p-5 border border-white/5 text-left relative overflow-hidden print-card">
                    {/* Corner gradient glow */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>

                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/25 px-2 py-0.5 rounded-full print-badge">
                        <Calendar className="w-3 h-3" />
                        {edu.duration}
                      </div>
                      <div className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/25 px-2 py-0.5 rounded-full print-badge">
                        {edu.grade}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-xs font-mono text-cyan-400/90 mb-3 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {edu.institution}
                    </p>

                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {edu.details}
                    </p>
                  </div>
                </div>

                {/* Empty Spacer Column for Desktop alignment */}
                <div className="hidden sm:block w-[45%]"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

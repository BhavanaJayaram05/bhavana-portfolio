import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Landmark, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Achievements() {
  const { achievements } = resumeData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="achievements" className="space-y-12 scroll-mt-20">
      {/* Header */}
      <div className="text-left border-l-4 border-cyan-500 pl-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          HONORS & ACHIEVEMENTS
        </h2>
        <p className="text-sm font-mono text-cyan-400">
          SYSTEM_AWARDS_REGISTRY
        </p>
      </div>

      {/* Grid of awards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {achievements.map((ach, idx) => {
          // Highlight different rank designs
          const isGold = idx === 0;
          return (
            <motion.div
              key={idx}
              className="glass-card rounded-xl p-6 border border-white/5 text-left flex flex-col justify-between relative overflow-hidden h-64 print-card"
              variants={itemVariants}
            >
              {/* Gold/Cyan subtle top glowing gradient */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                isGold ? 'from-amber-400 to-yellow-500' : 'from-cyan-500 to-blue-500'
              }`}></div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className={`p-2.5 rounded-lg ${
                    isGold 
                      ? 'bg-amber-950/40 border border-amber-500/35 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.15)]' 
                      : 'bg-cyan-950/40 border border-cyan-500/25 text-cyan-400'
                  }`}>
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>{ach.organization}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {ach.description}
                  </p>
                </div>
              </div>

              {/* Status Code / Accent */}
              <div className="pt-3 border-t border-gray-900/60 flex items-center justify-between text-[9px] font-mono">
                <span className={isGold ? 'text-amber-400/80' : 'text-cyan-400/80'}>
                  {isGold ? '// FIRST_PLACE' : `// RUNNER_UP_0${idx + 1}`}
                </span>
                <Sparkles className={`w-3 h-3 ${isGold ? 'text-amber-400' : 'text-cyan-400'}`} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

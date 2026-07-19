import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Landmark, HelpCircle, CheckSquare } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function IEEEActivities() {
  const { ieeeActivities } = resumeData;

  return (
    <section id="ieee" className="space-y-12 scroll-mt-20">
      {/* Header */}
      <div className="text-left border-l-4 border-cyan-500 pl-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          IEEE ACTIVITIES & LEADERSHIP
        </h2>
        <p className="text-sm font-mono text-cyan-400">
          SYSTEM_COMMUNITY_ENGAGEMENT
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
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Title block */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 border-b border-gray-900 pb-5">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {ieeeActivities.chapter}
                </h3>
                <p className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
                  ROLE: {ieeeActivities.role}
                </p>
              </div>
            </div>
          </div>

          {/* Description & organize items */}
          <div className="space-y-6">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
              {ieeeActivities.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                // COMPLETED_ORGANIZATION_WORKFLOWS
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Planning & Marketing Technical Workshops",
                  "Coordinating National-Level Hackathons",
                  "Hosting Technical Seminars & Guest Speakers",
                  "Managing Industry Interaction Panels"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded bg-gray-900/50 border border-white/5"
                  >
                    <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-gray-300 leading-snug">
                      {item}
                    </span>
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

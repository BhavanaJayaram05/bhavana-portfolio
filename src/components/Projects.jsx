import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight, Layers, Lightbulb, Workflow } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Projects() {
  const { projects } = resumeData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section id="projects" className="space-y-12 scroll-mt-20">
      {/* Header */}
      <div className="text-left border-l-4 border-cyan-500 pl-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          PROJECTS REGISTRY
        </h2>
        <p className="text-sm font-mono text-cyan-400">
          SYSTEM_PROJECTS_DATABASE
        </p>
      </div>

      {/* Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, index) => {
          const isPlaceholder = project.id.startsWith('upcoming-placeholder');
          return (
            <motion.div
              key={project.id}
              className={`glass-card rounded-xl p-6 border text-left flex flex-col justify-between relative overflow-hidden h-80 ${
                isPlaceholder 
                  ? 'border-dashed border-gray-800 bg-[#060a14]/30' 
                  : 'border-white/5'
              } print-card`}
              variants={cardVariants}
            >
              {/* Subtle top indicator glow for active projects */}
              {!isPlaceholder && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              )}

              {/* Card content wrapper */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className={`p-2 rounded-lg ${
                    isPlaceholder 
                      ? 'bg-gray-900 border border-gray-800 text-gray-500' 
                      : 'bg-cyan-950/40 border border-cyan-500/25 text-cyan-400'
                  }`}>
                    {isPlaceholder ? <Lightbulb className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                  </div>
                  
                  {/* Status Indicator */}
                  <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded ${
                    isPlaceholder 
                      ? 'bg-gray-900/60 text-gray-500 border border-gray-800/80' 
                      : 'bg-cyan-950/50 text-cyan-400 border border-cyan-500/20'
                  }`}>
                    {isPlaceholder ? 'UPCOMING' : 'ACTIVE_LOG'}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-base font-bold tracking-tight line-clamp-2 ${
                    isPlaceholder ? 'text-gray-400 font-mono italic' : 'text-white'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer tags and redirect button */}
              <div className="space-y-4 pt-4 border-t border-gray-900/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isPlaceholder 
                          ? 'bg-gray-950 text-gray-600 border border-gray-900' 
                          : 'bg-cyan-950/20 text-cyan-300/80 border border-cyan-500/10'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono text-gray-500 px-1 py-0.5">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold transition-colors cursor-pointer group ${
                    isPlaceholder 
                      ? 'text-gray-500 hover:text-cyan-400/80' 
                      : 'text-cyan-400 hover:text-cyan-300'
                  }`}
                >
                  &gt; VIEW_DETAILS
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

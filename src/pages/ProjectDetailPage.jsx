import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, ShieldAlert, CheckCircle, Code, Video, Image as ImageIcon, GitFork, Layout, Settings, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = resumeData.projects.find(p => p.id === id);

  // If project is not found, render a friendly error state
  if (!project) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center font-mono">
        <div className="glass-panel p-8 rounded-xl max-w-md text-left space-y-4 border border-red-500/20">
          <ShieldAlert className="w-8 h-8 text-red-500" />
          <h2 className="text-xl font-bold text-white">404 // PROJECT_NOT_FOUND</h2>
          <p className="text-xs text-gray-400">
            The project key <span className="text-cyan-400">"{id}"</span> does not match any register in the portfolio systems database.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors pt-2"
          >
            <ArrowLeft className="w-4 h-4" />
            RETURN TO ROOT
          </Link>
        </div>
      </div>
    );
  }

  const isPlaceholder = project.id.startsWith('upcoming-placeholder');

  return (
    <div className="min-h-screen bg-[#030712] grid-bg text-left pb-24">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Sticky Console Sub-Header */}
      <header className="sticky top-0 z-40 glass-panel py-4 border-b border-cyan-500/10 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            &lt; RETURN_TO_ROOT
          </Link>
          <span className="text-[10px] font-mono text-gray-500">
            SYS_DB_KEY: {project.id.toUpperCase()}
          </span>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* Project Hero Header */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-950/40 text-cyan-400 border border-cyan-500/25 print-badge"
              >
                {tag.toUpperCase()}
              </span>
            ))}
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gray-900 text-cyan-500 border border-cyan-500/20">
              {isPlaceholder ? 'UPCOMING_TEMPLATE' : 'ACTIVE_VERIFIED_PROJECT'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-sans">
            {project.title}
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            {project.shortDesc}
          </p>
          {project.achievement && (
  <div className="mt-6 rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4">
    <h3 className="text-yellow-400 font-bold text-lg">
      🏆 Award & Recognition
    </h3>
    <p className="mt-2 text-gray-200 leading-relaxed">
      {project.achievement}
    </p>
  </div>
)}
        </motion.div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT PANEL: 8 cols (Technical Specifications & Principles) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1: Overview */}
            <motion.div 
              className="glass-panel rounded-xl p-6 border border-white/5 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-bold text-white border-b border-gray-900 pb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                1. Project Overview
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {project.overview}
              </p>
            </motion.div>

            {/* Section 2: Problem Statement */}
            <motion.div 
              className="glass-panel rounded-xl p-6 border border-white/5 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-bold text-white border-b border-gray-900 pb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-500" />
                2. Problem Statement
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {project.problemStatement}
              </p>
            </motion.div>

            {/* Section 3: Objectives */}
            <motion.div 
              className="glass-panel rounded-xl p-6 border border-white/5 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-bold text-white border-b border-gray-900 pb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                3. Objectives
              </h3>
              <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-gray-300 font-sans">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold font-mono mt-0.5">[✔]</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Section 4: Working Principle */}
            <motion.div 
              className="glass-panel rounded-xl p-6 border border-white/5 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-bold text-white border-b border-gray-900 pb-2 flex items-center gap-2">
                <Layout className="w-5 h-5 text-cyan-400" />
                4. Working Principle
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans whitespace-pre-line">
                {project.workingPrinciple}
              </p>
            </motion.div>

            {/* Section 5: Block Diagram Placeholder */}
            <motion.div 
              className="glass-panel rounded-xl p-6 border border-white/5 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-bold text-white border-b border-gray-900 pb-2">
                5. System Architecture & Block Diagram
              </h3>
              <div className="rounded-lg overflow-hidden border border-cyan-500/20">
    <img
        src="/projects/water-conservation/block-diagram.jpg"
        alt="System Architecture Diagram"
        className="w-full object-contain"
    />
</div>
              <p className="text-[10px] text-gray-500 font-mono italic">
                * Note: Diagram represented as textual wiring connections mapping input nodes to microcontroller outputs.
              </p>
            </motion.div>

            {/* Section 6: Circuit Diagram Pin configuration */}
            <motion.div 
              className="glass-panel rounded-xl p-6 border border-white/5 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-bold text-white border-b border-gray-900 pb-2">
                6. Pin Configuration & Circuit Schematic
              </h3>
              <div className="bg-gray-950/80 border border-cyan-500/10 rounded-lg p-5 font-mono text-[10px] sm:text-xs text-emerald-400 overflow-x-auto whitespace-pre">
                {project.circuitDiagram}
              </div>
              <p className="text-[10px] text-gray-500 font-mono italic">
                * Note: Circuit logs showing microcontroller voltage inputs, analog/digital taps, and grounding registers.
              </p>
            </motion.div>

            {/* Section 7: Results */}
            <motion.div 
              className="glass-panel rounded-xl p-6 border border-white/5 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-bold text-white border-b border-gray-900 pb-2">
                7. Results & Outputs
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {project.results}
              </p>
            </motion.div>

            {/* Section 8: Challenges */}
            <motion.div 
              className="glass-panel rounded-xl p-6 border border-white/5 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-bold text-white border-b border-gray-900 pb-2">
                8. Engineering Challenges & Mitigation
              </h3>
              <ul className="list-decimal pl-4 text-xs sm:text-sm text-gray-300 font-sans space-y-2">
                {project.challenges.map((chal, i) => (
                  <li key={i} className="leading-relaxed">
                    {chal}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Section 9: Future Scope */}
            <motion.div 
              className="glass-panel rounded-xl p-6 border border-white/5 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-bold text-white border-b border-gray-900 pb-2">
                9. Future Scope & Advancements
              </h3>
              <ul className="list-disc pl-4 text-xs sm:text-sm text-gray-300 font-sans space-y-1.5">
                {project.futureScope.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* RIGHT PANEL: 4 cols (Bill of Materials, Assets, Code links) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Section 10 & 11: Hardware & Software Used */}
            <div className="glass-panel rounded-xl p-5 border border-cyan-500/10 space-y-4">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider border-b border-gray-900 pb-2">
                // SYSTEM_REQUIREMENTS
              </h4>
              
              {/* Hardware List */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-400">10. HARDWARE USED:</span>
                <div className="flex flex-wrap gap-1">
                  {project.hardwareUsed.map((hw, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-gray-950 text-gray-300 border border-gray-900"
                    >
                      {hw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software List */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-400">11. SOFTWARE UTILITIES:</span>
                <div className="flex flex-wrap gap-1">
                  {project.softwareUsed.map((sw, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-950/20 text-cyan-400 border border-cyan-500/15"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 12: Components list roles */}
            <div className="glass-panel rounded-xl p-5 border border-cyan-500/10 space-y-3 text-xs">
              <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider border-b border-gray-900 pb-2">
                12. COMPONENT LOG (BILL OF MATERIALS)
              </h4>
              <div className="space-y-3 font-sans">
                {project.components.map((comp, i) => (
                  <div key={i} className="space-y-1">
                    <p className="font-bold text-white font-mono text-xs">{comp.name}</p>
                    <p className="text-gray-400 text-[11px] leading-snug">{comp.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 13: Image Gallery */}

<div className="glass-panel rounded-xl p-5 border border-cyan-500/10 space-y-4">
  <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider border-b border-gray-900 pb-2">
    13. Project Gallery
  </h4>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {project.gallery.map((image, index) => (
      <div
        key={index}
        className="rounded-xl overflow-hidden border border-cyan-500/20"
      >
        <img
          src={image}
          alt={`Project ${index + 1}`}
          className="w-full h-64 object-cover"
          onError={(e) => {
            console.log("Image failed:", image);
            e.target.style.border = "3px solid red";
          }}
        />
      </div>
    ))}
  </div>
</div>


            {/* Section 14: Demo Video Placeholder */}
            <div className="glass-panel rounded-xl p-5 border border-cyan-500/10 text-center space-y-3">
              <div className="flex justify-between items-center border-b border-gray-900 pb-2">
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                  14. DEMO VIDEO
                </span>
                <span className="text-[9px] font-mono text-gray-500">MEDIA_DISCONNECTED</span>
              </div>
              <div className="h-28 rounded bg-gray-950 border border-dashed border-gray-800 flex flex-col justify-center items-center text-gray-500 gap-1.5 p-4">
                <Video className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] font-mono font-bold text-gray-600">STREAMING_PAYLOAD_PORT</span>
                <span className="text-[9px] font-sans text-gray-500 text-center">
                  Video presentation linking logic ready. Embed URL to be provided later.
                </span>
              </div>
            </div>

            {/* Section 15: GitHub Code Repository Placeholder */}
            <div className="glass-panel rounded-xl p-5 border border-cyan-500/10 text-center space-y-3">
              <div className="flex justify-between items-center border-b border-gray-900 pb-2">
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                  15. CODE REPOSITORY
                </span>
                <span className="text-[9px] font-mono text-gray-500">REF: GITHUB</span>
              </div>
              <div className="p-3 bg-gray-950 rounded border border-gray-900 flex justify-between items-center">
                <div className="flex items-center gap-2 text-left font-mono">
                  <GitFork className="w-4 h-4 text-cyan-400" />
                  <div className="text-[10px]">
                    <p className="text-gray-400 leading-none">BhavanaJayaram05 /</p>
                    <p className="text-white font-bold">{project.id}</p>
                  </div>
                </div>
                <button
                  disabled
                  className="px-2 py-1 bg-cyan-950/20 text-cyan-500/50 border border-cyan-500/10 rounded font-mono text-[9px] cursor-not-allowed"
                >
                  LINKED
                </button>
              </div>
              <p className="text-[9px] text-gray-500 font-mono text-left italic">
                * Git link pointing to local system directories. Remapping to live repositories will be performed once firmware is committed to GitHub.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

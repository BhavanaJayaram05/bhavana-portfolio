import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Certifications() {
  const { certifications } = resumeData;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 90, damping: 15 } 
    }
  };

  return (
    <section id="certifications" className="space-y-12 scroll-mt-20">
      {/* Header */}
      <div className="text-left border-l-4 border-cyan-500 pl-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          CREDENTIALS & CERTIFICATIONS
        </h2>
        <p className="text-sm font-mono text-cyan-400">
          SYSTEM_CREDENTIAL_VERIFICATION
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="glass-card rounded-xl p-5 border border-white/5 text-left flex flex-col justify-between h-56 relative overflow-hidden print-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/25 text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono text-gray-500 tracking-wider">
                  SECURE_VERIFIED
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  Issued by: {cert.issuer}
                </p>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-2">
                {cert.description}
              </p>
            </div>

            <div className="pt-2 border-t border-gray-900/60 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                ACTIVE
              </span>
              <span className="text-gray-500 flex items-center gap-0.5">
                CERT_ID: KBJ-{idx + 104}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, GraduationCap, Cpu, Trophy, Award, Users } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const iconMap = {
  GraduationCap: GraduationCap,
  Cpu: Cpu,
  Trophy: Trophy,
  Award: Award,
  Users: Users
};

export default function Home() {
  const { personalInfo, statistics } = resumeData;

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 md:pt-32">
      {/* Introduction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        <motion.div 
          className="lg:col-span-8 space-y-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            ACTIVE FOR PLACEMENTS & INTERNSHIPS
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
            Hi, I'm <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 glow-text">
              K BHAVANA JAYARAM
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-mono text-cyan-400/90 font-medium max-w-2xl">
            Electrical & Electronics Engineering Student
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            {personalInfo.objective}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-cyan-500/30 text-gray-300 hover:text-white font-medium text-sm transition-all duration-300 cursor-pointer"
            >
              Get in Touch
              <Mail className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={() => handleScrollTo('about')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-950 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-950/30 font-mono text-sm transition-all duration-300 cursor-pointer"
            >
              &gt; RESUME.LOG
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Profile Card / Console mockup */}
        <motion.div 
          className="lg:col-span-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-6">
  <img
  src="/images/profile.jpg"
  alt="Bhavana"
  className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
/>
</div>
          <div className="glass-panel rounded-xl p-5 border border-cyan-500/10 text-left font-mono relative overflow-hidden shadow-2xl">
            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
              </div>
              <span className="text-xs text-gray-500">connection_status: active</span>
            </div>

            <div className="space-y-3 text-xs text-gray-400">
              <p><span className="text-cyan-400">const</span> engineer = &#123;</p>
              <p className="pl-4">name: <span className="text-green-300">"K Bhavana Jayaram"</span>,</p>
              <p className="pl-4">discipline: <span className="text-green-300">"Electrical & Electronics"</span>,</p>
              <p className="pl-4">specialties: [</p>
              <p className="pl-8 text-green-300">"Embedded Systems",</p>
              <p className="pl-8 text-green-300">"IoT Solutions",</p>
              <p className="pl-8 text-green-300">"Smart Grids"</p>
              <p className="pl-4">],</p>
              <p className="pl-4">microcontrollers: [<span className="text-amber-400">"ESP32"</span>, <span className="text-amber-400">"Arduino"</span>],</p>
              <p className="pl-4">academicCGPA: <span className="text-cyan-400">8.4</span>,</p>
              <p className="pl-4">location: <span className="text-green-300">"Tumkur, IN"</span></p>
              <p>&#125;;</p>
              <div className="border-t border-gray-800/80 pt-3 mt-4 text-[10px] text-gray-500 flex justify-between">
                <span>SYS_TEMP: NORMAL</span>
                <span>BAUD: 115200</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {statistics.map((stat, index) => {
          const Icon = iconMap[stat.icon] || Cpu;
          return (
            <motion.div
              key={index}
              className="glass-card rounded-xl p-5 text-left border border-white/5 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-gray-400 tracking-wider">
                  {stat.label.toUpperCase()}
                </span>
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono tracking-tight glow-text-cyan">
                {stat.value}
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-mono">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

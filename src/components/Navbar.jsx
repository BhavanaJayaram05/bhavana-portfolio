import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal, Cpu } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Internship', id: 'internship' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'IEEE', id: 'ieee' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname !== '/') return;

      const scrollPosition = window.scrollY + 150;
      
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Delay scroll to let home mount
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
      scrolled 
        ? 'glass-panel py-3 shadow-lg border-b border-cyan-500/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-400 transition-colors">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-mono text-cyan-400 tracking-wider font-bold">KBJ // SYSTEM</span>
              <span className="text-xs text-gray-400 tracking-tight">K Bhavana Jayaram</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono tracking-wide transition-all duration-200 cursor-pointer ${
                  location.pathname === '/' && activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.15)] font-bold'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Drawer Menu */}
      <div className={`xl:hidden fixed inset-y-0 right-0 z-40 w-64 bg-[#080d1a] border-l border-cyan-500/15 p-6 shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
          <span className="text-sm font-mono text-cyan-400 font-bold">MENU CONSOLE</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md text-gray-400 hover:text-gray-200 hover:bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-mono tracking-wider transition-all ${
                location.pathname === '/' && activeSection === item.id
                  ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-500/30'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
              }`}
            >
              &gt; {item.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay background for Mobile Sidebar */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="xl:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity"
        />
      )}
    </nav>
  );
}

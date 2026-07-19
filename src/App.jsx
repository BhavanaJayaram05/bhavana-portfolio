import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout & Sections
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import IEEEActivities from './components/IEEEActivities';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pages
import ProjectDetailPage from './pages/ProjectDetailPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Main Portfolio Landing Component
function PortfolioHome() {
  return (
    <div className="relative min-h-screen bg-[#030712] grid-bg">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 space-y-24 pb-20">
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Internship />
        <Achievements />
        <Certifications />
        <IEEEActivities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
